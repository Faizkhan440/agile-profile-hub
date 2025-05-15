
import React from 'react';

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
    <section id="education" className="section-container">
      <h2 className="section-title">
        <span className="text-highlight font-mono mr-2">04.</span> Education
      </h2>

      <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-dark before:to-transparent">
        {educations.map((edu, index) => (
          <div key={index} className="relative flex items-start md:items-center">
            {/* Timeline circle */}
            <div className="absolute left-0 md:left-1/2 mt-1.5 md:mt-0 md:-translate-x-1/2 top-5 md:top-1/2 md:-mt-1.5 h-3 w-3 rounded-full border-2 border-highlight bg-navy"></div>
            
            {/* Education Card */}
            <div className={`ml-10 md:ml-0 ${
              index % 2 === 0 ? 'md:mr-auto md:pr-16 md:text-right' : 'md:ml-auto md:pl-16'
            } pb-5`}>
              <div className="bg-navy-light p-5 rounded-md shadow-md transform transition-all group-hover:translate-y-[-3px] group-hover:shadow-lg">
                <div className="flex flex-col">
                  <h3 className="text-xl font-semibold text-slate-light">{edu.degree}</h3>
                  <p className="text-highlight font-medium mb-1">{edu.institution}</p>
                  <p className="text-sm text-slate mb-3 font-mono">{edu.period}</p>
                  <p className="text-slate">{edu.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
