import React from "react";
import SkillCard from "../atoms/SkillCard";
// icons
import {
  SiHtml5,
  SiCsswizardry,
  SiReact,
  SiVuedotjs,
  SiNuxtdotjs,
  SiJavascript,
  SiTypescript,
  SiCsharp,
} from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/Tb";

const Skills = () => {
  return (
    <div className="w-full lg:h-screen p-2">
      <div className="max-w[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest text-[#5651e5]">skills</p>
        <h2 className="py-4 ">What Can I Do</h2>
        <div className="flex flex-wrap">
          <SkillCard IconName={SiHtml5} skill="HTML" />
          <SkillCard IconName={SiCsswizardry} skill="CSS" />
          <SkillCard IconName={SiJavascript} skill="JS" />
          <SkillCard IconName={SiTypescript} skill="TS" />
          <SkillCard IconName={SiCsharp} skill="C#" />
          <SkillCard IconName={FaNode} skill="NODE" />
          <SkillCard IconName={SiReact} skill="REACT" />
          <SkillCard IconName={TbBrandNextjs} skill="NEXT" />
          <SkillCard IconName={SiVuedotjs} skill="VUE" />
          <SkillCard IconName={SiNuxtdotjs} skill="NUXT" />
          {/* langs, libs, tools, soft, platforms, others, cat by domain (BE - FE - DB) */}
        </div>
      </div>
    </div>
  );
};

export default Skills;
