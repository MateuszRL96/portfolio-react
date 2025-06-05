'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { categories } from '@/data/blog';
import { TechIcon } from '@/components/TechIcon';
import type { BlogPost } from '@/lib/blog';

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const response = await fetch('/api/posts');
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('Error loading posts:', error);
      } finally {
        setIsLoading(false);
      }
    };
    loadPosts();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      <div className="bg-gradient-to-r from-blue-600 to-blue-400 py-24">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-7xl font-bold mb-6 text-white">Blog</h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Artykuły o programowaniu, technologiach i najnowszych trendach w świecie IT.
          </p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 pt-12">
        <div className="flex flex-wrap gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.name}
              className="px-6 py-3 rounded-full bg-white shadow-sm hover:shadow-md transition-shadow duration-200 flex items-center gap-2"
            >
              <TechIcon name={category.icon} />
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        {isLoading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post: BlogPost) => (
              <Link
                key={post.id}
                href={`/blog/${post.id}`}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden group"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-gray-500">{post.date}</span>
                    <div className="text-blue-500">
                      <TechIcon name={post.icon || 'FaCode'} size="lg" />
                    </div>
                  </div>
                  <h2 className="text-xl font-semibold mb-3 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-blue-600 font-medium">
                      {post.category}
                    </span>
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
} 