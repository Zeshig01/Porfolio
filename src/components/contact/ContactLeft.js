import React from 'react'

import { contactImg } from "../../assets/index";
import { Link } from "react-router-dom";
import { FaLinkedinIn, FaDiscord, FaGithub } from "react-icons/fa";
const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Muhammad Zeeshan Ashraf</h3>
        <p className="text-lg font-normal text-gray-400">
          Front-end Developer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
        Software Engineer ¶ Front-end Doctor ¶ Next Specialist ¶ MERN Developer
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+92 33174652685</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">zeshig01@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
         
          <Link to="https://github.com/zeshig01" target="_blank">
            {" "}
            <span className="bannerIcon">
              <FaGithub />
            </span>
          </Link>
          <Link
            to="https://www.linkedin.com/in/muhammad-zeeshan-ashraf-a3b99a30a"
            target="_blank"
          >
            {" "}
            <span className="bannerIcon">
              <FaLinkedinIn />
            </span>
          </Link>
          
        </div>
      </div>
    </div>
  );
}

export default ContactLeft