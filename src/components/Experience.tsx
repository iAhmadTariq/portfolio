
import React from "react";
import { Calendar, MapPin, Building } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "Venus Byte",
      position: "Flutter Developer (Part-Time, Remote)",
      location: "Islamabad, Pakistan",
      period: "Jul 2024 – Present",
      achievements: [
        "Developed a Digital Signage App for Android TVs, managing 200-300 media files with 95% reliability",
        "Built MoltoVino, enabling orders and automated wine dispensing with secure payments",
        "Applied state management (BLoC, Provider, Riverpod) for scalable, maintainable solutions",
        "Reduced development time by 30% with Clean Architecture and reusable components"
      ],
      current: true
    },
    {
      company: "Freelance Platforms",
      position: "Freelance Flutter Developer",
      location: "Upwork.com, Freelancer.com (Remote)",
      period: "Aug 2023 – Present",
      achievements: [
        "Completed 10+ projects on Upwork and Freelancer with 100% client satisfaction",
        "Published 3+ apps on Play Store and App Store, gaining 5,000+ downloads",
        "Developed full-stack apps using Flutter, BLoC, and backend technologies like PHP and Python",
        "Optimized database operations with Firebase, Supabase, MySQL, and MongoDB"
      ],
      current: true
    }
  ];

  const education = [
    {
      institution: "National University of Science and Technology (NUST)",
      degree: "Bachelor's degree, Computer Science",
      location: "Islamabad, Pakistan",
      period: "Aug 2022 – Aug 2026"
    },
    {
      institution: "Government College University (GCU), Lahore",
      degree: "Intermediate, Pre-Engineering",
      location: "Lahore, Pakistan",
      period: "Aug 2020 – Aug 2022"
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gray-50" id="experience">
      <div className="section-container">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="pulse-chip mx-auto mb-6">
              <span>Experience & Education</span>
            </div>
            <h2 className="section-title mb-6">
              My Professional <br className="hidden sm:inline" />
              <span className="text-pulse-500">Journey</span>
            </h2>
            <p className="section-subtitle mx-auto">
              Building innovative mobile solutions and continuously learning new technologies
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Work Experience</h3>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-pulse-200"></div>
              
              {experiences.map((exp, index) => (
                <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-pulse-500 rounded-full border-4 border-white z-10"></div>
                  
                  {/* Content */}
                  <div className={`w-full md:w-5/12 ml-12 md:ml-0 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                    <div className="glass-card p-6 hover-lift">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h4 className="text-lg font-bold text-gray-900">{exp.position}</h4>
                          <div className="flex items-center gap-2 text-pulse-600 font-medium">
                            <Building size={16} />
                            <span>{exp.company}</span>
                          </div>
                        </div>
                        {exp.current && (
                          <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                            Current
                          </span>
                        )}
                      </div>
                      
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-4 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          <Calendar size={14} />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin size={14} />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                      
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="text-sm text-gray-700 flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-pulse-500 rounded-full mt-2 flex-shrink-0"></span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Education</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {education.map((edu, index) => (
                <div key={index} className="glass-card p-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{edu.institution}</h4>
                  <p className="text-pulse-600 font-medium mb-2">{edu.degree}</p>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{edu.period}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin size={14} />
                      <span>{edu.location}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
