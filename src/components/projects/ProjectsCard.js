// // // import React from 'react';
// // // import { BsGithub } from "react-icons/bs";
// // // import { FaGlobe } from "react-icons/fa";
// // // import { Link } from 'react-router-dom';

// // // const ProjectsCard = ({ title, des, src, link, git }) => {
// // //   return (
// // //     <div className="w-full bg-gradient-to-br from-[var(--bg-primary)] to-[var(--bg-secondary)] bg-opacity-90 backdrop-blur-md  p-4 rounded-lg shadow-shadowOne group  transition-colors duration-1000">
// // //       <div className="overflow-hidden rounded-lg aspect-video mb-4">
// // //         <img
// // //           className="w-full h-full object-cover object-center group-hover:scale-110 duration-300 cursor-pointer"
// // //           src={src}
// // //           alt={title}
// // //         />
// // //       </div>
// // //       <div className="flex flex-col gap-4">
// // //         <div className="flex items-center justify-between">
// // //           <h3 className="text-lg font-semibold text-designColor group-hover:text-white duration-300">
// // //             {title}
// // //           </h3>
// // //           <div className="flex gap-3">
// // //             <Link to={git} className="project-icon-link">
// // //               <span className="project-icon">
// // //                 <BsGithub />
// // //               </span>
// // //             </Link>
// // //             <Link to={link} className="project-icon-link">
// // //               <span className="project-icon">
// // //                 <FaGlobe />
// // //               </span>
// // //             </Link>
// // //           </div>
// // //         </div>
// // //         <p className="text-sm  duration-300">
// // //           {des}
// // //         </p>
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // export default ProjectsCard;
// // import { BsGithub } from "react-icons/bs";
// // import { FaGlobe } from "react-icons/fa";

// // const ProjectsCard = ({ title, des, src, link, git }) => {
// //   return (
// //     <a
// //       href={link}
// //       target="_blank"
// //       rel="noreferrer"
// //       className="group block w-full bg-gradient-to-br from-[var(--bg-primary)] to-[var(--bg-secondary)] bg-opacity-90 backdrop-blur-md p-4 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 cursor-pointer"
// //     >
// //       {/* Project Preview */}
// //       <div className="overflow-hidden rounded-lg mb-4 relative aspect-[16/9]">
// //         <img
// //           src={src}
// //           alt={title}
// //           className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
// //         />

// //         {/* Overlay Icons */}
// //         <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center gap-6">
// //           <a
// //             href={git}
// //             target="_blank"
// //             rel="noreferrer"
// //             className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 border border-white/30 text-white text-lg hover:bg-white/40 transition"
// //             onClick={(e) => e.stopPropagation()}
// //           >
// //             <BsGithub />
// //           </a>
// //           <a
// //             href={link}
// //             target="_blank"
// //             rel="noreferrer"
// //             className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 border border-white/30 text-white text-lg hover:bg-white/40 transition"
// //             onClick={(e) => e.stopPropagation()}
// //           >
// //             <FaGlobe />
// //           </a>
// //         </div>
// //       </div>

      
// //     </a>
// //   );
// // };

// // export default ProjectsCard;



// const ProjectsCard = ({ src, link }) => {
//   return (
//     <a
//       href={link}
//       target="_blank"
//       rel="noreferrer"
//       className="group block w-full bg-[var(--bg-primary)] rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-2 cursor-pointer overflow-hidden border border-[var(--border-color, #e5e7eb)]"
//     >
//       {/* Project Preview */}
//       <div className="relative aspect-[16/9] overflow-hidden">
//         <img
//           src={src}
//           alt="Project preview"
//           className="w-full h-full object-cover object-center transition-transform duration-400 group-hover:scale-110"
//         />

//         {/* Overlay Icons */}
//         <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
         
//           <a
//             href={link}
//             target="_blank"
//             rel="noreferrer"
//             className="pl-4 pr-4 pt-2 pb-2 rounded text-white bg-black transition-colors duration-200"
//             onClick={(e) => e.stopPropagation()}
//             aria-label="Visit project website"
//           >
//             {/* <FaGlobe className="text-lg" /> */}
//             Visit 
//           </a>
//         </div>
//       </div>
//     </a>
//   );
// };

// export default ProjectsCard;

import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const ProjectsCard = ({ src, link, git }) => {
  return (
    <div className="group relative w-full rounded-2xl overflow-hidden bg-[var(--bg-primary)] border border-[var(--border-color,#e5e7eb)] hover:bg-gradient-to-r from-gray-700 to-gray-900 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-500 cursor-pointer">
      
      {/* Project Image */}
      <div className="relative aspect-[16/9] overflow-hidden">
        <img
          src={src}
          alt="Project preview"
          className="w-full h-full object-cover object-center transition-transform duration-700 ease-in-out group-hover:scale-110"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        {/* Buttons Overlay */}
        <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-2 bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-800 hover:to-black text-white font-medium px-5 py-2.5 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            >
              <FaExternalLinkAlt className="text-sm" />
              Visit
            </a>
          )}

         
        </div>
      </div>

      {/* Project Hover Border Glow */}
      <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-500/70 transition-all duration-500"></div>
    </div>
  );
};

export default ProjectsCard;
