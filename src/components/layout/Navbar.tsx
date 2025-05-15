
import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Button } from '@/components/ui/button';

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
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-navy shadow-lg py-4' : 'py-6'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        <Link
          to="home"
          spy={true}
          smooth={true}
          duration={500}
          className="text-highlight text-2xl font-mono cursor-pointer"
        >
          JD
        </Link>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-slate-light"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
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
            className="ml-4 resume-button text-sm font-mono"
          >
            Resume
          </a>
        </nav>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="md:hidden fixed top-[76px] right-0 bottom-0 w-3/4 bg-navy-light p-6 shadow-xl transform transition-transform">
            <nav>
              <ol className="flex flex-col space-y-4">
                {navItems.map((item, i) => (
                  <li key={i} className="border-b border-slate-dark pb-2">
                    <Link
                      to={item.to}
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={500}
                      activeClass="active"
                      className="nav-link block py-2"
                      onClick={toggleMenu}
                    >
                      <span className="text-highlight font-mono mr-2">0{i + 1}.</span> {item.name}
                    </Link>
                  </li>
                ))}
              </ol>
              <a 
                href="/resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="mt-6 resume-button text-sm font-mono inline-block"
              >
                Resume
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
