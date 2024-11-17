import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface SkillCardProps {
  category: string;
  skills: {
    name: string;
    proficiency: number;
  }[];
}

export function SkillCard({ category, skills }: SkillCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{category}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {skills.map((skill, index) => (
          <div key={index} className="space-y-2">
            <div className="flex justify-between">
              <span className="font-medium">{skill.name}</span>
              <span className="text-muted-foreground">{skill.proficiency}%</span>
            </div>
            <Progress value={skill.proficiency} />
          </div>
        ))}
      </CardContent>
    </Card>
  );
}