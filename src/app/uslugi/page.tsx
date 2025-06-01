'use client';

import { useState, useRef } from 'react';
import { gsap, useGSAP } from '../../utils/gsap';
import Link from 'next/link';

interface Service {
  id: string;
  name: string;
  description: string;
  features: string[];
  price: string;
  popular?: boolean;
  icon: string;
}

interface Step {
  title: string;
  description: string;
  icon: string;
}

interface FAQ {
  question: string;
  answer: string;
}

const services: Service[] = [
  {
    id: 'strony',
    name: 'Strony WWW',
    description: 'Nowoczesne i responsywne strony internetowe dla Twojego biznesu.',
    features: [
      'Responsywny design',
      'Optymalizacja SEO',
      'Szybkie ładowanie',
      'Panel administracyjny',
      'Integracja z social media',
      '3 miesiące wsparcia'
    ],
    price: 'od 3000 zł',
    icon: '🌐'
  },
  {
    id: 'sklepy',
    name: 'Sklepy Online',
    description: 'Kompleksowe rozwiązania e-commerce z systemami płatności.',
    features: [
      'System płatności online',
      'Zarządzanie produktami',
      'Koszyk i checkout',
      'Panel administracyjny',
      'Integracja z kurierami',
      '6 miesięcy wsparcia'
    ],
    price: 'od 6000 zł',
    popular: true,
    icon: '🛍️'
  },
  {
    id: 'aplikacje',
    name: 'Aplikacje Web',
    description: 'Zaawansowane aplikacje webowe dostosowane do Twoich potrzeb.',
    features: [
      'Architektura SPA/PWA',
      'Backend API',
      'Baza danych',
      'Autentykacja',
      'Hosting w chmurze',
      '12 miesięcy wsparcia'
    ],
    price: 'od 10000 zł',
    icon: '💻'
  },
  {
    id: 'automatyzacja',
    name: 'Automatyzacja',
    description: 'Automatyzacja procesów biznesowych i integracja systemów.',
    features: [
      'Integracja API',
      'Skrypty automatyzujące',
      'Migracja danych',
      'Optymalizacja procesów',
      'Monitoring i raporty',
      'Wsparcie techniczne'
    ],
    price: 'od 4000 zł',
    icon: '⚡'
  }
];

const steps: Step[] = [
  {
    title: 'Konsultacja',
    description: 'Omawiamy Twoje potrzeby i cele projektu podczas bezpłatnej konsultacji online.',
    icon: '💬'
  },
  {
    title: 'Wycena',
    description: 'Przygotowuję szczegółową wycenę i harmonogram prac.',
    icon: '📊'
  },
  {
    title: 'Design',
    description: 'Tworzę projekty interfejsu i prototypy do akceptacji.',
    icon: '🎨'
  },
  {
    title: 'Rozwój',
    description: 'Implementuję funkcjonalności i testuję działanie.',
    icon: '💻'
  },
  {
    title: 'Testy',
    description: 'Przeprowadzam testy i wprowadzam poprawki.',
    icon: '🔍'
  },
  {
    title: 'Wdrożenie',
    description: 'Publikuję projekt i zapewniam wsparcie techniczne.',
    icon: '🚀'
  }
];

const faqs: FAQ[] = [
  {
    question: 'Jaki jest czas realizacji projektu?',
    answer: 'Czas realizacji zależy od złożoności projektu. Zazwyczaj prosty projekt trwa 2-4 tygodnie, a bardziej złożony 1-3 miesiące.'
  },
  {
    question: 'Jakie są metody płatności?',
    answer: 'Akceptuję płatności przelewem bankowym. Zazwyczaj ustalam płatność w ratach: zaliczka na start i pozostała kwota po zakończeniu projektu.'
  },
  {
    question: 'Czy oferujesz wsparcie po zakończeniu projektu?',
    answer: 'Tak, każdy pakiet zawiera okres wsparcia technicznego. Po jego zakończeniu możemy ustalić stałą współpracę w ramach maintenance.'
  },
  {
    question: 'Czy mogę wprowadzać zmiany w trakcie realizacji?',
    answer: 'Tak, jestem elastyczny i otwarty na zmiany. Większe modyfikacje mogą wpłynąć na termin realizacji i koszt projektu.'
  },
  {
    question: 'Jakie technologie wykorzystujesz?',
    answer: 'Korzystam z nowoczesnych technologii jak React, Next.js, Node.js, TypeScript. Stack technologiczny dobieram do potrzeb projektu.'
  }
];

export default function Services() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
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

    // Animacje kroków
    gsap.from('.step-item', {
      opacity: 0,
      x: -30,
      duration: 0.5,
      stagger: 0.1,
      scrollTrigger: {
        trigger: '.steps-section',
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
            <h1 className="text-4xl font-bold mb-6 fade-in text-white drop-shadow-md">Usługi</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto fade-in">
              Oferuję kompleksowe rozwiązania webowe dostosowane do potrzeb Twojego biznesu.
              Każdy projekt traktuję indywidualnie, dbając o najwyższą jakość i satysfakcję klienta.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Pakiety usług */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-500 via-blue-400 to-white p-8 shadow-lg mb-24">
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          <div className="relative z-10">
            <h2 className="text-4xl font-bold text-center mb-8 text-white drop-shadow-md">Pakiety usług</h2>
            <p className="text-xl text-center mb-12 text-white/90">
              Wybierz pakiet najlepiej dopasowany do Twoich potrzeb
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {services.map((service) => (
                <div
                  key={service.name}
                  className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 relative overflow-hidden"
                >
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Service icon with animated background */}
                  <div className="relative z-10 mb-6">
                    <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-3xl transform group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white">{service.icon}</span>
                    </div>
                  </div>

                  {/* Service content */}
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-gray-600 mb-6 text-lg">
                      {service.description}
                    </p>
                    
                    {/* Features with animated checkmarks */}
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-gray-700 group-hover:text-gray-900 transition-colors">
                          <span className="w-5 h-5 mr-3 rounded-full bg-blue-100 flex items-center justify-center group-hover:bg-blue-500 transition-colors">
                            <span className="text-blue-500 text-sm group-hover:text-white">✓</span>
                          </span>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* Price and CTA */}
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-6">
                        <span className="text-3xl font-bold text-blue-600">
                          {service.price}
                        </span>
                        {service.popular && (
                          <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm">
                            Popularne
                          </span>
                        )}
                      </div>
                      <button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 px-6 rounded-lg font-medium 
                        hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 
                        relative overflow-hidden group">
                        <span className="relative z-10">Wybierz usługę</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Proces współpracy */}
        <div className="mb-24 steps-section">
          <h2 className="text-3xl font-bold text-center mb-16 fade-in">
            Jak wygląda współpraca?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="step-item text-center">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center text-2xl mx-auto mb-6">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 fade-in">
            Często zadawane pytania
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-sm overflow-hidden fade-in"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between font-medium hover:bg-gray-50 transition-colors"
                >
                  {faq.question}
                  <span className={`transform transition-transform ${
                    expandedFaq === index ? 'rotate-180' : ''
                  }`}>
                    ▼
                  </span>
                </button>
                {expandedFaq === index && (
                  <div className="px-6 py-4 text-gray-600 border-t">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-24 text-center fade-in">
          <h2 className="text-3xl font-bold mb-8">
            Gotowy na rozpoczęcie projektu?
          </h2>
          <Link
            href="/kontakt"
            className="inline-block bg-gradient-to-r from-indigo-500 to-cyan-500 text-white px-8 py-3 rounded-lg font-medium hover:shadow-lg transform hover:-translate-y-1 transition-all"
          >
            Umów bezpłatną konsultację
          </Link>
        </div>
      </div>
    </div>
  );
} 