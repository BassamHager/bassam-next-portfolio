import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-1 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>

          <h2 className="py-4">Who I Am</h2>

          <p className="py-2 to-gray-600">
            I've been working previously as an inspector in Dubai Municipality &
            believe me, that was so fun to continue living with. However, I've
            been also having an undescribable & unjustifiable passion towards IT
            & programming at the same time!
          </p>

          <strong>Oct 2017</strong>

          <p>
            A twist happened led us, <a href="/"> Dua</a> (my lovely wife) & I
            to the Netherlands as refugees
          </p>

          <p>
            Thankfully in 2018, we've enrolled ourselves in a coding school
            <a href="/">HYF</a> & we've graduated afterwards in 2019 to start
            our journeys as an IT family 😁
          </p>

          <div className="w-full h-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300 ">
            <Image
              src="/../public/assets/images/BH.jpeg"
              alt="Bassam in the office"
              className="rounded-xl"
              width="200"
              height="200"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
