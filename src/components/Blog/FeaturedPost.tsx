import React from 'react';
import { Clock, Calendar, ArrowRight } from 'lucide-react';
import { BlogPost } from '../../types/blog';

interface FeaturedPostProps {
  post: BlogPost;
}

export default function FeaturedPost({ post }: FeaturedPostProps) {
  return (
    <div className="relative bg-white rounded-xl overflow-hidden shadow-lg mb-12">
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-2/3 relative h-[400px]">
          <img
            src={post.image}
            alt={post.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
        <div className="lg:w-1/3 p-8 flex flex-col justify-between">
          <div>
            <span className="inline-block px-4 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800 mb-4">
              Featured
            </span>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 line-clamp-3">
              {post.title}
            </h2>
            <p className="text-gray-600 mb-4 line-clamp-4">{post.excerpt}</p>
          </div>
          <div>
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {post.date}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </div>
            </div>
            <a
              href={`/blog/${post.id}`}
              className="inline-flex items-center gap-2 text-purple-600 font-medium hover:text-purple-700"
            >
              Read Article
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}