mod data;

use askama::Template;
use axum::{response::Html, routing::get, Router};
use data::{Experience, NavItem, Project, Service, SkillGroup, Stat};
use std::{env, fs, path::Path};
use tower_http::services::ServeDir;

#[derive(Template)]
#[template(path = "index.html")]
struct IndexTemplate {
    nav: Vec<NavItem>,
    stats: Vec<Stat>,
    experience: Vec<Experience>,
    projects: Vec<Project>,
    skill_groups: Vec<SkillGroup>,
    services: Vec<Service>,

    emailjs_public_key: String,
    emailjs_service_id: String,
    emailjs_template_id: String,
}

fn render_index() -> String {
    IndexTemplate {
        nav: data::nav(),
        stats: data::stats(),
        experience: data::experience(),
        projects: data::projects(),
        skill_groups: data::skill_groups(),
        services: data::services(),

        emailjs_public_key: env::var("PUBLIC_KEY")
            .expect("EMAILJS_PUBLIC_KEY is not set"),

        emailjs_service_id: env::var("SERVICE_ID")
            .expect("EMAILJS_SERVICE_ID is not set"),

        emailjs_template_id: env::var("TEMPLATE_ID")
            .expect("EMAILJS_TEMPLATE_ID is not set"),
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
     dotenvy::dotenv().ok();
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