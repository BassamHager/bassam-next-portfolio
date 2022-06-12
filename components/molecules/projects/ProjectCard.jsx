import React from "react";
import Image from "next/image";

const ProjectCard = ({ imgURL, projectTitle, projectDesc }) => {
  return (
    <div className="project-card hover:shadow-xl hover:scale-105 transition-all ease-in-out duration-300 m-4 w-1/3 cursor-pointer text-center">
      <div className="image-wrapper grid ">
        <Image src={imgURL} alt="project image" height="300" width="600" />
      </div>
      <div className="project-card-body">
        <h4 className="">{projectTitle}</h4>
        <p>{projectDesc}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
