'use client';

import React, { type ReactElement } from 'react';
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

// Dane postów
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
  },
  {
    id: 5,
    title: 'TypeScript: Zaawansowane typy i wzorce',
    excerpt: 'Głębokie zanurzenie w zaawansowane koncepcje TypeScriptu, w tym typy generyczne i utility types...',
    category: 'TypeScript',
    date: '2024-02-28',
    readTime: '12 min',
    icon: 'SiTypescript'
  },
  {
    id: 6,
    title: 'React Server Components: Kompletny przewodnik',
    excerpt: 'Wszystko, co musisz wiedzieć o React Server Components i jak je efektywnie wykorzystywać...',
    category: 'React',
    date: '2024-02-25',
    readTime: '15 min',
    icon: 'FaReact'
  },
  {
    id: 7,
    title: 'CSS Grid: Tworzenie zaawansowanych layoutów',
    excerpt: 'Jak wykorzystać pełny potencjał CSS Grid do tworzenia responsywnych i złożonych układów stron...',
    category: 'CSS',
    date: '2024-02-20',
    readTime: '8 min',
    icon: 'FaCss3'
  },
  {
    id: 8,
    title: 'Next.js i GraphQL: Idealne połączenie',
    excerpt: 'Jak zintegrować GraphQL z aplikacją Next.js i wykorzystać jego możliwości do zarządzania danymi...',
    category: 'Next.js',
    date: '2024-02-15',
    readTime: '10 min',
    icon: 'SiNextdotjs'
  },
  {
    id: 9,
    title: 'TypeScript w praktyce: Real-world examples',
    excerpt: 'Praktyczne przykłady wykorzystania TypeScriptu w rzeczywistych projektach...',
    category: 'TypeScript',
    date: '2024-02-10',
    readTime: '9 min',
    icon: 'SiTypescript'
  },
  {
    id: 10,
    title: 'Optymalizacja obrazów w Next.js',
    excerpt: 'Najlepsze praktyki i techniki optymalizacji obrazów w aplikacjach Next.js...',
    category: 'Performance',
    date: '2024-02-05',
    readTime: '7 min',
    icon: 'FaBolt'
  },
  {
    id: 11,
    title: 'Modern CSS: Nowe funkcje i możliwości',
    excerpt: 'Przegląd najnowszych funkcji CSS i jak je wykorzystać w nowoczesnych aplikacjach webowych...',
    category: 'CSS',
    date: '2024-02-01',
    readTime: '6 min',
    icon: 'FaCss3'
  },
  {
    id: 12,
    title: 'React Hooks: Zaawansowane wzorce',
    excerpt: 'Głębokie zanurzenie w zaawansowane wzorce wykorzystania React Hooks w aplikacjach...',
    category: 'React',
    date: '2024-01-28',
    readTime: '11 min',
    icon: 'FaReact'
  }
];

// Obliczanie liczby postów dla każdej kategorii
const getCategoryCount = (categoryName: string): number => {
  if (categoryName === 'Wszystkie') {
    return posts.length;
  }
  return posts.filter(post => post.category === categoryName).length;
};

// Kategorie
export const categories: Category[] = [
  { name: 'Wszystkie', count: getCategoryCount('Wszystkie'), icon: 'FaCode' },
  { name: 'React', count: getCategoryCount('React'), icon: 'FaReact' },
  { name: 'Next.js', count: getCategoryCount('Next.js'), icon: 'SiNextdotjs' },
  { name: 'TypeScript', count: getCategoryCount('TypeScript'), icon: 'SiTypescript' },
  { name: 'Performance', count: getCategoryCount('Performance'), icon: 'FaBolt' },
  { name: 'CSS', count: getCategoryCount('CSS'), icon: 'FaCss3' }
];

// Mapa komponentów ikon
const iconComponents: { [key: string]: React.ComponentType<{ className: string }> } = {
  FaReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  FaCss3,
  FaBolt,
  SiTailwindcss,
  FaCode
};

// Komponent ikony
export const IconComponent: React.FC<{ name: string; size: 'sm' | 'lg' }> = ({ name, size }) => {
  const iconSize = size === 'sm' ? "w-5 h-5" : "w-20 h-20";
  const Icon = iconComponents[name] || FaCode;
  return <Icon className={iconSize} />;
};

// Funkcja pomocnicza do renderowania ikony
export const getIconComponent = (iconName: string, size: 'sm' | 'lg' = 'sm'): ReactElement => {
  return <IconComponent name={iconName} size={size} />;
}; 