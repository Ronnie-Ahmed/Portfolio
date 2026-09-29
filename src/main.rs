use askama::Template;
use axum::{response::Html, routing::get, Router};
use tower_http::services::ServeDir;

struct Project {
    title: &'static str,
    description: &'static str,
    tech: Vec<&'static str>,
    link: &'static str,
}

#[derive(Template)]
#[template(path = "index.html")]
struct IndexTemplate {
    name: &'static str,
    tagline: &'static str,
}

#[derive(Template)]
#[template(path = "projects.html")]
struct ProjectsTemplate {
    projects: Vec<Project>,
}

#[derive(Template)]
#[template(path = "contact.html")]
struct ContactTemplate;

async fn index() -> Html<String> {
    let page = IndexTemplate {
        name: "Md Raisul Islam Rony",
        tagline: "Rust developer and blockchain systems engineer building fast, reliable backends.",
    };
    Html(page.render().unwrap())
}

async fn projects() -> Html<String> {
    let page = ProjectsTemplate {
        projects: vec![
            Project {
                title: "Crypto Watchlist & Price Alert API",
                description: "JWT auth, Postgres watchlists, and live price fetching.",
                tech: vec!["Rust", "Axum", "Postgres"],
                link: "https://github.com/your-username/crypto-watchlist",
            },
            Project {
                title: "Banking System",
                description: "Atomic transactions with row-level locking for concurrency safety.",
                tech: vec!["Rust", "Axum", "sqlx"],
                link: "https://github.com/your-username/banking-system",
            },
        ],
    };
    Html(page.render().unwrap())
}

async fn contact() -> Html<String> {
    Html(ContactTemplate.render().unwrap())
}

#[tokio::main]
async fn main() {
    let app = Router::new()
        .route("/", get(index))
        .route("/projects", get(projects))
        .route("/contact", get(contact))
        .nest_service("/static", ServeDir::new("static"));

    let port = std::env::var("PORT").unwrap_or_else(|_| "3000".into());
    let listener = tokio::net::TcpListener::bind(format!("0.0.0.0:{port}"))
        .await
        .unwrap();
    println!("Running on http://localhost:{port}");
    axum::serve(listener, app).await.unwrap();
}