import { motion } from 'framer-motion';
import { Mail, MapPin } from 'lucide-react';
import RobotScene from '../components/RobotScene';

const Contact = () => {

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="section-title">Get In Touch</h1>
          <p className="text-slate-300 max-w-3xl mb-12">
            Feel free to reach out if you're looking for an AI Engineer, have a question, or just want to connect.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="card h-full">
              <h2 className="text-2xl font-bold mb-6 text-blue-400">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-slate-700 rounded-lg">
                    <Mail className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white">Email</h3>
                    <p className="text-slate-300">vkstark@berkeley.edu</p>
                  </div>
                </div>
                
                {/* <div className="flex items-start gap-4">
                  <div className="p-3 bg-slate-700 rounded-lg">
                    <Phone className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white">Phone</h3>
                    <p className="text-slate-300">(510) 833 5337</p>
                  </div>
                </div> */}
                
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-slate-700 rounded-lg">
                    <MapPin className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white">Location</h3>
                    <p className="text-slate-300">Berkeley, California</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h3 className="text-lg font-medium text-white mb-4">Connect with me</h3>
                <div className="flex gap-4">
                  <a 
                    href="https://github.com/vkstark" 
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="p-3 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors"
                  >
                    <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2C6.477 2 2 6.477 2 12C2 16.418 4.865 20.166 8.84 21.49C9.34 21.581 9.52 21.272 9.52 21.008C9.52 20.768 9.512 20.058 9.508 19.258C6.726 19.858 6.139 17.92 6.139 17.92C5.685 16.818 5.029 16.51 5.029 16.51C4.121 15.935 5.098 15.948 5.098 15.948C6.101 16.018 6.629 16.933 6.629 16.933C7.521 18.437 8.97 17.968 9.54 17.713C9.631 17.082 9.889 16.643 10.175 16.418C7.955 16.193 5.62 15.372 5.62 11.717C5.62 10.657 6.01 9.792 6.649 9.121C6.546 8.858 6.203 7.918 6.747 6.644C6.747 6.644 7.587 6.38 9.497 7.506C10.313 7.291 11.15 7.181 12 7.177C12.85 7.181 13.687 7.291 14.503 7.506C16.413 6.38 17.253 6.644 17.253 6.644C17.797 7.918 17.454 8.858 17.351 9.121C17.99 9.792 18.38 10.657 18.38 11.717C18.38 15.382 16.045 16.193 13.825 16.418C14.171 16.693 14.49 17.242 14.49 18.077C14.49 19.273 14.48 20.679 14.48 21.008C14.48 21.272 14.66 21.581 15.16 21.49C19.135 20.166 22 16.418 22 12C22 6.477 17.523 2 12 2Z" fill="currentColor"/>
                    </svg>
                  </a>
                  <a 
                    href="https://linkedin.com/in/vksd24" 
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="p-3 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors"
                  >
                    <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19 3C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19ZM18.5 18.5V13.2C18.5 12.3354 18.1565 11.5062 17.5452 10.8948C16.9338 10.2835 16.1046 9.94 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17C14.6813 12.17 15.0374 12.3175 15.2999 12.5801C15.5625 12.8426 15.71 13.1987 15.71 13.57V18.5H18.5ZM6.88 8.56C7.32556 8.56 7.75288 8.383 8.06794 8.06794C8.383 7.75288 8.56 7.32556 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19C6.43178 5.19 6.00193 5.36805 5.68499 5.68499C5.36805 6.00193 5.19 6.43178 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56ZM8.27 18.5V10.13H5.5V18.5H8.27Z" fill="currentColor"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="card">
              <h2 className="text-2xl font-bold mb-6 text-blue-400">AI Chat Assistant Architecture</h2>
              <p className="text-slate-300 mb-6">
                I specialize in building intelligent conversational AI systems with advanced RAG pipelines, multi-agent orchestration, and robust guardrails. Interact with the 3D model below - a small demonstration of the human-like interaction capabilities I implement in production.
              </p>
              
              <div className="flex flex-col items-center">
                <RobotScene />
                
                <a 
                  href="mailto:vkstark@berkeley.edu" 
                  className="btn-primary flex items-center justify-center gap-2 mt-6 w-full md:w-auto md:px-12"
                >
                  Email Me <Mail size={18} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
