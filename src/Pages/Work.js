import React from "react";
import { ProjectCard } from "../Components/ProjectCard";
import blockestate from "../assets/Blockestate.png";
import cinetube from "../assets/cinetube.png";
import iteract from "../assets/iteract.png";

export const Work = () => {
  const projects = [
    {
      title: "BLockEstate",
      description:
        "Blockchain Based Real Estate Marketplace. A decentralized real estate marketplace on the Ethereum blockchain.",
      githubLink:
        "https://github.com/Ronnie-Ahmed/Blockchain-Based-Real-Estate-Marketplace",
      imageSrc: `${blockestate}`,
    },
    {
      title: "CineTube",
      description: "Give you information about movies",
      githubLink: "https://github.com/Ronnie-Ahmed/CineTube",
      imageSrc: `${cinetube}`,
    },
    {
      title: "SmartContractify",
      description:
        "Simple web3 dapp to deploy smart contracts and interact with them.",
      githubLink: "https://github.com/Ronnie-Ahmed/CineTube",
      imageSrc: `${iteract}`,
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
          />
        ))}
      </div>
    </section>
  );
};
