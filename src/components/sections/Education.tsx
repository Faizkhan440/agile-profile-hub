
import React from 'react';
import { GraduationCap } from 'lucide-react';

interface Education {
  degree: string;
  institution: string;
  period: string;
  description: string;
}

const Education = () => {
  const educations: Education[] = [
    {
      degree: "M.S. in Computer Science",
      institution: "Stanford University",
      period: "2016 - 2018",
      description: "Specialized in Artificial Intelligence and Human-Computer Interaction. Thesis on 'Improving Accessibility in Web Applications through Machine Learning Techniques'."
    },
    {
      degree: "B.S. in Computer Engineering",
      institution: "University of California, Berkeley",
      period: "2012 - 2016",
      description: "Graduated with Honors. Member of the ACM student chapter. Completed capstone project on real-time data visualization for IoT devices."
    },
    {
      degree: "Web Development Bootcamp",
      institution: "Fullstack Academy",
      period: "Summer 2015",
      description: "Intensive 12-week full-stack web development program. Built several full-stack applications using React, Node.js, and PostgreSQL."
    }
  ];

  return (
    <section id="education" className="section-container relative">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-1/4 w-72 h-72 bg-highlight/20 rounded-full filter blur-3xl"></div>
      </div>
      
      <h2 className="section-title">
        <span className="text-highlight font-mono mr-2">04.</span> Education
      </h2>

      <div className="max-w-3xl mx-auto">
        <div className="flex items-center mb-8 text-slate-light">
          <GraduationCap className="w-6 h-6 mr-3 text-highlight" />
          <h3 className="text-xl font-medium">Educational Background</h3>
        </div>
        
        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-highlight/30 before:to-transparent">
          {educations.map((edu, index) => (
            <div key={index} className="relative flex items-start md:items-center group">
              {/* Timeline circle */}
              <div className="absolute left-0 md:left-1/2 mt-1.5 md:mt-0 md:-translate-x-1/2 top-5 md:top-1/2 md:-mt-1.5 h-4 w-4 rounded-full border-2 border-highlight bg-navy shadow-md group-hover:scale-125 transition-transform"></div>
              
              {/* Education Card */}
              <div className={`ml-12 md:ml-0 ${
                index % 2 === 0 ? 'md:mr-auto md:pr-16 md:text-right' : 'md:ml-auto md:pl-16'
              } pb-5 animate-on-scroll`}>
                <div className="bg-navy-light/50 glass-effect p-6 rounded-lg shadow-lg card-hover">
                  <div className="flex flex-col">
                    <h3 className="text-xl font-semibold text-slate-light">{edu.degree}</h3>
                    <p className="text-highlight font-medium mb-1">{edu.institution}</p>
                    <p className="text-sm text-slate mb-3 font-mono">{edu.period}</p>
                    <p className="text-slate/90">{edu.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
