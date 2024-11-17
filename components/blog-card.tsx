import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

interface BlogCardProps {
  title: string;
  description: string;
  image: string;
  date: string;
  readTime: string;
  url: string;
}

export function BlogCard({
  title,
  description,
  image,
  date,
  readTime,
  url,
}: BlogCardProps) {
  return (
    <Card className="overflow-hidden group h-full flex flex-col">
      <div className="relative aspect-[1.85/1] overflow-hidden">
        <Image
          src={image}
          alt={`${title} blog thumbnail`}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          quality={90}
        />
      </div>
      <CardHeader>
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
          <span>{date}</span>
          <span>•</span>
          <span>{readTime}</span>
        </div>
        <CardTitle className="text-xl font-bold break-words line-clamp-2">
          {title}
        </CardTitle>
        <CardDescription className="break-words line-clamp-3">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="mt-auto">
        <Button variant="outline" size="sm" asChild className="w-full">
          <a href={url} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="mr-2 h-4 w-4" />
            Read on Medium
          </a>
        </Button>
      </CardContent>
    </Card>
  );
}
