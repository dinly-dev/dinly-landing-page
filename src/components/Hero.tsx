import { motion } from "motion/react";
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
      <div className="container-custom relative z-10 h-screen">
        <div className="grid h-full grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left Column - Text Content */}
          <div className="flex flex-col space-y-6">
            {/* Logo */}
            <div className="mb-2">
              <img src={logo} alt="Logo Dinly" className="h-20" />
            </div>

            {/* Main Heading */}
            <h1 className="text-balance text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">
              Gestão financeira inteligente que{" "}
              <span className="text-primary">liberta</span>, não prende.
            </h1>

            {/* Subtitle */}
            <p className="text-base text-gray-300 md:text-lg">
              Automatize, simule e conquiste suas metas financeiras com IA e
              gamificação. Pouco esforço, grandes conquistas.
            </p>

            {/* Alert Badge - Pulsing */}
            <motion.div
              className="inline-block rounded-full bg-gradient-to-r from-[#ff416c] to-[#ff4b2b] px-6 py-3"
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <p className="text-center text-sm font-semibold text-white md:text-base">
                Apenas os 20 primeiros ganham o Botton customizado Dinly!
              </p>
            </motion.div>

            {/* Form Card */}
            <motion.div
              className="rounded-2xl border-2 border-primary bg-gradient-to-br from-primary-darker/40 to-primary-dark/20 p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="mb-4 text-center text-lg font-bold text-white md:text-xl">
                Garanta seu acesso antecipado
              </h3>

              {/* Form */}
              <form className="flex flex-col gap-3">
                <motion.input
                  type="email"
                  placeholder="Seu melhor e-mail"
                  className="w-full rounded-lg border border-primary/50 bg-white/10 px-4 py-3 text-white placeholder:text-gray-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50"
                  required
                  whileFocus={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                />
                <motion.button
                  type="submit"
                  className="w-full rounded-lg bg-primary px-6 py-3 font-semibold text-white"
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

          {/* Right Column - Mascot Image */}
          <div className="flex items-center justify-center lg:justify-end">
            <motion.div
              className="relative h-[300px] w-[300px] md:h-[400px] md:w-[400px] lg:h-[500px] lg:w-[500px]"
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
