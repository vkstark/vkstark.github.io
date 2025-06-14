import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import HeroScene from '../components/HeroScene';

const Home = () => {
  return (
    <div className="relative">
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <HeroScene />
        <div className="container mx-auto px-4 md:px-6 z-10 pt-20">
          <div className="flex flex-col max-w-3xl">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 font-poppins"
            >
              <span className="text-white">Hi, I'm </span>
              <span className="gradient-text">Vishal Kumar</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed"
            >
              AI Engineer specializing in conversational AI assistants and high-performance LLMs.
              I architect secure, context-aware chat systems with advanced RAG, memory, and reasoning capabilities.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <Link to="/contact" className="btn-primary flex items-center gap-2">
                Contact Me <ArrowRight size={18} />
              </Link>
              <Link to="/projects" className="px-6 py-3 border border-slate-600 text-white hover:border-blue-500 font-medium rounded-lg transition-all duration-300">
                View Projects
              </Link>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex gap-5 mt-10"
            >
              <a 
                href="https://github.com/vkstark" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-slate-800 hover:bg-slate-700 rounded-full transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://linkedin.com/in/vksd24" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-slate-800 hover:bg-slate-700 rounded-full transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:vkstark@berkeley.edu" 
                className="p-3 bg-slate-800 hover:bg-slate-700 rounded-full transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
