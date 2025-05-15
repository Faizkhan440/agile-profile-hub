
import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Button } from '@/components/ui/button';
import { Menu, X, FileText } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const navItems = [
    { name: 'About', to: 'about' },
    { name: 'Projects', to: 'projects' },
    { name: 'Experience', to: 'experience' },
    { name: 'Education', to: 'education' },
    { name: 'Contact', to: 'contact' },
  ];

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled ? 'bg-navy/90 backdrop-blur-md shadow-lg py-4' : 'py-6'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        <Link
          to="home"
          spy={true}
          smooth={true}
          duration={500}
          className="text-highlight text-2xl font-mono cursor-pointer relative group"
        >
          FK
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-highlight transition-all duration-300 group-hover:w-full"></span>
        </Link>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-slate-light p-2 rounded-md hover:bg-navy-light/50 transition-colors"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center">
          <ol className="flex space-x-1">
            {navItems.map((item, i) => (
              <li key={i}>
                <Link
                  to={item.to}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  activeClass="active"
                  className="nav-link text-sm"
                >
                  <span className="text-highlight font-mono mr-1">0{i + 1}.</span> {item.name}
                </Link>
              </li>
            ))}
          </ol>
          <a 
            href="/resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="ml-4 resume-button text-sm font-mono inline-flex items-center"
          >
            <FileText className="mr-2 h-4 w-4" />
            Resume
          </a>
        </nav>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="md:hidden fixed inset-0 top-[72px] bg-navy-dark/95 backdrop-blur-lg z-50 flex flex-col justify-center items-center">
            <nav className="w-full px-12">
              <ol className="flex flex-col space-y-6 items-center">
                {navItems.map((item, i) => (
                  <li key={i} className="w-full text-center">
                    <Link
                      to={item.to}
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={500}
                      activeClass="active"
                      className="nav-link text-lg inline-block py-2"
                      onClick={toggleMenu}
                    >
                      <span className="text-highlight font-mono mr-2">0{i + 1}.</span> {item.name}
                    </Link>
                  </li>
                ))}
              </ol>
              <div className="flex justify-center mt-10">
                <a 
                  href="/resume.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="resume-button text-sm font-mono inline-flex items-center"
                >
                  <FileText className="mr-2 h-4 w-4" />
                  Resume
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
