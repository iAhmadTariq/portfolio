import React from "react";
import { ExternalLink, Github, Calendar, Code, Database, Smartphone } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const Projects = () => {
  const { ref, isInView, fadeInUp, slideInLeft, slideInRight } = useScrollAnimation();
  
  const projects = [
    {
      title: "Molto Vino",
      period: "Jul 2024 – Present",
      description: "Self-service wine restaurant app with automated dispensers and payment integration",
      technologies: ["Flutter", "Dart", "Bloc", "Clean Architecture", "HTTP", "Payment Gateways", "Stripe"],
      image: "/projects/molto-vino.png",
      featured: true
    },
    {
      title: "SafePak",
      period: "Jan 2025 – May 2025",
      description: "A smart legal aid and emergency response app for public safety in Pakistan, enabling digital FIR filing, SOS alerts, real-time criminal notifications, and AI-powered legal guidance",
      technologies: ["Flutter", "Firebase", "Clean Architecture", "Bloc/Cubit", "Go Router", "get_it", "Dartz", "Supabase"],
      image: "/projects/safe-pak.png",
      featured: true
    },
    {
      title: "Chat Caller App",
      period: "Mar 2024 – May 2024",
      description: "A scalable audio and video calling app with WebRTC and Firebase integration",
      technologies: ["Flutter", "Firebase", "Bloc", "Clean Architecture", "WebRTC", "Dart"],
      image: "/projects/chat-caller.png",
      featured: true
    }
  ];

  const getTechIcon = (tech) => {
    if (tech.toLowerCase().includes('flutter') || tech.toLowerCase().includes('dart')) {
      return <Smartphone className="w-4 h-4" />;
    }
    if (tech.toLowerCase().includes('firebase') || tech.toLowerCase().includes('database') || tech.toLowerCase().includes('supabase')) {
      return <Database className="w-4 h-4" />;
    }
    return <Code className="w-4 h-4" />;
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white" id="projects">
      <div className="section-container">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <div className="pulse-chip mx-auto mb-6">
              <span>Featured Projects</span>
            </div>
            <h2 className="section-title mb-6">
              Building Solutions That <br className="hidden sm:inline" />
              <span className="text-pulse-500">Make a Difference</span>
            </h2>
            <p className="section-subtitle mx-auto">
              Explore some of my recent projects showcasing mobile app development expertise
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={index % 2 === 0 ? slideInLeft : slideInRight}
                transition={{ delay: index * 0.2 }}
                className="glass-card p-6 hover-lift group"
              >
                <div className="mb-4 rounded-lg overflow-hidden">
                  <div className="relative w-full" style={{ paddingBottom: '42.85%' }}>
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-pulse-500 transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Calendar size={14} />
                      <span>{project.period}</span>
                    </div>
                  </div>
                  {project.featured && (
                    <span className="px-2 py-1 bg-pulse-100 text-pulse-800 text-xs font-medium rounded-full">
                      Featured
                    </span>
                  )}
                </div>

                <p className="text-gray-700 mb-4">{project.description}</p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="inline-flex items-center gap-1 px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                        {getTechIcon(tech)}
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  <button className="flex items-center gap-2 px-4 py-2 bg-pulse-500 text-white rounded-lg hover:bg-pulse-600 transition-colors text-sm">
                    <ExternalLink size={14} />
                    View Project
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:border-pulse-500 hover:text-pulse-500 transition-colors text-sm">
                    <Github size={14} />
                    Source Code
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeInUp}
            className="text-center mt-12"
          >
            <p className="text-gray-600 mb-4">Want to see more of my work?</p>
            <a href="https://github.com/iAhmadTariq" target="_blank" rel="noopener noreferrer" className="button-primary inline-flex items-center gap-2">
              <Github size={16} />
              View All Projects on GitHub
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;