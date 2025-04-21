import React from 'react';
import { BsGithub } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";
import { Link } from 'react-router-dom';

const ProjectsCard = ({ title, des, src, link, git }) => {
  return (
    <div className="w-full p-4 rounded-lg shadow-shadowOne bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:to-gray-900 transition-colors duration-1000">
      <div className="overflow-hidden rounded-lg aspect-video mb-4">
        <img
          className="w-full h-full object-cover object-center group-hover:scale-110 duration-300 cursor-pointer"
          src={src}
          alt={title}
        />
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-designColor group-hover:text-white duration-300">
            {title}
          </h3>
          <div className="flex gap-3">
            <Link to={git} className="project-icon-link">
              <span className="project-icon">
                <BsGithub />
              </span>
            </Link>
            <Link to={link} className="project-icon-link">
              <span className="project-icon">
                <FaGlobe />
              </span>
            </Link>
          </div>
        </div>
        <p className="text-sm text-gray-300 group-hover:text-gray-100 duration-300">
          {des}
        </p>
      </div>
    </div>
  );
}

export default ProjectsCard;