import React from "react";

import image2 from "../assets/Ronnie2.jpg";
import {
  FaInstagram,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";

export const Aboutme = () => {
  return (
    <section
      id="aboutme"
      className="py-20 mt-6 bg-gray-400 rounded-2xl shadow-md hover:shadow-2xl shadow-slate-50"
    >
      <div className="container mx-auto px-4 ">
        <div className="flex flex-col md:flex-row justify-evenly">
          <div className="md:w-2/3 flex flex-col justify-center items-center">
            <div className="text-center">
              <h1 className="text-3xl mb-10 font-bold text-gray-800 tracking-wide leading-tight">
                Assalamu Alaikum
              </h1>
              <p className="text-6xl mb-4 italic text-gray-600">
                I'm Ronnie Ahmed
              </p>
              <p className="text-2xl text-gray-700">Blockchain Developer</p>
            </div>
            <div className="flex justify-center mt-4">
              <button className="mr-2 px-4 py-2 rounded-md bg-gradient-to-r from-blue-500 to-blue-700 text-white hover:bg-gradient-to-r hover:from-blue-700 hover:to-blue-900 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://drive.google.com/file/d/1nzgtXfMnd3p9gKNIbbUhm8cJ0Dm5uact/view?usp=sharing"
                  download
                >
                  View Resume
                </a>
              </button>

              <button className="px-4 py-2 rounded-md bg-gradient-to-r from-gray-500 to-gray-700 text-white hover:bg-gradient-to-r hover:from-gray-700 hover:to-gray-900 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <a href="#contactme">Contact Me</a>
              </button>
            </div>
            <div className="flex justify-center mt-4">
              {/* <div>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.facebook.com/profile.php?id=100055837221296"
                  className="hover:underline text-black-300 hover:text-black-100"
                >
                  <FaFacebook className="inline-block mr-2 mb-1 text-2xl" />
                </a>
              </div> */}
              <div>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/Ronnie-Ahmed"
                  className="hover:underline text-black-300 hover:text-black-100"
                >
                  <FaGithub className="inline-block mr-2 mb-1 text-2xl" />
                </a>
              </div>
              {/* <div>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.instagram.com/raisul_ronnie/"
                  className="hover:underline text-black-300 hover:text-black-100"
                >
                  <FaInstagram className="inline-block mr-2 mb-1 text-2xl" />
                </a>
              </div> */}
              <div>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/ronnie-ahmed-a059a7291/"
                  className="hover:underline text-black-300 hover:text-black-100"
                >
                  <FaLinkedin className="inline-block mr-2 mb-1 text-2xl" />
                </a>
              </div>
              <div>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://wa.link/ur2yll"
                  className="hover:underline text-black-300 hover:text-black-100"
                >
                  <FaWhatsapp className="inline-block mr-2 mb-1 text-2xl" />
                </a>
              </div>
            </div>
          </div>

          <div className="md:w-1/3">
            <img
              src={image2}
              alt="Profile"
              className="w-full h-auto mb-2 p-4 shadow-xl shadow-white border-none rounded-full transform hover:scale-110 transition-transform object-cover"
              style={{
                borderRadius: "50%",
                aspectRatio: "1/1",
                boxShadow:
                  "0px 2px 10px rgba(0, 0, 0, 0.2), 0px 4px 20px rgba(0, 0, 0, 0.2)",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
