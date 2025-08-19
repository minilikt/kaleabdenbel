"use client"
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Checkbox } from './ui/checkbox';
import { Badge } from './ui/badge';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Briefcase, DollarSign, Calendar, Zap, MessageCircle, Smartphone } from 'lucide-react';
import { ScheduleCallDialog } from './ScheduleCallDialog';
import Link from 'next/link';
import { ContactMethodSelector } from './ContactMethodSelector';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    projectType: '',
    services: [] as string[],
    budget: '',
    timeline: '',
    description: '',
    hasDesigns: '',
    priority: '',
    hearAbout: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSelectChange = (name: string) => (value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleServiceToggle = (service: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }));
  };

  const generateEmailContent = () => {
    const subject = `${formData.projectType || 'Project'} Inquiry from ${formData.name}`;
    
    const body = `Hi Kaleab,

I'm interested in working with you on a project. Here are the details:

CONTACT INFORMATION:
• Name: ${formData.name}
• Email: ${formData.email}
• Company: ${formData.company || 'Not specified'}
• Phone: ${formData.phone || 'Not provided'}

PROJECT DETAILS:
• Project Type: ${formData.projectType || 'Not specified'}
• Services Needed: ${formData.services.length > 0 ? formData.services.join(', ') : 'Not specified'}
• Budget Range: ${formData.budget || 'Not specified'}
• Timeline: ${formData.timeline || 'Not specified'}
• Priority Level: ${formData.priority || 'Not specified'}

PROJECT DESCRIPTION:
${formData.description || 'No description provided'}

ADDITIONAL INFO:
• Do you have existing designs? ${formData.hasDesigns || 'Not specified'}
• How did you hear about me? ${formData.hearAbout || 'Not specified'}

Looking forward to hearing from you!

Best regards,
${formData.name}`;

    return { subject, body };
  };

  const generateTelegramMessage = () => {
    const message = `Hi Kaleab! 👋

I'm ${formData.name} and I'm interested in working with you on a ${formData.projectType || 'project'}.

📋 Quick Details:
• Services: ${formData.services.length > 0 ? formData.services.join(', ') : 'Not specified'}
• Budget: ${formData.budget || 'To discuss'}
• Timeline: ${formData.timeline || 'Flexible'}
• Priority: ${formData.priority || 'Standard'}

💬 Description:
${formData.description || 'Let\'s discuss the details!'}

📞 Contact: ${formData.email}${formData.phone ? ` | ${formData.phone}` : ''}

Would love to chat about this project! 🚀`;

    return message;
  };

  const generateSMSMessage = () => {
    const message = `Hi Kaleab! I'm ${formData.name}. Interested in ${formData.projectType || 'a project'} - ${formData.services.slice(0, 2).join(', ')}${formData.services.length > 2 ? '...' : ''}. Budget: ${formData.budget || 'TBD'}. Priority: ${formData.priority || 'Standard'}. Email: ${formData.email}. Can we discuss? Thanks!`;
    return message;
  };

  const handleEmailSubmit = () => {
    const { subject, body } = generateEmailContent();
    const mailtoLink = `mailto:kaleab@example.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink, '_blank');
  };

  const handleTelegramSubmit = () => {
    const message = generateTelegramMessage();
    const telegramUrl = `https://t.me/Fugitorawesten?text=${encodeURIComponent(message)}`;
    window.open(telegramUrl, '_blank');
  };

  const handleSMSSubmit = () => {
    const message = generateSMSMessage();
    const smsUrl = `sms:+15551234567?body=${encodeURIComponent(message)}`;
    window.open(smsUrl, '_self');
  };

  const projectTypes = [
    'Web Application',
    'Mobile App',
    'E-commerce Platform',
    'Portfolio Website',
    'Corporate Website',
    'Landing Page',
    'API Development',
    'Database Design',
    'UI/UX Design',
    'Code Review',
    'Technical Consulting',
    'Other'
  ];

  const serviceOptions = [
    'Frontend Development',
    'Backend Development',
    'Full-Stack Development',
    'Mobile Development',
    'UI/UX Design',
    'API Integration',
    'Database Setup',
    'DevOps & Deployment',
    'Performance Optimization',
    'Code Review & Audit',
    'Technical Consulting',
    'Maintenance & Support'
  ];


  const timelineOptions = [
    'ASAP (Rush job)',
    '1-2 weeks',
    '1 month',
    '2-3 months',
    '3-6 months',
    '6+ months',
    'Flexible timeline',
    'Ongoing project'
  ];

  const priorityLevels = [
    'Low - No rush',
    'Medium - Standard timeline',
    'High - Important project',
    'Urgent - Need it ASAP'
  ];

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "kaleab@example.com",
      href: "mailto:kaleab@example.com"
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Location",
      value: "San Francisco, CA",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="h-5 w-5" />,
      label: "GitHub",
      href: "https://github.com"
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn",
      href: "https://linkedin.com"
    },
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      href: "mailto:kaleab@example.com"
    }
  ];

  // Check if form has minimum required data
  const hasMinimumData = formData.name && formData.email && formData.description;

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 px-4 py-2">
              Let&apos;s Work Together
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to bring your project to life? Fill out the detailed form below and I&apos;ll get back to you with a customized proposal.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Briefcase className="h-5 w-5 text-primary" />
                    Project Details
                  </CardTitle>
                  <CardDescription>
                    Please provide as much detail as possible to help me understand your needs and provide an accurate quote.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-8">
                    {/* Personal Information */}
                    <div className="space-y-6">
                      <div className="flex items-center gap-2 mb-4">
                        <Mail className="h-4 w-4 text-primary" />
                        <h3 className="font-medium">Contact Information</h3>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name *</Label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="Your full name"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="your.email@example.com"
                          />
                        </div>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="company">Company/Organization</Label>
                          <Input
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            placeholder="Your company name"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+1 (555) 123-4567"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Project Information */}
                    <div className="space-y-6">
                      <div className="flex items-center gap-2 mb-4">
                        <Briefcase className="h-4 w-4 text-primary" />
                        <h3 className="font-medium">Project Information</h3>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="projectType">Project Type *</Label>
                          <Select onValueChange={handleSelectChange('projectType')} required>
                            <SelectTrigger>
                              <SelectValue placeholder="Select project type" />
                            </SelectTrigger>
                            <SelectContent>
                              {projectTypes.map((type) => (
                                <SelectItem key={type} value={type}>
                                  {type}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="priority">Priority Level *</Label>
                          <Select onValueChange={handleSelectChange('priority')} required>
                            <SelectTrigger>
                              <SelectValue placeholder="Select priority" />
                            </SelectTrigger>
                            <SelectContent>
                              {priorityLevels.map((level) => (
                                <SelectItem key={level} value={level}>
                                  {level}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label>Services Needed *</Label>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-2">
                          {serviceOptions.map((service) => (
                            <div key={service} className="flex items-center space-x-2">
                              <Checkbox
                                id={service}
                                checked={formData.services.includes(service)}
                                onCheckedChange={() => handleServiceToggle(service)}
                              />
                              <Label htmlFor={service} className="text-sm leading-tight">
                                {service}
                              </Label>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Budget and Timeline */}
                    <div className="space-y-6">
                      <div className="flex items-center gap-2 mb-4">
                        <DollarSign className="h-4 w-4 text-primary" />
                        <h3 className="font-medium"> Timeline</h3>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        
                        
                        <div className="space-y-2">
                          <Label htmlFor="timeline">Desired Timeline *</Label>
                          <Select onValueChange={handleSelectChange('timeline')} required>
                            <SelectTrigger>
                              <SelectValue placeholder="Select timeline" />
                            </SelectTrigger>
                            <SelectContent>
                              {timelineOptions.map((timeline) => (
                                <SelectItem key={timeline} value={timeline}>
                                  {timeline}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>

                    {/* Additional Details */}
                    <div className="space-y-6">
                      <div className="flex items-center gap-2 mb-4">
                        <Zap className="h-4 w-4 text-primary" />
                        <h3 className="font-medium">Additional Details</h3>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="description">Project Description *</Label>
                        <Textarea
                          id="description"
                          name="description"
                          value={formData.description}
                          onChange={handleChange}
                          required
                          placeholder="Please describe your project in detail. Include features, functionality, target audience, and any specific requirements..."
                          rows={5}
                        />
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="hasDesigns">Do you have existing designs?</Label>
                          <Select onValueChange={handleSelectChange('hasDesigns')}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select option" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="yes-complete">Yes, complete designs</SelectItem>
                              <SelectItem value="yes-partial">Yes, partial designs</SelectItem>
                              <SelectItem value="no-need-design">No, need design services</SelectItem>
                              <SelectItem value="no-have-reference">No, but have reference sites</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="hearAbout">How did you hear about me?</Label>
                          <Select onValueChange={handleSelectChange('hearAbout')}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select source" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="google">Google Search</SelectItem>
                              <SelectItem value="linkedin">LinkedIn</SelectItem>
                              <SelectItem value="github">GitHub</SelectItem>
                              <SelectItem value="referral">Referral</SelectItem>
                              <SelectItem value="portfolio">Portfolio Site</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>
                    
                    {/* Single Contact Method Button */}
                    <div className="space-y-4">
                      <div className="text-center">
                        <ContactMethodSelector
                          formData={formData}
                          onEmailSubmit={handleEmailSubmit}
                          onTelegramSubmit={handleTelegramSubmit}
                          onSMSSubmit={handleSMSSubmit}
                        >
                          <Button 
                            disabled={!hasMinimumData} 
                            className="w-full" 
                            size="lg"
                          >
                            <Send className="mr-2 h-4 w-4" />
                            Send Message
                          </Button>
                        </ContactMethodSelector>
                        
                        {!hasMinimumData && (
                          <p className="text-xs text-muted-foreground mt-2">
                            Please fill in at least your name, email, and project description
                          </p>
                        )}
                        
                        {hasMinimumData && (
                          <p className="text-xs text-muted-foreground mt-2">
                            Click to choose your preferred contact method (Email, Telegram, or SMS)
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information Sidebar */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                  <CardDescription>
                    Prefer to reach out directly? Use any of these methods.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                        {info.icon}
                      </div>
                      <div>
                        <p className="font-medium">{info.label}</p>
                        {info.href && info.href !== '#' ? (
                          <Link 
                            href={info.href}
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            {info.value}
                          </Link>
                        ) : (
                          <p className="text-muted-foreground">{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Quick Contact Methods */}
              <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
                <CardHeader>
                  <CardTitle>Quick Contact</CardTitle>
                  <CardDescription>
                    Get in touch instantly via your preferred platform.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button 
                    onClick={() => window.open('https://t.me/Fugitorawesten', '_blank')}
                    className="w-full bg-blue-500 hover:bg-blue-600"
                    size="sm"
                  >
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Message on Telegram
                  </Button>
                  
                  <Button 
                    onClick={() => window.open('sms:+15551234567', '_self')}
                    variant="outline" 
                    className="w-full"
                    size="sm"
                  >
                    <Smartphone className="mr-2 h-4 w-4" />
                    Send SMS
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Follow me</CardTitle>
                  <CardDescription>
                    Connect with me on social media for updates and insights.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-4">
                    {socialLinks.map((link, index) => (
                      <a
                        key={index}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-primary/10 hover:bg-primary hover:text-primary-foreground rounded-lg flex items-center justify-center text-primary transition-colors"
                      >
                        {link.icon}
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <Calendar className="h-8 w-8 text-primary mx-auto mb-3" />
                    <h3 className="font-semibold mb-2">Schedule a Call</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Prefer to discuss your project over a call? Schedule a free consultation.
                    </p>
                    <ScheduleCallDialog>
                      <Button className="w-full">
                        <Phone className="mr-2 h-4 w-4" />
                        Schedule Call
                      </Button>
                    </ScheduleCallDialog>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-3">
                    <h4 className="font-medium">Response Time</h4>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p>• Email: Within 24 hours</p>
                      <p>• Telegram: Usually within 2-4 hours</p>
                      <p>• SMS: Same day response</p>
                      <p>• Phone: Same day if called before 5 PM PST</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};