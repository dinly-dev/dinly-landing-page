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
      <div className="container-custom relative z-10 flex min-h-screen items-center py-8">
        <div className="grid w-full grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left Column - Text Content */}
          <div className="flex flex-col items-center space-y-5 text-center lg:items-start lg:text-left">
            {/* Logo */}
            <div>
              <img src={logo} alt="Logo Dinly" className="h-14 md:h-16" />
            </div>

            {/* Main Heading */}
            <h1 className="text-balance text-2xl font-bold leading-tight text-gray-900 sm:text-3xl md:text-4xl lg:text-5xl">
              Disciplina é <span className="text-primary">liberdade</span>.{" "}
              Organização é <span className="text-primary">poder</span>.
            </h1>

            {/* Subtitle */}
            {/* Subtitle */}
            <p className="max-w-xl text-sm text-gray-600 sm:text-base md:text-lg lg:max-w-2xl">
              Automatize suas finanças com <strong>IA</strong>, transforme metas
              em conquistas através de <strong>gamificação</strong> e receba
              insights inteligentes. Pouco esforço, grandes conquistas.
            </p>

            {/* Alert Badge - Pulsing */}
            <motion.div
              className="w-full max-w-md rounded-full bg-gradient-to-r from-[#ff416c] to-[#ff4b2b] px-4 py-2.5 sm:px-6 sm:py-3 lg:max-w-xl"
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <p className="text-center text-xs font-semibold text-white sm:text-sm md:text-base">
                🎁 Apenas os 20 primeiros ganham o Botton exclusivo do Dinly!
              </p>
            </motion.div>

            {/* Form Card */}
            <motion.div
              className="w-full max-w-md rounded-2xl border-2 border-primary bg-white/80 p-5 shadow-lg sm:p-6 lg:max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="mb-4 text-center text-base font-bold text-gray-900 sm:text-lg md:text-xl">
                Seja um dos primeiros a testar o Dinly
              </h3>

              {/* Form */}
              <form className="flex flex-col gap-3">
                <motion.input
                  type="email"
                  placeholder="Seu melhor e-mail"
                  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-500 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50 sm:text-base"
                  required
                  whileFocus={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                />
                <motion.button
                  type="submit"
                  className="w-full rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white sm:text-base"
                  whileHover={{
                    scale: 1.02,
                  }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                  Quero obter meu acesso antecipado
                </motion.button>
              </form>
            </motion.div>
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
