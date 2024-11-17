"use client";

import { Mail, MapPin, Linkedin, Phone, Github } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function Contact() {
  return (
    <div className="container py-12">
      <Card className="max-w-2xl mx-auto p-8">
        <h1 className="text-4xl font-bold mb-6">Get in Touch</h1>
        <p className="text-lg text-muted-foreground mb-8">
          I'm always open to discussing new opportunities in data engineering and cloud architecture.
          Feel free to reach out through any of the channels below.
        </p>
        <div className="space-y-6">
          <div className="flex items-center space-x-3">
            <Mail className="h-5 w-5 text-primary" />
            <a
              href="mailto:consulting@kazimmusa.com"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              consulting@kazimmusa.com
            </a>
          </div>
          <div className="flex items-center space-x-3">
            <Phone className="h-5 w-5 text-primary" />
            <a
              href="tel:+61451010420"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              +61 451 010 420
            </a>
          </div>
          <div className="flex items-center space-x-3">
            <MapPin className="h-5 w-5 text-primary" />
            <span className="text-muted-foreground">
              Melbourne, Victoria, Australia
            </span>
          </div>
          <div className="flex items-center space-x-3">
            <Linkedin className="h-5 w-5 text-primary" />
            <a
              href="https://linkedin.com/in/kazim-musa-69629024"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              LinkedIn Profile
            </a>
          </div>
          <div className="flex items-center space-x-3">
            <Github className="h-5 w-5 text-primary" />
            <a
              href="https://github.com/kazimali07"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              GitHub Profile
            </a>
          </div>
        </div>
      </Card>
    </div>
  );
}