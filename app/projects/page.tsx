import { ProjectCard } from "@/components/project-card";

const projects = [
  {
    title: "Teradata to GCP Migration",
    description: "Led a complex enterprise-wide migration from on-premises Teradata to Google Cloud Platform, implementing modern data architecture and best practices.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200",
    technologies: [
      "Google Cloud Platform",
      "BigQuery",
      "Dataflow",
      "Cloud Storage",
      "Terraform",
      "dbt",
      "Airflow"
    ],
    results: [
      "Successfully migrated 500+ TB of data with zero data loss",
      "Reduced infrastructure costs by 40%",
      "Improved query performance by 3x",
      "Implemented automated CI/CD pipelines for data workflows"
    ]
  },
  {
    title: "ML Feature Store & Model Registry",
    description: "Designed and implemented a centralized feature store and model registry to streamline machine learning operations and improve model deployment efficiency.",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=1200",
    technologies: [
      "Vertex AI",
      "BigQuery",
      "Cloud Functions",
      "Python",
      "TensorFlow",
      "MLflow",
      "Docker"
    ],
    results: [
      "Reduced feature engineering time by 60%",
      "Decreased model deployment time from days to hours",
      "Implemented version control for 100+ ML features",
      "Standardized ML model lifecycle management"
    ]
  },
  {
    title: "Product Recommendation AI System",
    description: "Developed an advanced recommendation system using machine learning to provide personalized product recommendations to customers.",
    image: "https://images.unsplash.com/photo-1516110833967-0b5716ca1387?q=80&w=1200",
    technologies: [
      "Vertex AI",
      "Recommendations AI",
      "BigQuery ML",
      "Cloud Run",
      "Python",
      "TensorFlow",
      "FastAPI"
    ],
    results: [
      "Increased customer engagement by 25%",
      "Improved conversion rates by 15%",
      "Processed 1M+ user interactions daily",
      "Achieved 95% recommendation accuracy"
    ]
  }
];

export default function Projects() {
  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-8">Featured Projects</h1>
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
}