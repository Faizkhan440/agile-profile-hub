
import React, { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Award, FileCheck } from 'lucide-react';

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

  // Animation elements
  const sectionRef = useRef<HTMLElement>(null);
  const achievementsRef = useRef<HTMLDivElement>(null);
  const certificationsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === achievementsRef.current) {
              entry.target.classList.add('animate-fade-in-up');
              entry.target.classList.remove('opacity-0', 'translate-y-10');
            }
            if (entry.target === certificationsRef.current) {
              entry.target.classList.add('animate-fade-in-up');
              entry.target.classList.remove('opacity-0', 'translate-y-10');
              // Fix: Use data attribute instead of direct style assignment
              entry.target.setAttribute('data-delay', '200');
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    if (achievementsRef.current) {
      observer.observe(achievementsRef.current);
    }
    if (certificationsRef.current) {
      observer.observe(certificationsRef.current);
    }

    return () => {
      if (achievementsRef.current) {
        observer.unobserve(achievementsRef.current);
      }
      if (certificationsRef.current) {
        observer.unobserve(certificationsRef.current);
      }
    };
  }, []);

  return (
    <section id="achievements" ref={sectionRef} className="section-container bg-navy-dark relative">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-40 left-20 w-72 h-72 bg-highlight/20 rounded-full filter blur-3xl"></div>
      </div>
      
      <h2 className="section-title">
        <span className="text-highlight font-mono mr-2">05.</span> Achievements & Certifications
      </h2>

      <div className="grid md:grid-cols-2 gap-10">
        <div 
          ref={achievementsRef} 
          className="opacity-0 translate-y-10 transition-all duration-700"
        >
          <h3 className="text-slate-light text-xl font-semibold mb-6 flex items-center">
            <Award className="text-highlight mr-3 h-6 w-6" />
            Achievements
          </h3>
          <div className="space-y-5">
            {achievements.map((item, index) => (
              <Card 
                key={index} 
                className="bg-navy-light/50 glass-effect border-none shadow-lg card-hover transform transition-all duration-300 hover:-translate-y-2"
              >
                <CardContent className="p-6">
                  <div className="flex flex-col">
                    <h4 className="text-lg text-slate-light font-semibold mb-1">{item.title}</h4>
                    <p className="text-sm text-slate mb-3 font-mono">{item.date}</p>
                    <p className="text-slate/90">{item.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        <div 
          ref={certificationsRef} 
          className="opacity-0 translate-y-10 transition-all duration-700 delay-200"
        >
          <h3 className="text-slate-light text-xl font-semibold mb-6 flex items-center">
            <FileCheck className="text-highlight mr-3 h-6 w-6" />
            Certifications
          </h3>
          <div className="space-y-5">
            {certifications.map((item, index) => (
              <Card 
                key={index} 
                className="bg-navy-light/50 glass-effect border-none shadow-lg card-hover transform transition-all duration-300 hover:-translate-y-2"
              >
                <CardContent className="p-6">
                  <div className="flex flex-col">
                    <h4 className="text-lg text-slate-light font-semibold mb-1">{item.title}</h4>
                    <p className="text-highlight text-sm mb-1">{item.issuer}</p>
                    <p className="text-sm text-slate mb-3 font-mono">{item.date}</p>
                    <p className="text-slate/90">{item.description}</p>
                  </div>
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
