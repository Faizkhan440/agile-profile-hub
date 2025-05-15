
import React from 'react';
import { Link } from 'react-scroll';
import { Button } from '@/components/ui/button';
import { ArrowDown, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center relative pt-20 overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-1/4 w-64 h-64 bg-highlight/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-highlight/10 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 z-10">
        <div className="animate-fade-in-up space-y-6">
          <p className="text-highlight mb-3 font-mono">Hi, my name is</p>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-light mb-3 leading-tight">
            Faiz Khan.
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold text-slate/90 mb-6 leading-tight">
            I build things for the web.
          </h2>
          <p className="text-slate max-w-lg mb-10 text-lg">
            I'm a full-stack developer specializing in building exceptional digital experiences. 
            Currently, I'm focused on building accessible, human-centered products.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="inline-block"
            >
              <Button className="bg-highlight hover:bg-highlight-dark text-navy font-medium group">
                Check out my work
                <ArrowDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
              </Button>
            </Link>
            <a 
              href="/resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
            >
              <Button variant="outline" className="border-highlight text-highlight hover:bg-highlight/10 group">
                Download Resume
                <Download className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
