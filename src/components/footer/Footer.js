// import React from "react";
// import { FaLinkedinIn, FaDiscord, FaGithub } from "react-icons/fa";
// import { logo } from "../../assets/index";
// import { BsCodeSlash } from "react-icons/bs";
// import { Link } from "react-router-dom";
// const Footer = () => {
//   return (
//     <div className="w-full py-20 h-auto border-b-[1px] border-b-black grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-4 gap-8">
//       <div className="w-full h-full flex flex-col gap-8">
//         <div className=" flex items-center gap-2">
//           <img
//             src={logo}
//             alt="logo"
//             className=" w-10 h-10 rounded-full border-[1px] border-gray-700"
//           />
//           <span className=" text-gray-500 font-bold">INBIO</span>
//         </div>
//         <div className="flex gap-3">
          
//           <Link to="https://github.com/zeshig01" target="_blank">
//             {" "}
//             <span className="bannerIcon">
//               <FaGithub />
//             </span>
//           </Link>
//           <Link
//             to="https://www.linkedin.com/in/muhammad-zeeshan-ashraf-a3b99a30a"
//             target="_blank"
//           >
//             {" "}
//             <span className="bannerIcon">
//               <FaLinkedinIn />
//             </span>
//           </Link>
          
//         </div>
//       </div>
//       <div className="w-full h-full">
//         <h3 className="text-xl uppercase text-designColor tracking-wider">
//           Quick Link
//         </h3>
//         <ul className="flex flex-col gap-4 font-titleFont font-medium py-6 overflow-hidden">
//           <li>
//             <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
//               About
//               <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
//             </span>
//           </li>
//           <li>
//             <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
//               Portfolio
//               <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
//             </span>
//           </li>
//           <li>
//             <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
//               Services
//               <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
//             </span>
//           </li>
//           <li>
//             <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
//               Blog
//               <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
//             </span>
//           </li>
//           <li>
//             <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
//               Contact
//               <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
//             </span>
//           </li>
//         </ul>
//       </div>
//       <div className="w-full h-full">
//         <h3 className="text-xl uppercase text-designColor tracking-wider">
//           RESOURCES
//         </h3>
//         <ul className="flex flex-col gap-4 font-titleFont font-medium py-6 overflow-hidden">
//           <li>
//             <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
//               Authentication
//               <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
//             </span>
//           </li>
//           <li>
//             <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
//               System Status
//               <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
//             </span>
//           </li>
//           <li>
//             <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
//               Terms of Service
//               <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
//             </span>
//           </li>
//           <li>
//             <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
//               Pricing
//               <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
//             </span>
//           </li>
//           <li>
//             <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
//               Over Right
//               <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
//             </span>
//           </li>
//         </ul>
//       </div>
//       <div className="w-full h-full">
//         <h3 className="text-xl uppercase text-designColor tracking-wider">
//           DEVELOPERS
//         </h3>
//         <ul className="flex flex-col gap-4 font-titleFont font-medium overflow-hidden py-6">
//           <li>
//             <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
//               Documentation
//               <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
//             </span>
//           </li>
//           <li>
//             <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
//               Authentication
//               <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
//             </span>
//           </li>
//           <li>
//             <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
//               API Reference
//               <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
//             </span>
//           </li>
//           <li>
//             <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
//               Support
//               <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
//             </span>
//           </li>
//           <li>
//             <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
//               Open Source
//               <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
//             </span>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Footer;


import React, { useRef, useState } from "react";
import { FaLinkedinIn, FaDiscord, FaGithub, FaComment } from "react-icons/fa";
import { logo } from "../../assets/index";
import { Link } from "react-router-dom";
import Chatbot from "./Chatbot";

const Footer = () => {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  const chatbotRef = useRef(null);

  const toggleChatbot = () => {
    setIsChatbotOpen((prev) => !prev);
    if (!isChatbotOpen && chatbotRef.current) {
      // Smoothly scroll to the chatbot when opening
      chatbotRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  };

  return (
    <div className="w-full py-20 h-auto border-b-[1px] border-b-black grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-4 gap-8 relative">
      {/* Footer Content */}
      <div className="w-full h-full flex flex-col gap-8">
        <div className="flex items-center gap-2">
          <img
            src={logo}
            alt="logo"
            className="w-10 h-10 rounded-full border-[1px] border-gray-700"
          />
          <span className="text-gray-500 font-bold">INBIO</span>
        </div>
        <div className="flex gap-3">
          <Link to="https://github.com/zeshig01" target="_blank">
            <span className="bannerIcon">
              <FaGithub />
            </span>
          </Link>
          <Link
            to="https://www.linkedin.com/in/muhammad-zeeshan-ashraf-a3b99a30a"
            target="_blank"
          >
            <span className="bannerIcon">
              <FaLinkedinIn />
            </span>
          </Link>
        </div>
      </div>
      <div className="w-full h-full">
        <h3 className="text-xl uppercase text-designColor tracking-wider">
          Quick Link
        </h3>
        <ul className="flex flex-col gap-4 font-titleFont font-medium py-6 overflow-hidden">
          <li>
            <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
              About
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
              Portfolio
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
              Services
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
              Blog
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
              Contact
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
        </ul>
      </div>
      <div className="w-full h-full">
        <h3 className="text-xl uppercase text-designColor tracking-wider">
          RESOURCES
        </h3>
        <ul className="flex flex-col gap-4 font-titleFont font-medium py-6 overflow-hidden">
          <li>
            <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
              Authentication
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
              System Status
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
              Terms of Service
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
              Pricing
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
              Over Right
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
        </ul>
      </div>
      <div className="w-full h-full">
        <h3 className="text-xl uppercase text-designColor tracking-wider">
          DEVELOPERS
        </h3>
        <ul className="flex flex-col gap-4 font-titleFont font-medium overflow-hidden py-6">
          <li>
            <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
              Documentation
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
              Authentication
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
              API Reference
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
              Support
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
              Open Source
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
        </ul>
      </div>

      {/* Quick Chat Button */}
      <button
        onClick={toggleChatbot}
        className="fixed bottom-8 right-8 bg-designColor text-white p-4 rounded-full shadow-lg hover:bg-opacity-80 transition-all duration-300 flex items-center gap-2 z-50"
      >
        <FaComment size={24} />
        <span className="hidden md:inline">Quick Chat</span>
      </button>

      {/* Chatbot */}
      {isChatbotOpen && (
        <div ref={chatbotRef} className="fixed bottom-20 right-8 z-50">
          <Chatbot onClose={() => setIsChatbotOpen(false)} />
        </div>
      )}
    </div>
  );
};

export default Footer;
