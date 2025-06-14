import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Gen AI Engineer - Emerging Lead-Senior Associate",
      company: "State Street Corporation",
      location: "Hyderabad, India",
      period: "April 2023 – July 2024",
      responsibilities: [
        "Integrated Azure OpenAI services via LangChain into a secure Azure MLflow environment and engineered prompt pipelines with LangChain Guardrails, boosting response accuracy by 35%, increasing NLP accuracy for customer support by 18%, reducing inference latency by 20%, and mitigating prompt jailbreaks.",
        "Implemented RAG pipelines for company's private data using Azure Cognitive Services OCR and custom LangChain extraction modules to ingest and chunk PDFs, DOCX, and Excel files into a PGVector, vector database, resulting in a 28% uplift in retrieval accuracy.",
        "Engineered a secure, multi-tenant AI assistant framework and automated model deployment pipeline leveraging LangChain, Azure Key Vault, AKS, ACR, Redis, and FastAPI, resulting in a 60% reduction in provisioning time, a 40% faster rollout, and strict data segregation.",
      ],
      techStack: "Gen AI, LangChain, GPT, Llama, Guardrails, FastAPI, Azure MLflow, PostgreSQL"
    },
    {
      title: "ML Engineer/ Data Scientist - Associate 2",
      company: "State Street Corporation",
      location: "Hyderabad, India",
      period: "July 2022 – March 2023",
      responsibilities: [
        "Compressed financial datasets with Python pipelines and compression libraries, shrinking data footprint from 5.6 GB to 2.1 GB (-60%) and accelerating model training by 25%.",
        "Developed an Isolation Forest anomaly-detection system using Python and Apache Kafka ingestion, enhancing data-validation accuracy and reliability across critical workflows.",
        "Automated end-to-end ML pipelines with AWS S3, Pandas, and Scikit-learn, reducing manual preprocessing and retraining effort by 55%.",
      ],
      techStack: "Python, Isolation Forest, Apache Kafka, AWS S3, Oracle DB, Pandas, Scikit-learn"
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
          <h1 className="section-title">Work Experience</h1>
        </motion.div>

        <motion.div 
          className="mt-12 space-y-12"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {experiences.map((exp, index) => (
            <motion.div 
              key={index} 
              className="card relative border-l-4 border-blue-500 pl-6"
              variants={item}
            >
              <div className="absolute -left-3 top-0 bg-blue-500 rounded-full p-1.5">
                <Briefcase className="h-4 w-4 text-white" />
              </div>
              
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white">{exp.title}</h3>
                  <p className="text-blue-400 font-medium">{exp.company}</p>
                </div>
                <div className="flex items-center gap-2 text-emerald-400 whitespace-nowrap">
                  <Calendar className="h-4 w-4" />
                  <span>{exp.period}</span>
                </div>
              </div>
              
              <p className="text-slate-400 mb-2">{exp.location}</p>
              
              <ul className="space-y-3 mt-4 text-slate-300">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx} className="pl-4 border-l-2 border-slate-700">
                    {resp}
                  </li>
                ))}
              </ul>
              
              <div className="mt-6 pt-4 border-t border-slate-700">
                <span className="text-slate-400 font-medium">Tech Stack:</span>
                <p className="text-emerald-400">{exp.techStack}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;
