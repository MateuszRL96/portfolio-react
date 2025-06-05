import { readFile, readdir } from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import { techIcons } from '@/config/icons';
import { cache } from 'react';

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  coverImage?: string;
  author: string;
  readTime: string;
  category: string;
  icon: string;
  tags: string[];
}

const postsDirectory = path.join(process.cwd(), 'content/blog');

export const getBlogPosts = cache(async (): Promise<BlogPost[]> => {
  const fileNames = await readdir(postsDirectory);
  const allPostsData = await Promise.all(
    fileNames.map(async (fileName) => {
      const id = fileName.replace(/\.md$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = await readFile(fullPath, 'utf8');
      const matterResult = matter(fileContents);

      // Get icon based on category or main tag
      const mainTechnology = matterResult.data.category || matterResult.data.tags?.[0];
      const icon = techIcons[mainTechnology] || 'FaCode';

      return {
        id,
        icon,
        ...matterResult.data,
      } as BlogPost;
    })
  );

  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
});

export const getBlogPost = cache(async (id: string): Promise<BlogPost | null> => {
  try {
    const fullPath = path.join(postsDirectory, `${id}.md`);
    const fileContents = await readFile(fullPath, 'utf8');
    const matterResult = matter(fileContents);
    
    const processedContent = await remark()
      .use(html)
      .process(matterResult.content);
    const contentHtml = processedContent.toString();

    // Get icon based on category or main tag
    const mainTechnology = matterResult.data.category || matterResult.data.tags?.[0];
    const icon = techIcons[mainTechnology] || 'FaCode';

    return {
      id,
      content: contentHtml,
      icon,
      ...matterResult.data,
    } as BlogPost;
  } catch (error) {
    console.error(`Error getting blog post ${id}:`, error);
    return null;
  }
}); 