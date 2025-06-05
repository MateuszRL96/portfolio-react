'use client';

import { useState, useRef } from 'react';
import { gsap, useGSAP } from '../../utils/gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { 
  FaReact, FaNodeJs, FaJava, FaDocker, FaGitAlt, FaHtml5, FaCss3Alt, FaAngular,
  FaDatabase, FaAws, FaLinux, FaNpm, FaPython, FaWindows, FaServer, FaShieldAlt,
  FaNetworkWired, FaMicrosoft, FaUserShield, FaLock, FaCloud
} from 'react-icons/fa';
import { 
  SiTypescript, SiSpring, SiNextdotjs, SiPostgresql, SiMongodb, SiExpress,
  SiTailwindcss, SiRedux, SiJavascript, SiJunit5, SiThreedotjs, SiMysql,
  SiOracle, SiTensorflow, SiPytorch, SiScikitlearn,
  SiKubernetes, SiJenkins, SiGrafana, SiPrometheus, SiSelenium, SiCypress,
  SiPostman, SiWireshark, SiKalilinux, SiFirebase, SiRedis, SiMariadb,
  SiApachekafka, SiRabbitmq, SiSonarqube, SiVmware, SiAnsible, SiTerraform
} from 'react-icons/si';
import { TbBrandCSharp } from 'react-icons/tb';
import type { ReactNode } from 'react';

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

interface TechStack {
  name: string;
  icon: ReactNode;
  category: 'frontend' | 'backend' | 'database' | 'devops' | 'testing' | 'ai' | 'security' | 'it' | 'messaging';
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
    title: 'IT Specialist',
    company: 'Consbridge Chemicals',
    description: 'Praca na stanowisku specjalisty IT, odpowiedzialnego za zarządzanie systemami ERP, WMS oraz infrastrukturą IT. Zajmuję się administracją, wdrażaniem i utrzymaniem systemów informatycznych oraz wsparciem technicznym użytkowników.',
    technologies: ['ERP', 'WMS', 'IT Infrastructure', 'System Administration', 'Technical Support'],
    icon: '💼'
  },
  {
    date: '2025-obecnie',
    title: 'Magister Cyberbezpieczeństwa',
    company: 'UITM Rzeszów',
    description: 'Studia magisterskie na kierunku Cyberbezpieczeństwo, gdzie zgłębiam zaawansowane aspekty bezpieczeństwa systemów informatycznych, sieci i infrastruktury IT. Koncentruję się na praktycznych aspektach cyberbezpieczeństwa, analizie zagrożeń oraz projektowaniu bezpiecznych systemów.',
    technologies: ['Cyberbezpieczeństwo', 'Bezpieczeństwo Sieci', 'Kryptografia', 'Analiza Zagrożeń', 'Informatyka Śledcza', 'Zarządzanie Bezpieczeństwem'],
    icon: '🎓'
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
    title: 'Inżynier Informatyki',
    company: 'UITM Rzeszów',
    description: 'Ukończone studia inżynierskie na kierunku Informatyka, gdzie zdobyłem solidne podstawy programowania i projektowania systemów. Specjalizowałem się w technologiach backendowych (Java, Spring Boot) oraz frontendowych (Angular), realizując szereg praktycznych projektów.',
    technologies: ['Java', 'Spring Boot', 'Angular', 'Programowanie Obiektowe', 'Bazy Danych', 'Architektura Systemów'],
    icon: '👨‍🎓'
  }
];

const techStack: TechStack[] = [
  // Frontend
  { name: 'React', icon: <FaReact className="w-12 h-12" />, category: 'frontend' },
  { name: 'Angular', icon: <FaAngular className="w-12 h-12" />, category: 'frontend' },
  { name: 'Next.js', icon: <SiNextdotjs className="w-12 h-12" />, category: 'frontend' },
  { name: 'TypeScript', icon: <SiTypescript className="w-12 h-12" />, category: 'frontend' },
  { name: 'JavaScript', icon: <SiJavascript className="w-12 h-12" />, category: 'frontend' },
  { name: 'Redux', icon: <SiRedux className="w-12 h-12" />, category: 'frontend' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="w-12 h-12" />, category: 'frontend' },
  { name: 'Three.js', icon: <SiThreedotjs className="w-12 h-12" />, category: 'frontend' },
  { name: 'HTML5', icon: <FaHtml5 className="w-12 h-12" />, category: 'frontend' },
  { name: 'CSS3', icon: <FaCss3Alt className="w-12 h-12" />, category: 'frontend' },
  
  // Backend
  { name: 'Node.js', icon: <FaNodeJs className="w-12 h-12" />, category: 'backend' },
  { name: 'Express', icon: <SiExpress className="w-12 h-12" />, category: 'backend' },
  { name: 'Java', icon: <FaJava className="w-12 h-12" />, category: 'backend' },
  { name: 'Spring Boot', icon: <SiSpring className="w-12 h-12" />, category: 'backend' },
  { name: 'C#', icon: <TbBrandCSharp className="w-12 h-12" />, category: 'backend' },
  { name: 'Python', icon: <FaPython className="w-12 h-12" />, category: 'backend' },
  { name: 'Firebase', icon: <SiFirebase className="w-12 h-12" />, category: 'backend' },
  
  // Database
  { name: 'PostgreSQL', icon: <SiPostgresql className="w-12 h-12" />, category: 'database' },
  { name: 'MongoDB', icon: <SiMongodb className="w-12 h-12" />, category: 'database' },
  { name: 'MySQL', icon: <SiMysql className="w-12 h-12" />, category: 'database' },
  { name: 'Oracle', icon: <SiOracle className="w-12 h-12" />, category: 'database' },
  { name: 'Redis', icon: <SiRedis className="w-12 h-12" />, category: 'database' },
  { name: 'MariaDB', icon: <SiMariadb className="w-12 h-12" />, category: 'database' },
  
  // DevOps & Tools
  { name: 'Docker', icon: <FaDocker className="w-12 h-12" />, category: 'devops' },
  { name: 'Kubernetes', icon: <SiKubernetes className="w-12 h-12" />, category: 'devops' },
  { name: 'Git', icon: <FaGitAlt className="w-12 h-12" />, category: 'devops' },
  { name: 'AWS', icon: <FaAws className="w-12 h-12" />, category: 'devops' },
  { name: 'Azure', icon: <FaCloud className="w-12 h-12" />, category: 'devops' },
  { name: 'Jenkins', icon: <SiJenkins className="w-12 h-12" />, category: 'devops' },
  { name: 'Grafana', icon: <SiGrafana className="w-12 h-12" />, category: 'devops' },
  { name: 'Prometheus', icon: <SiPrometheus className="w-12 h-12" />, category: 'devops' },
  
  // Testing
  { name: 'JUnit', icon: <SiJunit5 className="w-12 h-12" />, category: 'testing' },
  { name: 'Selenium', icon: <SiSelenium className="w-12 h-12" />, category: 'testing' },
  { name: 'Cypress', icon: <SiCypress className="w-12 h-12" />, category: 'testing' },
  { name: 'Postman', icon: <SiPostman className="w-12 h-12" />, category: 'testing' },
  { name: 'SonarQube', icon: <SiSonarqube className="w-12 h-12" />, category: 'testing' },

  // AI & Machine Learning
  { name: 'TensorFlow', icon: <SiTensorflow className="w-12 h-12" />, category: 'ai' },
  { name: 'PyTorch', icon: <SiPytorch className="w-12 h-12" />, category: 'ai' },
  { name: 'Scikit-learn', icon: <SiScikitlearn className="w-12 h-12" />, category: 'ai' },

  // IT Administration
  { name: 'Linux', icon: <FaLinux className="w-12 h-12" />, category: 'it' },
  { name: 'Windows Server', icon: <FaWindows className="w-12 h-12" />, category: 'it' },
  { name: 'VMware', icon: <SiVmware className="w-12 h-12" />, category: 'it' },
  { name: 'Microsoft 365', icon: <FaMicrosoft className="w-12 h-12" />, category: 'it' },
  { name: 'Ansible', icon: <SiAnsible className="w-12 h-12" />, category: 'it' },
  { name: 'Terraform', icon: <SiTerraform className="w-12 h-12" />, category: 'it' },
  { name: 'Server Admin', icon: <FaServer className="w-12 h-12" />, category: 'it' },
  { name: 'Networking', icon: <FaNetworkWired className="w-12 h-12" />, category: 'it' },

  // Cybersecurity
  { name: 'Network Security', icon: <FaShieldAlt className="w-12 h-12" />, category: 'security' },
  { name: 'Kali Linux', icon: <SiKalilinux className="w-12 h-12" />, category: 'security' },
  { name: 'Wireshark', icon: <SiWireshark className="w-12 h-12" />, category: 'security' },
  { name: 'Identity & Access', icon: <FaUserShield className="w-12 h-12" />, category: 'security' },
  { name: 'Encryption', icon: <FaLock className="w-12 h-12" />, category: 'security' },

  // Message Brokers
  { name: 'Kafka', icon: <SiApachekafka className="w-12 h-12" />, category: 'messaging' },
  { name: 'RabbitMQ', icon: <SiRabbitmq className="w-12 h-12" />, category: 'messaging' }
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
    <div ref={containerRef} className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <div className="w-full bg-gradient-to-br from-blue-500 via-blue-400 to-blue-300 mb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-6 fade-in text-white drop-shadow-md">O mnie</h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-white/90 mb-8 fade-in">
                Specjalista IT z pasją do cyberbezpieczeństwa i programowania. Łączę wiedzę techniczną z praktycznym doświadczeniem w zarządzaniu systemami i infrastrukturą IT.
              </p>
              <div className="flex justify-center gap-6 fade-in">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-4">
                  <div className="text-white/90 text-sm mb-1">Obecna rola</div>
                  <div className="text-white font-semibold">IT Specialist @ Consbridge Chemicals</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-4">
                  <div className="text-white/90 text-sm mb-1">Edukacja</div>
                  <div className="text-white font-semibold">Magister Cyberbezpieczeństwa</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-4">
                  <div className="text-white/90 text-sm mb-1">Specjalizacja</div>
                  <div className="text-white font-semibold">Bezpieczeństwo IT & Rozwój Systemów</div>
                </div>
              </div>
            </div>
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
                  Jestem specjalistą IT z silnym zapleczem w zakresie cyberbezpieczeństwa i programowania. Obecnie pracuję jako IT Specialist w Consbridge Chemicals, gdzie zajmuję się zarządzaniem systemami ERP, WMS oraz infrastrukturą IT. Równolegle kontynuuję edukację na studiach magisterskich z cyberbezpieczeństwa, rozwijając swoje umiejętności w zakresie bezpieczeństwa systemów i sieci.
                </p>
                <p>
                  Moja ścieżka zawodowa łączy doświadczenie w programowaniu (głównie Java, Spring Boot, Angular) z wiedzą z zakresu administracji systemami i cyberbezpieczeństwa. Ukończyłem studia inżynierskie z informatyki, gdzie zdobyłem solidne podstawy programistyczne, a obecnie poszerzam swoją wiedzę w kierunku bezpieczeństwa IT.
                </p>
                <p>
                  Poza pracą zawodową, aktywnie rozwijam się w obszarze nowych technologii, szczególnie interesują mnie zagadnienia związane z bezpieczeństwem sieciowym, automatyzacją infrastruktury i rozwiązaniami chmurowymi. W wolnym czasie lubię zgłębiać nowe narzędzia i technologie, które mogą usprawnić procesy w IT.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 mt-12">
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">15+</div>
                  <div className="text-gray-600">Projektów IT</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">2+</div>
                  <div className="text-gray-600">Lata doświadczenia</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">10+</div>
                  <div className="text-gray-600">Certyfikatów</div>
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
          <h2 className="text-3xl font-bold text-center mb-12 fade-in">Stack Technologiczny</h2>
          
          {/* Frontend */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 text-center text-blue-600">Frontend</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
              {techStack
                .filter(tech => tech.category === 'frontend')
                .map((tech, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
                  >
                    <div className="text-gray-600 group-hover:text-blue-500 transition-colors duration-300">
                      {tech.icon}
                    </div>
                    <span className="mt-4 font-medium text-gray-800">{tech.name}</span>
                  </div>
                ))}
            </div>
          </div>

          {/* Backend */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 text-center text-blue-600">Backend</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {techStack
                .filter(tech => tech.category === 'backend')
                .map((tech, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
                  >
                    <div className="text-gray-600 group-hover:text-blue-500 transition-colors duration-300">
                      {tech.icon}
                    </div>
                    <span className="mt-4 font-medium text-gray-800">{tech.name}</span>
                  </div>
                ))}
            </div>
          </div>

          {/* Databases & Messaging */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 text-center text-blue-600">Bazy Danych & Messaging</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {techStack
                .filter(tech => tech.category === 'database' || tech.category === 'messaging')
                .map((tech, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
                  >
                    <div className="text-gray-600 group-hover:text-blue-500 transition-colors duration-300">
                      {tech.icon}
                    </div>
                    <span className="mt-4 font-medium text-gray-800">{tech.name}</span>
                  </div>
                ))}
            </div>
          </div>

          {/* DevOps & Tools */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 text-center text-blue-600">DevOps & Narzędzia</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {techStack
                .filter(tech => tech.category === 'devops')
                .map((tech, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
                  >
                    <div className="text-gray-600 group-hover:text-blue-500 transition-colors duration-300">
                      {tech.icon}
                    </div>
                    <span className="mt-4 font-medium text-gray-800">{tech.name}</span>
                  </div>
                ))}
            </div>
          </div>

          {/* Testing */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 text-center text-blue-600">Testing & Quality</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
              {techStack
                .filter(tech => tech.category === 'testing')
                .map((tech, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
                  >
                    <div className="text-gray-600 group-hover:text-blue-500 transition-colors duration-300">
                      {tech.icon}
                    </div>
                    <span className="mt-4 font-medium text-gray-800">{tech.name}</span>
                  </div>
                ))}
            </div>
          </div>

          {/* AI & Machine Learning */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 text-center text-blue-600">AI & Machine Learning</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {techStack
                .filter(tech => tech.category === 'ai')
                .map((tech, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
                  >
                    <div className="text-gray-600 group-hover:text-blue-500 transition-colors duration-300">
                      {tech.icon}
                    </div>
                    <span className="mt-4 font-medium text-gray-800">{tech.name}</span>
                  </div>
                ))}
            </div>
          </div>

          {/* IT Administration */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 text-center text-blue-600">Administracja IT</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {techStack
                .filter(tech => tech.category === 'it')
                .map((tech, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
                  >
                    <div className="text-gray-600 group-hover:text-blue-500 transition-colors duration-300">
                      {tech.icon}
                    </div>
                    <span className="mt-4 font-medium text-gray-800">{tech.name}</span>
                  </div>
                ))}
            </div>
          </div>

          {/* Cybersecurity */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-center text-blue-600">Cyberbezpieczeństwo</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
              {techStack
                .filter(tech => tech.category === 'security')
                .map((tech, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
                  >
                    <div className="text-gray-600 group-hover:text-blue-500 transition-colors duration-300">
                      {tech.icon}
                    </div>
                    <span className="mt-4 font-medium text-gray-800">{tech.name}</span>
                  </div>
                ))}
            </div>
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
              <div className="timeline-line absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-500 via-blue-400 to-purple-500 h-[95%] rounded-full shadow-lg"></div>

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