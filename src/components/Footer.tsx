import logo from "../assets/images/logo.png";
import { Instagram, Linkedin, Mail } from "lucide-react";

// TikTok Icon Component
const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 py-8 md:py-10">
      <div className="container-custom">
        <div className="flex flex-col items-center space-y-6">
          {/* Logo */}
          <div>
            <img src={logo} alt="Logo Dinly" className="h-10 md:h-12" />
          </div>

          {/* Social Media Icons */}
          <div className="flex items-center gap-4">
            <a
              href="https://instagram.com/dinly"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-gray-600 shadow-sm transition-all hover:scale-110 hover:bg-primary hover:text-white"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="https://tiktok.com/@dinly"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-gray-600 shadow-sm transition-all hover:scale-110 hover:bg-primary hover:text-white"
              aria-label="TikTok"
            >
              <TikTokIcon />
            </a>
            <a
              href="https://linkedin.com/company/dinly"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-gray-600 shadow-sm transition-all hover:scale-110 hover:bg-primary hover:text-white"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:contato@dinly.com.br"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-gray-600 shadow-sm transition-all hover:scale-110 hover:bg-primary hover:text-white"
              aria-label="E-mail"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>

          {/* Divider */}
          <div className="h-px w-full max-w-md bg-gray-200" />

          {/* Copyright */}
          <div className="text-center">
            <p className="text-sm text-gray-600 md:text-base">
              © {currentYear} Dinly. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
