import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Calendar, MapPin, Building } from 'lucide-react';

export const Experience: React.FC = () => {
  const experiences = [
  {
    title: "Founder & Hardware Developer",
    company: "Heir Tech",
    location: "Addis Ababa, Ethiopia",
    period: "2022 - Present",
    type: "Full-time",
    description: "Founded Heir Tech, a company dedicated to building impactful technologies that support young innovators and provide real-world solutions in robotics, software, and hardware.",
    achievements: [
      "Launched 'Smart Blind Stick' project integrating sensors, camera, and emergency SMS system",
      "Mentored young developers on full-stack projects and startup guidance",
      "Built partnerships to support early-stage tech entrepreneurs"
    ],
    technologies: ["Arduino", "Flutter", "Django", "MongoDB", "Google Maps API"]
  },
  {
    title: "Full Stack Developer",
    company: "Independent Projects",
    location: "Remote",
    period: "2021 - Present",
    type: "Freelance",
    description: "Designed and built multiple software solutions, ranging from SAT preparation apps to IoT integrations, focusing on both frontend and backend systems.",
    achievements: [
      "Developed SAT Prep App with quiz system, progress tracking, and MongoDB backend",
      "Created Django API for image recognition with database integration",
      "Built SMS emergency alert system within Flutter applications"
    ],
    technologies: ["React", "Flutter", "Django", "MongoDB", "Node.js"]
  },
  {
    title: "Mobile App Developer",
    company: "FlexSafe",
    location: "Remote",
    period: "2024 - Present",
    type: "Contract",
    description: "Designed and developed a fitness application with personalized workout routines, progress tracking, and a clean UI/UX to enhance user engagement.",
    achievements: [
      "Built workout scheduling and tracking system using ExistLand state management",
      "Implemented daily workout progression showing one exercise at a time",
      "Developed dark and light mode interface for seamless user experience"
    ],
    technologies: ["React Native", "ExistLand", "MongoDB", "Node.js"]
  },
  {
    title: "Community Builder & Volunteer",
    company: "Abugida Tech & Volunteer Programs",
    location: "Addis Ababa, Ethiopia",
    period: "2019 - 2021",
    type: "Part-time",
    description: "Actively contributed to local tech and community initiatives. Focused on youth empowerment through skill development and volunteer programs.",
    achievements: [
      "Founded a community to help teenagers with college applications and internships",
      "Raised funds for children through nonprofit volunteering programs",
      "Advocated for accessible tech education opportunities"
    ],
    technologies: ["HTML", "CSS", "JavaScript", "WordPress"]
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