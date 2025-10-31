import { motion } from "motion/react";
import mascot from "../assets/images/mascot.png";

export default function Forms() {
  return (
    <section className="relative overflow-hidden bg-white py-12 md:py-16 lg:py-20">
      {/* Background abstract shapes */}
      <div className="absolute inset-0">
        {/* Large circle top-left */}
        <div
          className="absolute -left-32 -top-20 h-96 w-96 rounded-full bg-primary/10"
          style={{ filter: "blur(80px)" }}
        />

        {/* Medium circle middle-right */}
        <div
          className="absolute right-1/4 top-1/2 h-80 w-80 rounded-full bg-primary-light/15"
          style={{ filter: "blur(70px)" }}
        />

        {/* Small circle bottom-left */}
        <div
          className="absolute -bottom-20 left-1/4 h-72 w-72 rounded-full bg-primary-lighter/20"
          style={{ filter: "blur(60px)" }}
        />

        {/* Large ellipse bottom-right */}
        <div
          className="absolute -bottom-20 right-1/3 h-80 w-[500px] rounded-full bg-primary/8"
          style={{ filter: "blur(90px)", transform: "rotate(-45deg)" }}
        />

        {/* Decorative geometric shapes */}
        <div
          className="absolute left-1/3 top-1/3 h-64 w-64 bg-secondary/12"
          style={{
            borderRadius: "40% 60% 60% 40% / 40% 40% 60% 60%",
            filter: "blur(50px)",
          }}
        />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10">
        <motion.div
          className="mx-auto max-w-5xl overflow-hidden rounded-3xl border-2 border-primary bg-white/90 shadow-2xl backdrop-blur-sm"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid grid-cols-1 items-center gap-8 p-6 md:p-10 lg:grid-cols-2 lg:gap-12 lg:p-12">
            {/* Left Column - Mascot (Hidden on mobile, visible on desktop) */}
            <div className="hidden lg:flex lg:items-center lg:justify-center">
              <motion.div
                className="relative h-[280px] w-[280px] xl:h-[320px] xl:w-[320px]"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                animate={{
                  y: [0, -20, 0],
                }}
                style={{
                  animation: "float 4s ease-in-out infinite",
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
                    alt="Mascote Dinly promovendo organização de finanças pessoais com gamificação"
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

            {/* Right Column - CTA Content */}
            <div className="flex flex-col items-center space-y-5 text-center lg:items-start lg:text-left">
              {/* Main CTA Heading - H2 Otimizado */}
              <motion.h2
                className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl md:text-5xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Comece sua{" "}
                <span className="text-primary">transformação financeira</span>{" "}
                hoje
              </motion.h2>

              {/* Subtitle - Copy otimizada */}
              <motion.p
                className="text-sm text-gray-600 sm:text-base md:text-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Cadastre seu e-mail para entrar na lista de acesso antecipado ao
                aplicativo. Vagas limitadas!
              </motion.p>

              {/* Form */}
              <motion.form
                className="flex w-full flex-col gap-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <motion.input
                  type="email"
                  placeholder="Digite seu melhor e-mail"
                  className="w-full rounded-xl border-2 border-gray-300 bg-white px-5 py-4 text-sm text-gray-900 placeholder:text-gray-500 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50 sm:text-base"
                  required
                  whileFocus={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                />
                <motion.button
                  type="submit"
                  className="w-full rounded-xl bg-gradient-to-r from-primary to-primary-dark px-6 py-4 text-sm font-bold text-white shadow-lg sm:text-base"
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 20px 40px rgba(139, 92, 246, 0.3)",
                  }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                  Garantir Meu Acesso Antecipado
                </motion.button>
              </motion.form>

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
                <span>Seus dados estão 100% seguros. Sem spam, prometido!</span>
              </motion.div>

              {/* Mobile Mascot - Visible only on mobile */}
              <div className="mt-6 flex w-full justify-center lg:hidden">
                <motion.div
                  className="relative h-[200px] w-[200px] sm:h-[240px] sm:w-[240px]"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  animate={{
                    y: [0, -15, 0],
                  }}
                  style={{
                    animation: "float 4s ease-in-out infinite",
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
        </motion.div>
      </div>
    </section>
  );
}
