'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { gsap, useGSAP } from '../utils/gsap';
import CodePreview from '@/components/CodePreview';
import { FaShoppingCart, FaUtensils, FaChartBar, FaChevronLeft, FaChevronRight, FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { 
  FaReact, 
  FaNodeJs, 
  FaDocker, 
  FaAws, 
  FaLinux, 
  FaWindows,
  FaDatabase,
  FaServer,
  FaCode,
  FaPalette,
  FaMobile,
  FaGlobe
} from 'react-icons/fa';
import { ProjectCard } from '@/components/ProjectCard';
import { TechIcon } from '@/components/TechIcon';

interface Project {
  id: string;
  title: string;
  description: string;
  icon: string;
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
      id: 'banking-app',
      title: 'Aplikacja Bankowa JavaFX',
      description: 'Aplikacja bankowa z interfejsem graficznym zbudowana w JavaFX. Zawiera podstawowe funkcjonalności bankowe oraz bazę danych SQLite.',
      icon: '🏦',
      category: ['aplikacje', 'desktop'],
      technologies: ['Java', 'JavaFX', 'SQLite', 'CSS'],
      demoLink: 'https://github.com/MateuszRL96/AplikacjaBankowaJavaFX1',
      caseStudyLink: '/portfolio/banking-app'
    },
    {
      id: 'qualification-manager',
      title: 'Qualification Manager',
      description: 'System zarządzania i rekomendacji kwalifikacji zawodowych. Wykorzystuje uczenie maszynowe do sugerowania kwalifikacji.',
      icon: '🎓',
      category: ['web', 'ai'],
      technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'Docker'],
      demoLink: 'https://github.com/MateuszRL96/QualificationManager',
      caseStudyLink: '/portfolio/qualification-manager'
    },
    {
      id: 'projekt-atomow',
      title: 'Model Elektronu',
      description: 'Interaktywny model elektronu stworzony przy użyciu Three.js. Projekt edukacyjny prezentujący wizualizację 3D modelu atomowego.',
      icon: '⚛️',
      category: ['web', '3d'],
      technologies: ['JavaScript', 'Three.js', 'HTML', 'CSS'],
      demoLink: 'https://github.com/MateuszRL96/ProjektAtomow',
      caseStudyLink: '/portfolio/projekt-atomow'
    },
    {
      id: 'qualification-recommendation',
      title: 'Qualification Recommendation',
      description: 'System rekomendacji kwalifikacji wykorzystujący algorytmy uczenia maszynowego.',
      icon: '🤖',
      category: ['ai', 'web'],
      technologies: ['Python', 'TensorFlow', 'Flask', 'PostgreSQL'],
      demoLink: 'https://github.com/MateuszRL96/qulificationRecomendation',
      caseStudyLink: '/portfolio/qualification-recommendation'
    },
    {
      id: 'books-manager',
      title: 'Books Manager',
      description: 'Aplikacja do zarządzania kolekcją książek z możliwością kategoryzacji i oceniania.',
      icon: '📚',
      category: ['web', 'aplikacje'],
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      demoLink: 'https://github.com/MateuszRL96/Books',
      caseStudyLink: '/portfolio/books-manager'
    },
    {
      id: 'projekt-fruits',
      title: 'Fruits Shop',
      description: 'Sklep internetowy z owocami i warzywami, oferujący system zamówień online.',
      icon: '🍎',
      category: ['web', 'e-commerce'],
      technologies: ['React', 'Redux', 'Node.js', 'MongoDB'],
      demoLink: 'https://github.com/MateuszRL96/ProjektFruits',
      caseStudyLink: '/portfolio/projekt-fruits'
    },
    {
      id: 'javafx-calculator',
      title: 'JavaFX Calculator',
      description: 'Zaawansowany kalkulator z interfejsem graficznym stworzony w JavaFX.',
      icon: '🧮',
      category: ['aplikacje', 'desktop'],
      technologies: ['Java', 'JavaFX', 'CSS'],
      demoLink: 'https://github.com/MateuszRL96/JavaFXCalculator',
      caseStudyLink: '/portfolio/javafx-calculator'
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

  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const nextProject = () => {
    setCurrentProjectIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProjectIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-indigo-500 to-purple-600 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(255,255,255,0.1)_1px,_transparent_1px)] bg-[length:20px_20px]"></div>
        <div className="relative z-10 w-full">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 px-4">
            <div className="relative w-[450px] aspect-[3/4]">
              <Image
                src="/4.JPG"
                alt="Mateusz Kulec"
                fill
                className="object-cover rounded-3xl shadow-2xl"
                priority
              />
            </div>

            <div className="w-full lg:w-[500px] space-y-6 lg:pl-8 h-[450px] flex flex-col justify-center">
              <h1 className="text-5xl md:text-6xl font-bold fade-in bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                Mateusz Kulec
              </h1>
              <p className="text-xl md:text-2xl opacity-90 fade-in">
                Full-Stack Developer & Web Designer
              </p>
              <p className="text-lg opacity-80 fade-in max-w-xl">
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

            <div className="hidden xl:block w-[400px] h-[500px] flex justify-center items-center">
              <CodePreview />
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

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg hover:-translate-y-2 transition-all border border-gray-100">
              <div className="text-5xl mb-6">🌐</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Strony WWW</h3>
              <p className="text-gray-600 mb-6">
                Nowoczesne i responsywne strony internetowe dla Twojego biznesu.
              </p>
              <ul className="space-y-2 text-gray-600 mb-8">
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
                <li className="flex items-center gap-2">
                  <span className="text-emerald-500">✓</span>
                  3 miesiące wsparcia
                </li>
              </ul>
              <div className="text-center mt-auto">
                <div className="mb-4">
                  <p className="text-2xl font-bold text-gray-900">1500 - 3000 zł</p>
                  <p className="text-sm text-gray-600 mt-1">Do kilku podstron*</p>
                </div>
                <Link
                  href="/kontakt"
                  className="inline-block w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-3 px-6 rounded-lg font-medium hover:shadow-lg transition-all"
                >
                  Wybierz usługę
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:-translate-y-2 transition-all border border-gray-100 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                Popularne
              </div>
              <div className="text-5xl mb-6">🛍️</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Sklepy Online</h3>
              <p className="text-gray-600 mb-6">
                Kompleksowe rozwiązania e-commerce z systemami płatności.
              </p>
              <ul className="space-y-2 text-gray-600 mb-8">
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
                  Panel administracyjny
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-500">✓</span>
                  Integracja z kurierami
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-500">✓</span>
                  6 miesięcy wsparcia
                </li>
              </ul>
              <div className="text-center mt-auto">
                <div className="mb-4">
                  <p className="text-2xl font-bold text-gray-900">3000 - 6000 zł</p>
                  <p className="text-sm text-gray-600 mt-1">Podstawowa funkcjonalność*</p>
                </div>
                <Link
                  href="/kontakt"
                  className="inline-block w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-3 px-6 rounded-lg font-medium hover:shadow-lg transition-all"
                >
                  Wybierz usługę
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:-translate-y-2 transition-all border border-gray-100">
              <div className="text-5xl mb-6">💻</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Aplikacje Web</h3>
              <p className="text-gray-600 mb-6">
                Zaawansowane aplikacje webowe dostosowane do Twoich potrzeb.
              </p>
              <ul className="space-y-2 text-gray-600 mb-8">
                <li className="flex items-center gap-2">
                  <span className="text-emerald-500">✓</span>
                  Architektura SPA/PWA
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-500">✓</span>
                  Backend API
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-500">✓</span>
                  Baza danych
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-500">✓</span>
                  Autentykacja
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-500">✓</span>
                  Hosting w chmurze
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-500">✓</span>
                  12 miesięcy wsparcia
                </li>
              </ul>
              <div className="text-center mt-auto">
                <div className="mb-4">
                  <p className="text-2xl font-bold text-gray-900">od 9999 zł</p>
                  <p className="text-sm text-gray-600 mt-1">W zależności od funkcjonalności*</p>
                </div>
                <Link
                  href="/kontakt"
                  className="inline-block w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-3 px-6 rounded-lg font-medium hover:shadow-lg transition-all"
                >
                  Wybierz usługę
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:-translate-y-2 transition-all border border-gray-100">
              <div className="text-5xl mb-6">⚡</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Automatyzacja</h3>
              <p className="text-gray-600 mb-6">
                Automatyzacja procesów biznesowych i integracja systemów.
              </p>
              <ul className="space-y-2 text-gray-600 mb-8">
                <li className="flex items-center gap-2">
                  <span className="text-emerald-500">✓</span>
                  Integracja API
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-500">✓</span>
                  Skrypty automatyzujące
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-500">✓</span>
                  Migracja danych
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-500">✓</span>
                  Optymalizacja procesów
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-500">✓</span>
                  Monitoring i raporty
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-500">✓</span>
                  Wsparcie techniczne
                </li>
              </ul>
              <div className="text-center mt-auto">
                <div className="mb-4">
                  <p className="text-2xl font-bold text-gray-900">Wycena indywidualna</p>
                  <p className="text-sm text-gray-600 mt-1">Zależna od zakresu projektu*</p>
                </div>
                <Link
                  href="/kontakt"
                  className="inline-block w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-3 px-6 rounded-lg font-medium hover:shadow-lg transition-all"
                >
                  Wybierz usługę
                </Link>
              </div>
            </div>
          </div>
          <p className="text-sm text-gray-500 text-center mt-8">* Ostateczna cena może się różnić w zależności od złożoności projektu i dodatkowych wymagań.</p>
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

          <div className="relative">
            <div className="flex overflow-hidden">
              <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentProjectIndex * 33.333}%)` }}>
                {projects.map((project) => (
                  <div
                    key={project.id}
                    className="w-1/3 flex-shrink-0 px-4"
                  >
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:-translate-y-2 transition-all border border-gray-100 group h-full">
                      <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                        <div className="text-7xl transform group-hover:scale-110 transition-transform duration-300">
                          {project.icon}
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-2 text-gray-900">{project.title}</h3>
                        <p className="text-gray-600 mb-4">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.technologies.map((tech, index) => (
                            <span
                              key={index}
                              className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm"
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
                            className="flex-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-center py-2 rounded-lg font-medium hover:shadow-lg transition-all"
                          >
                            Zobacz projekt
                          </a>
                          <Link
                            href={project.caseStudyLink}
                            className="flex-1 border-2 border-gray-200 text-gray-600 text-center py-2 rounded-lg font-medium hover:border-blue-500 hover:text-blue-500 transition-all"
                          >
                            Szczegóły
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevProject}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-gray-50 transition-colors z-10"
              aria-label="Poprzedni projekt"
            >
              <FaChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
            <button
              onClick={nextProject}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-gray-50 transition-colors z-10"
              aria-label="Następny projekt"
            >
              <FaChevronRight className="w-6 h-6 text-gray-600" />
            </button>

            {/* Dots */}
            <div className="flex justify-center mt-8 gap-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentProjectIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentProjectIndex === index
                      ? 'bg-blue-500 w-6'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Przejdź do projektu ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/portfolio"
              className="inline-block bg-white text-blue-500 px-8 py-3 rounded-full font-medium border-2 border-blue-500 hover:bg-blue-50 transition-all"
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
            Technologie
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16 fade-in">
            Narzędzia i technologie, których używam w codziennej pracy
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <FaReact className="text-5xl text-sky-500" />,
                name: 'Frontend',
                description: 'React, Next.js, TypeScript'
              },
              {
                icon: <FaServer className="text-5xl text-indigo-500" />,
                name: 'Backend',
                description: 'Node.js, REST API, GraphQL'
              },
              {
                icon: <FaDatabase className="text-5xl text-blue-500" />,
                name: 'Bazy danych',
                description: 'SQL, NoSQL, Redis'
              },
              {
                icon: <FaDocker className="text-5xl text-blue-600" />,
                name: 'Konteneryzacja',
                description: 'Docker, Kubernetes'
              },
              {
                icon: <FaAws className="text-5xl text-yellow-500" />,
                name: 'Cloud',
                description: 'AWS, Azure, GCP'
              },
              {
                icon: <FaLinux className="text-5xl text-gray-800" />,
                name: 'Systemy',
                description: 'Linux, Windows Server'
              },
              {
                icon: <FaGlobe className="text-5xl text-green-500" />,
                name: 'DevOps',
                description: 'CI/CD, Monitoring'
              },
              {
                icon: <FaPalette className="text-5xl text-pink-500" />,
                name: 'UI/UX',
                description: 'Figma, Design Systems'
              }
            ].map((skill, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:-translate-y-2 transition-all group text-center"
              >
                <div className="flex justify-center mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">{skill.name}</h3>
                <p className="text-gray-600 text-sm">{skill.description}</p>
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
