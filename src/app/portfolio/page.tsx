'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { gsap, useGSAP } from '../../utils/gsap';
import Image from 'next/image';
import { FaChevronLeft, FaChevronRight, FaExternalLinkAlt } from 'react-icons/fa';
import PageHeader from '@/components/PageHeader';

interface Project {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: string[];
  technologies: string[];
  link: string;
  previewImage: string;
}

interface Course {
  id: string;
  title: string;
  platform: string;
  completionDate: string;
  certificateFile: string;
  previewImage: string;
  skills: string[];
}

const projects: Project[] = [
  {
    id: 'dogtest',
    title: 'DogTest - Platforma Testowa dla Psów',
    description: 'Nowoczesna aplikacja webowa do przeprowadzania testów behawioralnych psów. Platforma umożliwia trenerom i właścicielom psów przeprowadzanie standaryzowanych testów, ocenę wyników i śledzenie postępów czworonożnych podopiecznych.',
    icon: '🐕',
    category: ['web', 'aplikacje'],
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'MongoDB'],
    link: '/portfolio/dogtest',
    previewImage: '/portfolio/dogtest/Zrzut ekranu z 2025-06-22 21-37-24.png'
  },
  {
    id: 'consagrico',
    title: 'Consagrico - Platforma Biznesowa',
    description: 'Kompleksowa platforma biznesowa oferująca narzędzia do zarządzania projektami, komunikacji zespołowej i analizy danych. Nowoczesny interfejs z zaawansowanymi funkcjonalnościami dla firm.',
    icon: '🏢',
    category: ['web', 'aplikacje'],
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL'],
    link: '/portfolio/consagrico',
    previewImage: '/portfolio/consagrico/Zrzut ekranu z 2025-06-22 15-12-40.png'
  },
  {
    id: 'kursprogramowania',
    title: 'Kurs Programowania Online',
    description: 'Interaktywna platforma edukacyjna do nauki programowania. Zawiera kursy z różnych języków programowania, ćwiczenia praktyczne i system śledzenia postępów uczniów.',
    icon: '💻',
    category: ['web', 'aplikacje'],
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'MongoDB'],
    link: '/portfolio/kursprogramowania',
    previewImage: '/portfolio/kursprogramowania/Zrzut ekranu z 2025-06-22 15-06-23.png'
  },
  {
    id: 'wyprowadzaniepsow',
    title: 'Wyprowadzanie Psów - Platforma Usługowa',
    description: 'Platforma łącząca właścicieli psów z profesjonalnymi wyprowadzaczami. System rezerwacji, ocen i płatności online. Aplikacja mobilna dla wygodnego dostępu w terenie.',
    icon: '🦮',
    category: ['web', 'aplikacje'],
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL'],
    link: '/portfolio/wyprowadzaniepsow',
    previewImage: '/portfolio/wyprowadzaniepsow/Zrzut ekranu z 2025-06-22 15-01-29.png'
  }
];

const courses: Course[] = [
  {
    id: 'cert1',
    title: 'OpenCV and Java: build a Webcam Biofeedback Game',
    platform: 'Udemy',
    completionDate: '2024',
    certificateFile: '/certificates/cert1.pdf',
    previewImage: '/certificate-previews/cert1.png',
    skills: ['Java', 'OpenCV', 'Computer Vision', 'Game Development']
  },
  {
    id: 'cert2',
    title: 'Testy jednostkowe - JUnit 5, Mockito 2, TDD',
    platform: 'Udemy',
    completionDate: '2024',
    certificateFile: '/certificates/cert2.pdf',
    previewImage: '/certificate-previews/cert2.png',
    skills: ['Java', 'JUnit 5', 'Mockito 2', 'TDD', 'Unit Testing']
  },
  {
    id: 'cert3',
    title: 'Kariera Frontend Developera. Javascript. Poziom drugi',
    platform: 'Udemy',
    completionDate: '2024',
    certificateFile: '/certificates/cert3.pdf',
    previewImage: '/certificate-previews/cert3.png',
    skills: ['JavaScript', 'Frontend Development', 'Web Development']
  },
  {
    id: 'cert4',
    title: 'Three.js Journey. INSTRUCTOR AND CREATOR BRUNO SIMON',
    platform: 'threejs-journey.com',
    completionDate: '2024',
    certificateFile: '/certificates/cert4.pdf',
    previewImage: '/certificate-previews/cert4.png',
    skills: ['Three.js', 'WebGL', '3D Graphics', 'JavaScript']
  },
  {
    id: 'cert5',
    title: 'Bezpieczeństwo aplikacji webowych w Javie',
    platform: 'Udemy',
    completionDate: '2024',
    certificateFile: '/certificates/cert5.jpeg',
    previewImage: '/certificate-previews/cert5.png',
    skills: ['Java', 'Web Security', 'Spring Security', 'Authorization']
  },
  {
    id: 'cert6',
    title: 'Java - ambitny start - Zbuduj aplikację webową',
    platform: 'Udemy',
    completionDate: '2024',
    certificateFile: '/certificates/cert6.pdf',
    previewImage: '/certificate-previews/cert6.png',
    skills: ['Java', 'Web Development', 'Spring Boot']
  },
  {
    id: 'cert7',
    title: 'Docker od podstaw - dla programistów i nie tylko',
    platform: 'Udemy',
    completionDate: '2024',
    certificateFile: '/certificates/cert7.pdf',
    previewImage: '/certificate-previews/cert7.png',
    skills: ['Docker', 'Containerization', 'DevOps', 'CI/CD']
  },
  {
    id: 'cert8',
    title: 'Projekt praktyczny Spring Boot + Angular + Docker',
    platform: 'Udemy',
    completionDate: '2024',
    certificateFile: '/certificates/cert8.pdf',
    previewImage: '/certificate-previews/cert8.png',
    skills: ['Spring Boot', 'Angular', 'Docker', 'Full Stack Development']
  },
  {
    id: 'cert9',
    title: 'JavaFX MasterClass - Create A Banking Application',
    platform: 'Udemy',
    completionDate: '2024',
    certificateFile: '/certificates/cert9.pdf',
    previewImage: '/certificate-previews/cert9.png',
    skills: ['Java', 'JavaFX', 'Desktop Development', 'UI Development']
  }
];

const categories = ['wszystkie', 'web', 'aplikacje'];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('wszystkie');
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [isLoading, setIsLoading] = useState(true);
  const [currentCourseIndex, setCurrentCourseIndex] = useState(0);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef(null);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Calculate how many projects are shown at once based on screen size
  const getProjectsPerView = () => {
    if (window.innerWidth < 768) return 1; // mobile
    if (window.innerWidth < 1024) return 2; // tablet
    return 3; // desktop
  };

  // Check if navigation should be shown
  const shouldShowNavigation = () => {
    const projectsPerView = getProjectsPerView();
    return filteredProjects.length > projectsPerView;
  };

  const nextProject = useCallback(() => {
    setCurrentProjectIndex((prev) => (prev + 1) % filteredProjects.length);
  }, [filteredProjects.length]);

  const prevProject = useCallback(() => {
    setCurrentProjectIndex((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length);
  }, [filteredProjects.length]);

  const nextCourse = () => {
    setCurrentCourseIndex((prev) => (prev + 1) % courses.length);
  };

  const prevCourse = () => {
    setCurrentCourseIndex((prev) => (prev - 1 + courses.length) % courses.length);
  };

  // Automatyczne przewijanie
  useEffect(() => {
    autoPlayRef.current = setInterval(nextProject, 5000);

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [filteredProjects.length, nextProject]);

  // Zatrzymaj automatyczne przewijanie przy interakcji użytkownika
  const pauseAutoPlay = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
  };

  // Wznów automatyczne przewijanie po zakończeniu interakcji
  const resumeAutoPlay = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
    autoPlayRef.current = setInterval(() => {
      nextProject();
    }, 5000);
  };

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
    setCurrentProjectIndex(0); // Reset index when filtering

    gsap.from('.project-card', {
      opacity: 0,
      y: 20,
      stagger: 0.1,
      duration: 0.3,
      ease: 'power2.out'
    });
  }, { scope: containerRef, dependencies: [selectedCategory] });

  return (
    <div ref={containerRef} className="min-h-screen bg-gray-50 pb-24">
      <PageHeader
        title="Portfolio"
        description="Odkryj moje najnowsze projekty i realizacje. Każdy projekt to unikalne rozwiązanie dostosowane do potrzeb klienta."
      />

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

        {/* Karuzela projektów */}
        {isLoading ? (
          <div className="text-center">Ładowanie projektów...</div>
        ) : (
          <div className="relative mb-24">
            <div className="overflow-hidden"
              onMouseEnter={pauseAutoPlay}
              onMouseLeave={resumeAutoPlay}
            >
              <div 
                className="flex transition-transform duration-500" 
                style={{ transform: `translateX(-${currentProjectIndex * (isMobile ? 100 : 33.333)}%)` }}
              >
                {filteredProjects.map((project, index) => (
                  <div
                    key={project.id}
                    className="w-full md:w-1/3 flex-shrink-0 px-4 transition-all duration-500"
                    style={{
                      transform: index === currentProjectIndex ? 'scale(1.05)' : 'scale(1)',
                      zIndex: index === currentProjectIndex ? 10 : 1
                    }}
                  >
                    <div className="project-card group bg-white rounded-xl shadow-lg hover:shadow-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 relative h-full min-h-[600px]">
                      <div className="h-36 md:h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center relative overflow-hidden">
                        <Image
                          src={project.previewImage}
                          alt={project.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20"></div>
                      </div>

                      <div className="p-4 md:p-8 relative h-[calc(100%-9rem)] md:h-[calc(100%-12rem)] flex flex-col">
                        <div className="flex-grow">
                          <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">
                            {project.title}
                          </h3>
                          <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6">{project.description}</p>
                          
                          <div className="flex flex-wrap gap-1 md:gap-2 mb-4 md:mb-6">
                            {project.technologies.map((tech, index) => (
                              <span
                                key={index}
                                className="bg-blue-50 text-blue-600 px-2 md:px-4 py-1 rounded-full text-xs md:text-sm font-medium group-hover:bg-blue-100 transition-colors"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>

                          <div className="flex flex-wrap gap-2">
                            {project.category.map((cat, index) => (
                              <span
                                key={index}
                                className="text-gray-500 text-xs md:text-sm"
                              >
                                #{cat}
                              </span>
                            ))}
                          </div>
                        </div>

                        <a
                          href={project.link}
                          className="block w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white text-center py-2 md:py-3 px-4 md:px-6 rounded-lg font-medium 
                            hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 
                            relative overflow-hidden group text-sm md:text-base"
                        >
                          <span className="relative z-10">Zobacz projekt</span>
                          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            {shouldShowNavigation() && (
              <>
                <button
                  onClick={prevProject}
                  className="absolute left-0 top-1/2 -translate-y-1/2 md:-translate-x-1/2 bg-white p-2 md:p-3 rounded-full shadow-lg hover:bg-gray-50 transition-colors z-10"
                  aria-label="Poprzedni projekt"
                >
                  <FaChevronLeft className="w-4 h-4 md:w-6 md:h-6 text-gray-600" />
                </button>
                <button
                  onClick={nextProject}
                  className="absolute right-0 top-1/2 -translate-y-1/2 md:translate-x-1/2 bg-white p-2 md:p-3 rounded-full shadow-lg hover:bg-gray-50 transition-colors z-10"
                  aria-label="Następny projekt"
                >
                  <FaChevronRight className="w-4 h-4 md:w-6 md:h-6 text-gray-600" />
                </button>

                {/* Dots */}
                <div className="flex justify-center mt-4 md:mt-8 gap-1 md:gap-2">
                  {filteredProjects.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentProjectIndex(index)}
                      className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                        currentProjectIndex === index
                          ? 'bg-blue-500 w-4 md:w-6'
                          : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                      aria-label={`Przejdź do projektu ${index + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        )}

        {/* Courses Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 fade-in">
              Ciągły Rozwój i Certyfikacje
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto fade-in">
              Nieustannie poszerzam swoją wiedzę i umiejętności poprzez kursy i certyfikacje.
              Poniżej znajdziesz niektóre z moich osiągnięć edukacyjnych.
            </p>
          </div>

          <div className="relative">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="grid md:grid-cols-2">
                <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center">
                  <div className="relative w-full aspect-[1.4/1] rounded-lg overflow-hidden shadow-lg group">
                    <Image
                      src={`/certificate-previews/cert${currentCourseIndex + 1}.png`}
                      alt={`Certyfikat ${courses[currentCourseIndex].title}`}
                      fill
                      className="object-contain"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <a
                        href={courses[currentCourseIndex].certificateFile}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white text-gray-800 px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-100 transition-colors"
                      >
                        <FaExternalLinkAlt className="w-4 h-4" />
                        <span>Zobacz pełny certyfikat</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-12">
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold mb-2">{courses[currentCourseIndex].title}</h3>
                    <p className="text-gray-600">{courses[currentCourseIndex].platform}</p>
                    <p className="text-sm text-gray-500">Ukończono: {courses[currentCourseIndex].completionDate}</p>
                  </div>

                  <div className="mb-8">
                    <h4 className="text-lg font-semibold mb-3">Zdobyte umiejętności:</h4>
                    <div className="flex flex-wrap gap-2">
                      {courses[currentCourseIndex].skills.map((skill) => (
                        <span
                          key={skill}
                          className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <a
                      href={courses[currentCourseIndex].certificateFile}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                    >
                      Zobacz certyfikat
                    </a>
                    {/* Strzałki nawigacyjne obok siebie */}
                    <div className="flex gap-2">
                      <button
                        onClick={prevCourse}
                        className="p-3 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-colors"
                        aria-label="Poprzedni kurs"
                      >
                        <FaChevronLeft className="w-6 h-6 text-gray-600" />
                      </button>
                      <button
                        onClick={nextCourse}
                        className="p-3 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-colors"
                        aria-label="Następny kurs"
                      >
                        <FaChevronRight className="w-6 h-6 text-gray-600" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Progress indicators */}
            <div className="flex justify-center mt-8 gap-2">
              {courses.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentCourseIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentCourseIndex === index
                      ? 'bg-blue-500 w-6'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Przejdź do certyfikatu ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

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