
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { AtSign, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="section-container relative">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-highlight/20 rounded-full filter blur-3xl"></div>
      </div>
      
      <h2 className="section-title">
        <span className="text-highlight font-mono mr-2">06.</span> Get In Touch
      </h2>
      
      <div className="max-w-2xl mx-auto text-center mb-14">
        <p className="text-slate text-lg">
          I'm currently looking for new opportunities, and my inbox is always open. 
          Whether you have a question, a project idea, or just want to say hi, I'll do my best to get back to you!
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="bg-navy-light/50 glass-effect p-8 rounded-xl shadow-xl">
          <h3 className="text-slate-light text-xl font-semibold mb-6">Send me a message</h3>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-3">
              <Label htmlFor="name" className="text-slate-light">Name</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Smith"
                required
                className="bg-navy/70 border-muted focus:border-highlight"
              />
            </div>
            
            <div className="grid gap-3">
              <Label htmlFor="email" className="text-slate-light">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                required
                className="bg-navy/70 border-muted focus:border-highlight"
              />
            </div>
            
            <div className="grid gap-3">
              <Label htmlFor="subject" className="text-slate-light">Subject</Label>
              <Input
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Project Inquiry"
                required
                className="bg-navy/70 border-muted focus:border-highlight"
              />
            </div>
            
            <div className="grid gap-3">
              <Label htmlFor="message" className="text-slate-light">Message</Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="What would you like to discuss?"
                required
                className="min-h-[150px] bg-navy/70 border-muted focus:border-highlight resize-none"
              />
            </div>
            
            <Button 
              type="submit" 
              className="bg-highlight hover:bg-highlight-dark text-navy font-medium w-full group"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
              <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </form>
        </div>
        
        <div className="space-y-8">
          <h3 className="text-slate-light text-xl font-semibold mb-8">Contact Information</h3>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="bg-navy-light/50 glass-effect p-3 rounded-lg mr-4">
                <AtSign className="text-highlight h-5 w-5" />
              </div>
              <div>
                <p className="text-slate-light font-medium mb-1">Email</p>
                <a 
                  href="mailto:john.doe@example.com" 
                  className="text-slate hover:text-highlight transition-colors"
                >
                  john.doe@example.com
                </a>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-navy-light/50 glass-effect p-3 rounded-lg mr-4">
                <MapPin className="text-highlight h-5 w-5" />
              </div>
              <div>
                <p className="text-slate-light font-medium mb-1">Location</p>
                <p className="text-slate">
                  San Francisco, CA
                </p>
              </div>
            </div>
          </div>
          
          <div className="pt-8">
            <p className="text-slate-light font-medium mb-6">Social Media</p>
            <div className="flex space-x-5">
              <a 
                href="https://github.com/yourusername" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="GitHub"
                className="bg-navy-light/50 glass-effect p-4 rounded-lg text-slate hover:text-highlight transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://linkedin.com/in/yourusername" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="LinkedIn"
                className="bg-navy-light/50 glass-effect p-4 rounded-lg text-slate hover:text-highlight transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://twitter.com/yourusername" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Twitter"
                className="bg-navy-light/50 glass-effect p-4 rounded-lg text-slate hover:text-highlight transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="pt-8">
            <a href="/resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="resume-button text-sm font-mono inline-flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
