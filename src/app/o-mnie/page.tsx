'use client';

import { useRef } from 'react';
import { gsap, useGSAP } from '../../utils/gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'other';
}

interface Experience {
  company: string;
  position: string;
  period: string;
  description: string[];
}

interface TimelineItem {
  date: string;
  title: string;
  company: string;
  description: string;
  technologies?: string[];
  icon?: string;
}

const skills: Skill[] = [
  { name: 'React', level: 95, category: 'frontend' },
  { name: 'TypeScript', level: 90, category: 'frontend' },
  { name: 'Next.js', level: 85, category: 'frontend' },
  { name: 'Node.js', level: 80, category: 'backend' },
  { name: 'Express', level: 85, category: 'backend' },
  { name: 'MongoDB', level: 75, category: 'backend' },
  { name: 'PostgreSQL', level: 70, category: 'backend' },
  { name: 'Docker', level: 65, category: 'other' },
  { name: 'AWS', level: 60, category: 'other' },
  { name: 'UI/UX Design', level: 75, category: 'other' }
];

const experience: Experience[] = [
  {
    company: 'TechCorp Solutions',
    position: 'Senior Full-Stack Developer',
    period: '2021 - obecnie',
    description: [
      'Prowadzenie zespołu 5 developerów przy projektach e-commerce',
      'Implementacja mikroserwisów w Node.js i TypeScript',
      'Optymalizacja wydajności aplikacji React i Next.js',
      'Code review i mentoring juniorów'
    ]
  },
  {
    company: 'Digital Agency',
    position: 'Frontend Developer',
    period: '2019 - 2021',
    description: [
      'Tworzenie responsywnych interfejsów użytkownika',
      'Implementacja animacji i interakcji w GSAP',
      'Integracja z REST API i GraphQL',
      'Optymalizacja SEO i wydajności'
    ]
  },
  {
    company: 'Startup Inc.',
    position: 'Junior Web Developer',
    period: '2018 - 2019',
    description: [
      'Rozwój aplikacji w React i Redux',
      'Implementacja responsywnych layoutów',
      'Współpraca z designerami i product ownerami',
      'Testowanie i debugging'
    ]
  }
];

const timeline: TimelineItem[] = [
  {
    date: '2025',
    title: 'Junior Backend Developer',
    company: 'Consbridge Chemicals',
    description: 'Praca jako informatyk, specjalista IT, odnośnie systemów ERP, WMS, oprogramowania, instalacji itp.',
    technologies: ['ERP', 'WMS', 'IT Infrastructure'],
    icon: '💼'
  },
  {
    date: '2024',
    title: 'Junior FullStack Developer',
    company: 'Saascharge (Intern)',
    description: 'Staż jako fullstack developer, z naciskiem na budowę i rozwój aplikacji webowych w technologii Java (Spring Boot) oraz Angular. Poznałem praktyczne zastosowania Docker i AWS oraz pracę w metodykach zwinnych.',
    technologies: ['Java', 'Spring Boot', 'Angular', 'Docker', 'AWS'],
    icon: '🚀'
  },
  {
    date: '2024',
    title: 'Junior FullStack Developer',
    company: 'Ilare Soft (Intern)',
    description: 'Tworzenie oraz rozwój aplikacji webowych w pełnym stacku technologicznym, obejmującym backend (Java Spring Boot) i frontend (Angular). Udział w projektach w modelu microservices i konteneryzacji Docker.',
    technologies: ['Java', 'Spring Boot', 'Angular', 'Microservices', 'Docker'],
    icon: '💻'
  },
  {
    date: '2023',
    title: 'Junior IT Support Engineer',
    company: 'CIECH Group (Praktyka)',
    description: 'Wsparcie techniczne użytkowników końcowych, rozwiązywanie problemów sprzętowych i programowych. Poznanie infrastruktury IT dużej organizacji i współpraca z zespołem wsparcia IT.',
    technologies: ['IT Support', 'Hardware', 'Software', 'Help Desk'],
    icon: '🔧'
  },
  {
    date: '2021-2025',
    title: 'Studia Programistyczne',
    company: 'UITM Rzeszów (Informatyka - Inżynier)',
    description: 'Studia inżynierskie z zakresu informatyki, z naciskiem na programowanie backendowe (Java Spring Boot), frontendowe (Angular), bazy danych (PostgreSQL) i nowoczesne technologie webowe.',
    technologies: ['Java', 'Angular', 'PostgreSQL', 'Web Development'],
    icon: '🎓'
  }
];

export default function About() {
  const containerRef = useRef(null);

  useGSAP(() => {
    // Animacje wejściowe
    gsap.from('.fade-in', {
      opacity: 0,
      y: 30,
      duration: 0.5,
      stagger: 0.1,
      ease: 'power2.out'
    });

    // Animacje pasków umiejętności
    gsap.from('.skill-bar', {
      width: 0,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.skills-section',
        start: 'top center+=100',
        toggleActions: 'play none none reverse'
      }
    });

    // Animacje doświadczenia
    gsap.from('.experience-item', {
      opacity: 0,
      x: -50,
      duration: 0.5,
      stagger: 0.2,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.experience-section',
        start: 'top center+=100',
        toggleActions: 'play none none reverse'
      }
    });

    // Animacja wejściowa dla timeline
    gsap.from('.timeline-item', {
      opacity: 0,
      y: 50,
      stagger: 0.2,
      duration: 0.8,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.timeline-section',
        start: 'top center+=100',
        toggleActions: 'play none none reverse'
      }
    });

    // Animacja linii łączącej elementy
    gsap.from('.timeline-line', {
      height: 0,
      duration: 1.5,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.timeline-section',
        start: 'top center+=100',
        toggleActions: 'play none none reverse'
      }
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="w-full bg-gradient-to-br from-blue-500 via-blue-400 to-blue-300 mb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-6 fade-in text-white drop-shadow-md">O mnie</h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* About Hero Section */}
        <div className="mb-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="fade-in">
              <h2 className="text-3xl font-bold mb-6">Cześć, jestem Mateusz!</h2>
              <div className="space-y-6 text-gray-600">
                <p>
                  Jestem front-end developerem z ponad 5-letnim doświadczeniem w tworzeniu nowoczesnych stron internetowych i aplikacji webowych. 
                  Moją pasją jest przekształcanie pomysłów w funkcjonalne, piękne i intuicyjne rozwiązania cyfrowe.
                </p>
                <p>
                  Specjalizuję się w technologiach takich jak React, Vue.js, JavaScript oraz wszystkim co związane z user experience. 
                  Wierzę, że dobry kod to nie tylko ten, który działa, ale także ten, który jest czytelny, skalowalny i łatwy w utrzymaniu.
                </p>
                <p>
                  Gdy nie koduję, lubię czytać o nowych technologiach, uprawiać sport i spędzać czas z rodziną. 
                  Uwielbiam też podróżować i poznawać nowe kultury - to często inspiruje mnie do kreatywnych rozwiązań w pracy.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 mt-12">
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
                  <div className="text-gray-600">Projektów</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">5+</div>
                  <div className="text-gray-600">Lat doświadczenia</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">30+</div>
                  <div className="text-gray-600">Zadowolonych klientów</div>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-xl fade-in">
              <Image
                src="/profile.jpg"
                alt="Mateusz Kulec"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>

        {/* Sekcja Umiejętności */}
        <div className="mb-24 skills-section">
          <h2 className="text-3xl font-bold text-center mb-12 fade-in">Umiejętności</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill) => (
              <div key={skill.name} className="fade-in">
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-gray-600">{skill.level}%</span>
                </div>
                <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="skill-bar h-full bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline Section - Doświadczenie */}
        <div className="mb-24 relative">
          {/* Background patterns */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Circuit-like pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px] opacity-[0.015]"></div>
            
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 via-transparent to-gray-50/50"></div>
            
            {/* Abstract shapes */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
            
            {/* Floating dots */}
            <div className="absolute top-1/4 right-1/4 w-4 h-4 bg-blue-500/10 rounded-full"></div>
            <div className="absolute bottom-1/4 left-1/4 w-6 h-6 bg-purple-500/10 rounded-full"></div>
            
            {/* Code-like pattern */}
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233b82f6' fill-opacity='0.02'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: '60px 60px'
            }}></div>
          </div>

          <div className="relative z-10">
            <h2 className="text-3xl font-bold text-center mb-12 fade-in">Doświadczenie</h2>
            <div className="timeline-section relative">
              {/* Vertical line with enhanced styling */}
              <div className="timeline-line absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-500 via-blue-400 to-purple-500 h-full rounded-full shadow-lg"></div>

              {/* Timeline items */}
              <div className="relative z-10">
                {timeline.map((item, index) => (
                  <div
                    key={index}
                    className={`timeline-item group relative flex items-center gap-8 mb-16 ${
                      index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                    }`}
                  >
                    {/* Date bubble */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-white rounded-full border-4 border-blue-500 z-20 flex items-center justify-center">
                      <span className="text-2xl">{item.icon}</span>
                    </div>

                    {/* Content */}
                    <div className={`w-1/2 ${index % 2 === 0 ? 'text-right pr-16' : 'pl-16'}`}>
                      <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group">
                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        
                        {/* Content */}
                        <div className="relative z-10">
                          <span className="text-blue-600 font-bold text-lg mb-2 block">{item.date}</span>
                          <h3 className="text-2xl font-bold mb-2 text-gray-900 group-hover:text-blue-600 transition-colors">
                            {item.title}
                          </h3>
                          <h4 className="text-lg font-medium text-blue-500 mb-4">{item.company}</h4>
                          <p className="text-gray-600 mb-6">{item.description}</p>
                          
                          {/* Technologies */}
                          {item.technologies && (
                            <div className="flex flex-wrap gap-2">
                              {item.technologies.map((tech, techIndex) => (
                                <span
                                  key={techIndex}
                                  className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm font-medium group-hover:bg-blue-100 transition-colors"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Empty space for opposite side */}
                    <div className="w-1/2"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Sekcja Zainteresowań */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-center mb-12 fade-in">Zainteresowania</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 fade-in">
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center text-2xl mx-auto mb-4 transform group-hover:scale-110 transition-transform duration-300">
                <span className="text-white">💻</span>
              </div>
              <h3 className="font-bold text-xl mb-3 text-center group-hover:text-blue-600 transition-colors">Open Source</h3>
              <p className="text-gray-600 text-center">
                Aktywnie uczestniczę w społeczności open source, tworząc własne projekty i kontrybuując do istniejących. Fascynuje mnie idea dzielenia się wiedzą i kodem z innymi programistami.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center text-2xl mx-auto mb-4 transform group-hover:scale-110 transition-transform duration-300">
                <span className="text-white">📚</span>
              </div>
              <h3 className="font-bold text-xl mb-3 text-center group-hover:text-blue-600 transition-colors">Literatura</h3>
              <p className="text-gray-600 text-center">
                Zagłębiam się w klasykach literatury i powieściach kryminalnych. Szczególnie cenię dzieła Arthura Conan Doyle'a (Sherlock Holmes), Alexandre'a Dumasa oraz Stephena Kinga. Książki rozwijają wyobraźnię i pomagają w kreatywnym myśleniu.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center text-2xl mx-auto mb-4 transform group-hover:scale-110 transition-transform duration-300">
                <span className="text-white">🎵</span>
              </div>
              <h3 className="font-bold text-xl mb-3 text-center group-hover:text-blue-600 transition-colors">Muzyka</h3>
              <p className="text-gray-600 text-center">
                Jestem melomanem o szerokich horyzontach muzycznych. Słucham różnych gatunków: od klasycznego rocka, przez jazz, po muzykę elektroniczną. Muzyka towarzyszy mi podczas programowania i pomaga w koncentracji.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center text-2xl mx-auto mb-4 transform group-hover:scale-110 transition-transform duration-300">
                <span className="text-white">⚽</span>
              </div>
              <h3 className="font-bold text-xl mb-3 text-center group-hover:text-blue-600 transition-colors">Sport</h3>
              <p className="text-gray-600 text-center">
                Piłka nożna to moja pasja - zarówno gra, jak i oglądanie meczów. Regularnie uczestniczę w amatorskich rozgrywkach. Sport pomaga mi zachować równowagę między pracą umysłową a aktywnością fizyczną.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 