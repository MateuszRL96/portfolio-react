import Link from 'next/link';
import { categories } from '@/data/blog';
import { TechIcon } from '@/components/TechIcon';
import { BlogBackground } from '@/components/BlogBackground';
import { getBlogPosts, type BlogPost } from '@/lib/blog';

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative overflow-hidden">
        <BlogBackground />
        <div className="bg-gradient-to-r from-blue-600/30 to-white/30 backdrop-blur-sm py-24">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-7xl font-bold mb-6 text-gray-900">Blog</h1>
            <p className="text-xl text-gray-700 max-w-2xl">
              Artykuły o programowaniu, technologiach i najnowszych trendach w świecie IT.
            </p>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 py-12">
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
      </div>
    </div>
  );
} 