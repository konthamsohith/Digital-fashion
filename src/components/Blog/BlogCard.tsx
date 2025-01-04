import React from 'react';
import { Calendar, Clock } from 'lucide-react';
import AnimatedSection from '../animations/AnimatedSection';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
  category: string;
}

interface BlogCardProps {
  post: BlogPost;
  index: number;
}

export default function BlogCard({ post, index }: BlogCardProps) {
  return (
    <AnimatedSection animation="slide-up" delay={index * 200}>
      <article className="bg-[#151B2E] rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow hover-lift">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3">
            <img
              src={post.image}
              alt={post.title}
              className="h-48 w-full object-cover"
            />
          </div>
          <div className="p-6 md:w-2/3">
            <div className="flex items-center gap-4 mb-3">
              <span className="text-sm font-medium text-blue-400">{post.category}</span>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <Calendar className="w-4 h-4" />
                {post.date}
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </div>
            </div>
            <h2 className="text-xl font-bold text-white mb-2">
              <a href={`/blog/${post.id}`} className="hover:text-blue-400">
                {post.title}
              </a>
            </h2>
            <p className="text-gray-400 mb-4">{post.excerpt}</p>
            <a
              href={`/blog/${post.id}`}
              className="text-blue-400 font-medium hover:text-blue-300"
            >
              Read More →
            </a>
          </div>
        </div>
      </article>
    </AnimatedSection>
  );
}