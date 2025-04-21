import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree, projectFour,projectFive,projectSix } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        
        <ProjectsCard
          title="CryptoVerse Web | Gemini AI Heckathon"
          des="Dogy Walk Generator, innovating personalized dog walking routes for varied energy levels and safety concerns. Transformed daily walks for dog owners, ensuring both creativity and safety."
          src={projectOne}
          link= 'https://cryptoverse-ai.com/'
          git='https://github.com/Zeshig01/SurgicalWeb'
        />

        <ProjectsCard
          title="TPON"
          des="TPON is a platform that syncs friends' calendars to create optimized outing plans with a single tap, ensuring everyone's schedules align. It tailors plans to fit friends' budgets and preferences, making get-togethers effortless and enjoyable."
          src={projectTwo}
          link= 'https://agil-hackathon-frontend-2akw.vercel.app/'
          git='https://github.com/Shabbir-Anjum/Teepon'
        />

        <ProjectsCard
          title="HealthPulse"
          des=" HealthPulse is an integrated health analytics platform designed to provide users with deep insights into their health by leveraging data from wearable devices, user-provided health information, and advanced AI models."
          src={projectThree}
          link= 'https://health-pulse-beta.vercel.app/'
          git='https://github.com/Shabbir-Anjum/MindsDB-Hackathon'
        />
        <ProjectsCard
          title="OrbitX"
          des=" In the NASA Space Hackathon, we developed an innovative project focused on utilizing AI-driven models to analyze space data for enhanced exploration and navigation. Our approach aims to optimize resource management and decision-making for future space missions."
          src={projectFour}
          link= 'https://orbit-x.vercel.app/'
          git='https://github.com/Shabbir-Anjum/OrbitX'
        />
        <ProjectsCard
          title="SiteBuilder"
          des="It leverages AI to generate and display code snippets instantly using the Together AI LLaMA API and HELICONE API. The application also includes a sandbox feature that allows users to easily transfer code into a live editor, saving valuable time during development."
          src={projectFive}
          link= 'https://github.com/Shabbir-Anjum/SiteBuilder'
          git='https://github.com/Shabbir-Anjum/SiteBuilder'
        />
        <ProjectsCard
          title="Intervuo"
          des="This is an AI-powered interviewer bot developed by Team Pathfinder to revolutionize the recruitment process. Our bot conducts interviews autonomously, providing a consistent and efficient way to assess candidates without human intervention."
          src={projectSix}
          link= 'https://voca-mind.vercel.app/'
          git='https://github.com/pathfindermilan/Intervuo'
        />
      </div>
    </section>
  );
}

export default Projects