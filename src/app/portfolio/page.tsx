'use client';

import { useState, useRef } from 'react';
import { gsap, useGSAP } from '../../utils/gsap';
import Image from 'next/image';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string[];
  technologies: string[];
  link: string;
}

const projects: Project[] = [
  {
    id: 'beans-more',
    title: 'Beans & More',
    description: 'Sklep internetowy z kawą premium i akcesoriami baristycznymi.',
    image: '/projects/beans-more.jpg',
    category: ['e-commerce', 'web'],
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    link: 'https://beans-more.com'
  },
  {
    id: 'nonnas-kitchen',
    title: "Nonna's Kitchen",
    description: 'Strona restauracji z systemem rezerwacji online.',
    image: '/projects/nonnas-kitchen.jpg',
    category: ['web', 'booking'],
    technologies: ['Vue.js', 'Firebase', 'Google Maps API'],
    link: 'https://nonnas-kitchen.com'
  },
  // ... więcej projektów
];

const categories = ['wszystkie', 'web', 'e-commerce', 'aplikacje', 'booking'];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('wszystkie');
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [isLoading, setIsLoading] = useState(true);
  const containerRef = useRef(null);

  useGSAP(() => {
    // Animacja wejściowa
    gsap.from('.project-card', {
      opacity: 0,
      y: 30,
      stagger: 0.1,
      duration: 0.5,
      ease: 'power2.out',
      onComplete: () => setIsLoading(false)
    });
  }, { scope: containerRef, dependencies: [] });

  useGSAP(() => {
    // Filtrowanie projektów i animacja
    const filtered = selectedCategory === 'wszystkie'
      ? projects
      : projects.filter(project => project.category.includes(selectedCategory));
    
    setFilteredProjects(filtered);

    gsap.from('.project-card', {
      opacity: 0,
      y: 20,
      stagger: 0.1,
      duration: 0.3,
      ease: 'power2.out'
    });
  }, { scope: containerRef, dependencies: [selectedCategory] });

  return (
    <div ref={containerRef} className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="w-full bg-gradient-to-br from-blue-500 via-blue-400 to-blue-300 mb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-6 fade-in text-white drop-shadow-md">Portfolio</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto fade-in">
              Odkryj moje najnowsze projekty i realizacje. Każdy projekt to unikalne rozwiązanie
              dostosowane do potrzeb klienta.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filtry */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Siatka projektów */}
        {isLoading ? (
          <div className="text-center">Ładowanie projektów...</div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="project-card group bg-white rounded-xl shadow-lg hover:shadow-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 relative"
              >
                {/* Image overlay */}
                <div className="relative h-48">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="p-8 relative">
                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-6">{project.description}</p>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="bg-blue-50 text-blue-600 px-4 py-1 rounded-full text-sm font-medium group-hover:bg-blue-100 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Categories */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.category.map((cat, index) => (
                        <span
                          key={index}
                          className="text-gray-500 text-sm"
                        >
                          #{cat}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white text-center py-3 px-6 rounded-lg font-medium 
                        hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 
                        relative overflow-hidden group"
                    >
                      <span className="relative z-10">Zobacz projekt</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Statystyki */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24">
          {[
            { value: '47+', label: 'Ukończonych projektów', icon: '🚀' },
            { value: '32+', label: 'Zadowolonych klientów', icon: '🤝' },
            { value: '5+', label: 'Lat doświadczenia', icon: '⭐' },
            { value: '100%', label: 'Satysfakcji klientów', icon: '💯' }
          ].map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-2xl transform group-hover:scale-110 transition-transform duration-300">
                <span className="text-white">{stat.icon}</span>
              </div>
              <div className="text-4xl font-bold text-blue-600 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 