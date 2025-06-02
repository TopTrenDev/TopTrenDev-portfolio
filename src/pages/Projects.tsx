/*
   Copyright (C), 2023-2025, Marek Dvojak
   Author: Marek Dvojak
   FileName: Projects.tsx
   Version: 2.3.0
   Creation: 02/06/2023
   Last modification: 27/04/2025
*/

import Works from "../components/ProjectCards";
import SectionTitle from "../components/SectionTitle";

const Projects = () => {
  return (
    <div className="w-full flex justify-center" id="projects">
      <div className="w-full xl:w-[70%] flex flex-col pb-16">
        <div className="w-full ">
          <SectionTitle title="PROJECTS" subtitle="What I have done so far" />
        </div>
        <Works />
      </div>
    </div>
  );
};

export default Projects;

