// src/pages/Portfolio.tsx
import React from "react";
import "../../styles/global.css";
import DisplayProjects from "../../Components/projects/DisplayProjects";

const Projects = () => {
  return (
    <div className="container">
      <div className="grid grid-cols-2">
        <div>
          <h1 className="font40 text-powderblue font-extrabold">Hello</h1>
        </div>
        <div>
          <h1 className="font40 text-powderblue font-extrabold">Hello</h1>
        </div>
      </div>
      <DisplayProjects />
    </div>
  );
};

export default Projects;
