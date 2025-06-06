'use client';

import { useState, useRef } from 'react';
import { gsap, useGSAP } from '../../utils/gsap';
import Link from 'next/link';
import { services } from '@/data/services';
import PageHeader from '@/components/PageHeader';

interface Step {
  title: string;
  description: string;
  icon: string;
}

interface FAQ {
  question: string;
  answer: string;
}

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
    <div ref={containerRef} className="min-h-screen bg-gray-50 pb-24">
      <PageHeader
        title="Usługi"
        description="Oferuję kompleksowe rozwiązania webowe dopasowane do Twoich potrzeb. Każdy projekt traktuję indywidualnie, dbając o najwyższą jakość i satysfakcję klienta."
      />

      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Pakiety usług */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-500 via-blue-400 to-white p-8 shadow-lg mb-24">
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          <div className="relative z-10">
            <h2 className="text-4xl font-bold text-center mb-8 text-white drop-shadow-md">Pakiety usług</h2>
            <p className="text-xl text-center mb-12 text-white/90">
              Wybierz pakiet najlepiej dopasowany do Twoich potrzeb
            </p>
            <div className="grid md:grid-cols-4 lg:grid-cols-4 gap-8 max-w-8xl mx-auto">
              {services.map((service) => (
                <div
                  key={service.id}
                  className="relative bg-white rounded-xl p-8 shadow-lg hover:-translate-y-2 transition-all"
                >
                  {service.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Popularne
                    </div>
                  )}
                  <div className="text-5xl mb-6">{service.icon}</div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">{service.name}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-2 text-gray-600 mb-8">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <span className="text-emerald-500">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="text-center mt-auto">
                    <div className="mb-4">
                      <p className="text-2xl font-bold text-gray-900">{service.price}</p>
                      <p className="text-sm text-gray-600 mt-1">
                        {service.id === 'strony' && 'Do kilku podstron*'}
                        {service.id === 'sklepy' && 'Podstawowa funkcjonalność*'}
                        {service.id === 'aplikacje' && 'W zależności od funkcjonalności*'}
                        {service.id === 'automatyzacja' && 'Zależna od zakresu projektu*'}
                      </p>
                    </div>
                    <Link
                      href="/kontakt"
                      className="inline-block w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-3 px-6 rounded-lg font-medium hover:shadow-lg transition-all"
                    >
                      Wybierz usługę
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-sm text-white/80 text-center mt-8">
              * Ostateczna cena może się różnić w zależności od złożoności projektu i dodatkowych wymagań.
            </p>
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