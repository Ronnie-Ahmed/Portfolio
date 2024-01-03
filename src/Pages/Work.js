import React from "react";
import { ProjectCard } from "../Components/ProjectCard";
import blockestate from "../assets/userprofile.png";
import cinetube from "../assets/cinetube.png";
import iteract from "../assets/iteract.png";
import nftmarket from "../assets/nftmarket.png";
import librarynft from "../assets/LibraryHome.png";
import dao from "../assets/DaoHomepage.png";
import Lottery from "../assets/LotteryHome.png";
import TokenSwap from "../assets/testnet.png";
import Car_rental from "../assets/first.png";
import Task_manager from "../assets/Login_Page.png";

export const Work = () => {
  const projects = [
    {
      title: "BLockEstate",
      description:
        "Blockchain Based Real Estate Marketplace. A decentralized real estate marketplace on the Ethereum blockchain.",
      githubLink:
        "https://github.com/Ronnie-Ahmed/Blockchain-Based-Real-Estate-Marketplace",
      Live: null,
      imageSrc: `${blockestate}`,
    },
    {
      title: "CineTube",
      description: "Give you information about movies",
      githubLink: "https://github.com/Ronnie-Ahmed/CineTube",
      Live: null,
      imageSrc: `${cinetube}`,
    },
    {
      title: "SmartContractify",
      description:
        "Simple web3 dapp to deploy smart contracts and interact with them.",
      githubLink: "https://github.com/Ronnie-Ahmed/Interact_with_SmartContract",
      Live: null,
      imageSrc: `${iteract}`,
    },
    {
      title: "NFTMarketPlace",
      description:
        "NFT Marketplace is a platform that facilitates the buying, selling, and trading of non-fungible tokens (NFTs).",
      githubLink: "https://github.com/Ronnie-Ahmed/NFTMARKETPLACE",
      Live: "https://nftmarketplace-igfftl5e3-ronnie-ahmed.vercel.app/",
      imageSrc: `${nftmarket}`,
    },
    {
      title: "LibraryNFT",
      description:
        "LibraryNFT allows users to store their favorite books as Non-Fungible Tokens (NFTs) on the blockchain using Solidity, making them accessible to others in exchange for an access price set by the book owner.",
      githubLink: "https://github.com/Ronnie-Ahmed/LibraryNFT",
      Live: "https://library-nft.vercel.app/",
      imageSrc: `${librarynft}`,
    },
    {
      title: "🐧 🐧 DAO 🐧🐧",
      description:
        "Propose game-changing ideas and watch them transform into reality. Prepare for voting as proposals gain momentum, and then cast your vote with just a few clicks. Vote for, against, or abstain—your decision counts! 💪",
      githubLink: "https://github.com/Ronnie-Ahmed/DAO",
      Live: "https://dao-ronnie-ahmed.vercel.app/",
      imageSrc: `${dao}`,
    },
    {
      title: "🎰💸🍀 Lottery 🎯🏆🤞",
      description:
        "The Decentralized Lottery Dapp is an innovative project that leverages blockchain technology to bring the excitement of lotteries to the Ethereum network.🌐💰",
      githubLink: "https://github.com/Ronnie-Ahmed/Lottery",
      Live: "https://lottery-eight-woad.vercel.app/",
      imageSrc: `${Lottery}`,
    },
    {
      title: "🔄 Token Swap Web3 Dapp 🌐",
      description:
        "Welcome to the Token Swap Web3 Dapp! This decentralized application (Dapp) allows users to exchange mainnet tokens and interact with custom-built ERC20 tokens on the testnet. It also offers features such as creating liquidity pools, adding liquidity, and obtaining free testnet tokens. 🔄",
      githubLink: "https://github.com/Ronnie-Ahmed/Token_Swap",
      Live: "https://token-swap-orcin.vercel.app/",
      imageSrc: `${TokenSwap}`,
    },
    {
      title: " Car-Rental ",
      description: "A place for you to get cars",
      githubLink: "https://github.com/Ronnie-Ahmed/car-rental",
      Live: "https://car-rental-gray-five.vercel.app/",
      imageSrc: `${Car_rental}`,
    },
    {
      title: " Task Manager(Python Django) ",
      description: "Python Django Project for Mediusware Written Exam",
      githubLink: "https://github.com/Ronnie-Ahmed/Task_manager/tree/dev.0.0.1",
      // Live: "https://car-rental-gray-five.vercel.app/",
      imageSrc: `${Task_manager}`,
    },
  ];
  return (
    <section
      id="work"
      className="flex flex-col py-20 mt-6 bg-gray-400 rounded-2xl shadow-md hover:shadow-2xl shadow-slate-50"
    >
      <div className="container mx-auto mb-10 px-4 flex flex-wrap justify-center items-center">
        <div className="flex flex-col text-center items-center mb-6 mx-6 rounded-lg shadow-2xl shadow-black">
          <h1 className="text-3xl p-6 font-bold text-gray-800 tracking-wide leading-tight">
            Projects
          </h1>
        </div>
      </div>
      <div className="grid gap-4 p-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            githubLink={project.githubLink}
            imageSrc={project.imageSrc}
            Live={project.Live}
          />
        ))}
      </div>
    </section>
  );
};
