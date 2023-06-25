import React from "react";
import { ProjectCard } from "../Components/ProjectCard";
import blockestate from "../assets/userprofile.png";
import cinetube from "../assets/cinetube.png";
import iteract from "../assets/iteract.png";
import nftmarket from "../assets/nftmarket.png";

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
