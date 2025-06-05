import Link from 'next/link';
import { FaGithub, FaLinkedin, FaWhatsapp, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center">
          {/* Social Media Links */}
          <div className="flex space-x-8 mb-8">
            <a
              href="https://github.com/mateuszrl96"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <FaGithub className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/mateusz-kulec-027a63227/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-6 h-6" />
            </a>
            <a
              href="https://wa.me/533828726"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="WhatsApp"
            >
              <FaWhatsapp className="w-6 h-6" />
            </a>
            <a
              href="https://instagram.com/dxb4x4i5z3r"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <FaInstagram className="w-6 h-6" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center text-gray-400">
            <p className="mb-2">© 2025 Mateusz Kulec. Wszystkie prawa zastrzeżone.</p>
            <p className="flex items-center justify-center">
              Tworzę z pasją w Polsce <span className="ml-2">🇵🇱</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
} 