import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import lighthouse from "@/assets/lighthouse.jpg";

interface CareerMilestone {
  year: string;
  role: string;
  company: string;
  description: string;
  emoji: string;
}

const milestones: CareerMilestone[] = [
  {
    year: "2020",
    role: "Software Engineering Intern",
    company: "TechCorp",
    description: "First dive into the tech ocean, learning the basics of development",
    emoji: "🌊"
  },
  {
    year: "2021",
    role: "Junior DevOps Engineer",
    company: "CloudStart",
    description: "Discovered the world of containers and cloud infrastructure",
    emoji: "🐳"
  },
  {
    year: "2022",
    role: "DevOps Engineer",
    company: "ScaleUp Inc",
    description: "Mastered Kubernetes orchestration and CI/CD pipelines",
    emoji: "⚙️"
  },
  {
    year: "2023",
    role: "Senior DevOps Engineer",
    company: "Enterprise Solutions",
    description: "Led infrastructure automation and monitoring initiatives",
    emoji: "🚀"
  },
  {
    year: "2024",
    role: "Platform Engineer",
    company: "Innovation Labs",
    description: "Building developer platforms and self-service infrastructure",
    emoji: "🏗️"
  },
  {
    year: "Future",
    role: "Cloud Architect",
    company: "Your Company?",
    description: "Designing scalable, resilient cloud-native architectures",
    emoji: "☁️"
  }
];

export const CareerLighthouse = () => {
  return (
    <section className="relative min-h-screen bg-gradient-sky py-20 overflow-hidden">
      {/* Lighthouse Background */}
      <div 
        className="absolute right-0 top-0 w-1/3 h-full bg-cover bg-left opacity-30"
        style={{ backgroundImage: `url(${lighthouse})` }}
      ></div>
      
      {/* Lighthouse Beam */}
      <div className="absolute right-1/4 top-1/4 w-96 h-2 bg-gradient-to-r from-accent/60 to-transparent animate-pulse"></div>
      
      <div className="container mx-auto px-8 relative z-10">
        <div className="max-w-4xl">
          <div className="mb-16">
            <h2 className="text-5xl font-bold text-foreground mb-4">
              🗼 Career Lighthouse
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Follow the beacon through my professional journey across the DevOps seas. 
              Each milestone illuminates the path to cloud mastery.
            </p>
          </div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div
                key={milestone.year}
                className={`flex items-center space-x-6 animate-fade-in ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Timeline Dot */}
                <div className={`flex-shrink-0 ${index % 2 === 0 ? 'order-2' : 'order-1'}`}>
                  <div className="w-16 h-16 bg-gradient-deployment rounded-full flex items-center justify-center shadow-glow">
                    <span className="text-2xl">{milestone.emoji}</span>
                  </div>
                </div>

                {/* Milestone Card */}
                <Card className={`max-w-md bg-card/90 backdrop-blur-sm border-border shadow-container hover:shadow-glow transition-all duration-300 ${
                  index % 2 === 0 ? 'order-1' : 'order-2'
                }`}>
                  <CardContent className="p-6">
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <Badge variant="outline" className="text-accent border-accent">
                          {milestone.year}
                        </Badge>
                        <span className="text-lg font-bold text-foreground">
                          {milestone.role}
                        </span>
                      </div>
                      
                      <p className="text-sm font-medium text-primary">
                        {milestone.company}
                      </p>
                      
                      <p className="text-muted-foreground">
                        {milestone.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Connection Line */}
                {index < milestones.length - 1 && (
                  <div className={`absolute w-0.5 h-16 bg-gradient-to-b from-accent to-primary/50 ${
                    index % 2 === 0 ? 'left-8' : 'right-8'
                  }`} style={{ top: `${(index + 1) * 120 + 80}px` }}></div>
                )}
              </div>
            ))}
          </div>

          {/* Future Goals Section */}
          <div className="mt-20 text-center">
            <div className="bg-gradient-deployment rounded-lg p-8 shadow-glow">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                🎯 Charting the Course Ahead
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {['AWS Solutions Architect', 'Kubernetes CKA/CKS', 'Platform Engineering'].map((goal) => (
                  <Badge key={goal} variant="secondary" className="p-3 text-center">
                    {goal}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};