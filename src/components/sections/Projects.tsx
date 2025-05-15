
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo?: string;
  image: string;
}

const Projects = () => {
  const projects: Project[] = [
    {
      title: "AI Content Generator",
      description: "A web application that uses OpenAI's GPT to generate various types of content, including blog posts, ad copy, and social media captions.",
      tech: ["React", "TypeScript", "Node.js", "Express", "OpenAI API", "Tailwind CSS"],
      github: "https://github.com/username/ai-content-generator",
      demo: "https://ai-content-generator.com",
      image: "https://images.unsplash.com/photo-1674027444485-cec3da58eaaa?q=80&w=1000"
    },
    {
      title: "E-commerce Dashboard",
      description: "A comprehensive dashboard for e-commerce store owners to track sales, inventory, and customer interactions with data visualization.",
      tech: ["Next.js", "TypeScript", "GraphQL", "MongoDB", "Recharts", "Tailwind CSS"],
      github: "https://github.com/username/ecommerce-dashboard",
      image: "https://images.unsplash.com/photo-1555421689-491a97ff2f31?q=80&w=1000"
    },
    {
      title: "Real-time Chat Application",
      description: "A real-time chat application with features like message threading, emoji reactions, and file sharing.",
      tech: ["React", "Socket.io", "Express", "PostgreSQL", "Redis", "Styled Components"],
      github: "https://github.com/username/chat-app",
      demo: "https://chat-app-demo.com",
      image: "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?q=80&w=1000"
    },
    {
      title: "Personal Finance Tracker",
      description: "A tool to help users track expenses, set budgets, and visualize spending patterns over time.",
      tech: ["React", "TypeScript", "Firebase", "Chart.js", "Material UI"],
      github: "https://github.com/username/finance-tracker",
      image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?q=80&w=1000"
    }
  ];

  return (
    <section id="projects" className="section-container">
      <h2 className="section-title">
        <span className="text-highlight font-mono mr-2">02.</span> Some Things I've Built
      </h2>
      
      <div className="space-y-24">
        {projects.map((project, index) => (
          <div 
            key={index}
            className={`relative grid md:grid-cols-12 gap-4 items-center ${
              index % 2 === 0 ? '' : 'md:text-right'
            }`}
          >
            {/* Project Image - Full width overlay on mobile, sided on desktop */}
            <div 
              className={`md:col-span-7 md:relative ${
                index % 2 === 0 ? 'md:col-start-6' : 'md:col-start-1'
              }`}
            >
              <div className="h-full w-full">
                <div className="relative h-0 pb-[56.25%] overflow-hidden rounded-md">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="absolute inset-0 w-full h-full object-cover rounded-md transition-all hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-navy/70 hover:bg-navy/40 transition-colors duration-300"></div>
                </div>
              </div>
            </div>
            
            {/* Project Content */}
            <div 
              className={`md:col-span-6 relative z-10 ${
                index % 2 === 0 ? 'md:col-start-1 md:text-left' : 'md:col-start-7 md:text-right'
              }`}
            >
              <p className="font-mono text-highlight text-sm mb-1">Featured Project</p>
              <h3 className="text-2xl font-bold text-slate-light mb-4">
                {project.title}
              </h3>
              
              <div className="bg-navy-light p-6 rounded-md shadow-xl mb-4">
                <p className="text-slate">{project.description}</p>
              </div>
              
              <ul className={`flex flex-wrap text-sm font-mono mb-8 gap-2 text-slate ${
                index % 2 === 0 ? '' : 'md:justify-end'
              }`}>
                {project.tech.map((tech, i) => (
                  <li key={i}>{tech}</li>
                ))}
              </ul>
              
              <div className={`flex gap-4 ${
                index % 2 === 0 ? '' : 'md:justify-end'
              }`}>
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-slate-light hover:text-highlight transition-colors duration-300"
                  aria-label={`GitHub repository for ${project.title}`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </a>
                {project.demo && (
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-slate-light hover:text-highlight transition-colors duration-300"
                    aria-label={`Live demo for ${project.title}`}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
