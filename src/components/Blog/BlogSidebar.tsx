import React from 'react';
import { categories, popularTags } from '../../data/blogData';

export default function BlogSidebar() {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-bold text-gray-900 mb-4">Categories</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <a
              key={category.id}
              href={`/blog/category/${category.slug}`}
              className="flex items-center justify-between group"
            >
              <span className="text-gray-600 group-hover:text-[#006BFF]">
                {category.name}
              </span>
              <span className="text-gray-400 text-sm">{category.count}</span>
            </a>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-bold text-gray-900 mb-4">Popular Tags</h3>
        <div className="flex flex-wrap gap-2">
          {popularTags.map((tag) => (
            <a
              key={tag}
              href={`/blog/tag/${tag.toLowerCase()}`}
              className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm hover:bg-[#006BFF] hover:text-white transition-colors"
            >
              {tag}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}