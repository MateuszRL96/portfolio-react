'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { gsap, useGSAP } from '../utils/gsap';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string[];
  technologies: string[];
  demoLink: string;
  caseStudyLink: string;
}

interface Technology {
  name: string;
  icon: string;
}

interface Skill {
  name: string;
  level: number;
  category: string;
}

export default function Home() {
  const containerRef = useRef(null);

  const skills: Skill[] = [
    { name: 'React', level: 95, category: 'Frontend' },
    { name: 'TypeScript', level: 90, category: 'Frontend' },
    { name: 'Next.js', level: 85, category: 'Frontend' },
    { name: 'Node.js', level: 80, category: 'Backend' },
    { name: 'Express', level: 85, category: 'Backend' },
    { name: 'MongoDB', level: 75, category: 'Backend' },
    { name: 'PostgreSQL', level: 70, category: 'Backend' },
    { name: 'Docker', level: 65, category: 'DevOps' },
    { name: 'AWS', level: 60, category: 'DevOps' },
    { name: 'UI/UX Design', level: 75, category: 'Design' }
  ];

  useEffect(() => {
    // Ensure elements are visible by default
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(el => {
      if (el instanceof HTMLElement) {
        el.style.opacity = '1';
      }
    });
  }, []);

  useGSAP(() => {
    // Animacje dla elementów
    gsap.from('.fade-in', {
      opacity: 0,
      y: 30,
      duration: 0.5,
      stagger: 0.1,
      ease: 'power2.out',
      immediateRender: false // Prevent initial hiding
    });

    // Animacja dla pasków umiejętności
    gsap.from('.skill-bar', {
      width: 0,
      duration: 1,
      ease: 'power2.out',
      stagger: 0.1,
      scrollTrigger: {
        trigger: '.skills-section',
        start: 'top center+=100',
        toggleActions: 'play none none reverse'
      }
    });
  }, { scope: containerRef });

  const projects: Project[] = [
    {
      id: 'beans-more',
      title: 'Beans & More',
      description: 'Sklep internetowy z kawą premium i akcesoriami baristycznymi.',
      image: 'https://placehold.co/600x400/indigo/white?text=Beans+%26+More',
      category: ['e-commerce', 'web'],
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      demoLink: 'https://beans-more.com',
      caseStudyLink: '/portfolio/beans-more'
    },
    {
      id: 'nonnas-kitchen',
      title: "Nonna's Kitchen",
      description: 'Strona restauracji z systemem rezerwacji online.',
      image: 'https://placehold.co/600x400/indigo/white?text=Nonna%27s+Kitchen',
      category: ['web', 'booking'],
      technologies: ['Vue.js', 'Firebase', 'Google Maps API'],
      demoLink: 'https://nonnas-kitchen.com',
      caseStudyLink: '/portfolio/nonnas-kitchen'
    },
    {
      id: 'analytics-dashboard',
      title: 'Analytics Dashboard',
      description: 'Panel analityczny z zaawansowaną wizualizacją danych.',
      image: 'https://placehold.co/600x400/indigo/white?text=Analytics+Dashboard',
      category: ['web', 'data'],
      technologies: ['React', 'D3.js', 'Node.js', 'PostgreSQL'],
      demoLink: 'https://analytics-dashboard.com',
      caseStudyLink: '/portfolio/analytics-dashboard'
    }
  ];

  const technologies: Technology[] = [
    { name: 'React', icon: '⚛️' },
    { name: 'Node.js', icon: '💚' },
    { name: 'Python', icon: '🐍' },
    { name: 'MongoDB', icon: '🗄️' },
    { name: 'PostgreSQL', icon: '🐘' },
    { name: 'AWS', icon: '☁️' },
    { name: 'Docker', icon: '🐳' },
    { name: 'Figma', icon: '🎨' }
  ];

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-indigo-500 to-purple-600 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(255,255,255,0.1)_1px,_transparent_1px)] bg-[length:20px_20px]"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 fade-in bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
              Mateusz Kulec
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 fade-in">
              Full-Stack Developer & Web Designer
            </p>
            <p className="text-lg mb-12 opacity-80 fade-in">
              Tworzę nowoczesne strony internetowe i aplikacje webowe, które pomagają firmom rozwijać się online.
              Specjalizuję się w React, Node.js i responsywnym designie.
            </p>
            <div className="flex flex-wrap gap-4 fade-in">
              <Link 
                href="/kontakt"
                className="bg-gradient-to-r from-cyan-400 to-emerald-400 text-white px-8 py-4 rounded-full font-semibold text-lg hover:-translate-y-1 hover:shadow-xl transition-all"
              >
                Umów konsultację
              </Link>
              <Link
                href="/portfolio"
                className="bg-white/10 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transition-all border-2 border-white/30"
              >
                Zobacz portfolio
              </Link>
            </div>
          </div>
          <div className="order-1 lg:order-2 fade-in">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <Image
                src="/profile.jpg"
                alt="Mateusz Kulec"
                fill
                className="object-cover rounded-2xl shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4 fade-in text-gray-900">
            Moja Oferta
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16 fade-in">
            Kompleksowe rozwiązania webowe dla Twojego biznesu
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg hover:-translate-y-2 transition-all border border-gray-100">
              <div className="text-5xl mb-6">🌐</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Strony Internetowe</h3>
              <p className="text-gray-600 mb-6">
                Projektowanie i tworzenie responsywnych stron internetowych, które wyróżniają się na rynku.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="text-emerald-500">✓</span>
                  Responsywny design
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-500">✓</span>
                  Optymalizacja SEO
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-500">✓</span>
                  Szybkie ładowanie
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-500">✓</span>
                  Panel administracyjny
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-500">✓</span>
                  Integracja z social media
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:-translate-y-2 transition-all border border-gray-100">
              <div className="text-5xl mb-6">🛒</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Sklepy Online</h3>
              <p className="text-gray-600 mb-6">
                Kompleksowe rozwiązania e-commerce z systemami płatności i zarządzaniem zamówieniami.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="text-emerald-500">✓</span>
                  System płatności online
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-500">✓</span>
                  Zarządzanie produktami
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-500">✓</span>
                  Koszyk i checkout
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-500">✓</span>
                  Analityka sprzedaży
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-500">✓</span>
                  Integracja z kurierami
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:-translate-y-2 transition-all border border-gray-100">
              <div className="text-5xl mb-6">📱</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Aplikacje Webowe</h3>
              <p className="text-gray-600 mb-6">
                Zaawansowane aplikacje SPA z nowoczesną architekturą i wysoką wydajnością.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="text-emerald-500">✓</span>
                  React/Vue.js frontend
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-500">✓</span>
                  API REST/GraphQL
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-500">✓</span>
                  Bazy danych
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-500">✓</span>
                  Autentykacja użytkowników
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-500">✓</span>
                  Deployment na cloud
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4 fade-in text-gray-900">
            Portfolio
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16 fade-in">
            Moje najnowsze projekty i case studies
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:-translate-y-2 transition-all border border-gray-100 opacity-100"
              >
                <div className="h-48 bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center">
                  <span className="text-4xl font-bold text-white">{project.title}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-emerald-50 text-emerald-600 px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white text-center py-2 rounded-lg font-medium hover:shadow-lg transition-all"
                    >
                      Demo na żywo
                    </a>
                    <Link
                      href={project.caseStudyLink}
                      className="flex-1 border-2 border-gray-200 text-gray-600 text-center py-2 rounded-lg font-medium hover:border-emerald-500 hover:text-emerald-500 transition-all"
                    >
                      Case Study
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/portfolio"
              className="inline-block bg-white text-emerald-500 px-8 py-3 rounded-full font-medium border-2 border-emerald-500 hover:bg-emerald-50 transition-all"
            >
              Zobacz więcej projektów
            </Link>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4 fade-in text-gray-900">
            Umiejętności
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16 fade-in">
            Technologie i narzędzia, których używam w codziennej pracy
          </p>

          <div className="grid md:grid-cols-2 gap-8 skills-section">
            {skills.map((skill, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md border border-gray-100 opacity-100">
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-gray-900">{skill.name}</span>
                  <span className="text-gray-600">{skill.level}%</span>
                </div>
                <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="skill-bar h-full bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
                <div className="mt-1 text-sm text-gray-500">{skill.category}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4 fade-in text-gray-900">
            Technologie & Narzędzia
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16 fade-in">
            Używam najnowszych technologii do tworzenia wydajnych rozwiązań
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg text-center hover:-translate-y-2 transition-all border border-gray-100 opacity-100"
              >
                <div className="text-4xl mb-4">{tech.icon}</div>
                <h4 className="font-medium text-gray-900">{tech.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl text-white text-center py-16 px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 fade-in">
              Gotowy na nowy projekt?
            </h2>
            <p className="text-xl opacity-90 mb-8 fade-in">
              Skontaktuj się ze mną i omówmy Twoje potrzeby!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/kontakt"
                className="bg-white text-indigo-500 px-8 py-3 rounded-full font-medium hover:shadow-lg transform hover:-translate-y-1 transition-all"
              >
                Umów konsultację
              </Link>
              <Link
                href="/uslugi"
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-medium hover:shadow-lg transform hover:-translate-y-1 transition-all"
              >
                Zobacz usługi
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
