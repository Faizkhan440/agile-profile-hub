
import React from 'react';

const About = () => {
  const skills = [
    'JavaScript (ES6+)', 'TypeScript', 'React', 'Node.js', 
    'Next.js', 'Express', 'GraphQL', 'Tailwind CSS',
    'MongoDB', 'PostgreSQL', 'AWS', 'Docker'
  ];

  return (
    <section id="about" className="section-container">
      <h2 className="section-title">
        <span className="text-highlight font-mono mr-2">01.</span> About Me
      </h2>

      <div className="grid md:grid-cols-3 gap-10">
        <div className="md:col-span-2">
          <p className="mb-4">
            Hello! My name is John, and I enjoy creating things that live on the internet. 
            My interest in web development started back in 2012 when I decided to try editing 
            custom Tumblr themes — turns out hacking together a custom reblog button taught me 
            a lot about HTML & CSS!
          </p>
          <p className="mb-4">
            Fast-forward to today, and I've had the privilege of working at 
            <a href="#" className="text-highlight"> an advertising agency</a>, 
            <a href="#" className="text-highlight"> a start-up</a>, 
            <a href="#" className="text-highlight"> a huge corporation</a>, and 
            <a href="#" className="text-highlight"> a student-led design studio</a>. 
            My main focus these days is building accessible, inclusive products and 
            digital experiences for a variety of clients.
          </p>
          <p className="mb-4">
            I also recently launched a course that covers everything you need to build a web 
            app with the Spotify API using Node & React.
          </p>
          <p className="mb-8">
            When I'm not at the computer, I'm usually rock climbing, hanging out with my wife and 
            two cats, or running around Hyrule searching for Korok seeds.
          </p>

          <h3 className="text-slate-light font-medium mb-2">Here are a few technologies I've been working with recently:</h3>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-x-2 gap-y-3 mb-10">
            {skills.map((skill, i) => (
              <li key={i} className="flex items-center">
                <span className="text-highlight mr-2">▹</span>
                <span className="font-mono text-sm">{skill}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative group">
          <div className="relative rounded-md overflow-hidden bg-highlight/20 w-full aspect-square">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" 
              alt="John Doe profile" 
              className="mix-blend-multiply grayscale contrast-100 brightness-90 hover:filter-none transition-all duration-300 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-highlight/20 hover:bg-transparent transition-colors duration-300"></div>
          </div>
          <div className="absolute -inset-0.5 rounded-lg bg-highlight/30 opacity-75 blur group-hover:opacity-100 transition duration-300 -z-10 translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
