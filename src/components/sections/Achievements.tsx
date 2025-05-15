
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface Achievement {
  title: string;
  issuer?: string;
  date: string;
  description: string;
  type: 'certification' | 'achievement';
}

const Achievements = () => {
  const items: Achievement[] = [
    {
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "December 2022",
      description: "Professional certification validating expertise in designing distributed applications and systems on AWS.",
      type: "certification"
    },
    {
      title: "1st Place - National Hackathon",
      date: "May 2021",
      description: "Led a team of 4 developers to create an AI-powered accessibility tool for visually impaired users, winning first place among 120 teams.",
      type: "achievement"
    },
    {
      title: "Google Cloud Professional Developer",
      issuer: "Google",
      date: "March 2021",
      description: "Certification for designing, building, and managing applications on Google Cloud Platform.",
      type: "certification"
    },
    {
      title: "Open Source Contributor of the Year",
      issuer: "GitHub",
      date: "January 2021",
      description: "Recognized for significant contributions to various open-source projects, including React ecosystem tools and accessibility libraries.",
      type: "achievement"
    },
    {
      title: "Advanced React & GraphQL",
      issuer: "Frontend Masters",
      date: "October 2020",
      description: "Completed intensive course on advanced React patterns, GraphQL, and state management.",
      type: "certification"
    }
  ];

  // Separate certifications and achievements
  const certifications = items.filter(item => item.type === 'certification');
  const achievements = items.filter(item => item.type === 'achievement');

  return (
    <section id="achievements" className="section-container">
      <h2 className="section-title">
        <span className="text-highlight font-mono mr-2">05.</span> Achievements & Certifications
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-slate-light text-xl font-semibold mb-6 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-highlight mr-2">
              <path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12"></path>
              <path d="M15 7a3 3 0 1 0-3.75 2.9"></path>
              <rect x="9" y="17" width="6" height="4"></rect>
            </svg>
            Achievements
          </h3>
          <div className="space-y-4">
            {achievements.map((item, index) => (
              <Card key={index} className="bg-navy-light border-navy-light">
                <CardContent className="p-5">
                  <h4 className="text-slate-light font-semibold mb-1">{item.title}</h4>
                  <p className="text-sm text-slate mb-2 font-mono">{item.date}</p>
                  <p className="text-slate">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-slate-light text-xl font-semibold mb-6 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-highlight mr-2">
              <rect x="4" y="5" width="16" height="16" rx="2"></rect>
              <path d="m8 3 4 4 4-4"></path>
              <path d="M10 12h4"></path>
              <path d="M12 10v4"></path>
            </svg>
            Certifications
          </h3>
          <div className="space-y-4">
            {certifications.map((item, index) => (
              <Card key={index} className="bg-navy-light border-navy-light">
                <CardContent className="p-5">
                  <h4 className="text-slate-light font-semibold mb-1">{item.title}</h4>
                  <p className="text-highlight text-sm mb-1">{item.issuer}</p>
                  <p className="text-sm text-slate mb-2 font-mono">{item.date}</p>
                  <p className="text-slate">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
