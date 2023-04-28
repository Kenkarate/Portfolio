import React from "react";
import Card from "./Card";

function Projects() {
  return (
    <div className=" select-none py-20 lg:text-left text-center bg-[#FFF3F1]" id="#projects">
      <div className="lg:px-52 py-20  mb-10" >
        <p className="text-[#DD5D5D]  uppercase text-[1rem] font-bold tracking-wider mb-5">
          Portfolio
        </p>
        <p className="text-3xl text-[#3c5664] px-8">
          Every project is an opportunity to learn, to figure out problems and
          challenges, to invent and reinvent.
        </p>
      </div>
      <Card/>
      
    </div>
  );
}

export default Projects;
