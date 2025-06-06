import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

const postsDirectory = path.join(process.cwd(), 'content/blog');

interface BlogPost {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  coverImage?: string;
  author: string;
  readingTime: string;
  tags: string[];
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const postId = searchParams.get('id');

    if (postId) {
      // Get single post
      const post = getPostById(postId);
      if (!post) {
        return NextResponse.json({ error: 'Post not found' }, { status: 404 });
      }
      return NextResponse.json(post);
    } else {
      // Get all posts
      const posts = getAllPosts();
      return NextResponse.json(posts);
    }
  } catch {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

function getAllPosts(): BlogPost[] {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, '');
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);
    const contentHtml = marked.parse(matterResult.content).toString();

    const wordsPerMinute = 200;
    const wordCount = matterResult.content.split(/\s+/g).length;
    const readingTime = `${Math.ceil(wordCount / wordsPerMinute)} min`;

    return {
      id,
      content: contentHtml,
      readingTime,
      ...(matterResult.data as Omit<BlogPost, 'id' | 'content' | 'readingTime'>),
    };
  });

  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

function getPostById(id: string): BlogPost | null {
  try {
    const fullPath = path.join(postsDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);
    const contentHtml = marked.parse(matterResult.content).toString();

    const wordsPerMinute = 200;
    const wordCount = matterResult.content.split(/\s+/g).length;
    const readingTime = `${Math.ceil(wordCount / wordsPerMinute)} min`;

    return {
      id,
      content: contentHtml,
      readingTime,
      ...(matterResult.data as Omit<BlogPost, 'id' | 'content' | 'readingTime'>),
    };
  } catch {
    return null;
  }
} 