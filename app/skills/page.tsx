import { SkillCard } from "@/components/skill-card";

const skillCategories = [
  {
    category: "Programming Languages",
    skills: [
      { name: "Python", proficiency: 95 },
      { name: "SQL", proficiency: 90 },
      { name: "Bash", proficiency: 75 },
      { name: "PowerShell", proficiency: 70 }
    ]
  },
  {
    category: "Business Intelligence",
    skills: [
      { name: "Power BI", proficiency: 85 },
      { name: "Tableau", proficiency: 80 },
      { name: "Data Studio", proficiency: 85 }
    ]
  },
  {
    category: "Cloud Platforms",
    skills: [
      { name: "Google Cloud Platform", proficiency: 90 },
      { name: "AWS", proficiency: 85 },
      { name: "Snowflake", proficiency: 90 }
    ]
  },
  {
    category: "Data Engineering",
    skills: [
      { name: "ETL/ELT", proficiency: 95 },
      { name: "Data Warehousing", proficiency: 90 },
      { name: "Data Modeling", proficiency: 85 },
      { name: "Apache Airflow", proficiency: 80 }
    ]
  }
];

export default function Skills() {
  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-8">Technical Skills</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {skillCategories.map((category, index) => (
          <SkillCard key={index} {...category} />
        ))}
      </div>
    </div>
  );
}