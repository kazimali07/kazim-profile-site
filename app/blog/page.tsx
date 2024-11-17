import { BlogCard } from "@/components/blog-card";

const blogs = [
  {
    title: "Choosing the Right Data Warehouse Schema for Your Data Model",
    description: "An in-depth comparison of Star Schema, Snowflake Schema, Data Vault, and the Hybrid Approach. Learn about their pros, cons, and best use cases to make informed decisions for your data architecture.",
    image: "/blog-schema.jpg", // We'll add this image
    date: "Mar 24, 2024",
    readTime: "10 min read",
    url: "https://medium.com/@kazimali07/choosing-the-right-data-warehouse-schema-for-your-data-model-star-snowflake-data-vault-and-the-a6fb76490162"
  },
  {
    title: "A Practical Guide to Feature Stores for Data Engineers",
    description: "Discover how feature stores can streamline your ML operations. This guide covers key concepts, benefits, and practical implementation strategies for data engineers working with machine learning features.",
    image: "/blog-feature-store.jpg", // We'll add this image
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
