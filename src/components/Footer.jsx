import { personalData } from '../data/mockData';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-secondary py-8 border-t border-gray-800 text-center flex flex-col items-center justify-center">
      <div className="container mx-auto px-6 flex flex-col items-center justify-center gap-6">
        <div className="flex gap-6 md:hidden">
          <a href={personalData.github} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-accent transition-transform duration-300 hover:-translate-y-1">
            <FaGithub size={24} />
          </a>
          <a href={personalData.linkedin} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-accent transition-transform duration-300 hover:-translate-y-1">
            <FaLinkedin size={24} />
          </a>
          <a href={`mailto:${personalData.email}`} className="text-gray-400 hover:text-accent transition-transform duration-300 hover:-translate-y-1">
            <FaEnvelope size={24} />
          </a>
        </div>
        
        <a 
          href={personalData.github} 
          target="_blank" 
          rel="noreferrer"
          className="font-mono text-sm text-gray-500 hover:text-accent transition-colors duration-300"
        >
          Designed & Built by {personalData.name}
        </a>
      </div>
    </footer>
  );
};

export default Footer;
