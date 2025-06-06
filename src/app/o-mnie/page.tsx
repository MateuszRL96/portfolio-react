'use client';

import { useRef } from 'react';
import { gsap, useGSAP } from '../../utils/gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { 
  FaReact, FaNodeJs, FaJava, FaDocker, FaGitAlt, FaHtml5, FaCss3Alt, FaAngular,
  FaAws, FaLinux, FaPython, FaWindows, FaServer, FaShieldAlt,
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
import PageHeader from '@/components/PageHeader';

gsap.registerPlugin(ScrollTrigger);

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
  { name: 'React', icon: <FaReact className="w-8 h-8 lg:w-10 lg:h-10" />, category: 'frontend' },
  { name: 'Angular', icon: <FaAngular className="w-8 h-8 lg:w-10 lg:h-10" />, category: 'frontend' },
  { name: 'Next.js', icon: <SiNextdotjs className="w-8 h-8 lg:w-10 lg:h-10" />, category: 'frontend' },
  { name: 'TypeScript', icon: <SiTypescript className="w-8 h-8 lg:w-10 lg:h-10" />, category: 'frontend' },
  { name: 'JavaScript', icon: <SiJavascript className="w-8 h-8 lg:w-10 lg:h-10" />, category: 'frontend' },
  { name: 'Redux', icon: <SiRedux className="w-8 h-8 lg:w-10 lg:h-10" />, category: 'frontend' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="w-8 h-8 lg:w-10 lg:h-10" />, category: 'frontend' },
  { name: 'Three.js', icon: <SiThreedotjs className="w-8 h-8 lg:w-10 lg:h-10" />, category: 'frontend' },
  { name: 'HTML5', icon: <FaHtml5 className="w-8 h-8 lg:w-10 lg:h-10" />, category: 'frontend' },
  { name: 'CSS3', icon: <FaCss3Alt className="w-8 h-8 lg:w-10 lg:h-10" />, category: 'frontend' },
  
  // Backend
  { name: 'Node.js', icon: <FaNodeJs className="w-8 h-8 lg:w-10 lg:h-10" />, category: 'backend' },
  { name: 'Express', icon: <SiExpress className="w-8 h-8 lg:w-10 lg:h-10" />, category: 'backend' },
  { name: 'Java', icon: <FaJava className="w-8 h-8 lg:w-10 lg:h-10" />, category: 'backend' },
  { name: 'Spring Boot', icon: <SiSpring className="w-8 h-8 lg:w-10 lg:h-10" />, category: 'backend' },
  { name: 'C#', icon: <TbBrandCSharp className="w-8 h-8 lg:w-10 lg:h-10" />, category: 'backend' },
  { name: 'Python', icon: <FaPython className="w-8 h-8 lg:w-10 lg:h-10" />, category: 'backend' },
  { name: 'Firebase', icon: <SiFirebase className="w-8 h-8 lg:w-10 lg:h-10" />, category: 'backend' },
  
  // Database
  { name: 'PostgreSQL', icon: <SiPostgresql className="w-8 h-8 lg:w-10 lg:h-10" />, category: 'database' },
  { name: 'MongoDB', icon: <SiMongodb className="w-8 h-8 lg:w-10 lg:h-10" />, category: 'database' },
  { name: 'MySQL', icon: <SiMysql className="w-8 h-8 lg:w-10 lg:h-10" />, category: 'database' },
  { name: 'Oracle', icon: <SiOracle className="w-8 h-8 lg:w-10 lg:h-10" />, category: 'database' },
  { name: 'Redis', icon: <SiRedis className="w-8 h-8 lg:w-10 lg:h-10" />, category: 'database' },
  { name: 'MariaDB', icon: <SiMariadb className="w-8 h-8 lg:w-10 lg:h-10" />, category: 'database' },
  
  // DevOps & Tools
  { name: 'Docker', icon: <FaDocker className="w-8 h-8 lg:w-10 lg:h-10" />, category: 'devops' },
  { name: 'Kubernetes', icon: <SiKubernetes className="w-8 h-8 lg:w-10 lg:h-10" />, category: 'devops' },
  { name: 'Git', icon: <FaGitAlt className="w-8 h-8 lg:w-10 lg:h-10" />, category: 'devops' },
  { name: 'AWS', icon: <FaAws className="w-8 h-8 lg:w-10 lg:h-10" />, category: 'devops' },
  { name: 'Azure', icon: <FaCloud className="w-8 h-8 lg:w-10 lg:h-10" />, category: 'devops' },
  { name: 'Jenkins', icon: <SiJenkins className="w-8 h-8 lg:w-10 lg:h-10" />, category: 'devops' },
  { name: 'Grafana', icon: <SiGrafana className="w-8 h-8 lg:w-10 lg:h-10" />, category: 'devops' },
  { name: 'Prometheus', icon: <SiPrometheus className="w-8 h-8 lg:w-10 lg:h-10" />, category: 'devops' },
  
  // Testing
  { name: 'JUnit', icon: <SiJunit5 className="w-8 h-8 lg:w-10 lg:h-10" />, category: 'testing' },
  { name: 'Selenium', icon: <SiSelenium className="w-8 h-8 lg:w-10 lg:h-10" />, category: 'testing' },
  { name: 'Cypress', icon: <SiCypress className="w-8 h-8 lg:w-10 lg:h-10" />, category: 'testing' },
  { name: 'Postman', icon: <SiPostman className="w-8 h-8 lg:w-10 lg:h-10" />, category: 'testing' },
  { name: 'SonarQube', icon: <SiSonarqube className="w-8 h-8 lg:w-10 lg:h-10" />, category: 'testing' },

  // AI & Machine Learning
  { name: 'TensorFlow', icon: <SiTensorflow className="w-8 h-8 lg:w-10 lg:h-10" />, category: 'ai' },
  { name: 'PyTorch', icon: <SiPytorch className="w-8 h-8 lg:w-10 lg:h-10" />, category: 'ai' },
  { name: 'Scikit-learn', icon: <SiScikitlearn className="w-8 h-8 lg:w-10 lg:h-10" />, category: 'ai' },

  // IT Administration
  { name: 'Linux', icon: <FaLinux className="w-8 h-8 lg:w-10 lg:h-10" />, category: 'it' },
  { name: 'Windows Server', icon: <FaWindows className="w-8 h-8 lg:w-10 lg:h-10" />, category: 'it' },
  { name: 'VMware', icon: <SiVmware className="w-8 h-8 lg:w-10 lg:h-10" />, category: 'it' },
  { name: 'Microsoft 365', icon: <FaMicrosoft className="w-8 h-8 lg:w-10 lg:h-10" />, category: 'it' },
  { name: 'Ansible', icon: <SiAnsible className="w-8 h-8 lg:w-10 lg:h-10" />, category: 'it' },
  { name: 'Terraform', icon: <SiTerraform className="w-8 h-8 lg:w-10 lg:h-10" />, category: 'it' },
  { name: 'Server Admin', icon: <FaServer className="w-8 h-8 lg:w-10 lg:h-10" />, category: 'it' },
  { name: 'Networking', icon: <FaNetworkWired className="w-8 h-8 lg:w-10 lg:h-10" />, category: 'it' },

  // Cybersecurity
  { name: 'Network Security', icon: <FaShieldAlt className="w-8 h-8 lg:w-10 lg:h-10" />, category: 'security' },
  { name: 'Kali Linux', icon: <SiKalilinux className="w-8 h-8 lg:w-10 lg:h-10" />, category: 'security' },
  { name: 'Wireshark', icon: <SiWireshark className="w-8 h-8 lg:w-10 lg:h-10" />, category: 'security' },
  { name: 'Identity & Access', icon: <FaUserShield className="w-8 h-8 lg:w-10 lg:h-10" />, category: 'security' },
  { name: 'Encryption', icon: <FaLock className="w-8 h-8 lg:w-10 lg:h-10" />, category: 'security' },

  // Message Brokers
  { name: 'Kafka', icon: <SiApachekafka className="w-8 h-8 lg:w-10 lg:h-10" />, category: 'messaging' },
  { name: 'RabbitMQ', icon: <SiRabbitmq className="w-8 h-8 lg:w-10 lg:h-10" />, category: 'messaging' }
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
      <PageHeader
        title="O mnie"
        description="Specjalista IT z pasją do cyberbezpieczeństwa i programowania. Łączę wiedzę techniczną z praktycznym doświadczeniem w zarządzaniu systemami i infrastrukturą IT."
        extraContent={
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 fade-in">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 sm:px-6 py-4">
              <div className="text-white/90 text-sm mb-1">Obecna rola</div>
              <div className="text-white font-semibold text-sm sm:text-base">IT Specialist @ Consbridge Chemicals</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 sm:px-6 py-4">
              <div className="text-white/90 text-sm mb-1">Edukacja</div>
              <div className="text-white font-semibold text-sm sm:text-base">Magister Cyberbezpieczeństwa</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 sm:px-6 py-4">
              <div className="text-white/90 text-sm mb-1">Specjalizacja</div>
              <div className="text-white font-semibold text-sm sm:text-base">Bezpieczeństwo IT & Rozwój Systemów</div>
            </div>
          </div>
        }
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* About Hero Section */}
        <div className="mb-16">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Content */}
            <div className="fade-in">
              <h2 className="text-3xl font-bold mb-6">Cześć, jestem Mateusz!</h2>
              <div className="space-y-4 text-gray-600">
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
              <div className="grid grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-1">15+</div>
                  <div className="text-gray-600 text-sm">Projektów IT</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-1">2+</div>
                  <div className="text-gray-600 text-sm">Lata doświadczenia</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-1">10+</div>
                  <div className="text-gray-600 text-sm">Certyfikatów</div>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-xl fade-in">
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
        <div className="mb-16 skills-section">
          <h2 className="text-3xl font-bold text-center mb-8 fade-in">Stack Technologiczny</h2>
          
          {/* Frontend */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-center text-blue-600">Frontend</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 lg:gap-6">
              {techStack
                .filter(tech => tech.category === 'frontend')
                .map((tech, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center justify-center p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
                  >
                    <div className="text-gray-600 group-hover:text-blue-500 transition-colors duration-300 w-8 h-8 lg:w-10 lg:h-10">
                      {tech.icon}
                    </div>
                    <span className="mt-2 font-medium text-gray-800 text-sm">{tech.name}</span>
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
        <div className="mb-16 relative">
          <h2 className="text-3xl font-bold text-center mb-8 fade-in">Doświadczenie</h2>
          
          {/* Timeline container */}
          <div className="max-w-7xl mx-auto">
            {/* Desktop only - vertical line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-blue-400 to-purple-500"></div>

            {/* Timeline items */}
            {timeline.map((item, index) => (
              <div key={index}>
                {/* Mobile version */}
                <div className="block md:hidden">
                  <article className="mx-4 mb-6 bg-white rounded-lg shadow p-4">
                    <header className="mb-4">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xl bg-blue-100 text-blue-600 p-2 rounded-full">{item.icon}</span>
                        <time className="text-blue-600 font-bold">{item.date}</time>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                      <div className="text-blue-500 font-medium">{item.company}</div>
                    </header>
                    
                    <div className="space-y-4">
                      <div className="prose prose-sm max-w-none">
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                      
                      {item.technologies && (
                        <div className="flex flex-wrap gap-2">
                          {item.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="bg-blue-50 text-blue-600 px-2 py-1 text-sm rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </article>
                </div>

                {/* Desktop version */}
                <div className="hidden md:flex items-center mb-16">
                  {/* Left content */}
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-16 text-right' : ''}`}>
                    {index % 2 === 0 && (
                      <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300">
                        <span className="text-blue-600 font-bold text-lg block mb-2">{item.date}</span>
                        <h3 className="text-2xl font-bold mb-2 text-gray-900">{item.title}</h3>
                        <h4 className="text-lg font-medium text-blue-500 mb-4">{item.company}</h4>
                        <p className="text-gray-600 mb-6">{item.description}</p>
                        {item.technologies && (
                          <div className="flex flex-wrap gap-2 justify-end">
                            {item.technologies.map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm font-medium"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Center icon */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-white rounded-full border-4 border-blue-500 z-10 flex items-center justify-center">
                    <span className="text-2xl">{item.icon}</span>
                  </div>

                  {/* Right content */}
                  <div className={`w-1/2 ${index % 2 === 1 ? 'pl-16' : ''}`}>
                    {index % 2 === 1 && (
                      <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300">
                        <span className="text-blue-600 font-bold text-lg block mb-2">{item.date}</span>
                        <h3 className="text-2xl font-bold mb-2 text-gray-900">{item.title}</h3>
                        <h4 className="text-lg font-medium text-blue-500 mb-4">{item.company}</h4>
                        <p className="text-gray-600 mb-6">{item.description}</p>
                        {item.technologies && (
                          <div className="flex flex-wrap gap-2">
                            {item.technologies.map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm font-medium"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sekcja Zainteresowań */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 fade-in">Zainteresowania</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 fade-in">
            <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center text-xl sm:text-2xl mx-auto mb-4 transform group-hover:scale-110 transition-transform duration-300">
                <span className="text-white">💻</span>
              </div>
              <h3 className="font-bold text-lg sm:text-xl mb-2 text-center group-hover:text-blue-600 transition-colors">Open Source</h3>
              <p className="text-gray-600 text-center text-sm sm:text-base">
                Aktywnie uczestniczę w społeczności open source, tworząc własne projekty i kontrybuując do istniejących. Fascynuje mnie idea dzielenia się wiedzą i kodem z innymi programistami.
              </p>
            </div>

            <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center text-xl sm:text-2xl mx-auto mb-4 transform group-hover:scale-110 transition-transform duration-300">
                <span className="text-white">📚</span>
              </div>
              <h3 className="font-bold text-lg sm:text-xl mb-2 text-center group-hover:text-blue-600 transition-colors">Literatura</h3>
              <p className="text-gray-600 text-center text-sm sm:text-base">
                Zagłębiam się w klasykach literatury i powieściach kryminalnych. Szczególnie cenię dzieła Arthura Conan Doyle&apos;a (Sherlock Holmes), Alexandre&apos;a Dumasa oraz Stephena Kinga. Książki rozwijają wyobraźnię i pomagają w kreatywnym myśleniu.
              </p>
            </div>

            <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center text-xl sm:text-2xl mx-auto mb-4 transform group-hover:scale-110 transition-transform duration-300">
                <span className="text-white">🎵</span>
              </div>
              <h3 className="font-bold text-lg sm:text-xl mb-2 text-center group-hover:text-blue-600 transition-colors">Muzyka</h3>
              <p className="text-gray-600 text-center text-sm sm:text-base">
                Jestem melomanem o szerokich horyzontach muzycznych. Słucham różnych gatunków: od klasycznego rocka, przez jazz, po muzykę elektroniczną. Muzyka towarzyszy mi podczas programowania i pomaga w koncentracji.
              </p>
            </div>

            <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center text-xl sm:text-2xl mx-auto mb-4 transform group-hover:scale-110 transition-transform duration-300">
                <span className="text-white">⚽</span>
              </div>
              <h3 className="font-bold text-lg sm:text-xl mb-2 text-center group-hover:text-blue-600 transition-colors">Sport</h3>
              <p className="text-gray-600 text-center text-sm sm:text-base">
                Piłka nożna to moja pasja - zarówno gra, jak i oglądanie meczów. Regularnie uczestniczę w amatorskich rozgrywkach. Sport pomaga mi zachować równowagę między pracą umysłową a aktywnością fizyczną.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 