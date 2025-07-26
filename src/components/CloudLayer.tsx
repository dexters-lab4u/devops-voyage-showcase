import { Badge } from "@/components/ui/badge";

interface CloudService {
  name: string;
  emoji: string;
  description: string;
}

const awsServices: CloudService[] = [
  { name: "EC2", emoji: "🖥️", description: "Virtual servers" },
  { name: "Lambda", emoji: "⚡", description: "Serverless compute" },
  { name: "S3", emoji: "🪣", description: "Object storage" },
  { name: "RDS", emoji: "🗄️", description: "Managed database" },
  { name: "EKS", emoji: "☸️", description: "Kubernetes service" },
  { name: "CloudWatch", emoji: "👁️", description: "Monitoring" },
];

const otherClouds: CloudService[] = [
  { name: "Azure", emoji: "🔷", description: "Microsoft cloud" },
  { name: "GCP", emoji: "🟡", description: "Google cloud" },
  { name: "DigitalOcean", emoji: "🌊", description: "Developer cloud" },
];

export const CloudLayer = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-30 pointer-events-none">
      {/* Main AWS Cloud */}
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
        <div className="relative bg-white/10 backdrop-blur-sm rounded-full px-8 py-4 border border-white/20 animate-float">
          <div className="flex items-center space-x-3">
            <span className="text-2xl">☁️</span>
            <span className="text-lg font-bold text-foreground">AWS Cloud</span>
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
          </div>
          
          {/* Lightning Effect */}
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
            <div className="text-accent animate-pulse">⚡</div>
          </div>
        </div>
      </div>

      {/* Service Droplets */}
      <div className="absolute top-20 left-1/3 space-y-2 animate-float" style={{ animationDelay: '1s' }}>
        {awsServices.slice(0, 3).map((service, index) => (
          <div 
            key={service.name}
            className="bg-primary/20 backdrop-blur-sm rounded-full px-3 py-1 border border-primary/30 text-xs animate-fade-in"
            style={{ animationDelay: `${(index + 1) * 500}ms` }}
          >
            <span className="mr-1">{service.emoji}</span>
            <span className="text-primary-foreground">{service.name}</span>
          </div>
        ))}
      </div>

      <div className="absolute top-20 right-1/3 space-y-2 animate-float" style={{ animationDelay: '2s' }}>
        {awsServices.slice(3).map((service, index) => (
          <div 
            key={service.name}
            className="bg-secondary/20 backdrop-blur-sm rounded-full px-3 py-1 border border-secondary/30 text-xs animate-fade-in"
            style={{ animationDelay: `${(index + 4) * 500}ms` }}
          >
            <span className="mr-1">{service.emoji}</span>
            <span className="text-secondary-foreground">{service.name}</span>
          </div>
        ))}
      </div>

      {/* Other Cloud Providers */}
      <div className="absolute top-8 left-8">
        <div className="bg-accent/20 backdrop-blur-sm rounded-full px-4 py-2 border border-accent/30 animate-float" style={{ animationDelay: '3s' }}>
          <span className="text-sm text-accent-foreground">🔷 Azure</span>
        </div>
      </div>

      <div className="absolute top-8 right-8">
        <div className="bg-muted/20 backdrop-blur-sm rounded-full px-4 py-2 border border-muted/30 animate-float" style={{ animationDelay: '4s' }}>
          <span className="text-sm text-muted-foreground">🟡 GCP</span>
        </div>
      </div>

      {/* Connectivity Lines */}
      <div className="absolute top-16 left-1/4 w-32 h-0.5 bg-gradient-to-r from-primary/50 to-transparent animate-pulse"></div>
      <div className="absolute top-16 right-1/4 w-32 h-0.5 bg-gradient-to-l from-secondary/50 to-transparent animate-pulse"></div>
    </div>
  );
};
