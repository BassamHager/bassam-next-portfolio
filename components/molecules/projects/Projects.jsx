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
            projectDesc="Simple React.js app, using tvmaze API, the state managed using React Context API, this app lets the user views a few lists of TV shows based on different genres. Each list has a few popular TV shows based on their rating. Clicking a TV show card shall display a new screen with the details of the clicked show."
          />
          <ProjectCard
            imgURL="/../public/assets/images/projects/dev_connector_19.jpg"
            projectTitle="dev_connector_19"
            projectDesc="HackYourSocial is a full-stack social network web application built with the MERN stack. :bowtie:
            Please click to view HackYourSocial ✌️
            HackYourSocial allows developers to interact with each other by creating profiles showing their skills, education, experiences and enables others to get accesses to their other social media and github, also enables them to share posts, comments, likes and other types of content. 👍"
          />
          <ProjectCard
            imgURL="/../public/assets/images/projects/EthSwap.jpg"
            projectTitle="EthSwap"
            projectDesc="Is a Cryptocurrency Exchange app for Blockchain - PT 1
            DEPENDENCIES
            * Node.js: https://nodejs.org/en/
            * Ganache: https://www.trufflesuite.com/ganache
            * Truffle: https://www.trufflesuite.com/
            * Metamask:
            RESOURCES
            * Starter Kit: https://github.com/dappuniversity/sta...
            * ERC-20 Standard: https://github.com/ethereum/EIPs/blob..."
          />
          <ProjectCard
            imgURL="/../public/assets/images/projects/tv-show-finder.jpg"
            projectTitle="tv-show-finder"
            projectDesc="It's a responsive web app, built with the following Js-stack:
            - API: REST
            - Frontend: Vue.js scaffolded with Vite
            - State Management Solution: Pinia
            - Style: SCSS-Tailwinds
            - Routing: Vue-router"
          />
          <ProjectCard
            imgURL="/../public/assets/images/projects/college_football_mws_ta.jpg"
            projectTitle="college_football_mws_ta"
            projectDesc="This project was bootstrapped with Create React App. It starts in a login page which makes use of a 6 digit code (numeral password) to enter the application. Then, homepage displays a grid of clickable cards (school-teams). Each card has the school team name & its logo. Clicking a card should route to a new screen (teamDetails) with the details of the clicked team where user can see (TeamDetails) the upcoming & previous games of the clicked team."
          />
          <ProjectCard
            imgURL="/../public/assets/images/projects/max_place_sharer.jpg"
            projectTitle="max_place_sharer"
            projectDesc="It's a responsive web app, built with the following Js-stack:
            Backend: Node
            API: REST
            Frontend: React (hooks)
            State Management Solution: Context-api
            Style: css3
            Forms: customized hook
            Routing: React-router"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
