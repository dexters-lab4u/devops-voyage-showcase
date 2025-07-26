import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import techContainers from "@/assets/tech-containers.jpg";

interface TechContainer {
  name: string;
  emoji: string;
  color: string;
  description: string;
}

const containers: TechContainer[] = [
  { name: "Docker", emoji: "🐳", color: "bg-blue-500", description: "Containerization platform" },
  { name: "Kubernetes", emoji: "☸️", color: "bg-blue-600", description: "Container orchestration" },
  { name: "Terraform", emoji: "🔧", color: "bg-purple-500", description: "Infrastructure as Code" },
  { name: "Helm", emoji: "⚙️", color: "bg-indigo-500", description: "Kubernetes package manager" },
  { name: "ArgoCD", emoji: "📦", color: "bg-orange-500", description: "GitOps deployment" },
  { name: "Prometheus", emoji: "🔍", color: "bg-red-500", description: "Monitoring & alerting" },
  { name: "GitHub Actions", emoji: "🔁", color: "bg-gray-700", description: "CI/CD workflows" },
  { name: "AWS", emoji: "☁️", color: "bg-yellow-600", description: "Cloud infrastructure" },
];

export const ContainerShip = () => {
  const [visibleContainers, setVisibleContainers] = useState<number[]>([]);
  const [shipPosition, setShipPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const containerSection = document.getElementById('container-ship');
      
      if (containerSection) {
        const rect = containerSection.getBoundingClientRect();
        const sectionTop = scrollY + rect.top;
        const progress = Math.max(0, Math.min(1, (scrollY - sectionTop + window.innerHeight) / window.innerHeight));
        
        setShipPosition(progress * 100);
        
        // Reveal containers based on scroll progress
        const containersToShow = Math.floor(progress * containers.length);
        const newVisible = Array.from({ length: containersToShow }, (_, i) => i);
        setVisibleContainers(newVisible);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="container-ship" className="relative min-h-screen bg-gradient-sky overflow-hidden">
      {/* Ocean Waves */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-wave animate-wave opacity-60"></div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-wave animate-wave opacity-40" style={{ animationDelay: '1s' }}></div>
      
      {/* Ship Hull */}
      <div 
        className="absolute bottom-8 w-96 h-24 bg-gradient-to-r from-gray-700 to-gray-600 rounded-l-full rounded-r-lg shadow-ship transition-transform duration-300"
        style={{ 
          left: `${shipPosition}%`,
          transform: `translateX(-50%) rotateY(${shipPosition > 50 ? '10deg' : '0deg'})`,
        }}
      >
        {/* Ship Flag */}
        <div className="absolute -top-16 right-8 w-16 h-12 bg-destructive rounded-sm shadow-lg">
          <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-destructive-foreground">
            DevOps
          </span>
        </div>
        
        {/* Captain Silhouette */}
        <div className="absolute -top-8 right-16 w-8 h-8 bg-foreground rounded-full opacity-80">
          <div className="absolute -top-1 -right-1 text-xs">🐱</div>
        </div>
      </div>

      {/* Tech Stack Containers */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="grid grid-cols-4 gap-6 max-w-4xl mx-auto px-8">
          {containers.map((container, index) => (
            <div
              key={container.name}
              className={`relative transition-all duration-700 ${
                visibleContainers.includes(index)
                  ? 'opacity-100 transform translate-y-0'
                  : 'opacity-0 transform translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div 
                className={`bg-card border border-border rounded-lg p-6 shadow-container hover:shadow-glow transition-all duration-300 cursor-pointer group ${
                  visibleContainers.includes(index) ? 'animate-container-pop' : ''
                }`}
              >
                <div className="text-center space-y-3">
                  <div className="text-4xl group-hover:animate-bounce">{container.emoji}</div>
                  <h3 className="font-bold text-lg text-foreground">{container.name}</h3>
                  <Badge variant="secondary" className="text-xs">
                    {container.description}
                  </Badge>
                </div>
                
                {/* Container Glow Effect */}
                <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-gradient-to-r from-primary to-accent"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Progress Indicator */}
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
        <div className="flex items-center space-x-2 bg-card/20 backdrop-blur-sm rounded-full px-4 py-2 border border-accent/30">
          <span className="text-sm text-muted-foreground">Loading containers:</span>
          <div className="w-32 h-2 bg-muted rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-300"
              style={{ width: `${(visibleContainers.length / containers.length) * 100}%` }}
            ></div>
          </div>
          <span className="text-sm font-mono text-accent">{visibleContainers.length}/{containers.length}</span>
        </div>
      </div>

      {/* Captain's Log */}
      <div className="absolute top-1/2 left-8 transform -translate-y-1/2 max-w-xs">
        <div className="bg-card/90 backdrop-blur-sm rounded-lg p-4 border border-border shadow-container">
          <h3 className="font-bold text-sm text-foreground mb-2">🧑‍✈️ Captain's Log</h3>
          <p className="text-xs text-muted-foreground">
            "Sailing through the DevOps seas with a cargo of cutting-edge technologies. 
            Each container holds the power to transform infrastructure into art."
          </p>
        </div>
      </div>
    </section>
  );
};