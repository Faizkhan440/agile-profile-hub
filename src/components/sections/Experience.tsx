
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Briefcase } from 'lucide-react';

interface Job {
  company: string;
  title: string;
  period: string;
  responsibilities: string[];
}

const Experience = () => {
  const jobs: Job[] = [
    {
      company: "Tech Innovations Inc.",
      title: "Senior Frontend Developer",
      period: "January 2022 - Present",
      responsibilities: [
        "Led the development of a new customer portal using React, TypeScript, and GraphQL, resulting in a 35% increase in user engagement.",
        "Mentored a team of 4 junior developers, conducting code reviews and pair programming sessions.",
        "Optimized application performance by implementing lazy loading and code splitting, reducing load time by 45%.",
        "Collaborated with UX designers to implement accessible, responsive interfaces following WCAG guidelines."
      ]
    },
    {
      company: "Digital Solutions Ltd.",
      title: "Full Stack Developer",
      period: "March 2020 - December 2021",
      responsibilities: [
        "Built and maintained multiple RESTful APIs using Node.js and Express, serving data to various client applications.",
        "Developed a real-time notification system using WebSockets, improving user response time by 60%.",
        "Implemented automated testing using Jest and React Testing Library, achieving 80% test coverage.",
        "Contributed to the migration from a monolithic architecture to a microservices-based approach."
      ]
    },
    {
      company: "Webcraft Studio",
      title: "Frontend Developer",
      period: "June 2018 - February 2020",
      responsibilities: [
        "Created responsive web applications for clients across various industries using React and SCSS.",
        "Developed and maintained a component library that reduced development time for new projects by 40%.",
        "Collaborated with backend engineers to define API contracts and integrate client-side applications.",
        "Implemented A/B testing strategies that led to a 25% improvement in conversion rates."
      ]
    },
    {
      company: "Code Ventures",
      title: "Web Development Intern",
      period: "January 2018 - May 2018",
      responsibilities: [
        "Assisted senior developers in building web applications using JavaScript, HTML, and CSS.",
        "Created and maintained documentation for internal development tools and processes.",
        "Participated in daily stand-ups and sprint planning meetings, gaining experience in Agile methodologies.",
        "Developed a tool for internal use that automated repetitive tasks, saving 5 hours per week."
      ]
    }
  ];

  return (
    <section id="experience" className="section-container bg-gradient-to-b from-navy to-navy-dark relative">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute bottom-40 left-1/4 w-72 h-72 bg-highlight/20 rounded-full filter blur-3xl"></div>
      </div>
      
      <h2 className="section-title">
        <span className="text-highlight font-mono mr-2">03.</span> Where I've Worked
      </h2>

      <div className="max-w-3xl mx-auto">
        <div className="flex items-center mb-8 text-slate-light">
          <Briefcase className="w-6 h-6 mr-3 text-highlight" />
          <h3 className="text-xl font-medium">Work Experience</h3>
        </div>
        
        <Tabs defaultValue={jobs[0].company} className="w-full">
          <TabsList className="mb-8 flex flex-wrap bg-transparent h-auto p-0 border-b border-muted space-x-0">
            {jobs.map((job) => (
              <TabsTrigger 
                key={job.company} 
                value={job.company}
                className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-highlight data-[state=active]:text-highlight px-5 py-3 rounded-none font-mono text-sm"
              >
                {job.company}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {jobs.map((job) => (
            <TabsContent 
              key={job.company} 
              value={job.company}
              className="animate-fade-in-up bg-navy-light/30 glass-effect rounded-lg p-6 shadow-lg"
            >
              <div>
                <h3 className="text-xl text-slate-light mb-1">
                  {job.title} <span className="text-highlight">@ {job.company}</span>
                </h3>
                <p className="font-mono text-sm text-slate mb-6">{job.period}</p>
                <ul className="space-y-4">
                  {job.responsibilities.map((resp, i) => (
                    <li key={i} className="flex">
                      <span className="text-highlight mr-3 flex-shrink-0">▹</span>
                      <span className="text-slate/90">{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default Experience;
