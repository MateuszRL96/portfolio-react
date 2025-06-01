'use client';

import { useState, useRef, ReactElement } from 'react';
import { gsap, useGSAP } from '../../utils/gsap';
import Link from 'next/link';
import {
  FaReact,
  FaNodeJs,
  FaCode,
  FaCss3,
  FaSearch,
  FaArrowRight,
  FaRocket,
  FaBolt
} from 'react-icons/fa';
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiJavascript
} from 'react-icons/si';

interface Post {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  icon: ReactElement;
  featured?: boolean;
}

interface Category {
  name: string;
  count: number;
  icon: ReactElement;
}

const getCategoryIcon = (category: string) => {
  switch (category) {
    case 'React':
      return <FaReact className="w-8 h-8" />;
    case 'Next.js':
      return <SiNextdotjs className="w-8 h-8" />;
    case 'TypeScript':
      return <SiTypescript className="w-8 h-8" />;
    case 'JavaScript':
      return <SiJavascript className="w-8 h-8" />;
    case 'CSS':
      return <FaCss3 className="w-8 h-8" />;
    case 'Performance':
      return <FaBolt className="w-8 h-8" />;
    case 'Tailwind':
      return <SiTailwindcss className="w-8 h-8" />;
    default:
      return <FaCode className="w-8 h-8" />;
  }
};

const posts: Post[] = [
  {
    id: 1,
    title: 'Jak stworzyć wydajną aplikację w React i TypeScript',
    excerpt: 'Poznaj najlepsze praktyki i wzorce projektowe w tworzeniu aplikacji React z TypeScript...',
    category: 'React',
    date: '2024-03-15',
    readTime: '8 min',
    icon: <FaReact className="w-20 h-20" />,
    featured: true
  },
  {
    id: 2,
    title: 'Next.js 14: Co nowego?',
    excerpt: 'Przegląd najważniejszych zmian i nowości w Next.js 14, w tym Server Components i App Router...',
    category: 'Next.js',
    date: '2024-03-10',
    readTime: '6 min',
    icon: <SiNextdotjs className="w-20 h-20" />
  },
  {
    id: 3,
    title: 'Optymalizacja wydajności aplikacji webowych',
    excerpt: 'Praktyczne wskazówki jak przyspieszyć ładowanie strony i poprawić Core Web Vitals...',
    category: 'Performance',
    date: '2024-03-05',
    readTime: '10 min',
    icon: <FaBolt className="w-20 h-20" />
  },
  {
    id: 4,
    title: 'Wprowadzenie do TailwindCSS',
    excerpt: 'Jak rozpocząć pracę z TailwindCSS i dlaczego warto go używać w swoich projektach...',
    category: 'CSS',
    date: '2024-03-01',
    readTime: '5 min',
    icon: <SiTailwindcss className="w-20 h-20" />
  }
];

const categories: Category[] = [
  { name: 'Wszystkie', count: posts.length, icon: <FaCode className="w-5 h-5" /> },
  { name: 'React', count: 5, icon: <FaReact className="w-5 h-5" /> },
  { name: 'Next.js', count: 3, icon: <SiNextdotjs className="w-5 h-5" /> },
  { name: 'TypeScript', count: 4, icon: <SiTypescript className="w-5 h-5" /> },
  { name: 'Performance', count: 2, icon: <FaBolt className="w-5 h-5" /> },
  { name: 'CSS', count: 3, icon: <FaCss3 className="w-5 h-5" /> }
];

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('Wszystkie');
  const [searchQuery, setSearchQuery] = useState('');
  const [email, setEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [subscribeStatus, setSubscribeStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const containerRef = useRef(null);

  const featuredPost = posts.find(post => post.featured);
  const regularPosts = posts.filter(post => !post.featured);

  useGSAP(() => {
    // Animacje wejściowe
    gsap.from('.fade-in', {
      opacity: 0,
      y: 30,
      duration: 0.5,
      stagger: 0.1,
      ease: 'power2.out'
    });

    // Animacja dla featured post
    gsap.from('.featured-post', {
      opacity: 0,
      y: 50,
      duration: 0.8,
      ease: 'power2.out'
    });

    // Animacja dla kategorii
    gsap.from('.category-item', {
      opacity: 0,
      x: -20,
      duration: 0.5,
      stagger: 0.1,
      ease: 'power2.out'
    });
  }, { scope: containerRef });

  const filteredPosts = regularPosts.filter(post => {
    const matchesCategory = selectedCategory === 'Wszystkie' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubscribing(true);
    setSubscribeStatus('idle');

    try {
      // Tutaj dodamy później integrację z API do newslettera
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubscribeStatus('success');
      setEmail('');
    } catch (error) {
      setSubscribeStatus('error');
    } finally {
      setIsSubscribing(false);
    }
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-gray-50">
      {/* Header Banner */}
      <div className="w-full bg-gradient-to-br from-blue-500 via-blue-400 to-blue-300 mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-6 fade-in text-white drop-shadow-md">Blog</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto fade-in">
              Artykuły o web developmencie, najnowszych technologiach i najlepszych praktykach
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Featured Post */}
        {featuredPost && (
          <div className="mb-16 featured-post max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:-translate-y-1 transition-all duration-300">
              <div className="grid md:grid-cols-2 items-center">
                <div className="p-12 flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50">
                  <div className="text-blue-500 transform hover:scale-110 transition-transform duration-300">
                    {featuredPost.icon}
                  </div>
                </div>
                <div className="p-8">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4">
                    {getCategoryIcon(featuredPost.category)}
                    <span>{featuredPost.category}</span>
                  </div>
                  <h2 className="text-3xl font-bold mb-4">
                    {featuredPost.title}
                  </h2>
                  <p className="text-gray-600 mb-6">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500">
                      {featuredPost.date} · {featuredPost.readTime} czytania
                    </div>
                    <Link
                      href={`/blog/${featuredPost.id}`}
                      className="inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
                    >
                      Czytaj więcej
                      <FaArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
              <h3 className="text-lg font-bold mb-4">Kategorie</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.name}
                    onClick={() => setSelectedCategory(category.name)}
                    className={`category-item w-full text-left px-4 py-2 rounded-lg transition-colors flex items-center gap-3 ${
                      selectedCategory === category.name
                        ? 'bg-blue-500 text-white'
                        : 'hover:bg-gray-100'
                    }`}
                  >
                    <span className={selectedCategory === category.name ? 'text-white' : 'text-blue-500'}>
                      {category.icon}
                    </span>
                    <span>{category.name} ({category.count})</span>
                  </button>
                ))}
              </div>

              {/* Newsletter */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h3 className="text-lg font-bold mb-4">Newsletter</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Zapisz się, aby otrzymywać najnowsze artykuły prosto na swoją skrzynkę!
                </p>
                <form onSubmit={handleSubscribe} className="space-y-4">
                  <input
                    type="email"
                    placeholder="Twój email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                  <button
                    type="submit"
                    disabled={isSubscribing}
                    className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors disabled:opacity-50"
                  >
                    {isSubscribing ? 'Zapisywanie...' : 'Zapisz się'}
                  </button>
                  {subscribeStatus === 'success' && (
                    <p className="text-green-500 text-sm">Dziękujemy za zapisanie się!</p>
                  )}
                  {subscribeStatus === 'error' && (
                    <p className="text-red-500 text-sm">Wystąpił błąd. Spróbuj ponownie później.</p>
                  )}
                </form>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Search */}
            <div className="mb-8 fade-in">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Szukaj artykułów..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-3 pl-12 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              </div>
            </div>

            {/* Posts Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {filteredPosts.map((post) => (
                <div
                  key={post.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-1 transition-all duration-300 fade-in"
                >
                  <div className="p-6 flex flex-col h-full">
                    <div className="flex items-center justify-between mb-4">
                      <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
                        {getCategoryIcon(post.category)}
                        <span>{post.category}</span>
                      </div>
                      <div className="text-blue-500">{post.icon}</div>
                    </div>
                    <h3 className="text-xl font-bold mb-2 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2 flex-grow">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between mt-auto">
                      <div className="text-sm text-gray-500">
                        {post.date} · {post.readTime} czytania
                      </div>
                      <Link
                        href={`/blog/${post.id}`}
                        className="text-blue-500 font-medium hover:text-blue-600 transition-colors inline-flex items-center gap-2"
                      >
                        Czytaj więcej
                        <FaArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 