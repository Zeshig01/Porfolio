import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsCodeSlash } from "react-icons/bs";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import { logo } from "../../assets/index";
import { navLinksdata } from "../../constants";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const renderNavLink = ({ _id, title, link }) => {
    if (link.startsWith("/")) {
      // Use RouterLink for paths starting with "/"
      return (
        <RouterLink
          to={link}
          className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
        >
          {title}
        </RouterLink>
      );
    } else {
      // Use ScrollLink for other links (assuming they're for same-page navigation)
      return (
        <ScrollLink
          activeClass="active"
          to={link}
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
        >
          {title}
        </ScrollLink>
      );
    }
  };

  return (
    <div className="w-full h-24 px-10 sticky top-0 z-50 bg-transparent backdrop-blur-md mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600">
      <div className="flex items-center gap-2">
        <img src={logo} alt="logo" className="w-10 h-10 object-contain rounded-full border-[1px] border-gray-700"
        />
        <span className="text-gray-500 font-bold">Zeshi</span>
      </div>
      <div>
        <ul className="hidden mdl:inline-flex items-center gap-6 lg:gap-10">
          {navLinksdata.map((item) => (
            <li key={item._id}>
              {renderNavLink(item)}
            </li>
          ))}
        </ul>
        <span
          onClick={() => setShowMenu(!showMenu)}
          className="text-xl mdl:hidden bg-black w-10 h-10 inline-flex items-center justify-center rounded-full text-designColor cursor-pointer"
        >
          <FiMenu />
        </span>
        {showMenu && (
          <div className="w-[80%] h-screen overflow-scroll absolute top-0 left-0 bg-gray-900 p-4 scrollbar-hide">
            <div className="flex flex-col gap-8 py-2 relative">
              <div>
                <div className="flex items-center gap-2">
                  <img
                    src={logo}
                    alt="logo"
                    className="w-10 h-10 rounded-full border-[1px] border-gray-700"
                  />
                  <span className="text-gray-500 font-bold">INBIO</span>
                </div>
              </div>
              <ul className="flex flex-col gap-4">
                {navLinksdata.map((item) => (
                  <li key={item._id}>
                    {renderNavLink(item)}
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-4">
                <h2 className="text-base uppercase font-titleFont mb-4">
                  Find me in
                </h2>
                <div className="flex gap-4">
                  <a href="https://github.com/zeshig01" target="_blank" rel="noreferrer">
                    <span className="bannerIcon">
                      <FaGithub />
                    </span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/muhammad-zeeshan-ashraf-a3b99a30a"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="bannerIcon">
                      <FaLinkedinIn />
                    </span>
                  </a>
                  
                </div>
              </div>
              <span
                onClick={() => setShowMenu(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-designColor duration-300 text-2xl cursor-pointer"
              >
                <MdClose />
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;