import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div className="w-full">
      <div className="w-max[1240] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest text-[#5651e5] ">projects</p>
        <h2 className="py-4  ">What I've Built </h2>

        <div className="projects w-11/12 m-auto flex flex-wrap justify-center">
          <ProjectCard
            imgURL="/../public/assets/images/projects/abn_amro_tech_assignment.jpg"
            projectTitle="abn_amro_tech_assignment"
            projectDesc="..."
          />
          <ProjectCard
            imgURL="/../public/assets/images/projects/dev_connector_19.jpg"
            projectTitle="dev_connector_19"
            projectDesc="..."
          />
          <ProjectCard
            imgURL="/../public/assets/images/projects/EthSwap.jpg"
            projectTitle="EthSwap"
            projectDesc="..."
          />
          <ProjectCard
            imgURL="/../public/assets/images/projects/tv-show-finder.jpg"
            projectTitle="tv-show-finder"
            projectDesc="..."
          />
          <ProjectCard
            imgURL="/../public/assets/images/projects/college_football_mws_ta.jpg"
            projectTitle="college_football_mws_ta"
            projectDesc="..."
          />
          <ProjectCard
            imgURL="/../public/assets/images/projects/max_place_sharer.jpg"
            projectTitle="max_place_sharer"
            projectDesc="..."
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
