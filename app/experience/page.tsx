import { ExperienceCard } from "@/components/experience-card";

const experiences = [
  {
    title: "Senior Data Engineer",
    company: "South East Melbourne Primary Health Networks",
    period: "November 2024 - Present",
    location: "Melbourne, Australia",
    responsibilities: [
      "Designed and implemented a scalable Azure Data Lake Gen2 medallion architecture (Bronze, Silver, Gold layers) to support structured data processing and analytics",
      "Led the setup and configuration of Azure Databricks workspaces across DEV and PROD environments, integrating with Unity Catalog and implementing data lineage via Azure Purview",
      "Automated data ingestion pipelines using Azure Data Factory and Databricks Autoloader, enabling incremental load and near real-time ingestion of structured and semi-structured data",
      "Established robust CI/CD workflows using Azure DevOps for infrastructure as code, job deployment, and configuration management of Azure Data Services",
      "Designed secure networking with VNets, subnets, private endpoints, and firewall rules to ensure isolation and compliance across DEV and PROD subscriptions",
      "Implemented RBAC and resource locks to protect critical resources and ensured adherence to data governance policies using managed identities and service principals"
    ],
    technologies: [
      "Azure Data Lake Gen2",
      "Azure Databricks",
      "Azure Data Factory",
      "Azure DevOps",
      "Azure Purview",
      "Unity Catalog",
      "VNets",
      "RBAC",
      "CI/CD",
      "IaC"
    ]
  },
  {
    title: "Senior Data Engineer",
    company: "Wesfarmers Health",
    period: "August 2023 - November 2024",
    location: "Melbourne, Australia",
    responsibilities: [
      "Architected and implemented end-to-end data solutions using Snowflake, establishing enterprise-grade data warehouse architecture",
      "Led successful migration of legacy SAP models to GCP, utilizing DBT, BigQuery, Airflow, and Cloud Run, achieving 40% improved efficiency",
      "Designed and implemented IaC using Terraform for automated resource provisioning and access management",
      "Orchestrated complex data pipelines using Apache Airflow, achieving 99.9% pipeline reliability",
      "Implemented dynamic data masking and row-level security in Snowflake, ensuring GDPR and HIPAA compliance",
      "Enhanced multi-cloud data operations leveraging AWS EMR for batch processing and DynamoDB for NoSQL workloads"
    ],
    technologies: [
      "Snowflake",
      "GCP",
      "AWS",
      "Terraform",
      "Apache Airflow",
      "DBT",
      "BigQuery",
      "Cloud Run",
      "EMR",
      "DynamoDB"
    ]
  },
  {
    title: "BI Data Engineer",
    company: "Australian Pharmaceutical Industries (API)",
    period: "November 2021 - August 2023",
    location: "Melbourne, Australia",
    responsibilities: [
      "Spearheaded migration from on-premises Teradata/Informatica to GCP, reducing operational costs by 30%",
      "Designed and implemented cloud-native data warehouse architecture using BigQuery and Cloud Storage",
      "Developed serverless ETL workflows using AWS Lambda and S3, improving data processing efficiency by 25%",
      "Implemented automated data quality monitoring and validation frameworks",
      "Created comprehensive data documentation and governance protocols"
    ],
    technologies: [
      "GCP",
      "BigQuery",
      "Cloud Storage",
      "AWS Lambda",
      "S3",
      "Teradata",
      "Informatica",
      "Python",
      "SQL"
    ]
  },
  {
    title: "BI Data Engineer",
    company: "Keypath Education Australia",
    period: "April 2020 - November 2021",
    location: "Melbourne, Australia",
    responsibilities: [
      "Designed and implemented cloud-native data architecture using AWS services (Glue, Redshift, S3)",
      "Developed automated ETL processes reducing manual data processing time by 60%",
      "Created real-time analytics dashboards for student engagement monitoring",
      "Implemented data quality frameworks ensuring 99.9% data accuracy"
    ],
    technologies: [
      "AWS Glue",
      "Redshift",
      "S3",
      "Python",
      "SQL",
      "Power BI",
      "Tableau"
    ]
  },
  {
    title: "Business Intelligence Consultant",
    company: "Neo Media World",
    period: "November 2019 - April 2020",
    location: "Sydney, Australia",
    responsibilities: [
      "Delivered end-to-end BI solutions using Power BI, Tableau, and Data Studio",
      "Developed standardized reporting templates improving report creation efficiency by 40%",
      "Led data visualization workshops for stakeholders"
    ],
    technologies: [
      "Power BI",
      "Tableau",
      "Data Studio",
      "SQL",
      "Python"
    ]
  },
  {
    title: "Data Analyst",
    company: "Merkle Australia",
    period: "August 2018 - November 2019",
    location: "Sydney, Australia",
    responsibilities: [
      "Developed predictive models for customer behavior analysis",
      "Created automated reporting solutions reducing manual reporting time by 50%",
      "Conducted A/B testing and statistical analysis for marketing campaigns"
    ],
    technologies: [
      "Python",
      "R",
      "SQL",
      "Excel",
      "Power BI"
    ]
  },
  {
    title: "Data Analyst",
    company: "Steelx Pty Ltd",
    period: "August 2017 - August 2018",
    location: "Gold Coast Mc, Queensland, Australia",
    responsibilities: [
      "Implemented data collection and validation processes",
      "Developed Python scripts for automated data cleaning and analysis",
      "Created executive dashboards for KPI monitoring"
    ],
    technologies: [
      "Python",
      "SQL",
      "Excel",
      "Power BI"
    ]
  }
];

export default function Experience() {
  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-8">Professional Experience</h1>
      <div className="space-y-8">
        {experiences.map((experience, index) => (
          <ExperienceCard key={index} {...experience} />
        ))}
      </div>
    </div>
  );
}