pub struct NavItem {
    pub href: &'static str,
    pub label: &'static str,
    pub icon: &'static str, // Font Awesome class
}

pub struct Skill {
    pub name: &'static str,
    pub image: &'static str,
}

pub struct SkillGroup {
    pub title: &'static str,
    pub skills: Vec<Skill>,
}

pub struct Service {
    pub image: &'static str,
    pub text: &'static str,
}

pub struct Project {
    pub title: &'static str,
    pub description: &'static str,
    pub github: &'static str,
    pub live: Option<&'static str>,
    pub image: &'static str,
}

pub fn nav() -> Vec<NavItem> {
    vec![
        NavItem { href: "#aboutme", label: "Me", icon: "fa-solid fa-house" },
        NavItem { href: "#experience", label: "Skills", icon: "fa-solid fa-gears" },
        NavItem { href: "#services", label: "Services", icon: "fa-solid fa-briefcase" },
        NavItem { href: "#work", label: "Projects", icon: "fa-solid fa-diagram-project" },
        NavItem { href: "#contactme", label: "Contact Me", icon: "fa-solid fa-address-card" },
    ]
}

fn s(name: &'static str, image: &'static str) -> Skill {
    Skill { name, image }
}

pub fn skill_groups() -> Vec<SkillGroup> {
    vec![
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
            title: "Blockchain Tech",
            skills: vec![
                s("Ethers js", "ethersjs.png"),
                s("Solidity", "solidity-icon.png"),
                s("Hardhat", "hardhat.png"),
                s("Thirdweb", "thirdweb.jpg"),
                s("Foundry", "foundry-banner.png"),
            ],
        },
        SkillGroup {
            title: "Frontend",
            skills: vec![
                s("HTML", "html.png"),
                s("CSS", "css.png"),
                s("React js", "reactjs.png"),
                s("Next js", "nextjs-logo-square.png"),
                s("Tailwind CSS", "tailwindcss.png"),
            ],
        },
        SkillGroup {
            title: "DevOps",
            skills: vec![s("Docker", "docker.png")],
        },
        SkillGroup {
            title: "Web Backend",
            skills: vec![
                s("Node js", "nodejs.jpg"),
                s("Express js", "expressjs.png"),
                s("Django", "Django.png"),
            ],
        },
    ]
}

pub fn services() -> Vec<Service> {
    vec![
        Service {
            image: "smartcontract.png",
            text: "I'm a smart contract specialist with expertise in Solidity, ERC721, ERC777, and ERC1155 smart contracts from OpenZeppelin. I have a deep understanding of Solidity's core concepts and can integrate Chainlink for reliable solutions. Let's turn your ideas into successful decentralized applications.",
        },
        Service {
            image: "web.png",
            text: "I'm a full-stack web3 developer with expertise in NFT and real estate marketplaces. I stay updated with the latest web3 advancements to deliver cutting-edge applications. Let's bring your ideas to life with exceptional web3 solutions.",
        },
        Service {
            image: "ethereum.jpeg",
            text: "I'm a blockchain learner with strong expertise in Ethereum. Continuously learning and staying updated with new concepts, I offer valuable insights and innovative solutions tailored to your needs. Let's harness the power of blockchain to drive your success.",
        },
    ]
}

pub fn projects() -> Vec<Project> {
    vec![
        Project {
            title: "BLockEstate",
            description: "Blockchain Based Real Estate Marketplace. A decentralized real estate marketplace on the Ethereum blockchain.",
            github: "https://github.com/Ronnie-Ahmed/Blockchain-Based-Real-Estate-Marketplace",
            live: None,
            image: "userprofile.png",
        },
        Project {
            title: "CineTube",
            description: "Give you information about movies",
            github: "https://github.com/Ronnie-Ahmed/CineTube",
            live: None,
            image: "cinetube.png",
        },
        Project {
            title: "SmartContractify",
            description: "Simple web3 dapp to deploy smart contracts and interact with them.",
            github: "https://github.com/Ronnie-Ahmed/Interact_with_SmartContract",
            live: None,
            image: "iteract.png",
        },
        Project {
            title: "NFTMarketPlace",
            description: "NFT Marketplace is a platform that facilitates the buying, selling, and trading of non-fungible tokens (NFTs).",
            github: "https://github.com/Ronnie-Ahmed/NFTMARKETPLACE",
            live: Some("https://nftmarketplace-igfftl5e3-ronnie-ahmed.vercel.app/"),
            image: "nftmarket.png",
        },
        Project {
            title: "LibraryNFT",
            description: "LibraryNFT allows users to store their favorite books as Non-Fungible Tokens (NFTs) on the blockchain using Solidity, making them accessible to others in exchange for an access price set by the book owner.",
            github: "https://github.com/Ronnie-Ahmed/LibraryNFT",
            live: Some("https://library-nft.vercel.app/"),
            image: "LibraryHome.png",
        },
        Project {
            title: "🐧 🐧 DAO 🐧🐧",
            description: "Propose game-changing ideas and watch them transform into reality. Prepare for voting as proposals gain momentum, and then cast your vote with just a few clicks. Vote for, against, or abstain—your decision counts! 💪",
            github: "https://github.com/Ronnie-Ahmed/DAO",
            live: Some("https://dao-ronnie-ahmed.vercel.app/"),
            image: "DaoHomepage.png",
        },
        Project {
            title: "🎰💸🍀 Lottery 🎯🏆🤞",
            description: "The Decentralized Lottery Dapp is an innovative project that leverages blockchain technology to bring the excitement of lotteries to the Ethereum network.🌐💰",
            github: "https://github.com/Ronnie-Ahmed/Lottery",
            live: Some("https://lottery-eight-woad.vercel.app/"),
            image: "LotteryHome.png",
        },
        Project {
            title: "🔄 Token Swap Web3 Dapp 🌐",
            description: "Welcome to the Token Swap Web3 Dapp! This decentralized application (Dapp) allows users to exchange mainnet tokens and interact with custom-built ERC20 tokens on the testnet. It also offers features such as creating liquidity pools, adding liquidity, and obtaining free testnet tokens. 🔄",
            github: "https://github.com/Ronnie-Ahmed/Token_Swap",
            live: Some("https://token-swap-orcin.vercel.app/"),
            image: "testnet.png",
        },
        Project {
            title: "Car-Rental",
            description: "A place for you to get cars",
            github: "https://github.com/Ronnie-Ahmed/car-rental",
            live: Some("https://car-rental-gray-five.vercel.app/"),
            image: "first.png",
        },
        Project {
            title: "Task Manager (Python Django)",
            description: "Python Django Project for Mediusware Written Exam",
            github: "https://github.com/Ronnie-Ahmed/Task_manager/tree/dev.0.0.1",
            live: None,
            image: "Login_Page.png",
        },
    ]
}