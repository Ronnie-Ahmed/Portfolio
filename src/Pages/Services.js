import React from "react";
import smart from "../assets/smartcontract.png";
import blockchain from "../assets/ethereum.jpeg";
import web3 from "../assets/web.png";

export const Services = () => {
  return (
    <section
      id="services"
      className="flex flex-col py-20 mt-6 bg-gray-400 rounded-2xl shadow-md hover:shadow-2xl shadow-slate-50"
    >
      <div className="container mx-auto mb-10 px-4 flex flex-wrap justify-center items-center">
        <div className="flex flex-col text-center items-center mb-6 mx-6 rounded-lg shadow-2xl shadow-black">
          <h1 className="text-3xl p-6 font-bold text-gray-800 tracking-wide leading-tight">
            Services
          </h1>
        </div>
      </div>
      <section className="flex flex-row items-center mx-4 px-1 md:mx-16 bg-gradient-to-r from-gray-500 to-gray-950 rounded-lg p-8 shadow-xl hover:shadow-2xl shadow-black transform transition-all duration-300 hover:scale-105 mb-10">
        <div>
          <img
            src={smart}
            alt="logo"
            className="max-w-full h-auto rounded-lg shadow-lg hover:shadow-2xl shadow-sky-950 transform hover:scale-105 transition-all duration-300"
          />
        </div>

        <div className="mt-4 text-center">
          <div className="inline-block bg-sky-950 text-white px-0.5 py-1 rounded-md shadow-md hover:shadow-2xl shadow-black hover:-translate-y-1 transition-all duration-300">
            <p className="text-small font-semibold">
              I'm a smart contract specialist with expertise in Solidity,
              ERC721, ERC777, and ERC1155 smart contracts from OpenZeppelin. I
              have a deep understanding of Solidity's core concepts and can
              integrate Chainlink for reliable solutions. Let's turn your ideas
              into successful decentralized applications.
              <span className="tw-animate-pulse tw-text-indigo-900 shadow-2xl shadow-black"></span>
            </p>
          </div>
        </div>
      </section>
      <section className="flex flex-row items-center mx-4 px-1 md:mx-16 bg-gradient-to-r from-gray-500 to-gray-950 rounded-lg p-8 shadow-xl hover:shadow-2xl shadow-black transform transition-all duration-300 hover:scale-105 mb-10">
        <div>
          <img
            src={web3}
            alt="logo"
            className="max-w-full h-auto rounded-lg shadow-lg hover:shadow-2xl shadow-sky-950 transform hover:scale-105 transition-all duration-300"
          />
        </div>

        <div className="mt-4 text-center">
          <div className="inline-block bg-sky-950 text-white px-0.5 py-1 rounded-md shadow-md hover:shadow-2xl shadow-black hover:-translate-y-1 transition-all duration-300">
            <p className="text-small font-semibold">
              I'm a full-stack web3 developer with expertise in NFT and real
              estate marketplaces. I stay updated with the latest web3
              advancements to deliver cutting-edge applications. Let's bring
              your ideas to life with exceptional web3 solutions.
              <span className="tw-animate-pulse tw-text-indigo-900 shadow-2xl shadow-black"></span>
            </p>
          </div>
        </div>
      </section>
      <section className="flex flex-row items-center mx-4 px-1 md:mx-16 bg-gradient-to-r from-gray-500 to-gray-950 rounded-lg p-8 shadow-xl hover:shadow-2xl shadow-black transform transition-all duration-300 hover:scale-105 mb-10">
        <div>
          <img
            src={blockchain}
            alt="logo"
            className="max-w-full h-auto rounded-lg shadow-lg hover:shadow-2xl shadow-sky-950 transform hover:scale-105 transition-all duration-300"
          />
        </div>

        <div className="mt-4 text-center">
          <div className="inline-block bg-sky-950 text-white px-0.5 py-1 rounded-md shadow-md hover:shadow-2xl shadow-black hover:-translate-y-1 transition-all duration-300">
            <p className="text-small font-semibold">
              I'm a blockchain learner with strong expertise in Ethereum.
              Continuously learning and staying updated with new concepts, I
              offer valuable insights and innovative solutions tailored to your
              needs. Let's harness the power of blockchain to drive your
              success.
              <span className="tw-animate-pulse tw-text-indigo-900 shadow-2xl shadow-black"></span>
            </p>
          </div>
        </div>
      </section>
    </section>
  );
};
