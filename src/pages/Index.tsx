import { BlueGreenLanding } from "@/components/BlueGreenLanding";
import { ContainerShip } from "@/components/ContainerShip";
import { TechIslands } from "@/components/TechIslands";
import { CloudLayer } from "@/components/CloudLayer";
import { MonitoringTower } from "@/components/MonitoringTower";
import { CareerLighthouse } from "@/components/CareerLighthouse";

const Index = () => {
  return (
    <div className="relative">
      {/* Floating Cloud Layer */}
      <CloudLayer />
      
      {/* Main Content Sections */}
      <BlueGreenLanding />
      <ContainerShip />
      <TechIslands />
      <MonitoringTower />
      <CareerLighthouse />
      
      {/* Footer */}
      <footer className="bg-card border-t border-border py-8">
        <div className="container mx-auto px-8 text-center">
          <p className="text-muted-foreground">
            ⚓ Built with React, TypeScript, and a passion for DevOps excellence
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
