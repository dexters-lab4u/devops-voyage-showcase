import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  id: string;
  name: string;
  description: string;
  problem: string;
  stack: string[];
  githubUrl?: string;
  demoUrl?: string;
  emoji: string;
}

const projects: Project[] = [
  {
    id: "k8s-monitoring",
    name: "Kubernetes Monitoring Stack",
    description: "Complete observability solution for K8s clusters",
    problem: "Needed comprehensive monitoring and alerting for production Kubernetes workloads",
    stack: ["Prometheus", "Grafana", "AlertManager", "Helm", "Kubernetes"],
    githubUrl: "#",
    demoUrl: "#",
    emoji: "🏝️"
  },
  {
    id: "cicd-pipeline",
    name: "Multi-Cloud CI/CD Pipeline",
    description: "Automated deployment pipeline across AWS and Azure",
    problem: "Manual deployments causing delays and inconsistencies",
    stack: ["GitHub Actions", "Terraform", "Docker", "AWS", "Azure"],
    githubUrl: "#",
    emoji: "🏖️"
  },
  {
    id: "infra-automation",
    name: "Infrastructure Automation Platform",
    description: "Self-service infrastructure provisioning portal",
    problem: "Development teams waiting too long for infrastructure resources",
    stack: ["Terraform", "Python", "FastAPI", "React", "AWS"],
    githubUrl: "#",
    demoUrl: "#",
    emoji: "🏜️"
  }
];

export const TechIslands = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section className="relative min-h-screen bg-gradient-ocean py-20">
      {/* Floating Clouds */}
      <div className="absolute top-10 left-10 w-32 h-16 bg-white/10 rounded-full animate-float"></div>
      <div className="absolute top-20 right-20 w-24 h-12 bg-white/5 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-40 left-1/3 w-40 h-20 bg-white/8 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>

      <div className="container mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-foreground mb-4">
            🏝️ Tech Islands
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover the projects I've built across the DevOps archipelago. 
            Each island represents a unique challenge solved with modern technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="relative animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Island Base */}
              <div className="absolute -bottom-4 -left-4 -right-4 h-8 bg-gradient-to-r from-accent/20 to-secondary/20 rounded-full blur-sm"></div>
              
              <Card className="relative bg-card/90 backdrop-blur-sm border-border shadow-container hover:shadow-glow transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="text-3xl group-hover:animate-bounce">{project.emoji}</span>
                    <div>
                      <CardTitle className="text-lg text-foreground">{project.name}</CardTitle>
                      <CardDescription className="text-muted-foreground">
                        {project.description}
                      </CardDescription>
                    </div>
                  </div>
                  
                  {/* Project Signpost */}
                  <div className="absolute -top-3 right-4 bg-destructive text-destructive-foreground px-2 py-1 rounded text-xs font-bold">
                    PROJECT
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1">
                    {project.stack.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-2">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="secondary" size="sm" className="flex-1">
                          Explore Island
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl">
                        <DialogHeader>
                          <DialogTitle className="flex items-center space-x-2">
                            <span className="text-2xl">{project.emoji}</span>
                            <span>{project.name}</span>
                          </DialogTitle>
                          <DialogDescription>
                            {project.description}
                          </DialogDescription>
                        </DialogHeader>
                        
                        <div className="space-y-6">
                          <div>
                            <h4 className="font-semibold text-foreground mb-2">Problem Solved</h4>
                            <p className="text-muted-foreground">{project.problem}</p>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold text-foreground mb-2">Technology Stack</h4>
                            <div className="flex flex-wrap gap-2">
                              {project.stack.map((tech) => (
                                <Badge key={tech} variant="outline">
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          
                          <div className="flex space-x-3">
                            {project.githubUrl && (
                              <Button variant="outline" size="sm" asChild>
                                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                  <Github className="w-4 h-4 mr-2" />
                                  View Code
                                </a>
                              </Button>
                            )}
                            {project.demoUrl && (
                              <Button variant="outline" size="sm" asChild>
                                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                                  <ExternalLink className="w-4 h-4 mr-2" />
                                  Live Demo
                                </a>
                              </Button>
                            )}
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};