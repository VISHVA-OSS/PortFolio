import { motion } from 'framer-motion';
import { educationData } from '../data/mockData';

const Education = () => {
  return (
    <section id="education" className="py-24 bg-primary relative">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, amount: 0.2 }}
           transition={{ duration: 0.6 }}
           className="flex items-center justify-start gap-4 mb-16"
        >
           <h2 className="text-3xl md:text-4xl font-bold text-white tracking-wide">
             <span className="text-accent font-mono text-xl mr-2"></span> Education
           </h2>
           <div className="h-[1px] bg-gray-700 flex-grow max-w-xs ml-4"></div>
        </motion.div>

        <div className="relative border-l-2 border-gray-700/50 ml-4 md:ml-6 space-y-12">
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative pl-8 md:pl-12"
            >
              {/* Timeline marker */}
              <div className="absolute w-5 h-5 bg-accent/20 rounded-full -left-[11px] top-1 flex items-center justify-center">
                <div className="w-2.5 h-2.5 bg-accent rounded-full shadow-[0_0_10px_rgba(56,189,248,0.8)]" />
              </div>
              
              <div className="glass p-6 md:p-8 rounded-xl border border-gray-800/80 hover:border-accent/40 hover:bg-gray-800/20 transition-all duration-300 group shadow-lg">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-100 group-hover:text-accent transition-colors duration-300">
                    {edu.degree}
                  </h3>
                  <span className="text-accent font-mono text-sm bg-accent/10 px-4 py-1.5 rounded-full w-fit">
                    {edu.year}
                  </span>
                </div>
                
                <h4 className="text-lg text-gray-300 mb-3 font-medium flex items-center gap-2">
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-accent transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                  </svg>
                  {edu.institution}
                </h4>
                <p className="text-gray-400 mb-5 text-sm md:text-base leading-relaxed max-w-2xl">
                  {edu.description}
                </p>
                
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
