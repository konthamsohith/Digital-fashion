import { useState, useEffect } from 'react';
import { BlogPost } from '../types/blog';

export function useSearch(posts: BlogPost[], searchTerm: string) {
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>(posts);

  useEffect(() => {
    if (!searchTerm.trim()) {
      setFilteredPosts(posts);
      return;
    }

    const searchTermLower = searchTerm.toLowerCase();
    const filtered = posts.filter(post => 
      post.title.toLowerCase().includes(searchTermLower) ||
      post.excerpt.toLowerCase().includes(searchTermLower) ||
      post.category.toLowerCase().includes(searchTermLower)
    );

    setFilteredPosts(filtered);
  }, [posts, searchTerm]);

  return filteredPosts;
}