import { motion } from 'framer-motion';
import { skillsData } from '../data/mockData';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100 }
  }
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-primary relative">
      {/* Subtle backdrop glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, amount: 0.2 }}
           transition={{ duration: 0.6 }}
           className="flex items-center justify-end gap-4 mb-16"
        >
           <div className="h-[1px] bg-gray-700 flex-grow ml-4 max-w-xs md:max-w-md"></div>
           <h2 className="text-3xl md:text-4xl font-bold text-white tracking-wide">
             <span className="text-accent font-mono text-xl mr-2"></span> My Skills
           </h2>
        </motion.div>

        <motion.div 
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {skillsData.map((skill, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="glass p-8 rounded-xl flex flex-col items-center justify-center gap-5 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(56,189,248,0.15)] transition-all duration-300 group border border-gray-800 hover:border-accent/40"
            >
              <div className="group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 drop-shadow-lg">
                {skill.icon}
              </div>
              <h3 className="text-lg font-medium text-gray-300 group-hover:text-white transition-colors duration-300">
                {skill.name}
              </h3>
              
              {/* Progress Bar Container - Optional depending on minimal vibe */}
              <div className="w-full bg-gray-800/80 h-1.5 rounded-full overflow-hidden mt-2">
                <motion.div 
                  className="h-full bg-gradient-to-r from-accent to-purple-500 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
