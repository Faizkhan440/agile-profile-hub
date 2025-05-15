
import React, { useEffect, useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';
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

  // Animation elements
  const sectionRef = useRef<HTMLElement>(null);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }
        });
      },
      { threshold: 0.15, rootMargin: "-50px 0px" }
    );

    projectRefs.current.forEach((project) => {
      if (project) observer.observe(project);
    });

    return () => {
      projectRefs.current.forEach((project) => {
        if (project) observer.unobserve(project);
      });
    };
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="section-container bg-navy-dark relative">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-60 left-10 w-72 h-72 bg-highlight/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-highlight/10 rounded-full filter blur-3xl"></div>
      </div>
      
      <h2 className="section-title">
        <span className="text-highlight font-mono mr-2">02.</span> Some Things I've Built
      </h2>
      
      <div className="space-y-32">
        {projects.map((project, index) => (
          <div 
            key={index}
            className="relative opacity-0 translate-y-10 transition-all duration-700"
            ref={(el) => (projectRefs.current[index] = el)}
          >
            <div className={`grid md:grid-cols-12 gap-6 items-center ${
              index % 2 === 0 ? '' : 'md:text-right'
            }`}>
              {/* Project Image */}
              <div 
                className={`md:col-span-7 ${
                  index % 2 === 0 ? 'md:col-start-6' : 'md:col-start-1 order-first'
                }`}
              >
                <div className="card-hover relative overflow-hidden rounded-xl shadow-xl">
                  <div className="aspect-video">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-navy/80 hover:bg-navy/50 transition-colors duration-500"></div>
                  </div>
                </div>
              </div>
              
              {/* Project Content */}
              <div 
                className={`md:col-span-6 relative z-10 ${
                  index % 2 === 0 ? 'md:col-start-1 md:text-left' : 'md:col-start-7 md:text-right'
                }`}
              >
                <p className="font-mono text-highlight text-sm mb-2">Featured Project</p>
                <h3 className="text-2xl font-bold text-slate-light mb-4">
                  {project.title}
                </h3>
                
                <Card className="bg-navy-light/70 glass-effect mb-5 p-6 shadow-xl">
                  <p className="text-slate/90">{project.description}</p>
                </Card>
                
                <ul className={`flex flex-wrap text-xs font-mono mb-6 gap-3 text-slate ${
                  index % 2 === 0 ? '' : 'md:justify-end'
                }`}>
                  {project.tech.map((tech, i) => (
                    <li key={i} className="bg-navy-dark px-3 py-1 rounded">{tech}</li>
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
                    <Github size={20} />
                  </a>
                  {project.demo && (
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-slate-light hover:text-highlight transition-colors duration-300"
                      aria-label={`Live demo for ${project.title}`}
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
