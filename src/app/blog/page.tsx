'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { FaSearch, FaArrowRight, FaStar, FaClock, FaCalendar } from 'react-icons/fa';
import { posts, categories, getIconComponent, Post } from '@/data/blog';
import { gsap } from '@/utils/gsap';

const POSTS_PER_PAGE = 6;

export default function BlogPage() {
  const [mounted, setMounted] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('Wszystkie');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [email, setEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [subscribeStatus, setSubscribeStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const containerRef = useRef<HTMLDivElement>(null);

  // Upewniamy się, że komponent jest zamontowany przed renderowaniem
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted && containerRef.current) {
      // Ensure elements are visible by default
      gsap.set('.fade-in, .featured-post, .category-item', { opacity: 1 });

      gsap.from('.fade-in', {
        opacity: 0,
        y: 30,
        duration: 0.5,
        stagger: 0.1,
        ease: 'power2.out',
        clearProps: 'all' // Clean up after animation
      });

      gsap.from('.featured-post', {
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: 'power2.out',
        clearProps: 'all'
      });

      gsap.from('.category-item', {
        opacity: 0,
        x: -20,
        duration: 0.5,
        stagger: 0.1,
        ease: 'power2.out',
        clearProps: 'all'
      });
    }
  }, [mounted]);

  const featuredPost = posts.find(post => post.featured);
  const regularPosts = posts.filter(post => !post.featured);
  const recentPosts = [...posts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 4);

  const filteredPosts = regularPosts.filter(post => {
    if (searchQuery === '' && selectedCategory === 'Wszystkie') {
      return true;
    }

    const matchesSearch = searchQuery === '' || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === 'Wszystkie' || 
      post.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  const handleCategoryChange = (categoryName: string) => {
    setSelectedCategory(categoryName);
    setCurrentPage(1);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubscribing(true);
    setSubscribeStatus('idle');

    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubscribeStatus('success');
      setEmail('');
    } catch (error) {
      setSubscribeStatus('error');
    } finally {
      setIsSubscribing(false);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pl-PL', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  if (!mounted) {
    return null; // lub możesz zwrócić loader/skeleton
  }

  return (
    <div ref={containerRef} className="min-h-screen bg-gray-50">
      {/* Header Banner */}
      <div className="w-full bg-gradient-to-br from-blue-500 via-blue-400 to-blue-300 mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-6 fade-in text-white drop-shadow-md">Blog Developera</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto fade-in">
              Dzielę się wiedzą o programowaniu, technologiach i trendach w branży IT
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
              {/* Search */}
              <div className="mb-8 fade-in">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Szukaj artykułów..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                    className="w-full px-4 py-3 pl-12 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                </div>
              </div>

              {/* Categories */}
              <div className="mb-8">
                <h3 className="text-lg font-bold mb-4">Kategorie</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.name}
                      onClick={() => handleCategoryChange(category.name)}
                      className={`category-item w-full text-left px-4 py-2 rounded-lg transition-colors flex items-center justify-between ${
                        selectedCategory === category.name
                          ? 'bg-blue-500 text-white'
                          : 'hover:bg-gray-100'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className={selectedCategory === category.name ? 'text-white' : 'text-blue-500'}>
                          {getIconComponent(category.icon, 'sm')}
                        </span>
                        <span>{category.name}</span>
                      </div>
                      <span className={`text-sm ${selectedCategory === category.name ? 'text-white/80' : 'text-gray-500'}`}>
                        {category.count}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Recent Posts */}
              <div className="mb-8">
                <h3 className="text-lg font-bold mb-4">Najnowsze posty</h3>
                <div className="space-y-4">
                  {recentPosts.map((post) => (
                    <Link
                      key={post.id}
                      href={`/blog/${post.id}`}
                      className="block p-3 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <h4 className="font-medium text-gray-900 line-clamp-1">{post.title}</h4>
                      <div className="text-sm text-gray-500 mt-1">{formatDate(post.date)}</div>
                    </Link>
                  ))}
                </div>
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
            {/* Featured Post */}
            {featuredPost && (
              <div className="mb-12 featured-post">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:-translate-y-1 transition-all duration-300">
                  <div className="grid md:grid-cols-2 items-center">
                    <div className="p-12 flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50">
                      <div className="text-blue-500 transform hover:scale-110 transition-transform duration-300">
                        {getIconComponent(featuredPost.icon, 'lg')}
                      </div>
                    </div>
                    <div className="p-8">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
                          {getIconComponent(featuredPost.icon, 'sm')}
                          <span>{featuredPost.category}</span>
                        </div>
                        <div className="inline-flex items-center gap-1 px-3 py-1 bg-yellow-100 text-yellow-600 rounded-full text-sm font-medium">
                          <FaStar className="w-4 h-4" />
                          <span>Wyróżniony</span>
                        </div>
                      </div>
                      <h2 className="text-2xl font-bold mb-4 hover:text-blue-600 transition-colors">
                        <Link href={`/blog/${featuredPost.id}`}>
                          {featuredPost.title}
                        </Link>
                      </h2>
                      <p className="text-gray-600 mb-6">{featuredPost.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <span className="flex items-center gap-1">
                            <FaCalendar className="w-4 h-4" />
                            {formatDate(featuredPost.date)}
                          </span>
                          <span className="flex items-center gap-1">
                            <FaClock className="w-4 h-4" />
                            {featuredPost.readTime} czytania
                          </span>
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

            {/* Posts Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {paginatedPosts.map((post) => (
                <div
                  key={post.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-1 transition-all duration-300 fade-in"
                >
                  <div className="p-6 flex flex-col h-full">
                    <div className="flex items-center justify-between mb-4">
                      <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
                        {getIconComponent(post.icon, 'sm')}
                        <span>{post.category}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-2 line-clamp-2">
                      <Link href={`/blog/${post.id}`} className="hover:text-blue-600 transition-colors">
                        {post.title}
                      </Link>
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2 flex-grow">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between mt-auto">
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          <FaCalendar className="w-4 h-4" />
                          {formatDate(post.date)}
                        </span>
                        <span className="flex items-center gap-1">
                          <FaClock className="w-4 h-4" />
                          {post.readTime} czytania
                        </span>
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

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-12 flex justify-center gap-2">
                <button
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:hover:bg-white"
                >
                  ← Poprzednia
                </button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`px-4 py-2 rounded-lg border ${
                      currentPage === page
                        ? 'bg-blue-500 text-white border-blue-500'
                        : 'border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    {page}
                  </button>
                ))}
                <button
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:hover:bg-white"
                >
                  Następna →
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 