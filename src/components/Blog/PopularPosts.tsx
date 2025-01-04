import React from 'react';
import { blogPosts } from '../../data/blogPosts';
import { ArrowRight } from 'lucide-react';

export default function PopularPosts() {
  const popularPosts = blogPosts.slice(0, 3);

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
      <h3 className="text-lg font-bold text-gray-900 mb-4">Popular Posts</h3>
      <div className="space-y-4">
        {popularPosts.map((post) => (
          <a
            key={post.id}
            href={`/blog/${post.id}`}
            className="flex items-start gap-4 group"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
            />
            <div>
              <h4 className="font-medium text-gray-900 group-hover:text-purple-600 transition-colors line-clamp-2">
                {post.title}
              </h4>
              <p className="text-sm text-gray-500 mt-1">{post.date}</p>
            </div>
          </a>
        ))}
      </div>
      <a
        href="/blog/popular"
        className="inline-flex items-center gap-2 text-purple-600 font-medium mt-4 hover:text-purple-700"
      >
        View All Popular Posts
        <ArrowRight className="w-4 h-4" />
      </a>
    </div>
  );
}