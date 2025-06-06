'use client';

import { useState, useRef } from 'react';
import { gsap, useGSAP } from '../../utils/gsap';
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaArrowRight,
  FaCheck,
  FaTimes,
  FaCalendarAlt,
  FaComments
} from 'react-icons/fa';
import PageHeader from '@/components/PageHeader';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  service: string;
  budget: string;
  timeline: string;
  message: string;
  privacy: boolean;
  newsletter: boolean;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    budget: '',
    timeline: '',
    message: '',
    privacy: false,
    newsletter: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const containerRef = useRef(null);

  useGSAP(() => {
    // Ensure elements are visible by default
    gsap.set('.fade-in, .contact-item', { opacity: 1 });

    // Animacje wejściowe
    gsap.from('.fade-in', {
      opacity: 0,
      y: 30,
      duration: 0.5,
      stagger: 0.1,
      ease: 'power2.out',
      clearProps: 'all' // Czyści właściwości po animacji
    });

    // Animacja dla contact items
    gsap.from('.contact-item', {
      opacity: 0,
      y: 50,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power2.out',
      clearProps: 'all' // Czyści właściwości po animacji
    });

    // Animacja dla formularza
    gsap.from('.contact-form', {
      opacity: 0,
      x: 50,
      duration: 0.8,
      ease: 'power2.out',
      clearProps: 'all' // Czyści właściwości po animacji
    });
  }, { scope: containerRef });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Wystąpił błąd podczas wysyłania wiadomości');
      }

      setSubmitStatus('success');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        service: '',
        budget: '',
        timeline: '',
        message: '',
        privacy: false,
        newsletter: false
      });
    } catch (error) {
      console.error('Błąd:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: checked }));
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-gray-50 pb-24">
      <PageHeader
        title="Skontaktuj się ze mną"
        description="Porozmawiajmy o Twoim projekcie i wspólnie stwórzmy coś wyjątkowego"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 fade-in">
            Jestem tutaj, żeby Ci pomóc
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto fade-in">
            Szukasz partnera do realizacji swojego projektu webowego? Świetnie trafiłeś! 
            Jestem gotowy, żeby wysłuchać Twoich potrzeb i zaproponować najlepsze rozwiązanie.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="contact-item bg-white rounded-xl p-6 shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <FaEnvelope className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Email</h3>
                  <a 
                    href="mailto:mateusz.kulec@gmail.com"
                    className="text-blue-600 hover:text-blue-700 transition-colors mb-1 block"
                  >
                    mateusz.kulec@gmail.com
                  </a>
                  <p className="text-sm text-gray-500">Odpowiadam w ciągu 24 godzin</p>
                  <p className="text-sm text-gray-500">Najszybszy sposób kontaktu</p>
                </div>
              </div>
            </div>

            <div className="contact-item bg-white rounded-xl p-6 shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <FaPhone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Telefon</h3>
                  <a 
                    href="tel:+48533828726"
                    className="text-blue-600 hover:text-blue-700 transition-colors mb-1 block"
                  >
                    +48 533 828 726
                  </a>
                  <p className="text-sm text-gray-500">Poniedziałek - Piątek: 9:00 - 18:00</p>
                  <p className="text-sm text-gray-500">Sobota: 10:00 - 14:00</p>
                </div>
              </div>
            </div>

            <div className="contact-item bg-white rounded-xl p-6 shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <FaMapMarkerAlt className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Lokalizacja</h3>
                  <a 
                    href="https://www.google.com/maps/place/Kraków"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 transition-colors mb-1 block"
                  >
                    Kraków, Małopolska
                  </a>
                  <p className="text-sm text-gray-500">Spotkania online lub stacjonarne</p>
                  <p className="text-sm text-gray-500">Obsługuję klientów z całej Polski</p>
                </div>
              </div>
            </div>

            <div className="contact-item bg-white rounded-xl p-6 shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <FaLinkedin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">LinkedIn</h3>
                  <p className="text-gray-600 mb-1">Profesjonalny profil</p>
                  <p className="text-sm text-gray-500">Połączmy się zawodowo</p>
                  <a 
                    href="https://www.linkedin.com/in/mateusz-kulec-027a63227/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-600 transition-colors mt-2 inline-block"
                  >
                    Zobacz profil
                  </a>
                </div>
              </div>
            </div>

            {/* Alternative Contact Methods */}
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="bg-white rounded-xl p-6 shadow-lg hover:-translate-y-1 transition-all duration-300 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaComments className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold mb-2">Szybka rozmowa</h3>
                <p className="text-sm text-gray-600 mb-4">Potrzebujesz szybkiej odpowiedzi?</p>
                <a
                  href="tel:+48533828726"
                  className="inline-flex items-center justify-center px-4 py-2 bg-blue-100 text-blue-600 rounded-full hover:bg-blue-200 transition-colors text-sm font-medium"
                >
                  Zadzwoń teraz
                </a>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg hover:-translate-y-1 transition-all duration-300 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaCalendarAlt className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold mb-2">Umów spotkanie</h3>
                <p className="text-sm text-gray-600 mb-4">Zaplanuj konsultację online</p>
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-4 py-2 bg-blue-100 text-blue-600 rounded-full hover:bg-blue-200 transition-colors text-sm font-medium"
                >
                  Wybierz termin
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-2">Napisz do mnie</h3>
            <p className="text-gray-600 mb-8">Wypełnij formularz, a odpowiem najszybciej jak to możliwe</p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                    Imię *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                    Nazwisko *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                    Typ usługi
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Wybierz usługę</option>
                    <option value="website">Strona internetowa</option>
                    <option value="ecommerce">Sklep internetowy</option>
                    <option value="webapp">Aplikacja webowa</option>
                    <option value="maintenance">Utrzymanie/Aktualizacje</option>
                    <option value="consultation">Konsultacje</option>
                    <option value="other">Inne</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-1">
                    Budżet projektu
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Wybierz przedział</option>
                    <option value="2500-5000">2500 - 5000 zł</option>
                    <option value="5000-10000">5000 - 10000 zł</option>
                    <option value="10000-20000">10000 - 20000 zł</option>
                    <option value="20000+">Powyżej 20000 zł</option>
                    <option value="consultation">Do ustalenia</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-1">
                  Preferowany termin realizacji
                </label>
                <select
                  id="timeline"
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Wybierz termin</option>
                  <option value="asap">Jak najszybciej</option>
                  <option value="1month">Do 1 miesiąca</option>
                  <option value="3months">Do 3 miesięcy</option>
                  <option value="flexible">Elastyczny termin</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Szczegóły projektu *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  placeholder="Opisz szczegółowo swój projekt: cele, wymagania, oczekiwania, inspiracje, funkcjonalności..."
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="space-y-4">
                <label className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    name="privacy"
                    checked={formData.privacy}
                    onChange={handleCheckboxChange}
                    required
                    className="mt-1"
                  />
                  <span className="text-sm text-gray-600">
                    Zgadzam się na przetwarzanie moich danych osobowych zgodnie z{' '}
                    <a href="#" className="text-blue-500 hover:text-blue-600">
                      polityką prywatności
                    </a>{' '}
                    *
                  </span>
                </label>

                <label className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    name="newsletter"
                    checked={formData.newsletter}
                    onChange={handleCheckboxChange}
                    className="mt-1"
                  />
                  <span className="text-sm text-gray-600">
                    Chcę otrzymywać newsletter z poradnikami, aktualnościami i ofertami specjalnymi
                  </span>
                </label>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-6 py-3 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition-colors flex items-center justify-center gap-2 ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Wysyłanie...
                  </>
                ) : (
                  <>
                    Wyślij wiadomość
                    <FaArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>

              {submitStatus === 'success' && (
                <div className="bg-green-50 text-green-600 p-4 rounded-lg flex items-center gap-2">
                  <FaCheck className="w-5 h-5" />
                  <span>Dziękuję za wiadomość! Odpowiem w ciągu 24 godzin.</span>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="bg-red-50 text-red-600 p-4 rounded-lg flex items-center gap-2">
                  <FaTimes className="w-5 h-5" />
                  <span>Wystąpił błąd. Spróbuj ponownie lub skontaktuj się bezpośrednio.</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
} 