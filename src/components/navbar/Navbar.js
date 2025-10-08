// // import React, { useState } from "react";
// // import { FiMenu } from "react-icons/fi";
// // import { MdClose } from "react-icons/md";
// // import { FaLinkedinIn, FaGithub } from "react-icons/fa";
// // import { Link as ScrollLink } from "react-scroll";
// // import { Link as RouterLink } from "react-router-dom";
// // import { logo } from "../../assets/index";
// // import { navLinksdata } from "../../constants";
// // import { useTheme } from "../../ThemeContext";

// // const Navbar = () => {
// //   const [showMenu, setShowMenu] = useState(false);
// //   const [showDropdown, setShowDropdown] = useState(false);
// //   const { theme, toggleTheme } = useTheme();

// //   const themes = [
// //     { name: "Dark", value: "dark", icon: "🌙" },
// //     { name: "Light", value: "light", icon: "☀️" },
// //     { name: "Blue", value: "blue", icon: "🌀" },
// //     { name: "Green", value: "green", icon: "🌿" },
// //     { name: "Red", value: "red", icon: "🔥" },
// //     { name: "Purple", value: "purple", icon: "💜" },
// //     { name: "Pink", value: "pink", icon: "💖" },
// //     { name: "Teal", value: "teal", icon: "🦋" },
// //     { name: "Yellow", value: "yellow", icon: "🌟" },
// //     { name: "Orange", value: "orange", icon: "🍊" }
// //   ];

// //   const renderNavLink = ({ _id, title, link }) => {
// //     if (link.startsWith("/")) {
// //       return (
// //         <RouterLink
// //           to={link}
// //           className="text-base font-normal text-[var(--text-secondary)] tracking-wide cursor-pointer hover:text-designColor duration-300"
// //         >
// //           {title}
// //         </RouterLink>
// //       );
// //     } else {
// //       return (
// //         <ScrollLink
// //           activeClass="active"
// //           to={link}
// //           spy={true}
// //           smooth={true}
// //           offset={-70}
// //           duration={500}
// //           className="text-base font-normal text-[var(--text-secondary)] tracking-wide cursor-pointer hover:text-designColor duration-300"
// //         >
// //           {title}
// //         </ScrollLink>
// //       );
// //     }
// //   };

// //   return (
// //     <div className="w-full h-24 px-10 sticky top-0 z-50 bg-gradient-to-br from-[var(--bg-primary)] to-[var(--bg-secondary)] bg-opacity-90 backdrop-blur-md  mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-[var(--border-color)]">
// //       <div className="flex items-center gap-2">
// //         <img
// //           src={logo}
// //           alt="logo"
// //           className="w-10 h-10 object-contain rounded-full border-[1px] border-[var(--border-color)]"
// //         />
// //         <span className="text-[var(--text-secondary)] font-bold">Zeshi</span>
// //       </div>
// //       <div>
// //         <ul className="hidden mdl:inline-flex items-center gap-6 lg:gap-10">
// //           {navLinksdata.map((item) => (
// //             <li key={item._id}>{renderNavLink(item)}</li>
// //           ))}
// //         </ul>
// //         <div className="relative hidden mdl:inline-flex items-center ml-6">
// //           <button
// //             onClick={() => setShowDropdown(!showDropdown)}
// //             className="px-4 py-2 bg-[var(--bg-primary)] bg-opacity-50 text-[var(--text-primary)] rounded-full text-sm hover:bg-opacity-70 transition flex items-center gap-2 border border-[var(--border-color)]"
// //           >
// //             <span>Theme: {themes.find((t) => t.value === theme)?.name || "Select"}</span>
// //             <span>{themes.find((t) => t.value === theme)?.icon}</span>
// //           </button>
// //           {showDropdown && (
// //             <div className="absolute top-12 right-0 w-40 bg-[var(--bg-primary)] bg-opacity-90 rounded-md shadow-lg z-50 border border-[var(--border-color)]">
// //               {themes.map((t) => (
// //                 <button
// //                   key={t.value}
// //                   onClick={() => {
// //                     toggleTheme(t.value);
// //                     setShowDropdown(false);
// //                   }}
// //                   className={`w-full text-left px-4 py-2 text-sm text-[var(--text-primary)] hover:bg-[var(--bg-primary)] hover:bg-opacity-70 flex items-center gap-2 ${
// //                     theme === t.value ? "bg-opacity-50" : ""
// //                   }`}
// //                 >
// //                   <span>{t.icon}</span>
// //                   <span>{t.name}</span>
// //                 </button>
// //               ))}
// //             </div>
// //           )}
// //         </div>
// //         <span
// //           onClick={() => setShowMenu(!showMenu)}
// //           className="text-xl mdl:hidden bg-[var(--bg-primary)] bg-opacity-50 w-10 h-10 inline-flex items-center justify-center rounded-full text-designColor cursor-pointer"
// //         >
// //           <FiMenu />
// //         </span>
// //         {showMenu && (
// //           <div className="w-[80%] h-screen overflow-scroll absolute top-0 left-0 bg-[var(--bg-primary)] bg-opacity-90 p-4 scrollbar-hide">
// //             <div className="flex flex-col gap-8 py-2 relative">
// //               <div>
// //                 <div className="flex items-center gap-2">
// //                   <img
// //                     src={logo}
// //                     alt="logo"
// //                     className="w-10 h-10 rounded-full border-[1px] border-[var(--border-color)]"
// //                   />
// //                   <span className="text-[var(--text-secondary)] font-bold">INBIO</span>
// //                 </div>
// //               </div>
// //               <ul className="flex flex-col gap-4">
// //                 {navLinksdata.map((item) => (
// //                   <li key={item._id}>{renderNavLink(item)}</li>
// //                 ))}
// //               </ul>
// //               <div className="flex flex-col gap-4">
// //                 <h2 className="text-base uppercase font-titleFont mb-4 text-[var(--text-primary)]">Theme</h2>
// //                 <div className="flex flex-col gap-2">
// //                   {themes.map((t) => (
// //                     <button
// //                       key={t.value}
// //                       onClick={() => {
// //                         toggleTheme(t.value);
// //                         setShowMenu(false);
// //                       }}
// //                       className={`text-left px-4 py-2 text-sm text-[var(--text-primary)] hover:bg-[var(--bg-primary)] hover:bg-opacity-70 flex items-center gap-2 rounded ${
// //                         theme === t.value ? "bg-opacity-50" : ""
// //                       }`}
// //                     >
// //                       <span>{t.icon}</span>
// //                       <span>{t.name}</span>
// //                     </button>
// //                   ))}
// //                 </div>
// //               </div>
// //               <div className="flex flex-col gap-4">
// //                 <h2 className="text-base uppercase font-titleFont mb-4 text-[var(--text-primary)]">Find me in</h2>
// //                 <div className="flex gap-4">
// //                   <a href="https://github.com/zeshig01" target="_blank" rel="noreferrer">
// //                     <span className="bannerIcon">
// //                       <FaGithub />
// //                     </span>
// //                   </a>
// //                   <a
// //                     href="https://www.linkedin.com/in/muhammad-zeeshan-ashraf-a3b99a30a"
// //                     target="_blank"
// //                     rel="noreferrer"
// //                   >
// //                     <span className="bannerIcon">
// //                       <FaLinkedinIn />
// //                     </span>
// //                   </a>
// //                 </div>
// //               </div>
// //               <span
// //                 onClick={() => setShowMenu(false)}
// //                 className="absolute top-4 right-4 text-[var(--text-secondary)] hover:text-designColor duration-300 text-2xl cursor-pointer"
// //               >
// //                 <MdClose />
// //               </span>
// //             </div>
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Navbar;

// import React, { useState } from "react";
// import { MdClose } from "react-icons/md";
// import { FaLinkedinIn, FaGithub } from "react-icons/fa";
// import { Link as ScrollLink } from "react-scroll";
// import { Link as RouterLink } from "react-router-dom";
// import { logo } from "../../assets/index";
// import { navLinksdata } from "../../constants";
// import { useTheme } from "../../ThemeContext";

// const Navbar = () => {
//   const [showMenu, setShowMenu] = useState(false);
//   const [showDropdown, setShowDropdown] = useState(false);
//   const { theme, toggleTheme } = useTheme();

//   const themes = [
//     { name: "Dark", value: "dark", icon: "🌙" },
//     { name: "Light", value: "light", icon: "☀️" },
//     { name: "Blue", value: "blue", icon: "🌀" },
//     { name: "Green", value: "green", icon: "🌿" },
//     { name: "Red", value: "red", icon: "🔥" },
//     { name: "Purple", value: "purple", icon: "💜" },
//     { name: "Pink", value: "pink", icon: "💖" },
//     { name: "Teal", value: "teal", icon: "🦋" },
//     { name: "Yellow", value: "yellow", icon: "🌟" },
//     { name: "Orange", value: "orange", icon: "🍊" },
//   ];

//   const renderNavLink = ({ _id, title, link }) => {
//     if (link.startsWith("/")) {
//       return (
//         <RouterLink
//           to={link}
//           className="text-base font-normal text-[var(--text-secondary)] tracking-wide cursor-pointer hover:text-designColor duration-300"
//         >
//           {title}
//         </RouterLink>
//       );
//     } else {
//       return (
//         <ScrollLink
//           activeClass="active"
//           to={link}
//           spy={true}
//           smooth={true}
//           offset={-70}
//           duration={500}
//           className="text-base font-normal text-[var(--text-secondary)] tracking-wide cursor-pointer hover:text-designColor duration-300"
//         >
//           {title}
//         </ScrollLink>
//       );
//     }
//   };

//   return (
//     <div className="w-full h-24 px-10 sticky top-0 z-50 bg-gradient-to-br from-[var(--bg-primary)] to-[var(--bg-secondary)] bg-opacity-90 backdrop-blur-md mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-[var(--border-color)]">
//       <div className="flex items-center gap-2">
//         <img
//           src={logo}
//           alt="logo"
//           className="w-10 h-10 object-contain rounded-full border-[1px] border-[var(--border-color)]"
//         />
//         <span className="text-[var(--text-secondary)] font-bold">Zeshi</span>
//       </div>
//       <div>
//         <ul className="hidden mdl:inline-flex items-center gap-6 lg:gap-10">
//           {navLinksdata.map((item) => (
//             <li key={item._id}>{renderNavLink(item)}</li>
//           ))}
//         </ul>
//         <div className="relative hidden mdl:inline-flex items-center ml-6">
//           <button
//             onClick={() => setShowDropdown(!showDropdown)}
//             className="px-4 py-2 bg-[var(--bg-primary)] bg-opacity-50 text-[var(--text-primary)] rounded-full text-sm hover:bg-opacity-70 transition flex items-center gap-2 border border-[var(--border-color)]"
//           >
//             <span>Theme: {themes.find((t) => t.value === theme)?.name || "Select"}</span>
//             <span>{themes.find((t) => t.value === theme)?.icon}</span>
//           </button>
//           {showDropdown && (
//             <div className="absolute top-12 right-0 w-40 bg-[var(--bg-primary)] bg-opacity-90 rounded-md shadow-lg z-50 border border-[var(--border-color)]">
//               {themes.map((t) => (
//                 <button
//                   key={t.value}
//                   onClick={() => {
//                     toggleTheme(t.value);
//                     setShowDropdown(false);
//                   }}
//                   className={`w-full text-left px-4 py-2 text-sm text-[var(--text-primary)] hover:bg-[var(--bg-primary)] hover:bg-opacity-70 flex items-center gap-2 ${
//                     theme === t.value ? "bg-opacity-50" : ""
//                   }`}
//                 >
//                   <span>{t.icon}</span>
//                   <span>{t.name}</span>
//                 </button>
//               ))}
//             </div>
//           )}
//         </div>
//         <span
//           onClick={() => setShowMenu(!showMenu)}
//           className="text-xl mdl:hidden bg-[var(--bg-primary)] bg-opacity-50 w-16 h-10 inline-flex items-center justify-center rounded-full text-[var(--text-secondary)] hover:text-designColor duration-300 cursor-pointer font-medium"
//         >
//           Menu
//         </span>
//         {showMenu && (
//           <div className="w-[80%] h-screen absolute top-0 left-0 bg-[var(--bg-primary)] bg-opacity-95 backdrop-blur-lg p-6 transform transition-transform duration-300 ease-in-out translate-x-0 z-50">
//             <div className="flex flex-col gap-8 py-2 relative">
//               <div className="flex items-center gap-2">
//                 <img
//                   src={logo}
//                   alt="logo"
//                   className="w-12 h-12 rounded-full border-[1px] border-[var(--border-color)] shadow-md"
//                 />
//                 <span className="text-[var(--text-secondary)] font-bold text-2xl">INBIO</span>
//               </div>
//               <ul className="flex flex-col gap-6">
//                 {navLinksdata.map((item) => (
//                   <li
//                     key={item._id}
//                     className="text-lg font-medium text-[var(--text-secondary)] hover:text-designColor transition-colors duration-200 transform hover:translate-x-2"
//                     onClick={() => setShowMenu(false)}
//                   >
//                     {renderNavLink(item)}
//                   </li>
//                 ))}
//               </ul>
//               <div className="flex flex-col gap-4">
//                 <h2 className="text-base uppercase font-titleFont mb-4 text-[var(--text-primary)] font-semibold">Theme</h2>
//                 <div className="grid grid-cols-2 gap-3">
//                   {themes.map((t) => (
//                     <button
//                       key={t.value}
//                       onClick={() => {
//                         toggleTheme(t.value);
//                         setShowMenu(false);
//                       }}
//                       className={`text-left px-4 py-3 text-sm text-[var(--text-primary)] hover:bg-[var(--bg-primary)] hover:bg-opacity-70 flex items-center gap-2 rounded-lg shadow-sm border border-[var(--border-color)] transition-colors duration-200 ${
//                         theme === t.value ? "bg-opacity-50 border-designColor" : ""
//                       }`}
//                     >
//                       <span>{t.icon}</span>
//                       <span>{t.name}</span>
//                     </button>
//                   ))}
//                 </div>
//               </div>
//               <div className="flex flex-col gap-4">
//                 <h2 className="text-base uppercase font-titleFont mb-4 text-[var(--text-primary)] font-semibold">Find me in</h2>
//                 <div className="flex gap-4">
//                   <a href="https://github.com/zeshig01" target="_blank" rel="noreferrer">
//                     <span className="bannerIcon w-12 h-12 flex items-center justify-center rounded-full bg-[var(--bg-secondary)] text-[var(--text-secondary)] hover:text-designColor transition-colors duration-200">
//                       <FaGithub size={24} />
//                     </span>
//                   </a>
//                   <a
//                     href="https://www.linkedin.com/in/muhammad-zeeshan-ashraf-a3b99a30a"
//                     target="_blank"
//                     rel="noreferrer"
//                   >
//                     <span className="bannerIcon w-12 h-12 flex items-center justify-center rounded-full bg-[var(--bg-secondary)] text-[var(--text-secondary)] hover:text-designColor transition-colors duration-200">
//                       <FaLinkedinIn size={24} />
//                     </span>
//                   </a>
//                 </div>
//               </div>
//               <span
//                 onClick={() => setShowMenu(false)}
//                 className="absolute top-4 right-4 text-[var(--text-secondary)] hover:text-designColor duration-300 text-2xl cursor-pointer"
//               >
//                 <MdClose />
//               </span>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import { logo } from "../../assets/index";
import { navLinksdata } from "../../constants";
import { useTheme } from "../../ThemeContext";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const themes = [
    { name: "Dark", value: "dark", icon: "🌙" },
    { name: "Light", value: "light", icon: "☀️" },
    { name: "Blue", value: "blue", icon: "🌀" },
    { name: "Green", value: "green", icon: "🌿" },
    { name: "Red", value: "red", icon: "🔥" },
    { name: "Purple", value: "purple", icon: "💜" },
    { name: "Pink", value: "pink", icon: "💖" },
    { name: "Teal", value: "teal", icon: "🦋" },
    { name: "Yellow", value: "yellow", icon: "🌟" },
    { name: "Orange", value: "orange", icon: "🍊" },
  ];

  const renderNavLink = ({ _id, title, link }) => {
    if (link.startsWith("/")) {
      return (
        <RouterLink
          to={link}
          className="text-base font-normal text-[var(--text-secondary)] tracking-wide cursor-pointer hover:text-designColor duration-300"
        >
          {title}
        </RouterLink>
      );
    } else {
      return (
        <ScrollLink
          activeClass="active"
          to={link}
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="text-base font-normal text-[var(--text-secondary)] tracking-wide cursor-pointer hover:text-designColor duration-300"
        >
          {title}
        </ScrollLink>
      );
    }
  };

  return (
    <div className="w-full h-24 px-10 sticky top-0 z-50 bg-gradient-to-br from-[var(--bg-primary)] to-[var(--bg-secondary)] bg-opacity-90 backdrop-blur-md mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-[var(--border-color)]">
      {/* Logo Section */}
      <div className="flex items-center gap-2">
        <img
          src={logo}
          alt="logo"
          className="w-10 h-10 object-contain rounded-full border-[1px] border-[var(--border-color)]"
        />
        <span className="text-[var(--text-secondary)] font-bold">Zeshi</span>
      </div>

      {/* Desktop NavLinks */}
      <div>
        <ul className="hidden mdl:inline-flex items-center gap-6 lg:gap-10">
          {navLinksdata.map((item) => (
            <li key={item._id}>{renderNavLink(item)}</li>
          ))}
        </ul>

        {/* Theme Dropdown */}
        <div className="relative hidden mdl:inline-flex items-center ml-6">
          <button
            onClick={() => setShowDropdown(!showDropdown)}
            className="px-4 py-2 bg-[var(--bg-primary)] bg-opacity-50 text-[var(--text-primary)] rounded-full text-sm hover:bg-opacity-70 transition flex items-center gap-2 border border-[var(--border-color)]"
          >
            <span>
              Theme: {themes.find((t) => t.value === theme)?.name || "Select"}
            </span>
            <span>{themes.find((t) => t.value === theme)?.icon}</span>
          </button>
          {showDropdown && (
            <div className="absolute top-12 right-0 w-40 bg-[var(--bg-primary)] bg-opacity-90 rounded-md shadow-lg z-50 border border-[var(--border-color)]">
              {themes.map((t) => (
                <button
                  key={t.value}
                  onClick={() => {
                    toggleTheme(t.value);
                    setShowDropdown(false);
                  }}
                  className={`w-full text-left px-4 py-2 text-sm text-[var(--text-primary)] hover:bg-[var(--bg-primary)] hover:bg-opacity-70 flex items-center gap-2 ${
                    theme === t.value ? "bg-opacity-50" : ""
                  }`}
                >
                  <span>{t.icon}</span>
                  <span>{t.name}</span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Animated Hamburger Icon for Desktop */}
        <div
          onClick={() => setShowSidebar(true)}
          className="hidden mdl:inline-flex flex-col justify-between -mt-10 w-8 h-6 cursor-pointer group ml-8"
        >
          <span className="block h-[3px] bg-[var(--text-secondary)] rounded-full group-hover:w-8 transition-all duration-300 w-6"></span>
          <span className="block h-[3px] bg-[var(--text-secondary)] rounded-full group-hover:w-8 transition-all duration-300 w-8"></span>
          <span className="block h-[3px] bg-[var(--text-secondary)] rounded-full group-hover:w-6 transition-all duration-300 w-7"></span>
        </div>

        {/* Mobile Menu */}
        <span
          onClick={() => setShowMenu(!showMenu)}
          className="text-xl mdl:hidden bg-[var(--bg-primary)] bg-opacity-50 w-16 h-10 inline-flex items-center justify-center rounded-full text-[var(--text-secondary)] hover:text-designColor duration-300 cursor-pointer font-medium"
        >
          Menu
        </span>

        {/* Mobile Sidebar */}
        {showMenu && (
          <div className="w-[80%] h-screen absolute top-0 left-0 bg-[var(--bg-primary)] bg-opacity-95 backdrop-blur-lg p-6 transform transition-transform duration-300 ease-in-out translate-x-0 z-50">
            <div className="flex flex-col gap-8 py-2 relative">
              <div className="flex items-center gap-2">
                <img
        src={logo}
        alt="logo"
        className="w-10 h-10 rounded-full border-2 border-yellow-400 shadow-[0_0_25px_rgba(255,215,0,0.4)]"
      />
                <h1 className=" font-bold text-yellow-400 text-center leading-tight">
         Zeeshan <br /> <span className="text-gray-300  font-medium">Developer</span>
      </h1>
              </div>

              {/* div className="flex flex-col items-center gap-4 animate-fadeInDown">
      <img
        src={logo}
        alt="logo"
        className="w-20 h-20 rounded-full border-2 border-yellow-400 shadow-[0_0_25px_rgba(255,215,0,0.4)]"
      />
      <h1 className="text-2xl font-bold text-yellow-400 text-center leading-tight">
        Muhammad Zeeshan <br /> <span className="text-gray-300 text-lg font-medium">Full Stack Developer</span>
      </h1>
    </div> */}
              <ul className="flex flex-col gap-6">
                {navLinksdata.map((item) => (
                  <li
                    key={item._id}
                    className="text-lg bg-yellow-400  font-medium text-[var(--text-secondary)] hover:text-designColor transition-colors duration-200 transform hover:translate-x-2"
                    onClick={() => setShowMenu(false)}
                  >
                    {renderNavLink(item)}
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-4">
                <h2 className="text-base uppercase font-titleFont mb-4 text-[var(--text-primary)] font-semibold">
                  Theme
                </h2>
                <div className="grid grid-cols-2 gap-3">
                  {themes.map((t) => (
                    <button
                      key={t.value}
                      onClick={() => {
                        toggleTheme(t.value);
                        setShowMenu(false);
                      }}
                      className={`text-left px-4 py-3 text-sm text-[var(--text-primary)] hover:bg-[var(--bg-primary)] hover:bg-opacity-70 flex items-center gap-2 rounded-lg shadow-sm border border-[var(--border-color)] transition-colors duration-200 ${
                        theme === t.value ? "bg-opacity-50 border-designColor" : ""
                      }`}
                    >
                      <span>{t.icon}</span>
                      <span>{t.name}</span>
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <h2 className="text-base uppercase font-titleFont mb-4 text-[var(--text-primary)] font-semibold">
                  Find me in
                </h2>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/zeshig01"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="bannerIcon w-12 h-12 flex items-center justify-center rounded-full bg-[var(--bg-secondary)] text-[var(--text-secondary)] hover:text-designColor transition-colors duration-200">
                      <FaGithub size={24} />
                    </span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/muhammad-zeeshan-ashraf-a3b99a30a"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="bannerIcon w-12 h-12 flex items-center justify-center rounded-full bg-[var(--bg-secondary)] text-[var(--text-secondary)] hover:text-designColor transition-colors duration-200">
                      <FaLinkedinIn size={24} />
                    </span>
                  </a>
                </div>
              </div>
              <span
                onClick={() => setShowMenu(false)}
                className="absolute top-4 right-4 text-[var(--text-secondary)] hover:text-designColor duration-300 text-2xl cursor-pointer"
              >
                <MdClose />
              </span>
            </div>
          </div>
        )}

        {/* Desktop Animated Sidebar */}
       {showSidebar && (
  <div className="fixed top-0 right-0 h-screen w-[35%] bg-gradient-to-br from-black via-[#2c2c2c] to-black text-white z-50 shadow-[0_0_40px_rgba(255,215,0,0.15)] animate-slideInSmooth flex flex-col justify-between px-10 py-10 overflow-y-auto backdrop-blur-lg border-l border-yellow-500/20">

    {/* Close Button */}
    <span
      onClick={() => setShowSidebar(false)}
      className="absolute top-6 right-6 text-3xl cursor-pointer text-yellow-400/70 
                 transition-all duration-500 ease-in-out
                 hover:text-yellow-400 hover:scale-110 hover:rotate-180"
    >
      <MdClose />
    </span>

    {/* Header Section */}
    <div className="flex flex-col items-center gap-4 animate-fadeInDown">
      <img
        src={logo}
        alt="logo"
        className="w-20 h-20 rounded-full border-2 border-yellow-400 shadow-[0_0_25px_rgba(255,215,0,0.4)]"
      />
      <h1 className="text-2xl font-bold text-yellow-400 text-center leading-tight">
        Muhammad Zeeshan <br /> <span className="text-gray-300 text-lg font-medium">Full Stack Developer</span>
      </h1>
    </div>

    {/* Divider Line */}
    <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-yellow-500/40 to-transparent my-6"></div>

    {/* About Section */}
    <div className="animate-fadeInUp space-y-4">
      <p className="text-gray-300 text-[1rem] leading-relaxed font-light">
        Passionate about crafting <span className="text-yellow-400 font-semibold">scalable, modern web applications</span> with seamless user experience. 
        I bridge the gap between design and technology — building clean, optimized, and maintainable code for businesses worldwide.
      </p>

      <p className="text-gray-400 italic text-sm">
        “Turning ideas into interactive digital experiences.”
      </p>
    </div>

    {/* Skills or Highlights */}
    <div className="mt-6 space-y-3 animate-fadeInUp delay-200">
      <h3 className="text-lg font-semibold text-yellow-400">⚙️ Expertise</h3>
      <ul className="space-y-2 text-gray-300 text-sm">
        <li>• MERN Stack (MongoDB, Express, React, Node)</li>
        <li>• UI/UX Design & Responsive Web Design</li>
        <li>• API Integration & RESTful Services</li>
        <li>• WordPress Custom Development</li>
      </ul>
    </div>

    {/* Contact Info */}
    <div className="mt-10 space-y-3 animate-fadeInUp delay-300 text-center">
      <h3 className="text-xl font-semibold text-yellow-400 tracking-wide">
        📞 +92 317 4652685
      </h3>
      <h3 className="text-xl font-semibold text-yellow-400 tracking-wide">
        ✉️ zeshig01@gmail.com
      </h3>
      <a
        href="mailto:zeshig01@gmail.com"
        className="inline-block mt-4 bg-gradient-to-r from-yellow-500 to-yellow-300 text-black px-6 py-2 rounded-full font-semibold hover:scale-105 hover:shadow-[0_0_20px_rgba(255,215,0,0.5)] transition-all duration-300"
      >
        Let’s Connect
      </a>
    </div>
  </div>
)}


      </div>

      {/* Animations */}
      <style>{`
  /* --- Modern Animations --- */
  @keyframes slideInSmooth {
    0% {
      transform: translateX(120%);
      opacity: 0;
      filter: blur(10px);
    }
    100% {
      transform: translateX(0);
      opacity: 1;
      filter: blur(0);
    }
  }

  @keyframes subtleGlow {
    0%, 100% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
  }

  .animate-slideInSmooth {
    animation: slideInSmooth 0.7s cubic-bezier(0.25, 1, 0.5, 1) forwards;
  }

  .bg-modern {
    background: linear-gradient(135deg, #0f0f0f, #1a1a40, #111111, #000000);
    background-size: 300% 300%;
    animation: subtleGlow 6s ease infinite;
  }
`}</style>
    </div>
  );
};

export default Navbar;
