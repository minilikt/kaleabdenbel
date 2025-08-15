"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Code2, Smartphone, Globe, Database, Palette, Zap } from 'lucide-react';

export const Services: React.FC = () => {
  const services = [
    {
      icon: <Globe className="h-8 w-8 text-primary" />,
      title: "Web Development",
      description: "Full-stack web applications built with modern technologies for optimal performance and user experience.",
      features: ["Responsive Design", "SEO Optimization", "Progressive Web Apps", "E-commerce Solutions"],
      price: "Starting at $2,500",
      popular: true
    },
    {
      icon: <Smartphone className="h-8 w-8 text-primary" />,
      title: "Mobile Development",
      description: "Cross-platform mobile applications that work seamlessly on both iOS and Android devices.",
      features: ["Native Performance", "Cross-platform", "App Store Deployment", "Push Notifications"],
      price: "Starting at $3,500",
      popular: false
    },
    {
      icon: <Database className="h-8 w-8 text-primary" />,
      title: "Backend Development",
      description: "Robust server-side solutions with secure APIs, databases, and cloud infrastructure.",
      features: ["REST/GraphQL APIs", "Database Design", "Cloud Deployment", "Security Implementation"],
      price: "Starting at $2,000",
      popular: false
    },
    {
      icon: <Palette className="h-8 w-8 text-primary" />,
      title: "UI/UX Design",
      description: "User-centered design solutions that enhance usability and create engaging digital experiences.",
      features: ["Wireframing", "Prototyping", "User Research", "Design Systems"],
      price: "Starting at $1,500",
      popular: false
    },
    {
      icon: <Code2 className="h-8 w-8 text-primary" />,
      title: "Code Review & Optimization",
      description: "Comprehensive code audits and performance optimization for existing applications.",
      features: ["Performance Audit", "Code Refactoring", "Security Review", "Best Practices"],
      price: "Starting at $800",
      popular: false
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Technical Consulting",
      description: "Strategic technical guidance to help you make informed decisions about your technology stack.",
      features: ["Architecture Planning", "Technology Selection", "Team Training", "Project Planning"],
      price: "Starting at $150/hr",
      popular: false
    }
  ];

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive development services to bring your digital ideas to life
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className={`relative hover:shadow-xl transition-all duration-300 ${service.popular ? 'ring-2 ring-primary' : ''}`}>
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground px-4 py-1">
                      Most Popular
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-sm">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="border-t border-border pt-4">
                    <Button 
                      onClick={scrollToContact}
                      className="w-full" 
                      variant={service.popular ? "default" : "outline"}
                    >
                      Get Started
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <div className="bg-muted/50 rounded-lg p-8 max-w-2xl mx-auto">
              <h3 className="text-xl font-semibold mb-4">Custom Solutions Available</h3>
              <p className="text-muted-foreground mb-6">
                Have a unique project in mind? I offer custom development solutions 
                tailored to your specific needs and requirements.
              </p>
              <Button onClick={scrollToContact} size="lg">
                Discuss Your Project
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};