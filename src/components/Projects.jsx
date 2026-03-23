import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { projectsData } from '../data/mockData';

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-secondary">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, amount: 0.2 }}
           transition={{ duration: 0.6 }}
           className="flex items-center gap-4 mb-16"
        >
           <h2 className="text-3xl md:text-4xl font-bold text-white tracking-wide flex items-center">
             <span className="text-accent font-mono text-xl mr-3"></span> Project's
           </h2>
           <div className="h-[1px] bg-gray-700 flex-grow max-w-xs ml-4"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-primary/50 backdrop-blur-md rounded-xl overflow-hidden hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(56,189,248,0.15)] transition-all duration-300 group flex flex-col h-full border border-gray-800 hover:border-accent/40"
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-accent/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 filter grayscale group-hover:grayscale-0"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-gray-100 group-hover:text-accent transition-colors duration-300 leading-tight">
                    {project.title}
                  </h3>
                  <div className="flex gap-4 text-gray-400">
                    <a href={project.githubUrl} className="hover:text-accent transition-colors" target="_blank" rel="noreferrer">
                      <FaGithub size={20} />
                    </a>
                    <a href={project.liveUrl} className="hover:text-accent transition-colors" target="_blank" rel="noreferrer">
                      <FaExternalLinkAlt size={18} />
                    </a>
                  </div>
                </div>

                <p className="text-gray-400 text-sm mb-6 flex-grow leading-relaxed">
                  {project.description}
                </p>

                <ul className="flex flex-wrap gap-3 font-mono text-xs text-accent/80 mt-auto">
                  {project.tech.map((tech, i) => (
                    <li key={i}>{tech}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
