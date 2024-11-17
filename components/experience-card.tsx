import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ExperienceCardProps {
  title: string;
  company: string;
  period: string;
  location: string;
  responsibilities: string[];
  technologies: string[];
}

export function ExperienceCard({
  title,
  company,
  period,
  location,
  responsibilities,
  technologies,
}: ExperienceCardProps) {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <CardTitle>
          <div className="space-y-1">
            <h3 className="text-2xl font-bold">{title}</h3>
            <p className="text-lg text-muted-foreground">{company}</p>
            <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
              <span>{period}</span>
              <span>•</span>
              <span>{location}</span>
            </div>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <h4 className="font-semibold">Key Responsibilities:</h4>
          <ul className="list-disc list-inside space-y-1 text-muted-foreground">
            {responsibilities.map((responsibility, index) => (
              <li key={index}>{responsibility}</li>
            ))}
          </ul>
        </div>
        <div className="space-y-2">
          <h4 className="font-semibold">Technologies:</h4>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <Badge key={index} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}