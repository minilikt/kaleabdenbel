import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ExternalLink, Github, PlusIcon } from 'lucide-react';
import { ImageWithFallback } from './ImageFallBack';
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogTitle,
  MorphingDialogImage,
  MorphingDialogSubtitle,
  MorphingDialogClose,
  MorphingDialogDescription,
  MorphingDialogContainer,
} from './morphing-dialog';

export const Projects: React.FC = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with modern payment integration, inventory management, and admin dashboard.",
      detailedDescription: [
        "Built a complete e-commerce platform with React frontend and Node.js backend",
        "Integrated Stripe for secure payment processing",
        "Implemented inventory management system with real-time updates",
        "Created admin dashboard for product and order management",
        "Deployed on AWS with CI/CD pipeline"
      ],
      image: "ecommerce platform website",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "AWS"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      featured: true
    },
     {
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates, team collaboration, and advanced reporting.",
      detailedDescription: [
        "Built a complete e-commerce platform with React frontend and Node.js backend",
        "Integrated Stripe for secure payment processing",
        "Implemented inventory management system with real-time updates",
        "Created admin dashboard for product and order management",
        "Deployed on AWS with CI/CD pipeline"
      ],
      image: "task management application",
      technologies: ["Vue.js", "Express.js", "MongoDB", "Socket.io", "Docker"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      featured: true
    },
    {
      title: "AI Content Generator",
      description: "AI-powered content creation tool with natural language processing and multi-format output support.",
      detailedDescription: [
        "Built a complete e-commerce platform with React frontend and Node.js backend",
        "Integrated Stripe for secure payment processing",
        "Implemented inventory management system with real-time updates",
        "Created admin dashboard for product and order management",
        "Deployed on AWS with CI/CD pipeline"
      ],
      image: "ai content generator interface",
      technologies: ["Next.js", "Python", "TensorFlow", "OpenAI API", "Tailwind"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      featured: true
    },
    {
      title: "Mobile Banking App",
      description: "Secure mobile banking application with biometric authentication and real-time transaction processing.",
      detailedDescription: [
        "Built a complete e-commerce platform with React frontend and Node.js backend",
        "Integrated Stripe for secure payment processing",
        "Implemented inventory management system with real-time updates",
        "Created admin dashboard for product and order management",
        "Deployed on AWS with CI/CD pipeline"
      ],
      image: "mobile banking app interface",
      technologies: ["React Native", "Node.js", "PostgreSQL", "JWT", "Encryption"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      featured: true
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A selection of recent projects that showcase my skills and experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <MorphingDialog
                key={index}
                transition={{
                  type: 'spring',
                  bounce: 0.05,
                  duration: 0.25,
                }}
              >
                <MorphingDialogTrigger>
                  <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer">
                    <div className="relative overflow-hidden">
                      <ImageWithFallback
                        height={400}
                        width={400}
                        src={`https://images.unsplash.com/800x600/?${encodeURIComponent(project.image)}`}
                        alt={project.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                        Featured
                      </Badge>
                      <button
                        type="button"
                        className="absolute bottom-4 right-4 flex h-8 w-8 shrink-0 scale-100 select-none appearance-none items-center justify-center rounded-lg border border-zinc-950/10 bg-white/80 text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-800 focus-visible:ring-2 active:scale-[0.98] dark:border-zinc-50/10 dark:bg-zinc-900/80 dark:text-zinc-500 dark:hover:bg-zinc-800 dark:hover:text-zinc-50"
                        aria-label="Open project details"
                      >
                        <PlusIcon size={16} />
                      </button>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl">{project.title}</CardTitle>
                      <CardDescription className="text-sm">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </MorphingDialogTrigger>
                
                <MorphingDialogContainer>
                  <MorphingDialogContent
                    style={{
                      borderRadius: '24px',
                    }}
                    className="pointer-events-auto relative flex h-auto w-full flex-col overflow-hidden border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900 sm:max-w-2xl"
                  >
                    <MorphingDialogImage
                      src={`https://images.unsplash.com/800x600/?${encodeURIComponent(project.image)}`}
                      alt={project.title}
                      className="h-64 w-full object-cover"
                    />
                    <div className="p-6">
                      <MorphingDialogTitle className="text-2xl text-zinc-950 dark:text-zinc-50">
                        {project.title}
                      </MorphingDialogTitle>
                      <MorphingDialogSubtitle className="text-zinc-700 dark:text-zinc-400">
                        {project.technologies.join(' • ')}
                      </MorphingDialogSubtitle>
                      <MorphingDialogDescription
                        disableLayoutAnimation
                        variants={{
                          initial: { opacity: 0, scale: 0.8, y: 100 },
                          animate: { opacity: 1, scale: 1, y: 0 },
                          exit: { opacity: 0, scale: 0.8, y: 100 },
                        }}
                      >
                        <div className="mt-4 space-y-4">
                          {project.detailedDescription?.map((paragraph, i) => (
                            <p key={i} className="text-zinc-700 dark:text-zinc-300">
                              {paragraph}
                            </p>
                          ))}
                        </div>
                        
                        <div className="flex gap-4 mt-6">
                          <Button variant="outline" asChild>
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                              <Github className="mr-2 h-4 w-4" />
                              View Code
                            </a>
                          </Button>
                          <Button asChild>
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="mr-2 h-4 w-4" />
                              Live Demo
                            </a>
                          </Button>
                        </div>
                      </MorphingDialogDescription>
                    </div>
                    <MorphingDialogClose className="absolute top-4 right-4 p-2 rounded-full bg-white/80 backdrop-blur-sm border border-zinc-200 dark:bg-zinc-800/80 dark:border-zinc-700" />
                  </MorphingDialogContent>
                </MorphingDialogContainer>
              </MorphingDialog>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};