import { Card, CardContent } from './ui/card';
import { Code2, Database, Globe, Smartphone } from 'lucide-react';

export const About = () => {
  const highlights = [
    {
      icon: <Code2 className="h-8 w-8 text-primary" />,
      title: "Frontend Development",
      description: "Creating responsive and interactive user interfaces with React, TypeScript, and modern CSS frameworks."
    },
    {
      icon: <Database className="h-8 w-8 text-primary" />,
      title: "Backend Development",
      description: "Building robust APIs and server-side applications with Node.js, Python, and various databases."
    },
    {
      icon: <Globe className="h-8 w-8 text-primary" />,
      title: "Web Applications",
      description: "Full-stack web applications with focus on performance, scalability, and user experience."
    },
    {
      icon: <Smartphone className="h-8 w-8 text-primary" />,
      title: "Mobile Development",
      description: "Cross-platform mobile applications using React Native, Flutter, and modern mobile development practices."
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A passionate full-stack developer with 3+ years of experience in creating 
              digital solutions that make a difference.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-semibold mb-6">My Journey</h3>
              <p className="text-muted-foreground mb-6">
                I started my journey in software development during high school and have since 
                worked with startups and established companies to build amazing digital products. 
                My expertise spans across frontend and backend technologies, with a passion 
                for creating user-centric solutions.
              </p>
              <p className="text-muted-foreground mb-6">
                I believe in writing clean, maintainable code and staying up-to-date with 
                the latest technologies and best practices. When I&apos;m not coding, you can 
                find me contributing to open-source projects or exploring new technologies.
              </p>
              <p className="text-muted-foreground">
                I&apos;m always excited to take on new challenges and collaborate with teams 
                to bring innovative ideas to life.
              </p>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-primary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Code2 className="h-16 w-16 text-primary" />
                  </div>
                  <p className="text-muted-foreground">Professional Developer Photo</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="mb-4 flex justify-center">
                    {highlight.icon}
                  </div>
                  <h4 className="font-semibold mb-2">{highlight.title}</h4>
                  <p className="text-sm text-muted-foreground">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};