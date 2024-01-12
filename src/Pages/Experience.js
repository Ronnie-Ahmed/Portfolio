import React from "react";
import javascript from "../assets/java-script.png";
import html5 from "../assets/html.png";
import css from "../assets/css.png";
import ethersjs from "../assets/ethersjs.png";
import reactjs from "../assets/reactjs.png";
import tailwind from "../assets/tailwindcss.png";
import solidity from "../assets/solidity-icon.png";
import C from "../assets/C.png";
import nextjs from "../assets/nextjs-logo-square.png";
import CPP from "../assets/CPP.png";
import foundry from "../assets/foundry-banner.png";
import hardhat from "../assets/hardhat.png";
import ipfs from "../assets/Ipfs.png";
import docker from "../assets/docker.png";
import nodejs from "../assets/nodejs.jpg";
import expressJs from "../assets/expressjs.png";
import mongoDB from "../assets/mongoDB.png";
import metamask from "../assets/MetaMask.png";
import thirdweb from "../assets/thirdweb.jpg";
import alchamy from "../assets/Alchamy.png";
import django from "../assets/Django.png";
import python from "../assets/Python-logo-notext.svg.png";
import rust from "../assets/rust.png";

export const Experience = () => {
  return (
    <section
      id="experience"
      className="flex flex-col py-20 mt-6 bg-gray-400 rounded-2xl shadow-md hover:shadow-2xl shadow-slate-50"
    >
      <div className="container mx-auto mb-10 px-4 flex flex-wrap justify-center items-center">
        <div className="flex flex-col items-center mb-6 mx-6 rounded-lg shadow-2xl shadow-black">
          <h1 className="text-3xl p-6 font-bold text-gray-800 tracking-wide leading-tight text-center">
            Languages
          </h1>
        </div>

        <div className="flex flex-row items-center mb-6 mx-6 rounded-lg shadow-2xl shadow-black">
          <span className="text-gray-800 font-bold mx-4 text-sm uppercase tracking-wide hover:text-yellow-900  cursor-pointer transform hover:rotate-3 hover:scale-110 transition-transform">
            Python
          </span>
          <img
            src={python}
            alt="JavaScript"
            className="w-12 h-12  m-2 rounded-md transform hover:scale-110 transition-transform hover:shadow-2xl hover:rotate-3 hover:translate-x-1 hover:translate-y-1"
          />
        </div>

        <div className="flex flex-col items-center mb-6 mx-6 rounded-lg shadow-2xl shadow-black">
          <img
            src={rust}
            alt="JavaScript"
            className="w-12 h-12  m-2 rounded-md transform hover:scale-110 transition-transform hover:shadow-2xl hover:rotate-3 hover:translate-x-1 hover:translate-y-1"
          />
          <span className="text-gray-800 font-bold mx-4 text-sm uppercase tracking-wide hover:text-yellow-900  cursor-pointer transform hover:rotate-3 hover:scale-110 transition-transform">
            Rust
          </span>
        </div>
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
            src={solidity}
            alt="JavaScript"
            className="w-12 h-12  m-2 rounded-md transform hover:scale-110 transition-transform hover:shadow-2xl hover:rotate-3 hover:translate-x-1 hover:translate-y-1"
          />
          <span className="text-gray-800 font-bold mx-4 text-sm uppercase tracking-wide hover:text-yellow-900  cursor-pointer transform hover:rotate-3 hover:scale-110 transition-transform">
            Solidity
          </span>
        </div>
      </div>
      <div className="container mx-auto mb-10 px-4 flex flex-wrap justify-center items-center">
        <div className="flex flex-col items-center mb-6 mx-6 rounded-lg shadow-2xl shadow-black">
          <h1 className="text-3xl p-6 font-bold text-gray-800 tracking-wide leading-tight text-center">
            Blockchain Tech
          </h1>
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
            src={thirdweb}
            alt="JavaScript"
            className="w-12 h-12  m-2 rounded-md transform hover:scale-110 transition-transform hover:shadow-2xl hover:rotate-3 hover:translate-x-1 hover:translate-y-1"
          />
          <span className="text-gray-800 font-bold mx-4 text-sm uppercase tracking-wide hover:text-yellow-900  cursor-pointer transform hover:rotate-3 hover:scale-110 transition-transform">
            Thirdweb
          </span>
        </div>
        <div className="flex flex-col items-center mb-6 mx-6 rounded-lg shadow-2xl shadow-black">
          <img
            src={foundry}
            alt="JavaScript"
            className="w-12 h-12  m-2 rounded-md transform hover:scale-110 transition-transform hover:shadow-2xl hover:rotate-3 hover:translate-x-1 hover:translate-y-1"
          />
          <span className="text-gray-800 font-bold mx-4 text-sm uppercase tracking-wide hover:text-yellow-900  cursor-pointer transform hover:rotate-3 hover:scale-110 transition-transform">
            Foundry
          </span>
        </div>
      </div>
      <div className="container mx-auto mb-10 px-4 flex flex-wrap justify-center items-center">
        <div className="flex flex-col items-center mb-6 mx-6 rounded-lg shadow-2xl shadow-black">
          <h1 className="text-3xl p-6 font-bold text-gray-800 tracking-wide leading-tight text-center">
            Frontend
          </h1>
        </div>
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
            src={nextjs}
            alt="JavaScript"
            className="w-12 h-12  m-2 rounded-md transform hover:scale-110 transition-transform hover:shadow-2xl hover:rotate-3 hover:translate-x-1 hover:translate-y-1"
          />
          <span className="text-gray-800 font-bold mx-4 text-sm uppercase tracking-wide hover:text-yellow-900  cursor-pointer transform hover:rotate-3 hover:scale-110 transition-transform">
            Next js
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
          <h1 className="text-3xl p-6 font-bold text-gray-800 tracking-wide leading-tight">
            DevOps
          </h1>
        </div>
        <div className="flex flex-col items-center mb-6 mx-6 rounded-lg shadow-2xl shadow-black">
          <img
            src={docker}
            alt="JavaScript"
            className="w-12 h-12  m-2 rounded-md transform hover:scale-110 transition-transform hover:shadow-2xl hover:rotate-3 hover:translate-x-1 hover:translate-y-1"
          />
          <span className="text-gray-800 font-bold mx-4 text-sm uppercase tracking-wide hover:text-yellow-900  cursor-pointer transform hover:rotate-3 hover:scale-110 transition-transform">
            Docker
          </span>
        </div>
      </div>
      <div className="container mx-auto mb-10 px-4 flex flex-wrap justify-center items-center">
        <div className="flex flex-col items-center mb-6 mx-6 rounded-lg shadow-2xl shadow-black">
          <h1 className="text-3xl p-6 font-bold text-gray-800 tracking-wide leading-tight text-center">
            Web Backend
          </h1>
        </div>

        <div className="flex flex-col items-center mb-6 mx-6 rounded-lg shadow-2xl shadow-black">
          <img
            src={nodejs}
            alt="JavaScript"
            className="w-12 h-12  m-2 rounded-md transform hover:scale-110 transition-transform hover:shadow-2xl hover:rotate-3 hover:translate-x-1 hover:translate-y-1"
          />
          <span className="text-gray-800 font-bold mx-4 text-sm uppercase tracking-wide hover:text-yellow-900  cursor-pointer transform hover:rotate-3 hover:scale-110 transition-transform">
            Node js
          </span>
        </div>
        <div className="flex flex-col items-center mb-6 mx-6 rounded-lg shadow-2xl shadow-black">
          <img
            src={expressJs}
            alt="JavaScript"
            className="w-12 h-12  m-2 rounded-md transform hover:scale-110 transition-transform hover:shadow-2xl hover:rotate-3 hover:translate-x-1 hover:translate-y-1"
          />
          <span className="text-gray-800 font-bold mx-4 text-sm uppercase tracking-wide hover:text-yellow-900  cursor-pointer transform hover:rotate-3 hover:scale-110 transition-transform">
            Express js
          </span>
        </div>
        <div className="flex flex-col items-center mb-6 mx-6 rounded-lg shadow-2xl shadow-black">
          <img
            src={django}
            alt="JavaScript"
            className="w-12 h-12  m-2 rounded-md transform hover:scale-110 transition-transform hover:shadow-2xl hover:rotate-3 hover:translate-x-1 hover:translate-y-1"
          />
          <span className="text-gray-800 font-bold mx-4 text-sm uppercase tracking-wide hover:text-yellow-900  cursor-pointer transform hover:rotate-3 hover:scale-110 transition-transform">
            Django
          </span>
        </div>
      </div>
    </section>
  );
};
