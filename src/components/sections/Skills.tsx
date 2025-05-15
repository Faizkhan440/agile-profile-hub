
import React, { useEffect, useRef } from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Check, Code, Database, Server, Terminal, Layout } from 'lucide-react';

interface SkillCategory {
  name: string;
  icon: React.ElementType;
  skills: string[];
}

const Skills = () => {
  const categories: SkillCategory[] = [
    {
      name: "Frontend",
      icon: Layout,
      skills: ["React", "TypeScript", "Next.js", "Redux", "HTML5", "CSS3/SCSS", "TailwindCSS", "Material UI", "Framer Motion"]
    },
    {
      name: "Backend",
      icon: Server,
      skills: ["Node.js", "Express", "NestJS", "Django", "Flask", "RESTful APIs", "GraphQL", "WebSockets"]
    },
    {
      name: "Databases",
      icon: Database,
      skills: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Firebase", "Supabase", "Prisma ORM", "TypeORM"]
    },
    {
      name: "DevOps & Tools",
      icon: Terminal,
      skills: ["Git", "GitHub Actions", "Docker", "AWS", "CI/CD", "Jest", "Testing Library", "Webpack", "Vite"]
    },
    {
      name: "Languages & Others",
      icon: Code,
      skills: ["JavaScript", "TypeScript", "Python", "Java", "C++", "Bash", "SQL", "GraphQL"]
    }
  ];
  
  // Refs for animation
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === headerRef.current) {
              entry.target.classList.add('animate-fade-in-up');
              entry.target.classList.remove('opacity-0');
            }
            // For the card elements
            cardsRef.current.forEach((card, index) => {
              if (entry.target === card) {
                setTimeout(() => {
                  card?.classList.add('animate-fade-in-up');
                  card?.classList.remove('opacity-0', 'translate-y-10');
                }, index * 100); // Staggered animation
              }
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      if (headerRef.current) {
        observer.unobserve(headerRef.current);
      }
      cardsRef.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="section-container relative">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-40 w-96 h-96 bg-accent/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-accent/30 rounded-full filter blur-3xl"></div>
      </div>
      
      <h2 ref={headerRef} className="section-title opacity-0">
        <span className="text-accent font-mono mr-2">03.</span> Skills & Expertise
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-between">
        {categories.map((category, index) => (
          <div
            key={category.name}
            ref={el => cardsRef.current[index] = el}
            className="opacity-0 translate-y-10 transition-all duration-700"
          >
            <Card className="bg-card/50 glass-effect border-none shadow-lg h-full overflow-hidden hover:shadow-accent/20 transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-lg bg-accent/10 mr-3">
                    <category.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{category.name}</h3>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  {category.skills.map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="outline" 
                      className="bg-background/60 border-accent/20 text-muted-foreground px-3 py-1 flex items-center gap-1 hover:bg-accent/10 transition-colors"
                    >
                      <Check className="h-3 w-3 text-accent" />
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
