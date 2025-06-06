export interface Service {
  id: string;
  name: string;
  description: string;
  features: string[];
  price: string;
  icon: string;
  popular?: boolean;
}

export const services: Service[] = [
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
    price: '1500 - 3000 zł',
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
    price: '3000 - 6000 zł',
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
    price: 'od 9999 zł',
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
    price: 'Wycena indywidualna',
    icon: '⚡'
  }
]; 