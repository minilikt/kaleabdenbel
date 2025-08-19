import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog';
import { Mail, MessageCircle, Smartphone, Send, ArrowRight } from 'lucide-react';
import { Card, CardContent } from './ui/card';


interface ContactFormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  projectType: string;
  services: string[];
  budget: string;
  timeline: string;
  description: string;
  hasDesigns: string;
  priority: string;
  hearAbout: string;
}

interface ContactMethodSelectorProps {
  formData: ContactFormData;
  onEmailSubmit: () => void;
  onTelegramSubmit: () => void;
  onSMSSubmit: () => void;
  children: React.ReactNode;
}

export const ContactMethodSelector: React.FC<ContactMethodSelectorProps> = ({
  formData,
  onEmailSubmit,
  onTelegramSubmit,
  onSMSSubmit,
  children
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMethodSelect = (method: 'email' | 'telegram' | 'sms') => {
    setIsOpen(false);
    
    // Small delay to allow dialog to close smoothly
    setTimeout(() => {
      switch (method) {
        case 'email':
          onEmailSubmit();
          break;
        case 'telegram':
          onTelegramSubmit();
          break;
        case 'sms':
          onSMSSubmit();
          break;
      }
    }, 150);
  };

  const contactMethods = [
    {
      id: 'email',
      title: 'Email',
      description: 'Detailed message via email client',
      icon: <Mail className="h-6 w-6" />,
      color: 'bg-blue-500 hover:bg-blue-600',
      features: ['Detailed project info', 'Professional format', 'Attachment support']
    },
    {
      id: 'telegram',
      title: 'Telegram',
      description: 'Quick message on Telegram',
      icon: <MessageCircle className="h-6 w-6" />,
      color: 'bg-sky-500 hover:bg-sky-600',
      features: ['Instant messaging', 'Quick responses', 'File sharing']
    },
    {
      id: 'sms',
      title: 'SMS',
      description: 'Text message to phone',
      icon: <Smartphone className="h-6 w-6" />,
      color: 'bg-green-500 hover:bg-green-600',
      features: ['Direct to phone', 'Simple & quick', 'High open rate']
    }
  ];

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-center justify-center">
            <Send className="h-5 w-5 text-primary" />
            Choose Your Preferred Contact Method
          </DialogTitle>
          <DialogDescription className="text-center">
            All methods will include your project details automatically. Choose the one that works best for you.
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          {contactMethods.map((method) => (
            <Card key={method.id} className="transition-all duration-200 hover:shadow-md cursor-pointer group" onClick={() => handleMethodSelect(method.id as 'email' | 'telegram' | 'sms')}>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center text-white ${method.color} group-hover:scale-110 transition-transform`}>
                    {method.icon}
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-foreground">{method.title}</h3>
                      <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </div>
                    
                    <p className="text-muted-foreground text-sm mb-3">{method.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {method.features.map((feature, index) => (
                        <span key={index} className="inline-flex items-center px-2 py-1 rounded-md bg-muted text-muted-foreground text-xs">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="border-t pt-4">
          <div className="text-center text-sm text-muted-foreground">
            <p>Your form data will be automatically formatted for the selected method.</p>
            {formData.name && (
              <p className="mt-1">
                Ready to send as: <span className="font-medium">{formData.name}</span>
                {formData.projectType && ` • ${formData.projectType}`}
              </p>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};