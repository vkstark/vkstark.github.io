import { motion } from 'framer-motion';
import { ExternalLink, Github, Link2 } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: '"Jen" - AI Assistant for Elderly Care',
      description: 'Developed a voice-interactive assistant using Fetch.ai, Gemini, and VAPI, tailored for elderly users.',
      tools: ['Python', 'TensorFlow', 'Feature Engineering', 'VAPI', 'Gemini'],
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop',
    },
    {
      title: '"Gremory" - Personal Chat Application',
      description: 'An open-source Flutter application that serves as a personal assistant, much like ChatGPT, but with a twist — you deploy it, you control it. Use your own models and infrastructure to maintain full control over your data and experience.',
      tools: ['Python', 'Flutter', 'Android/iOS', 'Langchain', 'LLMs', 'Ollama'],
      image: 'https://images.unsplash.com/photo-1607798748738-b15c40d33d57?q=80&w=2070&auto=format&fit=crop',
    },
    {
      title: 'Autonomous Maintenance of Clean Energy Infrastructure',
      description: 'Engineered computer vision algorithms for wind turbine inspection, enhancing accuracy and scalability.',
      tools: ['OpenCV', 'ROS2', 'Decision trees'],
      image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=2070&auto=format&fit=crop',
    },
    {
      title: 'MEDEVAC Wargaming',
      description: 'Built an AI-driven MEDEVAC war game in Unity ML-Agents, deployed to army training units and run by army agents: reducing average planning time by 15% and improved teaching-success rate by 20%.',
      tools: ['C#', 'Unity', 'Game Development', 'Unity ml-agents'],
      image: 'https://images.unsplash.com/photo-1599666520394-50d845fe09c6?q=80&w=2070&auto=format&fit=crop',
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="section-title">Projects</h1>
          <p className="text-slate-300 max-w-3xl mb-12">
            Here are some of the key projects I've worked on that showcase my skills in AI, ML, and software development.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              className="card overflow-hidden group"
              variants={item}
            >
              <div className="h-48 overflow-hidden rounded-lg mb-4">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" 
                />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
              <p className="text-slate-300 mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tools.map((tool, idx) => (
                  <span key={idx} className="px-3 py-1 bg-slate-700 rounded-full text-xs text-slate-300">{tool}</span>
                ))}
              </div>
              
              <div className="flex gap-4 mt-auto">
                <button className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors">
                  <Link2 size={16} />
                  <span>View Project</span>
                </button>
                <button className="flex items-center gap-2 text-slate-400 hover:text-slate-300 transition-colors">
                  <Github size={16} />
                  <span>Source Code</span>
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
