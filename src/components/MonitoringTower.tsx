import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

interface MetricData {
  name: string;
  value: number;
  unit: string;
  status: 'healthy' | 'warning' | 'critical';
  emoji: string;
}

export const MonitoringTower = () => {
  const [metrics, setMetrics] = useState<MetricData[]>([
    { name: "CPU Usage", value: 65, unit: "%", status: 'healthy', emoji: "🖥️" },
    { name: "Memory", value: 78, unit: "%", status: 'warning', emoji: "🧠" },
    { name: "Disk I/O", value: 45, unit: "%", status: 'healthy', emoji: "💾" },
    { name: "Network", value: 23, unit: "Mbps", status: 'healthy', emoji: "🌐" },
    { name: "Containers", value: 12, unit: "running", status: 'healthy', emoji: "🐳" },
    { name: "Uptime", value: 99.9, unit: "%", status: 'healthy', emoji: "⚡" },
  ]);

  const [alerts, setAlerts] = useState([
    { message: "Pod memory usage above threshold", severity: 'warning', time: '2m ago' },
    { message: "Deployment successful: api-service v1.2.3", severity: 'info', time: '5m ago' },
    { message: "SSL certificate expires in 30 days", severity: 'warning', time: '1h ago' },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(prev => prev.map(metric => ({
        ...metric,
        value: metric.name === "Uptime" 
          ? Math.min(100, metric.value + Math.random() * 0.1)
          : Math.max(0, Math.min(100, metric.value + (Math.random() - 0.5) * 10))
      })));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'healthy': return 'text-secondary';
      case 'warning': return 'text-yellow-500';
      case 'critical': return 'text-destructive';
      default: return 'text-muted-foreground';
    }
  };

  const getProgressColor = (status: string) => {
    switch (status) {
      case 'healthy': return 'bg-secondary';
      case 'warning': return 'bg-yellow-500';
      case 'critical': return 'bg-destructive';
      default: return 'bg-muted';
    }
  };

  return (
    <section className="relative py-20 bg-gradient-sky">
      <div className="container mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-foreground mb-4">
            📡 Monitoring Tower
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real-time observability into the DevOps fleet. Keeping watch over 
            infrastructure health and performance metrics.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* System Metrics */}
          <div className="lg:col-span-2 space-y-4">
            <Card className="bg-card/90 backdrop-blur-sm border-border shadow-container">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <span className="text-2xl">📊</span>
                  <span>System Metrics</span>
                </CardTitle>
                <CardDescription>Live infrastructure monitoring dashboard</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {metrics.map((metric) => (
                  <div key={metric.name} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="text-lg">{metric.emoji}</span>
                        <span className="font-medium text-foreground">{metric.name}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className={`font-mono text-sm ${getStatusColor(metric.status)}`}>
                          {metric.value.toFixed(1)}{metric.unit}
                        </span>
                        <Badge variant={metric.status === 'healthy' ? 'secondary' : 'destructive'} className="text-xs">
                          {metric.status}
                        </Badge>
                      </div>
                    </div>
                    <Progress 
                      value={metric.value} 
                      className="h-2"
                    />
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Cluster Status */}
            <Card className="bg-card/90 backdrop-blur-sm border-border shadow-container">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <span className="text-2xl">☸️</span>
                  <span>Kubernetes Cluster</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-secondary/20 rounded-lg">
                    <div className="text-2xl font-bold text-secondary">3</div>
                    <div className="text-sm text-muted-foreground">Nodes</div>
                  </div>
                  <div className="text-center p-4 bg-primary/20 rounded-lg">
                    <div className="text-2xl font-bold text-primary">28</div>
                    <div className="text-sm text-muted-foreground">Pods</div>
                  </div>
                  <div className="text-center p-4 bg-accent/20 rounded-lg">
                    <div className="text-2xl font-bold text-accent">8</div>
                    <div className="text-sm text-muted-foreground">Services</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Alerts & Events */}
          <div className="space-y-4">
            <Card className="bg-card/90 backdrop-blur-sm border-border shadow-container">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <span className="text-2xl">🚨</span>
                  <span>Recent Alerts</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {alerts.map((alert, index) => (
                  <div key={index} className="p-3 bg-muted/30 rounded-lg">
                    <div className="flex items-start space-x-2">
                      <div className={`w-2 h-2 rounded-full mt-2 ${
                        alert.severity === 'warning' ? 'bg-yellow-500' : 
                        alert.severity === 'critical' ? 'bg-destructive' : 'bg-secondary'
                      }`}></div>
                      <div className="flex-1">
                        <p className="text-sm text-foreground">{alert.message}</p>
                        <p className="text-xs text-muted-foreground mt-1">{alert.time}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Deployment Status */}
            <Card className="bg-card/90 backdrop-blur-sm border-border shadow-container">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <span className="text-2xl">🚀</span>
                  <span>Deployments</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">api-service</span>
                    <Badge variant="secondary">v1.2.3</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">web-frontend</span>
                    <Badge variant="secondary">v2.1.0</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">worker-queue</span>
                    <Badge variant="destructive">v1.0.8</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};