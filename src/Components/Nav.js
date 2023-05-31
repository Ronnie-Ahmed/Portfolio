import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { AiOutlineHome } from "react-icons/ai";
import { GiSkills } from "react-icons/gi";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { GrServices } from "react-icons/gr";
import { GrContactInfo } from "react-icons/gr";

export const Nav = () => {
  return (
    <div className="fixed top-0 left-0 w-full p-4 flex flex-wrap justify-center items-center backdrop-filter backdrop-blur-sm">
      <div className="border border-white border-opacity-50 px-2 py-1 rounded-md shadow-md hover:shadow-2xl shadow-slate-50 hover:-translate-y-1 transition-all duration-300 m-1">
        <Link
          to="aboutme"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="font-bold"
        >
          <button>
            <AiOutlineHome className="inline-block mr-2 mb-1 text-2xl" />
            <span className="text-white">Me</span>
          </button>
        </Link>
      </div>
      <div className="border border-white border-opacity-50 px-2 py-1 rounded-md shadow-md hover:shadow-2xl shadow-slate-50 hover:-translate-y-1 transition-all duration-300 m-1">
        <Link
          to="experience"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="font-bold"
        >
          <button>
            <GiSkills className="inline-block mr-2 mb-1 text-2xl" />{" "}
            <span className="text-white">Skills</span>
          </button>
        </Link>
      </div>
      <div className="border border-white border-opacity-50 px-2 py-1 rounded-md shadow-md hover:shadow-2xl shadow-slate-50 hover:-translate-y-1 transition-all duration-300 m-1">
        <Link
          to="services"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="font-bold"
        >
          <button>
            <GrServices className="inline-block mr-2 mb-1 text-2xl" />{" "}
            <span className="text-white">Services</span>
          </button>
        </Link>
      </div>
      <div className="border border-white border-opacity-50 px-2 py-1 rounded-md shadow-md hover:shadow-2xl shadow-slate-50 hover:-translate-y-1 transition-all duration-300 m-1">
        <Link
          to="work"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="font-bold"
        >
          <button>
            <AiOutlineFundProjectionScreen className="inline-block mr-2 mb-1 text-2xl" />{" "}
            <span className="text-white">Projects</span>
          </button>
        </Link>
      </div>
      {/* <div className="border border-white border-opacity-50 px-2 py-1 rounded-md shadow-md hover:shadow-2xl shadow-slate-50 hover:-translate-y-1 transition-all duration-300 m-1">
        <Link
          to="testimonials"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="font-bold"
        >
          <button className="text-white">Testimonials</button>
        </Link>
      </div> */}
      <div className="border border-white border-opacity-50 px-2 py-1 rounded-md shadow-md hover:shadow-2xl shadow-slate-50 hover:-translate-y-1 transition-all duration-300 m-1">
        <Link
          to="contactme"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="font-bold"
        >
          <button>
            <GrContactInfo className="inline-block mr-2 mb-1 text-2xl" />{" "}
            <span className="text-white">Contact Me</span>
          </button>
        </Link>
      </div>
      {/* Add similar Link components for other sections */}
    </div>
  );
};
