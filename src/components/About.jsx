import { motion } from 'framer-motion';
import { personalData } from '../data/mockData';

const About = () => {
  return (
    <section id="about" className="py-24 bg-secondary">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, amount: 0.2 }}
           transition={{ duration: 0.6 }}
           className="flex items-center gap-4 mb-16"
        >
           <h2 className="text-3xl md:text-4xl font-bold text-white tracking-wide">
             <span className="text-accent font-mono text-xl mr-2"></span> About Me
           </h2>
           <div className="h-[1px] bg-gray-700 flex-grow ml-4 max-w-xs"></div>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-16 items-start justify-between">
          {/* Bio text */}
          <motion.div 
            className="md:w-3/5 text-gray-400 text-lg leading-relaxed space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p>
              Hello! My name is Vishva and I enjoy creating things that live on the internet. My interest in web development started back in the day when I decided to try editing custom themes — turns out hacking together HTML & CSS taught me a lot about coding!
            </p>
            <p>
              {personalData.bio}
            </p>
            <p>
              When I'm not coding, you'll usually find me exploring new technologies, contributing to open source, or enjoying a good cup of coffee while reading about UI/UX trends.
            </p>
            
            <div className="pt-4">
              <p className="mb-4 text-gray-300">Here are a few technologies I've been working with recently:</p>
              <ul className="grid grid-cols-2 gap-2 font-mono text-sm text-accent">
                <li className="flex items-center before:content-['▹'] before:mr-2">React.js</li>
                <li className="flex items-center before:content-['▹'] before:mr-2">Tailwind CSS</li>
                <li className="flex items-center before:content-['▹'] before:mr-2">JavaScript (ES6+)</li>
                <li className="flex items-center before:content-['▹'] before:mr-2">Node.js</li>
              </ul>
            </div>
          </motion.div>

          {/* Profile Image Column */}
         
        </div>
      </div>
    </section>
  );
};

export default About;
