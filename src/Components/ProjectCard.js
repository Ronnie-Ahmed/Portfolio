import React from "react";

export const ProjectCard = ({ title, description, githubLink, imageSrc }) => {
  return (
    <div className="relative rounded-lg shadow-lg p-6">
      <div
        className="absolute top-0 left-0 w-full h-full rounded-lg"
        style={{
          backgroundImage: `url(${imageSrc})`,
          filter: "blur(8px)",
        }}
      ></div>
      <div className="relative">
        <div className="mb-4">
          <div className="mb-4 relative group">
            <img
              src={imageSrc}
              alt={title}
              className="w-full h-auto rounded-lg shadow-lg object-cover transition-all duration-300 transform-gpu group-hover:scale-105 group-hover:rotate-3 group-hover:translate-y-[-2px] hover:shadow-xl cursor-pointer"
              onClick="this.classList.toggle('zoom-in');"
            />
          </div>
        </div>
        <h3 className="text-2xl font-bold mb-2 text-white">{title}</h3>
        <p className="font-bold text-black mb-4">{description}</p>
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          class="inline-block bg-gradient-to-r from-blue-500 via-gray-500 to-blue-600 bg-opacity-70 text-white px-4 py-2 rounded-md shadow-md hover:shadow-lg transition-all duration-300 transform-gpu hover:scale-105 hover:rotate-3 hover:translate-y-[-2px] backdrop-filter backdrop-blur-lg"
        >
          View on GitHub
        </a>
      </div>
    </div>
  );
};
