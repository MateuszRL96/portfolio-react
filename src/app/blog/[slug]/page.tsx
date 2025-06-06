import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';
import { getBlogPost, type BlogPost } from '@/lib/blog';

interface Props {
  params: {
    slug: string;
  };
  searchParams: { [key: string]: string | string[] | undefined };
}

export default async function BlogPost({ params }: Props) {
  const post = await getBlogPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="min-h-screen bg-gray-50 py-12 relative">
      <Link 
        href="/blog" 
        className="fixed top-24 left-8 z-50 flex items-center gap-3 px-6 py-3 bg-blue-50 hover:bg-blue-100 backdrop-blur-sm rounded-full shadow-lg transition-all duration-300 group"
      >
        <FaArrowLeft className="w-6 h-6 text-blue-500 group-hover:-translate-x-1 transition-transform duration-300" />
        <span className="text-blue-600 font-medium text-lg">Powrót</span>
      </Link>

      {post.coverImage && (
        <div className="relative w-full h-[400px] mb-16">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover"
          />
        </div>
      )}
      
      <div className="max-w-4xl mx-auto px-4">
        <header className="mb-16 border-b border-gray-200 pb-8">
          <h1 className="text-5xl font-bold mb-8">{post.title}</h1>
          <div className="flex items-center gap-4 text-gray-600 mb-8">
            <span className="font-medium">{post.author}</span>
            <span>•</span>
            <span>{new Date(post.date).toLocaleDateString()}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        <div 
          className="blog-content [&>*]:mb-8 [&>h1]:text-4xl [&>h1]:font-bold [&>h1]:mt-12 [&>h1]:mb-6
            [&>h2]:text-3xl [&>h2]:font-bold [&>h2]:mt-10 [&>h2]:mb-6
            [&>h3]:text-2xl [&>h3]:font-bold [&>h3]:mt-8 [&>h3]:mb-4
            [&>p]:leading-relaxed [&>p]:text-gray-800
            [&>pre]:my-8 [&>pre]:p-6 [&>pre]:bg-gray-900 [&>pre]:rounded-xl [&>pre]:overflow-auto
            [&>ul]:my-6 [&>ul]:list-disc [&>ul]:list-inside [&>ul]:space-y-2
            [&>ol]:my-6 [&>ol]:list-decimal [&>ol]:list-inside [&>ol]:space-y-2
            [&>li]:mb-2
            [&>code]:bg-blue-50 [&>code]:text-blue-600 [&>code]:px-2 [&>code]:py-1 [&>code]:rounded
            [&>strong]:font-bold [&>strong]:text-blue-900
            [&>a]:text-blue-600 [&>a:hover]:text-blue-500"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </article>
  );
} 