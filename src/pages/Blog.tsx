import React, { useState } from 'react';
import Navbar from '../components/Navigation/Navbar';
import BlogHeader from '../components/Blog/BlogHeader';
import BlogGrid from '../components/Blog/BlogGrid';
import CategoryList from '../components/Blog/CategoryList';
import PopularPosts from '../components/Blog/PopularPosts';
import TagCloud from '../components/Blog/TagCloud';
import FeaturedPost from '../components/Blog/FeaturedPost';
import { blogPosts } from '../data/blogPosts';
import { useSearch } from '../hooks/useSearch';

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState('');
  const filteredPosts = useSearch(blogPosts, searchTerm);
  const featuredPost = blogPosts[0];

  return (
    <div className="min-h-screen bg-[#0A0F1E] text-white">
      <Navbar />
      <BlogHeader onSearch={setSearchTerm} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {!searchTerm && <FeaturedPost post={featuredPost} />}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <BlogGrid posts={filteredPosts} />
          </div>
          <div className="space-y-8">
            <CategoryList />
            <PopularPosts />
            <TagCloud />
          </div>
        </div>
      </div>
    </div>
  );
}