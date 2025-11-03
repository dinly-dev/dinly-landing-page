import logo from "../assets/images/logo.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 py-8 md:py-10">
      <div className="container-custom">
        <div className="flex flex-col items-center space-y-6">
          {/* Logo */}
          <div>
            <img
              src={logo}
              alt="Dinly - Aplicativo de Gestão Financeira Pessoal"
              className="h-12 md:h-16"
            />
          </div>

          {/* Divider */}
          <div className="h-px w-full bg-gray-200" />

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
