"use client"
import { useState, useEffect, useMemo } from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("frontend");
  const [animatedValues, setAnimatedValues] = useState<{ [key: string]: number }>({});

  const skillCategories = useMemo(() => ({
    frontend: {
      title: "Frontend Development",
      description: "Creating beautiful and interactive user interfaces",
      gradient: "from-blue-500 to-purple-600",
      skills: [
        { name: "React", level: 95, icon: "⚛️", description: "Component-based UI development", color: "text-blue-500" },
        { name: "TypeScript", level: 90, icon: "📘", description: "Type-safe JavaScript development", color: "text-blue-600" },
        { name: "Next.js", level: 88, icon: "▲", description: "Full-stack React framework", color: "text-gray-800" },
        { name: "Tailwind CSS", level: 92, icon: "🎨", description: "Utility-first CSS framework", color: "text-cyan-500" },
        { name: "Framer Motion", level: 85, icon: "🎭", description: "Animation library for React", color: "text-purple-500" },
        { name: "GSAP", level: 82, icon: "⚡", description: "High-performance animations", color: "text-green-500" },
        { name: "Anime.js", level: 80, icon: "🎬", description: "Lightweight animation library", color: "text-red-500" },
        { name: "Vue.js", level: 75, icon: "💚", description: "Progressive JavaScript framework", color: "text-green-600" }
      ]
    },
    backend: {
      title: "Backend Development",
      description: "Building robust and scalable server-side solutions",
      gradient: "from-green-500 to-teal-600",
      skills: [
        { name: "Node.js", level: 90, icon: "🟢", description: "JavaScript runtime for servers", color: "text-green-600" },
        { name: "Express.js", level: 92, icon: "🚀", description: "Fast web framework for Node.js", color: "text-gray-600" },
        { name: "Python", level: 85, icon: "🐍", description: "Versatile programming language", color: "text-yellow-500" },
        { name: "PostgreSQL", level: 88, icon: "🐘", description: "Advanced relational database", color: "text-blue-700" },
        { name: "MongoDB", level: 85, icon: "🍃", description: "NoSQL document database", color: "text-green-700" },
        { name: "GraphQL", level: 80, icon: "◈", description: "Query language for APIs", color: "text-pink-500" },
        { name: "Redis", level: 78, icon: "🔴", description: "In-memory data structure store", color: "text-red-600" },
        { name: "Firebase", level: 82, icon: "🔥", description: "Backend-as-a-Service platform", color: "text-orange-500" }
      ]
    },
    mobile: {
      title: "Mobile Development",
      description: "Cross-platform mobile applications",
      gradient: "from-purple-500 to-pink-600",
      skills: [
        { name: "React Native", level: 88, icon: "📱", description: "Cross-platform mobile development", color: "text-blue-500" },
        { name: "Flutter", level: 85, icon: "💙", description: "Google's UI toolkit", color: "text-blue-400" },
        { name: "NativeWind", level: 80, icon: "🌪️", description: "Tailwind CSS for React Native", color: "text-cyan-500" },
        { name: "iOS Development", level: 75, icon: "🍎", description: "Native iOS app development", color: "text-gray-800" },
        { name: "Android Development", level: 78, icon: "🤖", description: "Native Android app development", color: "text-green-500" },
        { name: "Expo", level: 85, icon: "⚫", description: "React Native development platform", color: "text-black" }
      ]
    },
    tools: {
      title: "DevOps & Tools",
      description: "Development tools and deployment solutions",
      gradient: "from-orange-500 to-red-600",
      skills: [
        { name: "Docker", level: 85, icon: "🐳", description: "Containerization platform", color: "text-blue-600" },
        { name: "AWS", level: 82, icon: "☁️", description: "Cloud computing services", color: "text-orange-600" },
        { name: "Git", level: 95, icon: "📊", description: "Version control system", color: "text-red-600" },
        { name: "CI/CD", level: 80, icon: "🔄", description: "Continuous integration/deployment", color: "text-blue-700" },
        { name: "Linux", level: 85, icon: "🐧", description: "Unix-like operating system", color: "text-yellow-600" },
        { name: "Figma", level: 88, icon: "🎨", description: "Collaborative design tool", color: "text-purple-600" }
      ]
    }
  }), []);

  // Animate progress values
  useEffect(() => {
    const currentSkills = skillCategories[activeCategory as keyof typeof skillCategories].skills;
    const timer = setTimeout(() => {
      const newValues: { [key: string]: number } = {};
      currentSkills.forEach(skill => {
        newValues[skill.name] = skill.level;
      });
      setAnimatedValues(newValues);
    }, 300);

    return () => clearTimeout(timer);
  }, [activeCategory, skillCategories]);

interface CircularProgressProps {
    value: number;
    size?: number;
    strokeWidth?: number;
    skill: Skill;
}

const CircularProgress: React.FC<CircularProgressProps> = ({ value, size = 120, strokeWidth = 8, skill }) => {
    const radius = (size - strokeWidth) / 2;
    const circumference = radius * Math.PI * 2;
    const strokeDashoffset = circumference - (value / 100) * circumference;

    return (
        <div className="relative flex items-center justify-center">
            <svg
                height={size}
                width={size}
                className="transform -rotate-90"
            >
                <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    stroke="currentColor"
                    strokeWidth={strokeWidth}
                    fill="transparent"
                    className="text-muted/20"
                />
                <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    stroke="currentColor"
                    strokeWidth={strokeWidth}
                    fill="transparent"
                    strokeDasharray={circumference}
                    strokeDashoffset={strokeDashoffset}
                    className="text-primary transition-all duration-1000 ease-out"
                    strokeLinecap="round"
                />
            </svg>
            <div className="absolute flex flex-col items-center">
                <span className="text-2xl mb-1">{skill.icon}</span>
                <span className="text-sm font-medium">{value}%</span>
            </div>
        </div>
    );
};

interface Skill {
    name: string;
    level: number;
    icon: string;
    description: string;
    color: string;
}

interface SkillCardProps {
    skill: Skill;
    index: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill, index }) => {
    const animatedValue = animatedValues[skill.name] || 0;
    
    return (
        <Card 
            className="group hover:shadow-xl transition-all duration-500 hover:scale-105 bg-gradient-to-br from-card to-muted/10 border-0 shadow-lg"
            style={{ animationDelay: `${index * 100}ms` }}
        >
            <CardContent className="p-6 text-center">
                <div className="mb-4">
                    <CircularProgress value={animatedValue} skill={skill} />
                </div>
                <h4 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                    {skill.name}
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                    {skill.description}
                </p>
            </CardContent>
        </Card>
    );
};

  const stats = [
    { label: "Years Experience", value: "3+", icon: "⏱️" },
    { label: "Technologies", value: "20+", icon: "🛠️" },
    { label: "Projects Completed", value: "50+", icon: "🚀" },
    { label: "Happy Clients", value: "15+", icon: "😊" }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-background via-muted/20 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 px-4 py-2">
              Technical Expertise
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
              Skills & Technologies
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive overview of my technical proficiency across different domains of development
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center p-4 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20 hover:shadow-lg transition-shadow">
                <CardContent className="p-2">
                  <div className="text-2xl mb-2">{stat.icon}</div>
                  <div className="text-xl md:text-2xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Skills Tabs */}
          <Tabs value={activeCategory} onValueChange={setActiveCategory} className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8 bg-muted/50 p-1 h-auto">
              {Object.entries(skillCategories).map(([key, category]) => (
                <TabsTrigger 
                  key={key} 
                  value={key}
                  className="data-[state=active]:bg-background data-[state=active]:shadow-sm py-3 px-4 text-sm font-medium transition-all"
                >
                  <div className="flex flex-col items-center gap-1">
                    <span className="hidden md:block">{category.title}</span>
                    <span className="md:hidden">{category.title.split(' ')[0]}</span>
                  </div>
                </TabsTrigger>
              ))}
            </TabsList>

            {Object.entries(skillCategories).map(([key, category]) => (
              <TabsContent key={key} value={key} className="space-y-8">
                

                {/* Skills Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {category.skills.map((skill, index) => (
                    <SkillCard key={skill.name} skill={skill} index={index} />
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <Card className="max-w-2xl mx-auto bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 border-primary/20">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-4">Always Learning & Growing</h3>
                <p className="text-muted-foreground mb-6">
                  I&apos;m constantly exploring new technologies and improving my skills to deliver 
                  the best solutions for modern development challenges.
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  {["AI/ML", "Web3", "Serverless", "Microservices", "Cloud Native"].map((tech) => (
                    <Badge key={tech} variant="outline" className="bg-background/50">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};