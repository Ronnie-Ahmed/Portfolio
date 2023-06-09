import React from "react";
import javascript from "../assets/java-script.png";
import html5 from "../assets/html.png";
import css from "../assets/css.png";
import ethersjs from "../assets/ethersjs.png";
import reactjs from "../assets/reactjs.png";
import tailwind from "../assets/tailwindcss.png";
import solidity from "../assets/solidity-icon.png";
import C from "../assets/C.png";
import CPP from "../assets/CPP.png";
import hardhat from "../assets/hardhat.png";
import ipfs from "../assets/Ipfs.png";

export const Experience = () => {
  return (
    <section
      id="experience"
      className="flex flex-col py-20 mt-6 bg-gray-400 rounded-2xl shadow-md hover:shadow-2xl shadow-slate-50"
    >
      <div className="container mx-auto mb-10 px-4 flex flex-wrap justify-center items-center">
        <div className="flex flex-col text-center items-center mb-6 mx-6 rounded-lg shadow-2xl shadow-black">
          <h1 className="text-3xl p-6 font-bold text-gray-800 tracking-wide leading-tight">
            Tech Stack
          </h1>
        </div>
      </div>
      <div className="container mx-auto mb-10 px-4 flex flex-wrap justify-center items-center">
        <div className="flex flex-col items-center mb-6 mx-6 rounded-lg shadow-2xl shadow-black">
          <img
            src={C}
            alt="JavaScript"
            className="w-12 h-12  m-2 rounded-md transform hover:scale-110 transition-transform hover:shadow-2xl hover:rotate-3 hover:translate-x-1 hover:translate-y-1"
          />
          <span className="text-gray-800 font-bold mx-4 text-sm uppercase tracking-wide hover:text-yellow-900  cursor-pointer transform hover:rotate-3 hover:scale-110 transition-transform">
            C
          </span>
        </div>
        <div className="flex flex-col items-center mb-6 mx-6 rounded-lg shadow-2xl shadow-black">
          <img
            src={CPP}
            alt="JavaScript"
            className="w-12 h-12  m-2 rounded-md transform hover:scale-110 transition-transform hover:shadow-2xl hover:rotate-3 hover:translate-x-1 hover:translate-y-1"
          />
          <span className="text-gray-800 font-bold mx-4 text-sm uppercase tracking-wide hover:text-yellow-900  cursor-pointer transform hover:rotate-3 hover:scale-110 transition-transform">
            C++
          </span>
        </div>
      </div>
      <div className="container mx-auto mb-10 px-4 flex flex-wrap justify-center items-center">
        <div className="flex flex-col items-center mb-6 mx-6 rounded-lg shadow-2xl shadow-black">
          <img
            src={html5}
            alt="JavaScript"
            className="w-12 h-12  m-2 rounded-md transform hover:scale-110 transition-transform hover:shadow-2xl hover:rotate-3 hover:translate-x-1 hover:translate-y-1"
          />
          <span className="text-gray-800 font-bold mx-4 text-sm uppercase tracking-wide hover:text-yellow-900  cursor-pointer transform hover:rotate-3 hover:scale-110 transition-transform">
            HTML
          </span>
        </div>
        <div className="flex flex-col items-center mb-6 mx-6 rounded-lg shadow-2xl shadow-black">
          <img
            src={css}
            alt="JavaScript"
            className="w-12 h-12  m-2 rounded-md transform hover:scale-110 transition-transform hover:shadow-2xl hover:rotate-3 hover:translate-x-1 hover:translate-y-1"
          />
          <span className="text-gray-800 font-bold mx-4 text-sm uppercase tracking-wide hover:text-yellow-900  cursor-pointer transform hover:rotate-3 hover:scale-110 transition-transform">
            CSS
          </span>
        </div>

        <div className="flex flex-col items-center mb-6 mx-6 rounded-lg shadow-2xl shadow-black">
          <img
            src={reactjs}
            alt="JavaScript"
            className="w-12 h-12  m-2 rounded-md transform hover:scale-110 transition-transform hover:shadow-2xl hover:rotate-3 hover:translate-x-1 hover:translate-y-1"
          />
          <span className="text-gray-800 font-bold mx-4 text-sm uppercase tracking-wide hover:text-yellow-900  cursor-pointer transform hover:rotate-3 hover:scale-110 transition-transform">
            React js
          </span>
        </div>

        <div className="flex flex-col items-center mb-6 mx-6 rounded-lg shadow-2xl shadow-black">
          <img
            src={tailwind}
            alt="JavaScript"
            className="w-12 h-12  m-2 rounded-md transform hover:scale-110 transition-transform hover:shadow-2xl hover:rotate-3 hover:translate-x-1 hover:translate-y-1"
          />
          <span className="text-gray-800 font-bold mx-4 text-sm uppercase tracking-wide hover:text-yellow-900  cursor-pointer transform hover:rotate-3 hover:scale-110 transition-transform">
            Tailwind CSS
          </span>
        </div>
      </div>
      <div className="container mx-auto mb-10 px-4 flex flex-wrap justify-center items-center">
        <div className="flex flex-col items-center mb-6 mx-6 rounded-lg shadow-2xl shadow-black">
          <img
            src={javascript}
            alt="JavaScript"
            className="w-12 h-12  m-2 rounded-md transform hover:scale-110 transition-transform hover:shadow-2xl hover:rotate-3 hover:translate-x-1 hover:translate-y-1"
          />
          <span className="text-gray-800 font-bold mx-4 text-sm uppercase tracking-wide hover:text-yellow-900  cursor-pointer transform hover:rotate-3 hover:scale-110 transition-transform">
            JavaScript
          </span>
        </div>

        <div className="flex flex-col items-center mb-6 mx-6 rounded-lg shadow-2xl shadow-black">
          <img
            src={ethersjs}
            alt="JavaScript"
            className="w-12 h-12   m-2 rounded-md transform hover:scale-110 transition-transform hover:shadow-2xl hover:rotate-3 hover:translate-x-1 hover:translate-y-1"
          />
          <span className="text-gray-800 font-bold mx-4 text-sm uppercase tracking-wide hover:text-yellow-900  cursor-pointer transform hover:rotate-3 hover:scale-110 transition-transform">
            Ethers js
          </span>
        </div>

        <div className="flex flex-col items-center mb-6 mx-6 rounded-lg shadow-2xl shadow-black">
          <img
            src={solidity}
            alt="JavaScript"
            className="w-12 h-12  m-2 rounded-md transform hover:scale-110 transition-transform hover:shadow-2xl hover:rotate-3 hover:translate-x-1 hover:translate-y-1"
          />
          <span className="text-gray-800 font-bold mx-4 text-sm uppercase tracking-wide hover:text-yellow-900  cursor-pointer transform hover:rotate-3 hover:scale-110 transition-transform">
            Solidity
          </span>
        </div>
        <div className="flex flex-col items-center mb-6 mx-6 rounded-lg shadow-2xl shadow-black">
          <img
            src={hardhat}
            alt="JavaScript"
            className="w-12 h-12  m-2 rounded-md transform hover:scale-110 transition-transform hover:shadow-2xl hover:rotate-3 hover:translate-x-1 hover:translate-y-1"
          />
          <span className="text-gray-800 font-bold mx-4 text-sm uppercase tracking-wide hover:text-yellow-900  cursor-pointer transform hover:rotate-3 hover:scale-110 transition-transform">
            HARDHAT
          </span>
        </div>
        <div className="flex flex-col items-center mb-6 mx-6 rounded-lg shadow-2xl shadow-black">
          <img
            src={ipfs}
            alt="JavaScript"
            className="w-12 h-12  m-2 rounded-md transform hover:scale-110 transition-transform hover:shadow-2xl hover:rotate-3 hover:translate-x-1 hover:translate-y-1"
          />
          <span className="text-gray-800 font-bold mx-4 text-sm uppercase tracking-wide hover:text-yellow-900  cursor-pointer transform hover:rotate-3 hover:scale-110 transition-transform">
            IPFS
          </span>
        </div>
      </div>
    </section>
  );
};
