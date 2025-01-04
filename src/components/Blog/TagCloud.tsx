import React from 'react';
import { popularTags } from '../../data/blogData';

export default function TagCloud() {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h3 className="text-lg font-bold text-gray-900 mb-4">Popular Tags</h3>
      <div className="flex flex-wrap gap-2">
        {popularTags.map((tag) => (
          <a
            key={tag}
            href={`/blog/tag/${tag.toLowerCase()}`}
            className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm hover:bg-purple-100 hover:text-purple-600 transition-colors"
          >
            {tag}
          </a>
        ))}
      </div>
    </div>
  );
}