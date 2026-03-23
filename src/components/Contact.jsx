import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { personalData } from '../data/mockData';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-primary relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[400px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 max-w-4xl relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, amount: 0.2 }}
           transition={{ duration: 0.6 }}
           className="text-center mb-16"
        >
           <h4 className="text-accent font-mono mb-4 text-sm flex items-center justify-center">
             <span className="mr-2"></span> What's Next?
           </h4>
           <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Get In Touch</h2>
           <p className="text-gray-400 text-lg max-w-xl mx-auto leading-relaxed">
             Although I'm currently looking for an new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
           </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-12 bg-secondary/50 p-8 md:p-12 rounded-2xl border border-gray-800 shadow-2xl backdrop-blur-sm relative overflow-hidden group">
          
          {/* Subtle neon glow on hover */}
          <div className="absolute -inset-[1px] bg-gradient-to-r from-accent to-purple-500 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none" />

          {/* Contact Info */}
          <motion.div 
            className="md:w-1/3 flex flex-col justify-center space-y-8 relative z-10"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Let's Connect</h3>
              <p className="text-gray-400 text-sm">Fill out the form and I'll get back to you within 24 hours.</p>
            </div>

            <div className="space-y-6">
              <a href={`mailto:${personalData.email}`} className="flex items-center gap-4 text-gray-300 hover:text-accent transition-all duration-300 hover:translate-x-2">
                <FaEnvelope size={20} />
                <span>{personalData.email}</span>
              </a>
              <a href={personalData.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-accent transition-all duration-300 hover:translate-x-2">
                <FaLinkedin size={20} />
                <span>LinkedIn</span>
              </a>
              <a href={personalData.github} target="_blank" rel="noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-accent transition-all duration-300 hover:translate-x-2">
                <FaGithub size={20} />
                <span>GitHub</span>
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            className="md:w-2/3 relative z-10"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="relative group/input">
                <input type="text" id="name" required className="block px-4 pb-2.5 pt-4 w-full text-sm text-gray-100 bg-primary/80 rounded-lg border border-gray-700 appearance-none focus:outline-none focus:ring-0 focus:border-accent peer transition-colors duration-300" placeholder=" " />
                <label htmlFor="name" className="absolute text-sm text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-primary px-2 peer-focus:px-2 peer-focus:text-accent peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-3 rounded-md">Your Name</label>
              </div>

              <div className="relative group/input">
                <input type="email" id="email" required className="block px-4 pb-2.5 pt-4 w-full text-sm text-gray-100 bg-primary/80 rounded-lg border border-gray-700 appearance-none focus:outline-none focus:ring-0 focus:border-accent peer transition-colors duration-300" placeholder=" " />
                <label htmlFor="email" className="absolute text-sm text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-primary px-2 peer-focus:px-2 peer-focus:text-accent peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-3 rounded-md">Your Email</label>
              </div>

              <div className="relative group/input">
                <textarea id="message" rows="4" required className="block px-4 pb-2.5 pt-4 w-full text-sm text-gray-100 bg-primary/80 rounded-lg border border-gray-700 appearance-none focus:outline-none focus:ring-0 focus:border-accent peer resize-none transition-colors duration-300" placeholder=" "></textarea>
                <label htmlFor="message" className="absolute text-sm text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-primary px-2 peer-focus:px-2 peer-focus:text-accent peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-6 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-3 rounded-md">Your Message</label>
              </div>

              <button type="submit" className="w-full text-primary bg-accent hover:bg-white focus:ring-4 focus:outline-none focus:ring-accent/50 font-medium rounded-lg text-sm px-5 py-4 text-center transition-all duration-300 font-mono tracking-wider shadow-[0_0_15px_rgba(56,189,248,0.2)] hover:shadow-[0_0_25px_rgba(56,189,248,0.5)] hover:-translate-y-1">
                Say Hello
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
