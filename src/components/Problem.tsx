import { motion } from "motion/react";
import { ClipboardList, Zap, TrendingDown } from "lucide-react";

export default function Problem() {
  return (
    <section className="relative overflow-hidden bg-white py-12 md:py-16 lg:py-20">
      {/* Background abstract shapes */}
      <div className="absolute inset-0">
        {/* Large circle top-right */}
        <div
          className="absolute -right-32 -top-20 h-96 w-96 rounded-full bg-primary/10"
          style={{ filter: "blur(80px)" }}
        />

        {/* Medium circle middle-left */}
        <div
          className="absolute left-1/4 top-1/2 h-80 w-80 rounded-full bg-primary-light/15"
          style={{ filter: "blur(70px)" }}
        />

        {/* Small circle bottom-left */}
        <div
          className="absolute -bottom-20 left-1/3 h-72 w-72 rounded-full bg-primary-lighter/20"
          style={{ filter: "blur(60px)" }}
        />

        {/* Large ellipse bottom-right */}
        <div
          className="absolute -bottom-20 right-1/4 h-80 w-[500px] rounded-full bg-primary/8"
          style={{ filter: "blur(90px)", transform: "rotate(-45deg)" }}
        />

        {/* Decorative geometric shapes */}
        <div
          className="absolute bottom-1/4 right-1/3 h-64 w-64 bg-secondary/12"
          style={{
            borderRadius: "40% 60% 60% 40% / 40% 40% 60% 60%",
            filter: "blur(50px)",
          }}
        />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10">
        {/* Title Section */}
        <div className="mb-8 text-center md:mb-10 lg:mb-12">
          <motion.h2
            className="mb-5 text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Por que é tão difícil ter{" "}
            <span className="text-primary">controle financeiro</span>?
          </motion.h2>

          {/* Statistics */}
          <motion.div
            className="mx-auto max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="inline-block rounded-2xl border-2 border-primary bg-white/80 px-5 py-3 shadow-lg md:px-7 md:py-5">
              <p className="text-5xl font-bold text-primary sm:text-6xl md:text-7xl">
                47%
              </p>
              <p className="mt-2 text-sm text-gray-700 sm:text-base md:text-lg">
                dos jovens brasileiros não controlam suas finanças
              </p>
              <p className="mt-1 text-xs text-gray-500">
                (Pesquisa CNDL/SPC Brasil)
              </p>
            </div>
          </motion.div>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {/* Card 1 */}
          <motion.div
            className="group rounded-2xl border-2 border-gray-200 bg-white/80 p-5 shadow-lg transition-all duration-300 hover:border-primary hover:shadow-xl md:p-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ y: -5 }}
          >
            <div className="mb-3">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-dark p-2.5">
                <ClipboardList className="h-7 w-7 text-white" />
              </div>
            </div>
            <h3 className="mb-2 text-lg font-bold text-gray-900 sm:text-xl">
              Planilhas de Controle Financeiro Não Funcionam
            </h3>
            <p className="text-sm text-gray-600">
              Gestão financeira manual é demorada e frustrante. Você começa
              motivado, mas desiste em dias
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            className="group rounded-2xl border-2 border-gray-200 bg-white/80 p-5 shadow-lg transition-all duration-300 hover:border-primary hover:shadow-xl md:p-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ y: -5 }}
          >
            <div className="mb-3">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary-light to-primary p-2.5">
                <Zap className="h-7 w-7 text-white" />
              </div>
            </div>
            <h3 className="mb-2 text-lg font-bold text-gray-900 sm:text-xl">
              Decisões Financeiras por Impulso
            </h3>
            <p className="text-sm text-gray-600">
              Sem ferramentas para simular o impacto de compras, você só vê o
              estrago depois
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            className="group rounded-2xl border-2 border-gray-200 bg-white/80 p-5 shadow-lg transition-all duration-300 hover:border-primary hover:shadow-xl sm:col-span-2 md:p-6 lg:col-span-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            whileHover={{ y: -5 }}
          >
            <div className="mb-3">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary-dark to-secondary p-2.5">
                <TrendingDown className="h-7 w-7 text-white" />
              </div>
            </div>
            <h3 className="mb-2 text-lg font-bold text-gray-900 sm:text-xl">
              Dívidas acumulam
            </h3>
            <p className="text-sm text-gray-600">
              O mês acaba, mas o dinheiro sempre acaba antes
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
