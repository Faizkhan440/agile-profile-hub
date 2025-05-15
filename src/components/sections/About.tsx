
import React, { useEffect, useRef } from 'react';

const About = () => {
  const skills = [
    'JavaScript (ES6+)', 'TypeScript', 'React', 'Node.js', 
    'Next.js', 'Express', 'GraphQL', 'Tailwind CSS',
    'MongoDB', 'PostgreSQL', 'AWS', 'Docker'
  ];

  // Refs for animation elements
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (textRef.current) {
              textRef.current.classList.add('animate-fade-in-up');
            }
            if (imageRef.current) {
              imageRef.current.classList.add('animate-slide-in-right');
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="about" ref={sectionRef} className="section-container relative">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-40 right-20 w-64 h-64 bg-highlight/20 rounded-full filter blur-3xl"></div>
      </div>
      
      <h2 className="section-title">
        <span className="text-highlight font-mono mr-2">01.</span> About Me
      </h2>

      <div className="grid md:grid-cols-3 gap-12 items-center">
        <div ref={textRef} className="md:col-span-2 space-y-5 opacity-0">
          <p className="text-lg">
            Hello! My name is Faiz, and I enjoy creating things that live on the internet. 
            My interest in web development started back in 2012 when I decided to try editing 
            custom Tumblr themes — turns out hacking together a custom reblog button taught me 
            a lot about HTML & CSS!
          </p>
          <p className="text-lg">
            Fast-forward to today, and I've had the privilege of working at 
            <a href="#" className="text-highlight font-medium hover:underline"> an advertising agency</a>, 
            <a href="#" className="text-highlight font-medium hover:underline"> a start-up</a>, 
            <a href="#" className="text-highlight font-medium hover:underline"> a huge corporation</a>, and 
            <a href="#" className="text-highlight font-medium hover:underline"> a student-led design studio</a>. 
            My main focus these days is building accessible, inclusive products and 
            digital experiences for a variety of clients.
          </p>
          <p className="text-lg">
            When I'm not at the computer, I'm usually rock climbing, hanging out with my wife and 
            two cats, or running around Hyrule searching for Korok seeds.
          </p>

          <h3 className="text-slate-light font-semibold text-xl mt-8 mb-4">Technologies I've been working with:</h3>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-x-2 gap-y-3">
            {skills.map((skill, i) => (
              <li key={i} className="flex items-center">
                <span className="text-highlight mr-2">▹</span>
                <span className="font-mono text-sm">{skill}</span>
              </li>
            ))}
          </ul>
        </div>

        <div ref={imageRef} className="relative group opacity-0">
          <div className="relative rounded-lg overflow-hidden bg-highlight/5 w-full aspect-square">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" 
              alt="Faiz Khan profile" 
              className="mix-blend-luminosity grayscale hover:filter-none transition-all duration-500 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-highlight/10 hover:bg-transparent transition-colors duration-300"></div>
          </div>
          <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-highlight/20 to-highlight/40 opacity-70 blur group-hover:opacity-100 transition duration-300 -z-10 translate-x-2 translate-y-2"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
