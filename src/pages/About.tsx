import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="section-title">About Me</h1>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="card"
          >
            <h2 className="text-2xl font-bold mb-4 text-blue-400">Professional Summary</h2>
            <p className="text-slate-300 leading-relaxed">
              AI Engineer specializing in high-performance LLMs—architected secure LangChain pipelines on AKS with MLflow to reduce inference latency by 20% and accelerate deployments by 40%. MEng EECS (UC Berkeley); proven at leading cross-functional teams to productionize generative AI solutions at scale.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-blue-400">Education</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-white">University of California - Berkeley</h3>
                <p className="text-emerald-400 font-medium">MEng in EECS with a concentration in Data Science and Systems</p>
                <p className="text-slate-400">CGPA: 3.76/4.0 • August 2024 – May 2025</p>
                <p className="text-slate-300 mt-2">
                  <span className="font-medium text-slate-200">Coursework:</span> Parallel Computing, Advance LLM agents, Data Science, Introduction to Robotics
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-white">SRM Institute of Science and Technology, India</h3>
                <p className="text-emerald-400 font-medium">B.Tech in Computer Science and Engineering with specialization in AI and ML</p>
                <p className="text-slate-400">CGPA: 9.05/10.0 • June 2018 - May 2022</p>
                <p className="text-slate-300 mt-2">
                  <span className="font-medium text-slate-200">Coursework:</span> Computer Vision, Artificial Neural Networks, Database Security, Entrepreneurship Management
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="card mb-8">
              <h2 className="text-2xl font-bold mb-4 text-blue-400">Technical Skills</h2>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-2">Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {['Python', 'C++', 'R', 'MySQL', 'C#', 'Dart'].map(skill => (
                    <span key={skill} className="px-3 py-1 bg-slate-700 rounded-full text-sm">{skill}</span>
                  ))}
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-2">Python Libraries</h3>
                <div className="flex flex-wrap gap-2">
                  {['OpenCV', 'PyTorch', 'Langchain', 'Stable diffusion', 'Gymnasium', 'Langraph'].map(skill => (
                    <span key={skill} className="px-3 py-1 bg-slate-700 rounded-full text-sm">{skill}</span>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {['Unity', 'Azure', 'Docker', 'Git', 'Jira', 'DBMS', 'AWS', 'Flutter'].map(skill => (
                    <span key={skill} className="px-3 py-1 bg-slate-700 rounded-full text-sm">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="card">
              <h2 className="text-2xl font-bold mb-4 text-blue-400">Contact Information</h2>
              <ul className="space-y-3 text-slate-300">
                <li>
                  <span className="font-medium text-slate-200">Email:</span> vkstark@berkeley.edu
                </li>
                {/* <li>
                  <span className="font-medium text-slate-200">Phone:</span> (510) 833 5337
                </li> */}
                <li>
                  <span className="font-medium text-slate-200">LinkedIn:</span> linkedin.com/in/vksd24
                </li>
                <li>
                  <span className="font-medium text-slate-200">GitHub:</span> github.com/vkstark
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
