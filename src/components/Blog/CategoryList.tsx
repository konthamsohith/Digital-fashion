import React from 'react';
import { categories } from '../../data/blogData';

export default function CategoryList() {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
      <h3 className="text-lg font-bold text-gray-900 mb-4">Categories</h3>
      <div className="space-y-3">
        {categories.map((category) => (
          <a
            key={category.id}
            href={`/blog/category/${category.slug}`}
            className="flex items-center justify-between group py-2"
          >
            <span className="text-gray-600 group-hover:text-purple-600 transition-colors">
              {category.name}
            </span>
            <span className="px-2 py-1 text-xs font-medium bg-purple-100 text-purple-600 rounded-full">
              {category.count}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}