import React from 'react';
import BlogCard from './BlogCard';
import { BlogPost } from '../../types/blog';

interface BlogGridProps {
  posts: BlogPost[];
}

export default function BlogGrid({ posts }: BlogGridProps) {
  if (posts.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-400 text-lg">No articles found matching your search.</p>
      </div>
    );
  }

  return (
    <div className="grid gap-8">
      {posts.map((post, index) => (
        <BlogCard key={post.id} post={post} index={index} />
      ))}
    </div>
  );
}