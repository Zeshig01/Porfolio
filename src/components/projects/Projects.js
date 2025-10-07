// // import React from 'react'
// // import Title from '../layouts/Title'
// // import { projectOne, projectTwo, projectThree, projectFour,projectFive,projectSix } from "../../assets/index";
// // import ProjectsCard from './ProjectsCard';

// // const Projects = () => {
// //   return (
// //     <section
// //       id="projects"
// //       className="w-full py-20 border-b-[1px] "
// //     >
// //       <div className="flex justify-center items-center text-center">
// //         <Title
// //           title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
// //           des="My Projects"
// //         />
// //       </div>
// //       <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        
// //         <ProjectsCard
// //           title="CryptoVerse Web"
// //           des="I created the CryptoVerse website to provide a sleek, responsive platform for showcasing crypto-related services and updates. It features modern UI/UX, real-time data integration, and a seamless user experience tailored for the crypto community."
// //           src={projectOne}
// //           link= 'https://cryptoverse-ai.com/'
// //           git='https://github.com/Zeshig01/SurgicalWeb'
// //         />

// //         <ProjectsCard
// //           title="Admin Panal"
// //           des="I created a comprehensive admin panel for managing user information, attendance tracking, and detailed salary reports. This system ensures efficient employee data handling and payroll management."
// //           src={projectTwo}
// //           link= 'https://admin-panal-nine.vercel.app/'
// //           git='https://github.com/Zeshig01/Admin_Panal'
// //         />

// //         <ProjectsCard
// //           title="Zocean Solution"
// //           des=" I developed a professional website for the company to enhance its online presence and showcase its services. The site is user-friendly, responsive, and designed to attract and engage potential clients."
// //           src={projectThree}
// //           link= 'https://zocean.vercel.app/'
// //           git='https://github.com/Zeshig01/newone'
// //         />
// //         <ProjectsCard
// //           title="OrbitX"
// //           des=" In the NASA Space Hackathon, we developed an innovative project focused on utilizing AI-driven models to analyze space data for enhanced exploration and navigation. Our approach aims to optimize resource management and decision-making for future space missions."
// //           src={projectFour}
// //           link= 'https://orbit-x.vercel.app/'
// //           git='https://github.com/Zeshig01/Eziline'
// //         />
// //         <ProjectsCard
// //           title="SiteBuilder"
// //           des="It leverages AI to generate and display code snippets instantly using the Together AI LLaMA API and HELICONE API. The application also includes a sandbox feature that allows users to easily transfer code into a live editor, saving valuable time during development."
// //           src={projectFive}
// //           link= 'https://zeshi-the-brand.vercel.app/'
// //           git='https://github.com/Zeshig01/Eziline'
// //         />
// //         <ProjectsCard
// //           title="Intervuo"
// //           des="This is an AI-powered interviewer bot developed by Team Pathfinder to revolutionize the recruitment process. Our bot conducts interviews autonomously, providing a consistent and efficient way to assess candidates without human intervention."
// //           src={projectSix}
// //           link= 'https://voca-mind.vercel.app/'
// //           git='https://github.com/Zeshig01/Eziline'
// //         />
// //       </div>
// //     </section>
// //   );
// // }

// // export default Projects

// import React from "react";
// import Title from "../layouts/Title";
// import {
//   projectOne,
//   projectTwo,
//   projectThree,
//   projectFour,
//   projectFive,
//   projectSix,
//   projectSeven,
//   projectEight,
//   projectNine,
//   projectTen,
//   projectEleven,
//   projectTwelve,
//   projectThirteen,
//   projectFourteen,
//   projectFifteen,
//   projectSixteen,
// } from "../../assets/index";
// import ProjectsCard from "./ProjectsCard";

// const Projects = () => {
//   // List of all project data (only image + links)
//   const projects = [
//     { src: projectOne, link: "https://cryptoverse-ai.com/", git: "https://github.com/Zeshig01/SurgicalWeb" },
//     { src: projectTwo, link: "https://admin-panal-nine.vercel.app/", git: "https://github.com/Zeshig01/Admin_Panal" },
//     { src: projectThree, link: "https://zocean.vercel.app/", git: "https://github.com/Zeshig01/newone" },
//     { src: projectFour, link: "https://orbit-x.vercel.app/", git: "https://github.com/Zeshig01/Eziline" },
//     { src: projectFive, link: "https://zeshi-the-brand.vercel.app/", git: "https://github.com/Zeshig01/Eziline" },
//     { src: projectSix, link: "https://voca-mind.vercel.app/", git: "https://github.com/Zeshig01/Eziline" },
//     { src: projectSeven, link: "#", git: "#" },
//     { src: projectEight, link: "#", git: "#" },
//     { src: projectNine, link: "#", git: "#" },
//     { src: projectTen, link: "#", git: "#" },
//     { src: projectEleven, link: "#", git: "#" },
//     { src: projectTwelve, link: "#", git: "#" },
//     { src: projectThirteen, link: "#", git: "#" },
//     { src: projectFourteen, link: "#", git: "#" },
//     { src: projectFifteen, link: "#", git: "#" },
//     { src: projectSixteen, link: "#", git: "#" },
//   ];

//   return (
//     <section id="projects" className="w-full py-20 border-b border-gray-700">
//       {/* Section Title */}
//       <div className="flex justify-center items-center text-center mb-10">
//         <Title
//           title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
//           des="My Projects"
//         />
//       </div>

//       {/* Project Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-10">
//         {projects.map((project, index) => (
//           <ProjectsCard
//             key={index}
//             src={project.src}
//             link={project.link}
//             git={project.git}
//           />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Projects;

import React, { useState } from "react";
import Title from "../layouts/Title";
import {
  projectOne,
  projectTwo,
  projectThree,
  projectFour,
  projectFive,
  projectSix,
  projectSeven,
  projectEight,
  projectNine,
  projectTen,
  projectEleven,
  projectTwelve,
  projectThirteen,
  projectFourteen,
  projectFifteen,
  projectSixteen,
} from "../../assets/index";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  // All your projects here
  const projects = [
    { src: projectOne, link: "https://cryptoverse-ai.com/", git: "https://github.com/Zeshig01/SurgicalWeb" },
    { src: projectTwo, link: "https://admin-panal-nine.vercel.app/", git: "https://github.com/Zeshig01/Admin_Panal" },
    { src: projectThree, link: "https://zocean.vercel.app/", git: "https://github.com/Zeshig01/newone" },
    { src: projectFour, link: "https://orbit-x.vercel.app/", git: "https://github.com/Zeshig01/Eziline" },
    { src: projectFive, link: "https://zeshi-the-brand.vercel.app/", git: "https://github.com/Zeshig01/Eziline" },
    { src: projectSix, link: "https://voca-mind.vercel.app/", git: "https://github.com/Zeshig01/Eziline" },
    { src: projectSeven, link: "#", git: "#" },
    { src: projectEight, link: "#", git: "#" },
    { src: projectNine, link: "#", git: "#" },
    { src: projectTen, link: "#", git: "#" },
    { src: projectEleven, link: "#", git: "#" },
    { src: projectTwelve, link: "#", git: "#" },
    { src: projectThirteen, link: "#", git: "#" },
    { src: projectFourteen, link: "#", git: "#" },
    { src: projectFifteen, link: "#", git: "#" },
    { src: projectSixteen, link: "#", git: "#" },
  ];

  // Show only first 6 or all
  const visibleProjects = showAll ? projects : projects.slice(0, 6);

  return (
    <section id="projects" className="w-full py-20 border-b border-gray-700">
      {/* Section Title */}
      <div className="flex justify-center items-center text-center mb-10">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-10 transition-all duration-500">
        {visibleProjects.map((project, index) => (
          <ProjectsCard
            key={index}
            src={project.src}
            link={project.link}
            git={project.git}
          />
        ))}
      </div>

      {/* See More / Show Less Button */}
      <div className="flex justify-center mt-10">
        <button
          onClick={() => setShowAll(!showAll)}
          className="bg-gradient-to-r from-blue-600 to-indigo-500 hover:from-blue-700 hover:to-indigo-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
        >
          {showAll ? "Show Less" : "See More"}
        </button>
      </div>
    </section>
  );
};

export default Projects;
