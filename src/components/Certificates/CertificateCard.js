import React from 'react';
import { FaExternalLinkAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';

const CertificateCard = ({ id, title, des, src }) => {
  return (
    <div className="w-full p-4 rounded-lg shadow-shadowOne bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:to-gray-900 transition-colors duration-1000">
      <div className="overflow-hidden rounded-lg mb-4">
        <img
          className="w-full h-auto object-contain group-hover:scale-105 duration-300 cursor-pointer"
          src={src}
          alt={title}
        />
        
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-designColor group-hover:text-white duration-300">
            {title}
          </h3>
          <Link to={`/certificates/${id}`}>
            <span className="certificate-icon">
              <FaExternalLinkAlt />
            </span>
          </Link>
        </div>
        <p className="text-sm text-gray-300 group-hover:text-gray-100 duration-300">
          {des}
        </p>
      </div>
    </div>
  );
}

export default CertificateCard;