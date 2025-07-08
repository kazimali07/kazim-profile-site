import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Database, Server, Cloud, GitBranch, Code, ChartBar } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Hi, I&apos;m Kazim Musa
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Senior Data Engineer
              </p>
            </div>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              With 6+ years of experience in designing and implementing enterprise-grade data solutions,
              specializing in cloud-native architectures, data warehousing, and modern data stack implementation.
              Currently leading data engineering initiatives at South East Melbourne Primary Health Networks.
            </p>
            <div className="space-x-4">
              <Link href="/experience">
                <Button size="lg">
                  View Experience
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg">
                  Contact Me
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">
            Technical Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6">
              <Cloud className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-bold mb-2">Cloud Platforms</h3>
              <p className="text-gray-500 dark:text-gray-400">
                GCP (BigQuery, Cloud Run), AWS (S3, Lambda), Snowflake
              </p>
            </Card>
            <Card className="p-6">
              <Database className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-bold mb-2">Data Engineering</h3>
              <p className="text-gray-500 dark:text-gray-400">
                ETL/ELT, DBT, Airflow, Data Warehousing
              </p>
            </Card>
            <Card className="p-6">
              <GitBranch className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-bold mb-2">DevOps & IaC</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Terraform, Docker, Kubernetes, Git
              </p>
            </Card>
            <Card className="p-6">
              <Code className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-bold mb-2">Programming</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Python, SQL, Bash, PowerShell
              </p>
            </Card>
            <Card className="p-6">
              <ChartBar className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-bold mb-2">Analytics & BI</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Power BI, Tableau, Data Studio
              </p>
            </Card>
            <Card className="p-6">
              <Server className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-bold mb-2">Data Architecture</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Data Modeling, Data Vault, Data Governance
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">
            Certifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-2">Google Cloud</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Professional Data Engineer (2022)
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-2">AWS</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Certified Data Analytics - Specialty (2024)
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-2">Snowflake</h3>
              <p className="text-gray-500 dark:text-gray-400">
                SnowPro Core Certification (2024)
              </p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}