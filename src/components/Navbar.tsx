
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Prevent background scrolling when menu is open
    document.body.style.overflow = !isMenuOpen ? 'hidden' : '';
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    
    // Close mobile menu if open
    if (isMenuOpen) {
      setIsMenuOpen(false);
      document.body.style.overflow = '';
    }
  };

  const navItems = [
    { href: "#", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header
      className={cn(
      "fixed top-0 left-0 right-0 z-50 py-2 sm:py-3 md:py-4 transition-all duration-300",
      isScrolled 
        ? "bg-white/80 backdrop-blur-md shadow-sm" 
        : "bg-transparent"
      )}
        >
      <div className="container flex items-center justify-between px-4 sm:px-6 lg:px-8">
      <a 
        href="#" 
        className="flex items-center space-x-4 text-xl text-black font-display font-normal"
        onClick={(e) => {
          e.preventDefault();
          scrollToTop();
        }}
        aria-label="Ahmad Tariq"
      >
        {/* Small image icon on the left */}
        <img 
          src="/profile.png" 
          alt="Logo" 
          className="w-7 h-7 rounded-full object-cover"
          style={{ minWidth: 28, minHeight: 28 }}
        />
        <span>Ahmad Tariq</span>
      </a>


      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-8">
        {navItems.map((item) => (
        <a 
          key={item.label}
          href={item.href} 
          className="nav-link text-black font-sans"
          onClick={(e) => {
          if (item.href === "#") {
            e.preventDefault();
            scrollToTop();
          }
          }}
        >
          {item.label}
        </a>
        ))}
      </nav>

      {/* Mobile menu button */}
      <button 
        className="md:hidden text-black p-3 focus:outline-none" 
        onClick={toggleMenu}
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      </div>

      {/* Mobile Navigation */}
      <div className={cn(
      "fixed inset-0 z-40 bg-white flex flex-col pt-16 px-6 md:hidden transition-all duration-300 ease-in-out",
      isMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"
      )}>
      <nav className="flex flex-col space-y-8 items-center mt-8">
        {navItems.map((item) => (
        <a 
          key={item.label}
          href={item.href} 
          className="text-xl font-medium py-3 px-6 w-full text-center rounded-lg hover:bg-gray-100 text-black font-sans" 
          onClick={(e) => {
          if (item.href === "#") {
            e.preventDefault();
            scrollToTop();
          }
          setIsMenuOpen(false);
          document.body.style.overflow = '';
          }}
        >
          {item.label}
        </a>
        ))}
      </nav>
      </div>
    </header>
    );
};

export default Navbar;
