import { FaGithub, FaLinkedin, FaEnvelope, FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaGitAlt, FaBootstrap } from 'react-icons/fa';
import { SiJavascript, SiTailwindcss, SiTypescript, SiFramer } from 'react-icons/si';
import CRUD from '../assets/CRUD.png';

export const personalData = {
  name: "Vishva",
  role: "Frontend Developer",
  tagline: ["React Developer", "Full Stack Developer"],
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
  { name: "React BootStrap", icon: <FaBootstrap size={40} className="text-[#61DAFB]" />, level: 90 },
];

export const projectsData = [
  {
    id: 1,
    title: "CRUD Application",
    description: "A CRUD Application (Create, Read, Update, Delete) is a full-stack web application that allows users to manage data efficiently through a user-friendly interface. This project demonstrates the core operations used in most modern applications, enabling seamless interaction with a database.",
    image: CRUD,
    tech: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://vishva-oss.github.io/CRUD-Application",
    liveUrl: "https://vishva-oss.github.io/CRUD-Application/"
  },
  {
    id: 2,
    title: "Crypto Dashboard",
    description: "Real-time cryptocurrency tracking featuring live price updates, interactive charts, and portfolio metrics.",
    image: "https://images.unsplash.com/photo-1621504450181-5d156f8946e6?auto=format&fit=crop&w=800&q=80",
    tech: ["React", "Framer Motion", "CoinGecko API"],
    githubUrl: "https://github.com/VISHVA-OSS6",
    liveUrl: "#"
  },
  {
    id: 3,
    title: "Taskify Kanban Board",
    description: "A productivity application offering drag-and-drop task management, customizable workspaces, and smooth UI interactions.",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=800&q=80",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com/mathankumar866",
    liveUrl: "#"
  }
];

export const educationData = [
  {
    id: 1,
    degree: "Bachelor of Commerce & Computer Application",
    institution:"Sree SARASWATHI THYAGARAJA COLLEGE,POLLACHI",
    year: "2022 - 2025",
  },
  {
    id: 2,
    degree: "Higher Secondary",
    institution: "RAJALAKSHMI GENGUSWAMY MATRIC.HR.SEC SCHOOL,PEDAPPAMPATTI",
    year: "2020 - 2022",
    grade: "Percentage: 65%",
  },
  {
    id:3,
    degree:"Full Stack Development",
    institution:"NSCHOOL Academy Coimbatore",
  }
];
