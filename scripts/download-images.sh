#!/bin/bash

# Create public directory if it doesn't exist
mkdir -p public

# Download images
curl "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?q=80&w=1200" -o public/blog-schema.jpg
curl "https://images.unsplash.com/photo-1527474305487-b87b222841cc?q=80&w=1200" -o public/blog-feature-store.jpg
curl "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1200" -o public/azure-networking.jpg
