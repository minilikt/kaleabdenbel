import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Calendar, MapPin, Building } from 'lucide-react';

export const Experience: React.FC = () => {
  const experiences = [
    {
      title: "Junior Developer",
      company: "Code Academy Labs",
      location: "Boston, MA",
      period: "2021 - 2022",
      type: "Full-time",
      description: "Started my professional journey learning best practices and contributing to various projects under senior developer guidance.",
      achievements: [
        "Completed 100+ code reviews",
        "Contributed to 10+ open source projects",
        "Achieved 95% code quality score"
      ],
      technologies: ["JavaScript", "Python", "Git", "Linux", "MySQL"]
    },
    {
      title: "Frontend Developer",
      company: "Digital Agency Pro",
      location: "New York, NY",
      period: "2022 - 2023",
      type: "Full-time",
      description: "Specialized in creating responsive and interactive user interfaces for various clients across different industries.",
      achievements: [
        "Delivered 25+ responsive websites",
        "Improved website performance by average 50%",
        "Collaborated with design team on UI/UX improvements"
      ],
      technologies: ["JavaScript", "HTML5", "CSS3", "React", "Sass"]
    },
    {
      title: "Full Stack Developer",
      company: "Startup Innovations",
      location: "Austin, TX",
      period: "2023 - 2024",
      type: "Full-time",
      description: "Developed and maintained multiple client projects from conception to deployment. Worked directly with clients to understand requirements and deliver solutions.",
      achievements: [
        "Built 15+ web applications from scratch",
        "Increased client satisfaction rate to 98%",
        "Reduced development costs by 30% through code reusability"
      ],
      technologies: ["Vue.js", "Express.js", "MongoDB", "Firebase", "React Native"]
    },
    {
      title: "Senior Full Stack Developer",
      company: "TechCorp Solutions",
      location: "San Francisco, CA",
      period: "2024 - Present",
      type: "Full-time",
      description: "Lead development of enterprise-scale applications serving 1M+ users. Architected microservices infrastructure and mentored junior developers.",
      achievements: [
        "Reduced application load time by 40% through optimization",
        "Led team of 5 developers on major product redesign",
        "Implemented CI/CD pipeline reducing deployment time by 60%"
      ],
      technologies: ["React", "Node.js", "AWS", "Docker", "PostgreSQL"]
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Work Experience</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              My professional journey and the impact I&apos;ve made along the way
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block"></div>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative">
                  {/* Timeline dot */}
                  <div className="absolute left-6 top-6 w-4 h-4 bg-primary rounded-full border-4 border-background hidden md:block"></div>
                  
                  <Card className="md:ml-16 hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                        <div>
                          <CardTitle className="text-xl">{exp.title}</CardTitle>
                          <CardDescription className="flex items-center gap-2 mt-1">
                            <Building className="h-4 w-4" />
                            {exp.company}
                          </CardDescription>
                        </div>
                        <div className="flex flex-col md:items-end gap-1">
                          <Badge variant="secondary" className="w-fit">
                            {exp.type}
                          </Badge>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Calendar className="h-3 w-3" />
                              {exp.period}
                            </span>
                            <span className="flex items-center gap-1">
                              <MapPin className="h-3 w-3" />
                              {exp.location}
                            </span>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground">{exp.description}</p>
                      
                      <div>
                        <h4 className="font-medium mb-2">Key Achievements:</h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="flex items-start gap-2">
                              <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-medium mb-2">Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <Badge key={techIndex} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};