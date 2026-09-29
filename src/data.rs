pub struct NavItem {
    pub href: &'static str,
    pub label: &'static str,
}

pub struct Stat {
    pub value: &'static str,
    pub label: &'static str,
}

pub struct Experience {
    pub role: &'static str,
    pub company: &'static str,
    pub period: &'static str,
    pub points: Vec<&'static str>,
    pub tech: Vec<&'static str>,
}

pub struct Skill {
    pub name: &'static str,
    pub image: Option<&'static str>,
}

pub struct SkillGroup {
    pub title: &'static str,
    pub skills: Vec<Skill>,
}

pub struct Service {
    pub icon: &'static str,
    pub title: &'static str,
    pub text: &'static str,
}

pub struct Project {
    pub title: &'static str,
    pub description: &'static str,
    pub github: Option<&'static str>,
    pub live: Option<&'static str>,
    pub image: Option<&'static str>,
    pub category: &'static str, // space-separated: "rust blockchain professional"
    pub tags: Vec<&'static str>,
    pub work: bool, // true = professional/company project
}

pub fn nav() -> Vec<NavItem> {
    vec![
        NavItem { href: "#experience", label: "Experience" },
        NavItem { href: "#work", label: "Projects" },
        NavItem { href: "#skills", label: "Skills" },
        NavItem { href: "#services", label: "What I do" },
        NavItem { href: "#contactme", label: "Contact" },
    ]
}

pub fn stats() -> Vec<Stat> {
    vec![
        Stat { value: "2+", label: "Years in blockchain" },
        Stat { value: "3", label: "Companies" },
        Stat { value: "10s", label: "Projects" },
    ]
}

pub fn experience() -> Vec<Experience> {
    vec![
        Experience {
            role: "Rust & Blockchain Developer",
            company: "Eterces",
            period: "Apr 2026 – Present",
            points: vec![
                "Review Rust and Substrate-based blockchain projects and give technical feedback on implementation quality and engineering decisions.",
                "Contribute technical ideas and project proposals across Rust, blockchain and decentralized systems, and join client discussions to scope engineering requirements.",
            ],
            tech: vec!["Rust", "Substrate"],
        },
        Experience {
            role: "Substrate Developer",
            company: "Cyborg Network",
            period: "Apr 2025 – Dec 2025",
            points: vec![
                "Designed and implemented a custom payment pallet for a Substrate parachain supporting multiple payment models, and a miner-reward pallet with native-token and fiat-based rewards for a dual-currency incentive system.",
                "Built the communication layer between an NVIDIA Triton Inference Server and the parachain, enabling on-chain verification of off-chain AI inference workloads.",
                "Integrated blockchain runtime interfaces with distributed compute workers, and added OP-TEE-based unique device identification to reduce device spoofing.",
            ],
            tech: vec!["Rust", "Substrate", "FRAME pallets", "NVIDIA Triton", "OP-TEE"],
        },
        Experience {
            role: "Blockchain Developer",
            company: "Devolved AI",
            period: "Jan 2024 – Apr 2025",
            points: vec![
                "Developed and maintained Argochain, a Layer 1 blockchain built with Substrate, covering runtime development, tooling and deployment.",
                "Reduced smart contract transaction costs by 20% through Solidity contract and runtime optimization, and built interoperability between the native token and ERC-20 tokens.",
                "Upgraded the Polkadot SDK and re-engineered components for EVM compatibility, enabling Ethereum ecosystem tooling.",
                "Designed token supply-management mechanisms, including token burn and dead-address functionality.",
            ],
            tech: vec!["Rust", "Substrate", "Polkadot SDK", "Solidity", "EVM"],
        },
        Experience {
            role: "BSc in Computer Science and Engineering",
            company: "Bangladesh Army University of Engineering and Technology",
            period: "2019 – 2023",
            points: vec![
                "Ranked 14th of 400 participants in the Dapp-World Optimized Smart Contract Development Challenge.",
                "Champion, MindStorm 4.0 Software Showcasing Competition (BAUET Computer Society, 2022).",
            ],
            tech: vec![],
        },
    ]
}

fn s(name: &'static str, image: &'static str) -> Skill {
    Skill { name, image: Some(image) }
}

fn t(name: &'static str) -> Skill {
    Skill { name, image: None }
}

pub fn skill_groups() -> Vec<SkillGroup> {
    vec![
        SkillGroup {
            title: "Blockchain Infrastructure",
            skills: vec![
                s("Rust", "rust.png"),
                t("Substrate"),
                t("Polkadot SDK"),
                t("FRAME Pallets"),
                t("Runtime Development"),
                t("Layer 1"),
                t("EVM Compatibility"),
                t("Tokenomics"),
                t("Cross-chain Interoperability"),
            ],
        },
        SkillGroup {
            title: "Smart Contracts & Web3",
            skills: vec![
                s("Solidity", "solidity-icon.png"),
                s("Foundry", "foundry-banner.png"),
                s("Hardhat", "hardhat.png"),
                s("Ethers.js", "ethersjs.png"),
                s("Thirdweb", "thirdweb.jpg"),
                t("Gas Optimization"),
                t("DeFi"),
                t("NFTs"),
                t("Web3.js"),
            ],
        },
        SkillGroup {
            title: "Rust Backend",
            skills: vec![
                t("Axum"),
                t("actix"),
                t("Tokio"),
                t("sqlx"),
                t("PostgreSQL"),
                t("Redis"),
                t("REST APIs"),
                t("WebSockets"),
                t("Distributed Systems"),
            ],
        },
        SkillGroup {
            title: "Languages",
            skills: vec![
                s("Rust", "rust.png"),
                s("Python", "Python-logo-notext.svg.png"),
                s("JavaScript", "java-script.png"),
                s("Solidity", "solidity-icon.png"),
            ],
        },
        SkillGroup {
            title: "Frontend",
            skills: vec![
                s("HTML", "html.png"),
                s("CSS", "css.png"),
                s("React", "reactjs.png"),
                s("Next.js", "nextjs-logo-square.png"),
                s("Tailwind CSS", "tailwindcss.png"),
            ],
        },
        SkillGroup {
            title: "Backend (other)",
            skills: vec![
                s("Node.js", "nodejs.jpg"),
                s("Express", "expressjs.png"),
                s("Django", "Django.png"),
            ],
        },
        SkillGroup {
            title: "DevOps",
            skills: vec![s("Docker", "docker.png")],
        },
    ]
}

pub fn services() -> Vec<Service> {
    vec![
        Service {
            icon: "fa-solid fa-cubes",
            title: "Blockchain Infrastructure",
            text: "Substrate runtimes and custom FRAME pallets, Layer 1 chains, EVM compatibility, tokenomics and cross-chain interoperability, built in Rust.",
        },
        Service {
            icon: "fa-solid fa-server",
            title: "Backend & API Development",
            text: "Fast, reliable REST and real-time APIs in Rust with Axum, backed by Postgres and Redis, with attention to authentication, concurrency and data integrity.",
        },
        Service {
            icon: "fa-solid fa-file-contract",
            title: "Smart Contracts",
            text: "Solidity contracts built on OpenZeppelin standards (ERC-721, ERC-777, ERC-1155), tested with Foundry or Hardhat, with Chainlink integrations where needed.",
        },
        Service {
            icon: "fa-brands fa-ethereum",
            title: "Web3 & DeFi Applications",
            text: "End-to-end dApps such as NFT and real-estate marketplaces, token swaps and DAOs, from the contract layer to the user interface.",
        },
    ]
}

#[allow(clippy::too_many_arguments)]
fn p(
    title: &'static str,
    description: &'static str,
    github: &'static str,
    live: Option<&'static str>,
    image: Option<&'static str>,
    category: &'static str,
    tags: Vec<&'static str>,
) -> Project {
    Project { title, description, github: Some(github), live, image, category, tags, work: false }
}

// Professional project (usually no public repo)
fn pc(
    title: &'static str,
    description: &'static str,
    category: &'static str,
    tags: Vec<&'static str>,
) -> Project {
    Project { title, description, github: None, live: None, image: None, category, tags, work: true }
}

// Professional project with a public repository
fn pw(
    title: &'static str,
    description: &'static str,
    github: &'static str,
    category: &'static str,
    tags: Vec<&'static str>,
) -> Project {
    Project { title, description, github: Some(github), live: None, image: None, category, tags, work: true }
}

pub fn projects() -> Vec<Project> {
    vec![
        // ---------- Professional work ----------
        pc("Argochain: Substrate Layer 1 Blockchain",
           "Contributed to a Substrate-based Layer 1 blockchain with EVM compatibility. Designed and implemented parts of the tokenomics, runtime upgrades, token-burn mechanism and dead-address functionality. Reviewed the Hacken security audit findings and helped resolve the identified vulnerabilities, including critical issues.",
           "professional rust blockchain",
           vec!["Rust", "Substrate", "Polkadot SDK", "EVM", "Solidity"]),
        pw("Cyborg Parachain",
           "Substrate parachain for a privacy-focused decentralized platform that runs AI workloads. Designed and implemented a custom payment pallet supporting multiple payment models and a miner-reward pallet with native-token and fiat-based rewards, plus on-chain verification of off-chain AI inference via NVIDIA Triton.",
           "https://github.com/Cyborg-Network/cyborg-parachain",
           "professional rust blockchain",
           vec!["Rust", "Substrate", "FRAME pallets", "NVIDIA Triton"]),
        pw("Cyborg Miner",
           "Worker node for the Cyborg distributed AI network. Integrates blockchain runtime interfaces with distributed compute workers, and adds OP-TEE-based hardware device identification to strengthen device trust and prevent spoofing.",
           "https://github.com/Cyborg-Network/Cyborg-miner",
           "professional rust blockchain",
           vec!["Rust", "Substrate", "OP-TEE", "Distributed systems"]),
        // ---------- Rust ----------
        p("Crypto Watchlist & Price Alert API",
          "REST API with JWT auth, Postgres-backed watchlists, live CoinGecko prices and price alerts.",
          "https://github.com/Ronnie-Ahmed/RustVault/tree/main/crypto_watchlist",
          None, None, "rust", vec!["Rust", "Axum", "Postgres", "JWT"]),
        p("Banking System API",
          "Atomic money transfers using database transactions and row-level locking to stay correct under concurrent requests.",
          "https://github.com/Ronnie-Ahmed/RustVault/tree/main/Banking_System",
          None, None, "rust", vec!["Rust", "Axum", "sqlx", "Postgres"]),
        p("Real-time WebSocket Chat",
          "Chat server with a global room and message history persisted to Postgres.",
          "https://github.com/Ronnie-Ahmed/RustVault/tree/main/chat_server",
          None, None, "rust", vec!["Rust", "Axum", "WebSockets"]),
        // ---------- Blockchain ----------
        p("BlockEstate",
          "Decentralized real estate marketplace on the Ethereum blockchain.",
          "https://github.com/Ronnie-Ahmed/Blockchain-Based-Real-Estate-Marketplace",
          None, Some("userprofile.png"), "blockchain", vec!["Solidity", "Ethereum"]),
        p("NFT Marketplace",
          "Platform for buying, selling and trading non-fungible tokens.",
          "https://github.com/Ronnie-Ahmed/NFTMARKETPLACE",
          Some("https://nftmarketplace-igfftl5e3-ronnie-ahmed.vercel.app/"),
          Some("nftmarket.png"), "blockchain", vec!["Solidity", "NFT"]),
        p("LibraryNFT",
          "Store favorite books as NFTs and let others access them for a price set by the owner.",
          "https://github.com/Ronnie-Ahmed/LibraryNFT",
          Some("https://library-nft.vercel.app/"),
          Some("LibraryHome.png"), "blockchain", vec!["Solidity", "NFT"]),
        p("DAO",
          "Create proposals, vote for, against or abstain, and watch ideas turn into decisions.",
          "https://github.com/Ronnie-Ahmed/DAO",
          Some("https://dao-ronnie-ahmed.vercel.app/"),
          Some("DaoHomepage.png"), "blockchain", vec!["Solidity", "Governance"]),
        p("Decentralized Lottery",
          "Lottery dapp that brings provably fair draws to the Ethereum network.",
          "https://github.com/Ronnie-Ahmed/Lottery",
          Some("https://lottery-eight-woad.vercel.app/"),
          Some("LotteryHome.png"), "blockchain", vec!["Solidity", "Ethereum"]),
        p("Token Swap",
          "Swap mainnet tokens, use custom ERC20 tokens on testnet, create liquidity pools and add liquidity.",
          "https://github.com/Ronnie-Ahmed/Token_Swap",
          Some("https://token-swap-orcin.vercel.app/"),
          Some("testnet.png"), "blockchain", vec!["Solidity", "ERC20", "DeFi"]),
        p("SmartContractify",
          "Web3 dapp to deploy smart contracts and interact with them.",
          "https://github.com/Ronnie-Ahmed/Interact_with_SmartContract",
          None, Some("iteract.png"), "blockchain", vec!["Solidity", "Web3"]),
        // ---------- Web ----------
        p("Car Rental",
          "Car rental web application.",
          "https://github.com/Ronnie-Ahmed/car-rental",
          Some("https://car-rental-gray-five.vercel.app/"),
          Some("first.png"), "web", vec![]), // TODO: add tags
        p("CineTube",
          "Movie information app.",
          "https://github.com/Ronnie-Ahmed/CineTube",
          None, Some("cinetube.png"), "web", vec![]), // TODO: add tags
        p("Task Manager",
          "Django project built for the Mediusware written exam.",
          "https://github.com/Ronnie-Ahmed/Task_manager/tree/dev.0.0.1",
          None, Some("Login_Page.png"), "web", vec!["Python", "Django"]),
    ]
}