import React from "react";

export const ProjectCard = ({
  title,
  description,
  githubLink,
  imageSrc,
  Live,
}) => {
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
        <p className="font-bold  bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-clip-text text-transparent rounded-lg optimicy-40 mb-4 backdrop-filter backdrop-blur-lg">
          {description}
        </p>

        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gradient-to-r from-blue-500 via-gray-500 to-blue-600 bg-opacity-70 text-white px-4 py-2 rounded-md shadow-md hover:shadow-lg transition-all duration-300 transform-gpu hover:scale-105 hover:rotate-3 hover:translate-y-[-2px] backdrop-filter backdrop-blur-lg"
        >
          View on GitHub
        </a>
        {Live && (
          <a
            href={Live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block ml-20 bg-gradient-to-r m-2 from-blue-500 via-gray-500 to-blue-600 bg-opacity-70 text-white px-4 py-2 rounded-md shadow-md hover:shadow-lg transition-all duration-300 transform-gpu hover:scale-105 hover:rotate-3 hover:translate-y-[-2px] backdrop-filter backdrop-blur-lg"
          >
            Live
          </a>
        )}
      </div>
    </div>
  );
};
