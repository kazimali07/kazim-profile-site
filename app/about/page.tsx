"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download } from "lucide-react";
import Image from "next/image";

export default function About() {
  const handleDownloadResume = () => {
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = '/Kazim_Musa_Resume.pdf';
    link.setAttribute('download', 'Kazim Musa - Senior Data Engineer.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="container py-12">
      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold">About Me</h1>
          <div className="space-y-4">
            <p className="text-lg text-muted-foreground">
              I am a results-driven Senior Data Engineer with over 6 years of experience in designing and implementing enterprise-grade data solutions. My expertise spans cloud-native architectures, data warehousing, and modern data stack implementation, with a proven track record of leading successful migrations and optimizing data pipelines.
            </p>
            <p className="text-lg text-muted-foreground">
              Currently at Wesfarmers Health, I lead data engineering initiatives focusing on cloud migration, data security, and pipeline optimization. My approach combines technical expertise with a strong understanding of business needs, ensuring that data solutions drive meaningful insights and value.
            </p>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Education</h2>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Master of Information Management System</h3>
              <p className="text-muted-foreground">Data Science Specialization</p>
              <p className="text-muted-foreground">La Trobe University, 2015</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Bachelor of Engineering</h3>
              <p className="text-muted-foreground">Computer Science and Engineering</p>
              <p className="text-muted-foreground">Bangalore Institute of Technology, 2012</p>
            </div>
          </div>
          <Button className="w-full sm:w-auto" onClick={handleDownloadResume}>
            <Download className="mr-2 h-4 w-4" />
            Download Resume
          </Button>
        </div>
        <div className="space-y-6">
          <Card className="p-6">
            <div className="relative w-full h-[500px] overflow-hidden rounded-lg">
              <Image
                src="/images/profile.jpg"
                alt="Kazim Musa - Senior Data Engineer"
                fill
                className="object-contain"
                style={{ objectPosition: '50% 30%' }}
                priority
              />
            </div>
          </Card>
          <Card className="p-6 space-y-4">
            <h2 className="text-2xl font-bold">Professional Summary</h2>
            <p className="text-muted-foreground">
              Senior Data Engineer with expertise in cloud platforms (GCP, AWS, Snowflake), data engineering, and DevOps practices. Certified in Google Cloud, AWS, and Snowflake technologies. Passionate about building scalable data solutions and driving data-driven decision making.
            </p>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Key Certifications</h3>
              <ul className="list-disc list-inside text-muted-foreground">
                <li>Google Cloud Professional Data Engineer (2022)</li>
                <li>AWS Certified Data Analytics - Specialty (2024)</li>
                <li>SnowPro Core Certification (2024)</li>
              </ul>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}