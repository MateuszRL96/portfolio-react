'use client';

import { useState, useRef } from 'react';
import { gsap, useGSAP } from '../../../utils/gsap';
import Image from 'next/image';
import { FaChevronLeft, FaChevronRight, FaExternalLinkAlt, FaGithub, FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiMongodb } from 'react-icons/si';
import PageHeader from '@/components/PageHeader';

export default function KursProgramowaniaProject() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const containerRef = useRef(null);

  const screenshots = [
    '/portfolio/kursprogramowania/Zrzut ekranu z 2025-06-22 15-06-45.png',
    '/portfolio/kursprogramowania/Zrzut ekranu z 2025-06-22 15-06-23.png'
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
        title="Kurs Programowania Online"
        description="Interaktywna platforma edukacyjna do nauki programowania"
        extraContent={
          <div className="flex flex-wrap gap-4 mt-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
              <div className="text-white/90 text-sm">Kategoria</div>
              <div className="text-white font-semibold">Platforma Edukacyjna</div>
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
                Kurs Programowania Online to nowoczesna platforma edukacyjna stworzona z myślą o osobach chcących nauczyć się programowania 
                od podstaw. Platforma oferuje interaktywne kursy z różnych języków programowania, ćwiczenia praktyczne, 
                system śledzenia postępów i społeczność uczących się.
              </p>
              <p className="text-gray-600">
                Aplikacja łączy w sobie najlepsze praktyki e-learningu z nowoczesnymi technologiami webowymi. 
                Użytkownicy mogą uczyć się we własnym tempie, rozwiązywać zadania praktyczne, uczestniczyć w projektach 
                i otrzymywać certyfikaty po ukończeniu kursów.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-4">Kluczowe Funkcjonalności</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span>Interaktywne kursy z różnych języków programowania</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span>Ćwiczenia praktyczne z automatyczną weryfikacją</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span>System śledzenia postępów i osiągnięć</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span>Projekty praktyczne i portfolio</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span>Certyfikaty po ukończeniu kursów</span>
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
                  alt={`Kurs Programowania screenshot ${currentImageIndex + 1}`}
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

        {/* Course Features */}
        <div className="mb-16 fade-in">
          <h2 className="text-3xl font-bold mb-8">Funkcjonalności Kursów</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">📚</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Strukturyzowane Kursy</h3>
              <p className="text-gray-600">Lekcje podzielone na moduły z rosnącym poziomem trudności</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">💻</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Interaktywny Edytor</h3>
              <p className="text-gray-600">Wbudowany edytor kodu z podświetlaniem składni</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">✅</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Automatyczna Weryfikacja</h3>
              <p className="text-gray-600">Sprawdzanie poprawności kodu w czasie rzeczywistym</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Śledzenie Postępów</h3>
              <p className="text-gray-600">Szczegółowe statystyki i osiągnięcia</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🏆</span>
              </div>
              <h3 className="text-xl font-bold mb-2">System Osiągnięć</h3>
              <p className="text-gray-600">Odznaki i certyfikaty za ukończone kursy</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">👥</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Społeczność</h3>
              <p className="text-gray-600">Forum dyskusyjne i współpraca między uczniami</p>
            </div>
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
                <li>• Monaco Editor dla edytora kodu</li>
                <li>• React Query dla zarządzania stanem</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-4">Backend & Baza Danych</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Node.js z Express.js</li>
                <li>• MongoDB z Mongoose ODM</li>
                <li>• JWT dla autoryzacji</li>
                <li>• Docker dla konteneryzacji</li>
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
                  <span>Implementacja bezpiecznego wykonania kodu użytkowników</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Projektowanie intuicyjnego interfejsu dla początkujących</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Skalowanie platformy dla wielu użytkowników</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-green-600">Rozwiązania</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Sandboxed execution environment z Docker</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Progresywny disclosure i wizualne wskazówki</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Mikrousługowa architektura z load balancing</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center fade-in">
          <h2 className="text-3xl font-bold mb-4">Interesuje Cię podobny projekt?</h2>
          <p className="text-gray-600 mb-8">
            Chętnie pomogę Ci stworzyć podobną platformę edukacyjną lub rozwinąć istniejący system e-learningu.
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