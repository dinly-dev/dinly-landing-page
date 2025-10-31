import { motion } from "motion/react";
import logo from "../assets/images/logo.png";
import mascot from "../assets/images/mascot.png";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-white">
      {/* Background abstract shapes */}
      <div className="absolute inset-0">
        {/* Large circle top-left */}
        <div
          className="absolute -left-20 -top-20 h-80 w-80 rounded-full bg-primary/10"
          style={{ filter: "blur(60px)" }}
        />

        {/* Medium circle top-right */}
        <div
          className="absolute -right-32 top-1/4 h-96 w-96 rounded-full bg-primary-light/15"
          style={{ filter: "blur(80px)" }}
        />

        {/* Small circle middle-left */}
        <div
          className="absolute left-1/4 top-1/2 h-64 w-64 rounded-full bg-primary-lighter/20"
          style={{ filter: "blur(50px)" }}
        />

        {/* Large ellipse bottom-right */}
        <div
          className="absolute -bottom-40 -right-20 h-96 w-[600px] rounded-full bg-primary/8"
          style={{ filter: "blur(90px)", transform: "rotate(-45deg)" }}
        />

        {/* Medium circle bottom-left */}
        <div
          className="absolute bottom-1/4 left-1/3 h-72 w-72 rounded-full bg-secondary/12"
          style={{ filter: "blur(70px)" }}
        />

        {/* Decorative geometric shapes */}
        <div
          className="absolute right-1/4 top-1/3 h-40 w-40 bg-primary/5"
          style={{
            borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
            filter: "blur(40px)",
          }}
        />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 flex min-h-screen items-center py-8 md:py-12">
        <div className="grid w-full grid-cols-1 items-center gap-6 lg:grid-cols-2 lg:gap-10">
          {/* Left Column - Text Content */}
          <div className="flex flex-col items-center space-y-4 text-center lg:items-start lg:text-left">
            {/* Logo */}
            <div>
              <img
                src={logo}
                alt="Dinly - Aplicativo de Finanças Pessoais com IA e Gamificação"
                className="h-14 md:h-20"
              />
            </div>

            {/* Main Heading - H1 Otimizado para SEO */}
            <h1 className="text-balance text-2xl font-bold leading-tight text-gray-900 sm:text-3xl md:text-4xl lg:text-5xl">
              Aplicativo de{" "}
              <span className="text-primary">Finanças Pessoais</span> com IA
            </h1>

            {/* Subtitle - Copy otimizada com palavras-chave */}
            <p className="max-w-xl text-sm text-gray-600 sm:text-base md:text-lg lg:max-w-2xl">
              Automatize suas finanças com <strong>IA</strong>, transforme metas
              em conquistas através de <strong>gamificação</strong> e receba
              insights inteligentes. Pouco esforço, grandes conquistas.
            </p>

            {/* Form Card */}
            <motion.div
              className="w-full max-w-md rounded-2xl border-2 border-primary bg-white/80 p-4 shadow-lg sm:p-5 lg:max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="mb-3 text-center text-base font-bold text-gray-900 sm:text-lg">
                Seja um dos primeiros a testar o Dinly
              </h3>

              {/* Form */}
              <form className="flex flex-col gap-2.5">
                <motion.input
                  type="email"
                  placeholder="Seu melhor e-mail"
                  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-900 placeholder:text-gray-500 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50 sm:text-base"
                  required
                  whileFocus={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                />
                <motion.button
                  type="submit"
                  className="w-full rounded-xl bg-gradient-to-r from-primary to-primary-dark px-6 py-3 text-sm font-bold text-white shadow-lg sm:text-base"
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 20px 40px rgba(139, 92, 246, 0.3)",
                  }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                  Garantir Meu Acesso Antecipado
                </motion.button>

                {/* Trust Badge */}
                <motion.div
                  className="flex items-center gap-2 text-xs text-gray-500 sm:text-sm"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <svg
                    className="h-5 w-5 text-primary"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>
                    Seus dados estão 100% seguros. Sem spam, prometido!
                  </span>
                </motion.div>
              </form>
            </motion.div>

            {/* Mobile Mascot - Visible only on mobile */}
            <div className="flex w-full justify-center lg:hidden">
              <motion.div
                className="relative mt-6 h-[240px] w-[240px] sm:h-[280px] sm:w-[280px]"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: [0, -15, 0],
                }}
                transition={{
                  opacity: { duration: 1, ease: "easeOut" },
                  scale: { duration: 1, ease: "easeOut" },
                  y: {
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    repeatType: "loop",
                  },
                }}
              >
                {/* Mascot */}
                <motion.div
                  className="flex h-full w-full items-center justify-center rounded-full backdrop-blur-sm"
                  animate={{
                    scale: [1, 1.05, 1],
                    rotate: [-3, 3, -3],
                  }}
                  transition={{
                    scale: {
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      repeatType: "loop",
                    },
                    rotate: {
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      repeatType: "loop",
                    },
                  }}
                >
                  <img
                    src={mascot}
                    alt="Mascote Dinly - App de controle financeiro automático com inteligência artificial"
                    className="h-full w-full object-cover"
                  />
                </motion.div>

                {/* Glow effect around mascot */}
                <motion.div
                  className="absolute inset-0 -z-10 rounded-full bg-primary/30 blur-3xl"
                  animate={{
                    opacity: [0.4, 0.7, 0.4],
                    scale: [1, 1.15, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    repeatType: "loop",
                  }}
                />
              </motion.div>
            </div>
          </div>

          {/* Right Column - Mascot Image - Hidden on mobile */}
          <div className="hidden lg:flex lg:items-center lg:justify-end">
            <motion.div
              className="relative h-[400px] w-[400px] xl:h-[500px] xl:w-[500px]"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: 1,
                scale: 1,
                y: [0, -25, 0],
              }}
              transition={{
                opacity: { duration: 1, ease: "easeOut" },
                scale: { duration: 1, ease: "easeOut" },
                y: {
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  repeatType: "loop",
                },
              }}
            >
              {/* Mascot */}
              <motion.div
                className="flex h-full w-full items-center justify-center rounded-full from-primary/20 to-primary-dark/20 backdrop-blur-sm"
                animate={{
                  scale: [1, 1.05, 1],
                  rotate: [-3, 3, -3],
                }}
                transition={{
                  scale: {
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    repeatType: "loop",
                  },
                  rotate: {
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    repeatType: "loop",
                  },
                }}
              >
                <img
                  src={mascot}
                  alt="Mascote do Dinly"
                  className="h-full w-full object-cover"
                />
              </motion.div>

              {/* Glow effect around mascot */}
              <motion.div
                className="absolute inset-0 -z-10 rounded-full bg-primary/30 blur-3xl"
                animate={{
                  opacity: [0.4, 0.7, 0.4],
                  scale: [1, 1.15, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  repeatType: "loop",
                }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
