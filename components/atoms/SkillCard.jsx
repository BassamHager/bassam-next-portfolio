import React from "react";

const SkillCard = ({ IconName, skill }) => {
  return (
    <div className="grid place-items-center border w-1/3 p-6 shadow-xl hover:scale-105 ease-in duration-300 m-6">
      <div className="">
        <IconName color="blue" size="64" />
      </div>
      <div className="">
        <h3>{skill}</h3>
      </div>
    </div>
  );
};

export default SkillCard;
