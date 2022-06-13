import React from "react";
import Image from "next/image";

const ProjectCard = ({ imgURL, projectTitle, projectDesc }) => {
  const justifyDescription = (text) =>
    text?.split("").splice(0, 150).join("") + "...";

  return (
    <div className="project-card shadow-sm hover:shadow-xl hover:scale-105 ease-in duration-300 m-4 w-1/3 cursor-pointer text-center hover:bg-gradient-to-r from-[blue] to-[purple] h-full hover:text-[#ccc] rounded-md max-w-xs bg-gray-500 min-h-[400px] min-w-[400px] p-4 project-title-hover">
      <div className="image-wrapper grid ">
        <Image
          src={imgURL}
          alt="project image"
          height="300"
          width="600"
          // layout="fill"
          objectFit="contain"
          className="rounded-md min-w-[500px]"
        />
      </div>
      <div className="project-card-body">
        <h4 className="">{projectTitle}</h4>
        <p className="text-justify p-3 ">{justifyDescription(projectDesc)}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
