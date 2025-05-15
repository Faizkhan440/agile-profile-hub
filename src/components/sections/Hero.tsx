
import React from 'react';
import { Link } from 'react-scroll';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center pt-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="animate-fade-in-up">
          <p className="text-highlight mb-5 font-mono">Hi, my name is</p>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-light mb-4">
            John Doe.
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold text-slate mb-6">
            I build things for the web.
          </h2>
          <p className="text-slate max-w-lg mb-12 text-lg">
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
            >
              <Button className="bg-highlight hover:bg-highlight/90 text-navy font-medium">
                Check out my work
              </Button>
            </Link>
            <a 
              href="/resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
            >
              <Button variant="outline" className="border-highlight text-highlight hover:bg-highlight/10">
                Download Resume
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
