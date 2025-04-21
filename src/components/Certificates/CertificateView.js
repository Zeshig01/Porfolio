import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { certificate1, certificate2, certificate3, certificate4, certificate5, certificate6, certificate7, certificate8, certificate9, certificate10, certificate11,certificate12,certificate13,certificate14, certificate15 } from "../../assets/index";

const certificateMap = {
  1: { src: certificate6, title: "Gemini Hackathon", des: "Completed comprehensive web development course covering HTML, CSS, JavaScript, and React." },
  2: { src: certificate9, title: "Leetcode 50 Day", des: "Completed advanced machine learning specialization including supervised and unsupervised learning techniques." },
  3: { src: certificate3, title: "MultiModal AI Hackathon", des: "Achieved certification in cloud computing, covering major platforms and deployment strategies." },
  4: { src: certificate4, title: "CS50X Puzzle", des: "Completed comprehensive web development course covering HTML, CSS, JavaScript, and React." },
  5: { src: certificate5, title: "CS50 Python", des: "Completed advanced machine learning specialization including supervised and unsupervised learning techniques." },
  6: { src: certificate1, title: "GEN AI Training", des: "Achieved certification in cloud computing, covering major platforms and deployment strategies." },
  7: { src: certificate7, title: "Internship", des: "Completed comprehensive web development course covering HTML, CSS, JavaScript, and React." },
  8: { src: certificate11, title: "Iqra University Webinar", des: "Completed advanced machine learning specialization including supervised and unsupervised learning techniques." },
  9: { src: certificate2, title: "Bemore Festival", des: "Achieved certification in cloud computing, covering major platforms and deployment strategies." },
  10: { src: certificate10, title: "Meta Hacker Cup", des: "Completed comprehensive web development course covering HTML, CSS, JavaScript, and React." },
  11: { src: certificate8, title: "Leadership", des: "Completed advanced machine learning specialization including supervised and unsupervised learning techniques." },
  12: { src: certificate12, title: "Certified Mentor", des: "Achieved certification in cloud computing, covering major platforms and deployment strategies." },
  13: { src: certificate13, title: "Galactice Problem Solver", des: "Completed comprehensive web development course covering HTML, CSS, JavaScript, and React." },
  14: { src: certificate14, title: "PM Laptop Award", des: "Completed advanced machine learning specialization including supervised and unsupervised learning techniques." },
  15: { src: certificate15, title: "PM Laptop Award", des: "Completed advanced machine learning specialization including supervised and unsupervised learning techniques." },
};

const CertificateView = () => {
  const { id } = useParams();
  const certificate = certificateMap[id];

  if (!certificate) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-bodyColor text-lightText">
        <p className="text-xl mb-4">Certificate not found</p>
        <Link to="/certificates" className="px-4 py-2 bg-designColor text-white rounded hover:bg-opacity-80">
          Back to Certificates
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-bodyColor text-lightText p-4">
      <div className="max-w-4xl w-full p-4 rounded-lg shadow-shadowOne bg-gradient-to-r from-bodyColor to-[#202327]">
        <h1 className=" text-sm md:text-3xl font-bold text-center mb-8 text-designColor">{certificate.title}</h1>
        <div className="mb-8 flex justify-center items-center" style={{ height: 'calc(100vh - 300px)' }}>
          <div className="w-full h-full relative">
            <img
              src={certificate.src}
              alt={certificate.title}
              className="absolute top-0 left-0 w-full h-full object-contain"
            />
          </div>
        </div>
        <Link to="/certificates" className=" px-2 py-1 text-sm  md:px-4 md:py-2 bg-designColor text-white rounded hover:bg-opacity-80">
          Back to Certificates
        </Link>
      </div>
    </div>
  );
};

export default CertificateView;