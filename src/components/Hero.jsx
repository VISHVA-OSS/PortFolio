import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { ReactTyped } from 'react-typed';
import { personalData } from '../data/mockData';
import VISHVA from '../assets/VISHVA.png';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-primary pt-20">
      {/* Background gradients/glows */}
      <div className="absolute top-1/4 left-1/4 w-[30rem] h-[30rem] bg-accent/10 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-purple-500/10 rounded-full blur-[128px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center md:text-left flex flex-col md:flex-row items-center justify-between">
        
        <motion.div 
          className="md:w-3/5"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-accent font-mono text-lg md:text-xl mb-5 tracking-wide">
            {`Hi, my name is`}
          </h2>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-100 mb-4 tracking-tight">
            {personalData.name}
          </h1>
          <h3 className="text-3xl md:text-5xl font-bold text-gray-400 mb-6 h-[50px] md:h-[70px]">
            <ReactTyped
              strings={personalData.tagline}
              typeSpeed={50}
              backSpeed={40}
              loop
              className="bg-clip-text text-transparent bg-gradient-to-r from-gray-300 to-gray-500"
            />
          </h3>
          <p className="text-gray-400 text-lg md:text-xl max-w-xl mb-10 leading-relaxed mx-auto md:mx-0 font-light">
            {personalData.bio.split('.')[0]}. I build exceptionally crafted web interfaces with modern technologies.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center md:justify-start">
            <Link
              to="projects"
              smooth={true}
              duration={500}
              offset={-70}
              className="px-8 py-4 rounded bg-transparent border border-accent text-accent font-mono text-sm hover:bg-accent/10 transition-all duration-300 cursor-pointer text-center group shadow-[0_0_10px_rgba(56,189,248,0.2)] hover:shadow-[0_0_20px_rgba(56,189,248,0.4)]"
            >
              Project's
            </Link>
            <a
              href={personalData.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="px-8 py-4 rounded bg-accent text-primary font-mono text-sm hover:bg-accent/90 transition-all duration-300 text-center shadow-[0_0_10px_rgba(56,189,248,0.4)] hover:shadow-[0_0_20px_rgba(56,189,248,0.6)]"
            >
              Resume
            </a>
          </div>
        </motion.div>

        {/* Decorative graphic element for the hero right side */}
        <motion.div
           className="hidden md:flex md:w-2/5 justify-end p-8"
           initial={{ opacity: 0, scale: 0.8 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.8, delay: 0.2 }}
        >
           <div className="relative w-80 h-80 border border-accent/30 rounded-full flex items-center justify-center before:content-[''] before:absolute before:inset-4 before:border before:border-purple-500/30 before:rounded-full after:content-[''] after:absolute after:inset-10 after:border after:border-accent/10 after:rounded-full group hover:border-accent/60 transition-colors duration-500 hover:shadow-[0_0_30px_rgba(56,189,248,0.1)] hover:before:border-purple-500/60 object-cover">
             {/* Replace with actual image later or keep abstraction */}
             <div className="w-64 h-64 rounded-full overflow-hidden border-2 border-accent/50 group-hover:border-accent transition-colors duration-500 z-10">
                <img src={VISHVA} alt="Profile" className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500" />
             </div>
           </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
