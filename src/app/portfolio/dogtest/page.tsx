'use client';

import { useState, useRef } from 'react';
import { gsap, useGSAP } from '../../../utils/gsap';
import Image from 'next/image';
import { FaChevronLeft, FaChevronRight, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiMongodb } from 'react-icons/si';
import PageHeader from '@/components/PageHeader';

export default function DogTestProject() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const containerRef = useRef(null);

  const screenshots = [
    '/portfolio/dogtest/Zrzut ekranu z 2025-06-22 21-37-33.png',
    '/portfolio/dogtest/Zrzut ekranu z 2025-06-22 21-37-24.png',
    '/portfolio/dogtest/Zrzut ekranu z 2025-06-22 21-37-11.png',
    '/portfolio/dogtest/Zrzut ekranu z 2025-06-22 21-37-01.png',
    '/portfolio/dogtest/Zrzut ekranu z 2025-06-22 21-36-43.png'
  ];

  const technologies = [
    { name: 'React', icon: <FaReact className="w-8 h-8" />, color: 'text-blue-500' },
    { name: 'Next.js', icon: <SiNextdotjs className="w-8 h-8" />, color: 'text-gray-800' },
    { name: 'TypeScript', icon: <SiTypescript className="w-8 h-8" />, color: 'text-blue-600' },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="w-8 h-8" />, color: 'text-cyan-500' },
    { name: 'Node.js', icon: <FaNodeJs className="w-8 h-8" />, color: 'text-green-600' },
    { name: 'MongoDB', icon: <SiMongodb className="w-8 h-8" />, color: 'text-green-500' }
  ];

  useGSAP(() => {
    gsap.from('.fade-in', {
      opacity: 0,
      y: 30,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power2.out'
    });
  }, { scope: containerRef });

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % screenshots.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-gray-50">
      <PageHeader
        title="DogTest - Platforma Testowa dla Psów"
        description="Nowoczesna aplikacja webowa do przeprowadzania testów behawioralnych psów"
        extraContent={
          <div className="flex flex-wrap gap-4 mt-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
              <div className="text-white/90 text-sm">Kategoria</div>
              <div className="text-white font-semibold">Aplikacja Webowa</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
              <div className="text-white/90 text-sm">Technologie</div>
              <div className="text-white font-semibold">React, Next.js, TypeScript</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
              <div className="text-white/90 text-sm">Rok</div>
              <div className="text-white font-semibold">2025</div>
            </div>
          </div>
        }
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Project Overview */}
        <div className="mb-16 fade-in">
          <h2 className="text-3xl font-bold mb-6">O Projekcie</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-4">
              <p className="text-gray-600">
                DogTest to zaawansowana platforma webowa stworzona z myślą o trenerach psów, behawiorystach i właścicielach czworonogów. 
                Aplikacja umożliwia przeprowadzanie standaryzowanych testów behawioralnych, które pomagają ocenić temperament, 
                umiejętności i predyspozycje psów do różnych aktywności.
              </p>
              <p className="text-gray-600">
                Platforma oferuje intuicyjny interfejs do tworzenia testów, przeprowadzania ich w terenie oraz analizy wyników. 
                System automatycznie generuje raporty i rekomendacje, pomagając w podejmowaniu decyzji dotyczących szkolenia i rozwoju psów.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-4">Kluczowe Funkcjonalności</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span>Tworzenie i edycja testów behawioralnych</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span>Przeprowadzanie testów w terenie z urządzeń mobilnych</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span>Automatyczna analiza wyników i generowanie raportów</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span>System zarządzania profilem psa i historią testów</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span>Panel administracyjny dla trenerów i behawiorystów</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Screenshots Gallery */}
        <div className="mb-16 fade-in">
          <h2 className="text-3xl font-bold mb-8">Zrzuty Ekranu</h2>
          <div className="relative">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="relative h-96 lg:h-[500px]">
                <Image
                  src={screenshots[currentImageIndex]}
                  alt={`DogTest screenshot ${currentImageIndex + 1}`}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            
            {/* Navigation Buttons */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white transition-colors"
            >
              <FaChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white transition-colors"
            >
              <FaChevronRight className="w-6 h-6 text-gray-600" />
            </button>

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full text-sm">
              {currentImageIndex + 1} / {screenshots.length}
            </div>
          </div>

          {/* Thumbnail Navigation */}
          <div className="flex justify-center gap-2 mt-6">
            {screenshots.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  currentImageIndex === index
                    ? 'bg-blue-500 w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Technologies */}
        <div className="mb-16 fade-in">
          <h2 className="text-3xl font-bold mb-8">Użyte Technologie</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg text-center hover:-translate-y-2 transition-all"
              >
                <div className={`mx-auto mb-3 ${tech.color}`}>
                  {tech.icon}
                </div>
                <h3 className="font-semibold text-gray-800">{tech.name}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Details */}
        <div className="mb-16 fade-in">
          <h2 className="text-3xl font-bold mb-8">Szczegóły Techniczne</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-4">Frontend</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• React 18 z TypeScript dla type safety</li>
                <li>• Next.js 14 z App Router</li>
                <li>• Tailwind CSS dla responsywnego designu</li>
                <li>• React Hook Form dla formularzy</li>
                <li>• Zustand dla zarządzania stanem</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-4">Backend & Baza Danych</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Node.js z Express.js</li>
                <li>• MongoDB z Mongoose ODM</li>
                <li>• JWT dla autoryzacji</li>
                <li>• Multer dla uploadu plików</li>
                <li>• Jest dla testów jednostkowych</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Challenges & Solutions */}
        <div className="mb-16 fade-in">
          <h2 className="text-3xl font-bold mb-8">Wyzwania i Rozwiązania</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-red-600">Wyzwania</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Projektowanie intuicyjnego interfejsu dla testów w terenie</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Implementacja zaawansowanych algorytmów oceny wyników</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Optymalizacja wydajności dla urządzeń mobilnych</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-green-600">Rozwiązania</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Responsywny design z focusem na UX mobile-first</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Modułowy system oceny z możliwością konfiguracji</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Lazy loading i optymalizacja bundle size</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center fade-in">
          <h2 className="text-3xl font-bold mb-4">Interesuje Cię podobny projekt?</h2>
          <p className="text-gray-600 mb-8">
            Chętnie pomogę Ci stworzyć podobną aplikację lub rozwinąć istniejący projekt.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/kontakt"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Skontaktuj się
            </a>
            <a
              href="/portfolio"
              className="border-2 border-gray-300 text-gray-600 px-8 py-3 rounded-lg font-medium hover:border-blue-500 hover:text-blue-500 transition-colors"
            >
              Zobacz inne projekty
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 