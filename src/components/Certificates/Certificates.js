import React from 'react';
import Title from '../layouts/Title';
import CertificateCard from './CertificateCard';

// Import your certificate images here
import { certificate1, certificate2, certificate3,certificate4, certificate5, certificate6 ,certificate7, certificate8, certificate9 ,certificate10, certificate11,certificate12,certificate13,certificate14,certificate15 } from "../../assets/index";

const Certificates = () => {
  const certificatesData = [
    {
      id: 1,
      title: "Gemini Hackathon",
      des: "Completed comprehensive web development course covering HTML, CSS, JavaScript, and React.",
      src: certificate6,

    },
    {
      id: 2,
      title: "Leetcode 50 Day",
      des: "Completed advanced machine learning specialization including supervised and unsupervised learning techniques.",
      src: certificate9,

    },
    {
      id: 3,
      title: "MultiModal AI Hackathon",
      des: "Achieved certification in cloud computing, covering major platforms and deployment strategies.",
      src: certificate3,

    },
    {
      id: 4,
      title: "CS50X Puzzle",
      des: "Completed comprehensive web development course covering HTML, CSS, JavaScript, and React.",
      src: certificate4,

    },
    {
      id: 5,
      title: "CS50 Python",
      des: "Completed advanced machine learning specialization including supervised and unsupervised learning techniques.",
      src: certificate5,

    },
    {
      id: 6,
      title: "GEN AI Training",
      des: "Achieved certification in cloud computing, covering major platforms and deployment strategies.",
      src: certificate1,

    },
    {
      id: 7,
      title: "Internship",
      des: "Completed comprehensive web development course covering HTML, CSS, JavaScript, and React.",
      src: certificate7,

    },
    {
      id: 8,
      title: "Iqra University Webinar",
      des: "Completed advanced machine learning specialization including supervised and unsupervised learning techniques.",
      src: certificate11,

    },
    {
      id: 9,
      title: "Bemore Festival",
      des: "Achieved certification in cloud computing, covering major platforms and deployment strategies.",
      src: certificate2,

    },
    {
      id: 10,
      title: "Meta Hacker Cup",
      des: "Completed comprehensive web development course covering HTML, CSS, JavaScript, and React.",
      src: certificate10,

    },
    {
      id: 11,
      title: "Leadership",
      des: "Completed advanced machine learning specialization including supervised and unsupervised learning techniques.",
      src: certificate8,
    },
      {
        id: 12,
        title: "Certified Mentor",
        des: "Completed advanced machine learning specialization including supervised and unsupervised learning techniques.",
        src: certificate12,
  
      },
      {
        id: 13,
        title: "Galactice Problem Solver",
        des: "Completed advanced machine learning specialization including supervised and unsupervised learning techniques.",
        src: certificate13,
  
      },
      {
        id: 14,
        title: "PM Laptop Award",
        des: "Completed advanced machine learning specialization including supervised and unsupervised learning techniques.",
        src: certificate14,
  
      },
      {
        id: 15,
        title: "PM Laptop Award",
        des: "Completed advanced machine learning specialization including supervised and unsupervised learning techniques.",
        src: certificate15,
  
      },
  ];

  return (

    <section
      id="certificates"
      className="w-full h-auto bg-bodyColor text-lightText px-4"
    >
      <div className='max-w-screen-xl mx-auto w-full p-4 rounded-lg shadow-shadowOne bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:to-gray-900 transition-colors duration-1000'>

   
      <div className="flex justify-center items-center text-center">
        <Title
          title="MY ACHIEVEMENTS AND QUALIFICATIONS"
          des="Certificates"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        {certificatesData.map((certificate) => (
          <CertificateCard
          key={certificate.id}
          id={certificate.id}
          title={certificate.title}
          src={certificate.src}
        />
        ))}
      </div>
      </div>
    </section>
  );
}

export default Certificates;