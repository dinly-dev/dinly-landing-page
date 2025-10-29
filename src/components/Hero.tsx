import logo from "../assets/images/logo.png";
import mascot from "../assets/images/mascot.png";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#1a1a2e] to-[#16213e]">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div
          className="absolute left-1/4 top-1/4 h-96 w-96 animate-pulse"
          style={{
            background:
              "radial-gradient(circle, rgba(63, 89, 255, 0.3) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 h-96 w-96 animate-pulse"
          style={{
            background:
              "radial-gradient(circle, rgba(63, 89, 255, 0.2) 0%, transparent 70%)",
            animationDelay: "1s",
          }}
        />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10">
        <div className="grid min-h-screen grid-cols-1 items-center gap-12 py-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column - Text Content */}
          <div className="flex flex-col space-y-8">
            {/* Logo */}
            <div className="text-4xl font-bold text-white">
              <img src={logo} alt="Logo Dinly" className="h-12" />
            </div>

            {/* Main Heading */}
            <h1 className="text-balance text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
              Gestão financeira inteligente que{" "}
              <span className="text-primary">liberta</span>, não prende.
            </h1>

            {/* Subtitle */}
            <p className="text-lg text-gray-300 md:text-xl">
              Automatize, simule e conquiste suas metas financeiras com IA e
              gamificação. Pouco esforço, grandes conquistas.
            </p>

            {/* Offer Card */}
            <div className="rounded-2xl border-2 border-primary/30 bg-gradient-to-br from-primary-darker/40 to-primary-dark/20 p-6 shadow-primary-lg backdrop-blur-sm">
              <div className="mb-4 flex items-center gap-2">
                <span className="text-2xl">🎁</span>
                <h3 className="text-xl font-bold text-primary-light">
                  OFERTA EXCLUSIVA NO GO!RN
                </h3>
              </div>

              <p className="mb-4 text-base font-semibold text-white">
                Apenas os 20 primeiros ganham:
              </p>

              <ul className="mb-6 space-y-2 text-gray-200">
                <li className="flex items-start gap-2">
                  <span>✨</span>
                  <span>Acesso PREMIUM vitalício</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>🎨</span>
                  <span>Botton customizado do Dinly</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>🚀</span>
                  <span>Participe dos testes beta</span>
                </li>
              </ul>

              {/* Form */}
              <form className="flex flex-col gap-3 sm:flex-row">
                <input
                  type="email"
                  placeholder="Seu melhor e-mail"
                  className="flex-1 rounded-lg border border-primary/50 bg-white/10 px-4 py-3 text-white placeholder:text-gray-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50 backdrop-blur-sm"
                  required
                />
                <button
                  type="submit"
                  className="whitespace-nowrap rounded-lg bg-primary px-6 py-3 font-semibold text-white shadow-primary transition-all hover:bg-primary-light hover:shadow-primary-lg active:scale-95"
                >
                  Quero garantir meu acesso
                </button>
              </form>
            </div>
          </div>

          {/* Right Column - Mascot Image */}
          <div className="flex items-center justify-center lg:justify-end">
            <div className="relative h-[400px] w-[400px] md:h-[500px] md:w-[500px] lg:h-[600px] lg:w-[600px]">
              {/* Placeholder for mascot - will be replaced with actual image */}
              <div className="flex h-full w-full items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-primary-dark/20 backdrop-blur-sm">
                <img
                  src={mascot}
                  alt="Mascote do Dinly"
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Glow effect around mascot */}
              <div className="absolute inset-0 -z-10 animate-pulse rounded-full bg-primary/30 blur-3xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
