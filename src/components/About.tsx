
import React from "react";
import { Code, Database, Smartphone, Globe } from "lucide-react";

const About = () => {
  const skills = [
    {
      category: "Frameworks",
      items: ["Flutter", "Flutterflow", "React"],
      icon: <Code className="w-6 h-6" />
    },
    {
      category: "Databases",
      items: ["Firebase", "MySQL", "PostgreSQL", "MongoDB"],
      icon: <Database className="w-6 h-6" />
    },
    {
      category: "Mobile",
      items: ["Android", "iOS", "Cross-platform"],
      icon: <Smartphone className="w-6 h-6" />
    },
    {
      category: "Others",
      items: ["WebRTC", "Clean Architecture", "MVC", "MVVM", "Dependency Injection"],
      icon: <Globe className="w-6 h-6" />
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white" id="about">
      <div className="section-container">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="pulse-chip mx-auto mb-6">
              <span>About Me</span>
            </div>
            <h2 className="section-title mb-6">
              Passionate About Creating <br className="hidden sm:inline" />
              <span className="text-pulse-500">Mobile Solutions</span>
            </h2>
            <p className="section-subtitle mx-auto">
              I'm a dedicated Flutter developer with a passion for creating scalable, feature-rich mobile applications. 
              With experience in both freelance and full-time roles, I've successfully delivered solutions across diverse domains.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center mb-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">My Journey</h3>
              <div className="space-y-4 text-gray-600">
                <p>
                  Currently pursuing my Bachelor's degree in Computer Science at the National University of Science and Technology (NUST), 
                  I've been actively developing mobile applications since 2023.
                </p>
                <p>
                  My expertise lies in Flutter development, where I've built everything from media management applications 
                  to complex e-commerce solutions with automated systems and secure payment integrations.
                </p>
                <p>
                  I believe in clean architecture, maintainable code, and delivering solutions that not only meet requirements 
                  but exceed expectations in terms of performance and user experience.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="glass-card p-6">
                <h4 className="text-lg font-semibold mb-4 text-center">Key Achievements</h4>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-pulse-100 rounded-full flex items-center justify-center">
                      <span className="text-pulse-600 font-bold text-sm">10+</span>
                    </div>
                    <span className="text-gray-700">Completed projects on Upwork and Freelancer</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-pulse-100 rounded-full flex items-center justify-center">
                      <span className="text-pulse-600 font-bold text-sm">3+</span>
                    </div>
                    <span className="text-gray-700">Apps published on Play Store and App Store</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-pulse-100 rounded-full flex items-center justify-center">
                      <span className="text-pulse-600 font-bold text-sm">5K+</span>
                    </div>
                    <span className="text-gray-700">Downloads across published apps</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-pulse-100 rounded-full flex items-center justify-center">
                      <span className="text-pulse-600 font-bold text-sm">30%</span>
                    </div>
                    <span className="text-gray-700">Reduced development time with clean architecture</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div key={skill.category} className="feature-card bg-white border border-gray-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-pulse-500">
                    {skill.icon}
                  </div>
                  <h4 className="font-semibold text-gray-900">{skill.category}</h4>
                </div>
                <div className="space-y-2">
                  {skill.items.map((item) => (
                    <div key={item} className="text-sm text-gray-600 bg-gray-50 px-3 py-1 rounded-full">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
