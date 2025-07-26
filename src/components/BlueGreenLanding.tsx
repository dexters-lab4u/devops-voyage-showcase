import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import heroShip from "@/assets/hero-ship.jpg";

export const BlueGreenLanding = () => {
  const [currentSide, setCurrentSide] = useState<'blue' | 'green'>('blue');

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSide(prev => prev === 'blue' ? 'green' : 'blue');
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Ocean Background */}
      <div className="absolute inset-0 bg-gradient-ocean"></div>
      
      {/* Hero Ship Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${heroShip})` }}
      ></div>

      {/* Split Screen Container */}
      <div className="relative z-10 flex min-h-screen">
        {/* Blue Side - Current You */}
        <div 
          className={`w-1/2 bg-gradient-to-br from-primary/90 to-primary/70 backdrop-blur-sm transition-all duration-1000 ${
            currentSide === 'blue' ? 'scale-105 shadow-glow' : 'scale-100'
          }`}
        >
          <div className="flex flex-col justify-center items-center h-screen p-8 text-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-primary-foreground mb-8">
                🛳️ Current Deployment
              </h2>
              
              <div className="space-y-4">
                <div className="bg-card/20 backdrop-blur-sm rounded-lg p-4 border border-primary/30">
                  <h3 className="text-xl font-semibold text-primary-foreground mb-2">DevOps Engineer</h3>
                  <p className="text-primary-foreground/80">Orchestrating containerized solutions</p>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  {['🐳 Docker', '☸️ Kubernetes', '🔧 Terraform', '📈 Monitoring'].map((tech) => (
                    <div key={tech} className="bg-card/20 backdrop-blur-sm rounded-lg p-3 border border-primary/30">
                      <span className="text-primary-foreground font-medium">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Button 
                variant="secondary" 
                size="lg"
                className="mt-6 bg-secondary/20 border-secondary/50 hover:bg-secondary/30"
              >
                View Tech Stack
              </Button>
            </div>
          </div>
        </div>

        {/* Green Side - Future You */}
        <div 
          className={`w-1/2 bg-gradient-to-bl from-secondary/90 to-secondary/70 backdrop-blur-sm transition-all duration-1000 ${
            currentSide === 'green' ? 'scale-105 shadow-glow' : 'scale-100'
          }`}
        >
          <div className="flex flex-col justify-center items-center h-screen p-8 text-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-secondary-foreground mb-8">
                🚀 Next Deployment
              </h2>
              
              <div className="space-y-4">
                <div className="bg-card/20 backdrop-blur-sm rounded-lg p-4 border border-secondary/30">
                  <h3 className="text-xl font-semibold text-secondary-foreground mb-2">Cloud Architect</h3>
                  <p className="text-secondary-foreground/80">Designing scalable cloud-native systems</p>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  {['🔄 GitOps', '🌐 Service Mesh', '🔍 Observability', '🏗️ Platform Eng'].map((tech) => (
                    <div key={tech} className="bg-card/20 backdrop-blur-sm rounded-lg p-3 border border-secondary/30">
                      <span className="text-secondary-foreground font-medium">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Button 
                variant="secondary" 
                size="lg"
                className="mt-6 bg-primary/20 border-primary/50 hover:bg-primary/30"
              >
                Explore Journey
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Pipeline Flow Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex items-center space-x-4 bg-card/20 backdrop-blur-sm rounded-full px-6 py-3 border border-accent/30">
          <div className={`w-3 h-3 rounded-full transition-colors duration-300 ${currentSide === 'blue' ? 'bg-primary' : 'bg-primary/30'}`}></div>
          <div className="h-0.5 w-12 bg-gradient-to-r from-primary to-secondary"></div>
          <div className={`w-3 h-3 rounded-full transition-colors duration-300 ${currentSide === 'green' ? 'bg-secondary' : 'bg-secondary/30'}`}></div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="text-accent text-2xl">⬇</div>
      </div>
    </section>
  );
};