import { BlogCard } from "@/components/blog-card";

const blogs = [
  {
    title: "Cloud Networking Concepts for Data Engineers on Azure",
    description: "Demystifying networking fundamentals that every data engineer should understand when working with Azure. Learn about VNets, private endpoints, service endpoints, and network security best practices for secure data platforms.",
    image: "/azure-networking.jpg",
    date: "Jul 8, 2025",
    readTime: "12 min read",
    url: "https://medium.com/@kazimali07/cloud-networking-concepts-for-data-engineers-on-azure-6d76615a985b"
  },
  {
    title: "Choosing the Right Data Warehouse Schema for Your Data Model",
    description: "An in-depth comparison of Star Schema, Snowflake Schema, Data Vault, and the Hybrid Approach. Learn about their pros, cons, and best use cases to make informed decisions for your data architecture.",
    image: "/blog-schema.jpg",
    date: "Mar 24, 2024",
    readTime: "10 min read",
    url: "https://medium.com/@kazimali07/choosing-the-right-data-warehouse-schema-for-your-data-model-star-snowflake-data-vault-and-the-a6fb76490162"
  },
  {
    title: "A Practical Guide to Feature Stores for Data Engineers",
    description: "Discover how feature stores can streamline your ML operations. This guide covers key concepts, benefits, and practical implementation strategies for data engineers working with machine learning features.",
    image: "/blog-feature-store.jpg",
    date: "Mar 23, 2024",
    readTime: "8 min read",
    url: "https://medium.com/@kazimali07/a-practical-guide-to-feature-stores-for-data-engineers-bf975defb334"
  }
];

export default function Blog() {
  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-8">Blog Posts</h1>
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
        {blogs.map((blog, index) => (
          <BlogCard key={index} {...blog} />
        ))}
      </div>
    </div>
  );
}
