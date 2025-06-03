import { ReactElement } from 'react';
import {
  FaReact,
  FaNodeJs,
  FaCode,
  FaCss3,
  FaBolt
} from 'react-icons/fa';
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiJavascript
} from 'react-icons/si';

export interface Post {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  icon: string;
  featured?: boolean;
}

export interface Category {
  name: string;
  count: number;
  icon: string;
}

export const posts: Post[] = [
  {
    id: 1,
    title: 'Jak stworzyć wydajną aplikację w React i TypeScript',
    excerpt: 'Poznaj najlepsze praktyki i wzorce projektowe w tworzeniu aplikacji React z TypeScript...',
    category: 'React',
    date: '2024-03-15',
    readTime: '8 min',
    icon: 'FaReact',
    featured: true
  },
  {
    id: 2,
    title: 'Next.js 14: Co nowego?',
    excerpt: 'Przegląd najważniejszych zmian i nowości w Next.js 14, w tym Server Components i App Router...',
    category: 'Next.js',
    date: '2024-03-10',
    readTime: '6 min',
    icon: 'SiNextdotjs'
  },
  {
    id: 3,
    title: 'Optymalizacja wydajności aplikacji webowych',
    excerpt: 'Praktyczne wskazówki jak przyspieszyć ładowanie strony i poprawić Core Web Vitals...',
    category: 'Performance',
    date: '2024-03-05',
    readTime: '10 min',
    icon: 'FaBolt'
  },
  {
    id: 4,
    title: 'Wprowadzenie do TailwindCSS',
    excerpt: 'Jak rozpocząć pracę z TailwindCSS i dlaczego warto go używać w swoich projektach...',
    category: 'CSS',
    date: '2024-03-01',
    readTime: '5 min',
    icon: 'SiTailwindcss'
  }
];

export const categories: Category[] = [
  { name: 'Wszystkie', count: posts.length, icon: 'FaCode' },
  { name: 'React', count: 5, icon: 'FaReact' },
  { name: 'Next.js', count: 3, icon: 'SiNextdotjs' },
  { name: 'TypeScript', count: 4, icon: 'SiTypescript' },
  { name: 'Performance', count: 2, icon: 'FaBolt' },
  { name: 'CSS', count: 3, icon: 'FaCss3' }
];

export const getIconComponent = (iconName: string, size: 'sm' | 'lg' = 'sm') => {
  const iconSize = size === 'sm' ? "w-5 h-5" : "w-20 h-20";
  
  const icons: { [key: string]: ReactElement } = {
    FaReact: <FaReact className={iconSize} />,
    SiNextdotjs: <SiNextdotjs className={iconSize} />,
    SiTypescript: <SiTypescript className={iconSize} />,
    SiJavascript: <SiJavascript className={iconSize} />,
    FaCss3: <FaCss3 className={iconSize} />,
    FaBolt: <FaBolt className={iconSize} />,
    SiTailwindcss: <SiTailwindcss className={iconSize} />,
    FaCode: <FaCode className={iconSize} />
  };

  return icons[iconName] || <FaCode className={iconSize} />;
}; 