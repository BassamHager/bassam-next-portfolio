import React from "react";

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
          <p>
            Specializing in building digital experiences. Currently, I'm focused
            on building responsive front-end web applications while learning
            back-end technologies.
          </p>
        </div>
      </div>
    </div>
  );
}

// styles
const mainWrap = "w-full h-screen text-center";
const mainInnerContainer =
  "max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center";

export default Main;
