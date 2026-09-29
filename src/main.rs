mod data;

use askama::Template;
use axum::{response::Html, routing::get, Router};
use data::{NavItem, Project, Service, SkillGroup};
use std::{env, fs, path::Path};
use tower_http::services::ServeDir;

#[derive(Template)]
#[template(path = "index.html")]
struct IndexTemplate {
    nav: Vec<NavItem>,
    skill_groups: Vec<SkillGroup>,
    services: Vec<Service>,
    projects: Vec<Project>,
}

fn render_index() -> String {
    IndexTemplate {
        nav: data::nav(),
        skill_groups: data::skill_groups(),
        services: data::services(),
        projects: data::projects(),
    }
    .render()
    .expect("template render failed")
}

async fn index() -> Html<String> {
    Html(render_index())
}

fn copy_dir(src: &Path, dst: &Path) -> std::io::Result<()> {
    fs::create_dir_all(dst)?;
    for entry in fs::read_dir(src)? {
        let entry = entry?;
        let target = dst.join(entry.file_name());
        if entry.file_type()?.is_dir() {
            copy_dir(&entry.path(), &target)?;
        } else {
            fs::copy(entry.path(), target)?;
        }
    }
    Ok(())
}

fn build_static() {
    let _ = fs::remove_dir_all("dist");
    fs::create_dir_all("dist").unwrap();
    fs::write("dist/index.html", render_index()).unwrap();
    copy_dir(Path::new("static"), Path::new("dist/static")).unwrap();
    println!("Static site written to ./dist");
}

#[tokio::main]
async fn main() {
    if env::args().nth(1).as_deref() == Some("build") {
        build_static();
        return;
    }

    let app = Router::new()
        .route("/", get(index))
        .nest_service("/static", ServeDir::new("static"));

    let port = env::var("PORT").unwrap_or_else(|_| "3000".into());
    let listener = tokio::net::TcpListener::bind(format!("0.0.0.0:{port}"))
        .await
        .unwrap();
    println!("Running on http://localhost:{port}");
    axum::serve(listener, app).await.unwrap();
}