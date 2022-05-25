import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

function Main() {
  return (
    <div className={mainWrap}>
      <div className={mainInnerContainer}>
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            Let's Build an Awesome APP together!
          </p>

          <h1 className="py-4 text-gray-700">
            Hi, I'm <span className="text-[#5651e5]">Bassam</span>
          </h1>

          <h1>A Front-End Web Developer</h1>

          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            Specializing in building digital experiences. Currently, I'm focused
            on building responsive front-end web applications while learning
            back-end technologies.
          </p>

          {/* social icons */}
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            {/* linkedIn */}
            <div className={socialIconStyle}>
              <FaLinkedinIn />
            </div>
            {/* github */}
            <div className={socialIconStyle}>
              <FaGithub />
            </div>
            {/* mail */}
            <div className={socialIconStyle}>
              <AiOutlineMail />
            </div>
            {/* person fill */}
            <div className={socialIconStyle}>
              <BsFillPersonLinesFill />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// styles
const mainWrap = "w-full h-screen text-center";
const mainInnerContainer =
  "max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center";
const socialIconStyle =
  "rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300";

export default Main;
