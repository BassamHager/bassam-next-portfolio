import React from "react";
import Image from "next/image";

const projects = () => {
  return (
    <div className="w-full ">
      <div className="w-max[1240] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest text-[#5651e5] ">projects</p>
        <h2 className="py-4  ">What I've Built </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative flex justify-center items-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[blue] to-[red]">
            {/* <Image src={} alt='project image' /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default projects;
