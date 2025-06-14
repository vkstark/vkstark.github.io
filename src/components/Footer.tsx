import { ExternalLink, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 pt-12 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-slate-800 pt-8">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold font-poppins mb-2">
              <span className="gradient-text">Vishal</span>
              <span className="text-white"> Kumar</span>
            </h2>
            <p className="text-slate-400 max-w-md">
              AI Engineer specializing in conversational agents, RAG architecture, and multi-agent systems
            </p>
          </div>
          
          <div className="flex space-x-4">
            <a 
              href="https://github.com/vkstark" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 text-slate-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://linkedin.com/in/vksd24" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 text-slate-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:vkstark@berkeley.edu" 
              className="p-2 text-slate-400 hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        <div className="text-center mt-8 text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} Vishal Kumar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
