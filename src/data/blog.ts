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

export const categories: Category[] = [
  { name: 'Wszystkie', count: 0, icon: 'FaCode' },
  { name: 'React', count: 0, icon: 'FaReact' },
  { name: 'Next.js', count: 0, icon: 'SiNextdotjs' },
  { name: 'TypeScript', count: 0, icon: 'SiTypescript' },
  { name: 'Backend', count: 0, icon: 'FaServer' },
  { name: 'AI', count: 0, icon: 'FaBrain' },
  { name: 'Automatyzacja', count: 0, icon: 'FaRobot' }
]; 