import { FaGithub, FaLinkedin, FaEnvelope, FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaGitAlt, FaBootstrap, FaNode } from 'react-icons/fa';
import { SiJavascript, SiTailwindcss, SiTypescript, SiFramer } from 'react-icons/si';
import CRUD from '../assets/CRUD.png';
import BMI from '../assets/BMI.png';
import Burger from '../assets/Burger.png';
import IP from '../assets/IP.png'
import Blinkit from '../assets/Blinkit.png'
import { image } from 'framer-motion/client';

export const personalData = {
  name: "Vishva",
  role: "Frontend Developer",
  tagline: ["React Developer", "Full Stack Developer", "Web Desinger"],
  bio: "I am a passionate Full Stack Developer specializing in building exceptional digital experiences. Currently, I'm focused on creating accessible, human-centered products utilizing modern web technologies like React, Tailwind CSS, and Framer Motion. I love bringing designs to life through clean, efficient code and engaging animations.",
  email: "svishva600@gmail.com",
  github: "https://github.com/VISHVA-OSS",
  linkedin: "https://www.linkedin.com/in/vishva-s-b65b5a373/",
  resumeUrl: "#", // Add resume link here
};

export const skillsData = [
  { name: "React.js", icon: <FaReact size={40} className="text-[#61DAFB]" />, level: 90 },
  { name: "JavaScript", icon: <SiJavascript size={40} className="text-[#F7DF1E]" />, level: 85 },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={40} className="text-[#06B6D4]" />, level: 95 },
  { name: "HTML", icon: <FaHtml5 size={40} className="text-[#E34F26]" />, level: 90 },
  { name: "CSS", icon: <FaCss3Alt size={40} className="text-[#1572B6]" />, level: 85 },
  { name: "Git", icon: <FaGitAlt size={40} className="text-[#F05032]" />, level: 80 },
  { name: "BootStrap", icon: <FaBootstrap size={40} className="text-[#61DAFB]" />, level: 90 },
  { name: "Node.js", icon: <FaNode size={40} className="text-[#61DAFB]" />, level: 90 },
];

export const projectsData = [
  {
    id: 1,
    title: "CRUD Application",
    image: CRUD,
    tech: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://vishva-oss.github.io/CRUD-Application",
    liveUrl: "https://vishva-oss.github.io/CRUD-Application/"
  },
  {
    id: 2,
    title: "Blinkit",
    image: Blinkit,
    tech: ["REACT"],
    githubUrl: "https://blinkit-one-omega.vercel.app/",
    liveUrl: "https://blinkit-one-omega.vercel.app/"
  },
  {
    id:3,
    title: "Burger King",
    image: Burger,
    tech: ["HTML", "CSS"],
    github: "https://bruger.vercel.app/",
    liveUrl:"https://bruger.vercel.app/"
  },
  {
    id:4,
    title: "IP Finder",
    image: IP,
    tech: ["JavaScript"],
    github: "https://ip-finder.vercel.app/",
    liveUrl:"https://ip-finder.vercel.app/"
  }
];

export const educationData = [
   {
    id:1,
    degree:"Full Stack Development",
    institution:"NSCHOOL Academy Coimbatore",
    year:"2025-2026",
  },
  {
    id: 2,
    degree: "Bachelor of Commerce & Computer Application",
    institution:"Sree SARASWATHI THYAGARAJA COLLEGE,POLLACHI",
    year: "2022 - 2025",
  },
  {
    id: 3,
    degree: "Higher Secondary",
    institution: "RAJALAKSHMI GENGUSWAMY MATRIC.HR.SEC SCHOOL,PEDAPPAMPATTI",
    year: "2020 - 2022",
    grade: "Percentage: 65%",
  },
];
