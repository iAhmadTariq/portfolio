
import React from "react";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      icon: <Github className="w-4 h-4" />,
      href: "https://github.com/iAhmadTariq",
      label: "GitHub"
    },
    {
      icon: <Linkedin className="w-4 h-4" />,
      href: "https://linkedin.com/in/ahmad-tariq-/",
      label: "LinkedIn"
    },
    {
      icon: <Mail className="w-4 h-4" />,
      href: "mailto:dev.ahmadtariq@gmail.com",
      label: "Email"
    }
  ];

  return (
    <footer className="w-full bg-white border-t border-gray-200 py-8">
      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Ahmad Tariq</h3>
            <p className="text-gray-600 text-sm">Flutter Developer • Mobile App Specialist</p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target={social.href.startsWith('mailto:') ? '_self' : '_blank'}
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full hover:bg-pulse-500 hover:text-white transition-colors"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-gray-200 text-center">
          <p className="text-gray-600 text-sm flex items-center justify-center gap-2">
            © {currentYear} Ahmad Tariq. Built with
            <Heart className="w-4 h-4 text-red-500" />
            using React & TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
