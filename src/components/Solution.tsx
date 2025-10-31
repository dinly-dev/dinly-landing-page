import { motion } from "motion/react";
import {
  Sparkles,
  Lightbulb,
  Target,
  Brain,
  Zap,
  TrendingUp,
} from "lucide-react";

export default function Solution() {
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

        {/* Small circle bottom-right */}
        <div
          className="absolute -bottom-20 right-1/3 h-72 w-72 rounded-full bg-primary-lighter/20"
          style={{ filter: "blur(60px)" }}
        />

        {/* Large ellipse bottom-left */}
        <div
          className="absolute -bottom-20 left-1/4 h-80 w-[500px] rounded-full bg-primary/8"
          style={{ filter: "blur(90px)", transform: "rotate(45deg)" }}
        />

        {/* Decorative geometric shapes */}
        <div
          className="absolute left-1/3 top-1/4 h-64 w-64 bg-secondary/12"
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
            className="mb-3 text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Controle Financeiro Automático: Como o{" "}
            <span className="text-primary">Dinly</span> Funciona
          </motion.h2>
          <motion.p
            className="text-base text-gray-600 sm:text-lg md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Seis pilares de tecnologia financeira inteligente para sua liberdade
            financeira
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {/* Card 1 - Automação Inteligente */}
          <motion.div
            className="group rounded-2xl border-2 border-gray-200 bg-white/80 p-5 shadow-lg transition-all duration-300 hover:border-primary hover:shadow-xl md:p-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ y: -5 }}
          >
            <div className="mb-3">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-dark p-2.5">
                <Sparkles className="h-7 w-7 text-white" />
              </div>
            </div>
            <h3 className="mb-2 text-lg font-bold text-gray-900 sm:text-xl">
              Automação de Despesas com IA
            </h3>
            <p className="text-sm text-gray-600">
              Tire foto do comprovante e nossa inteligência artificial organiza
              suas finanças automaticamente
            </p>
          </motion.div>

          {/* Card 2 - Simulador de Decisão */}
          <motion.div
            className="group rounded-2xl border-2 border-gray-200 bg-white/80 p-5 shadow-lg transition-all duration-300 hover:border-primary hover:shadow-xl md:p-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ y: -5 }}
          >
            <div className="mb-3">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary-light to-primary p-2.5">
                <Lightbulb className="h-7 w-7 text-white" />
              </div>
            </div>
            <h3 className="mb-2 text-lg font-bold text-gray-900 sm:text-xl">
              Simulador de Impacto Financeiro
            </h3>
            <p className="text-sm text-gray-600">
              Simule o impacto de cada compra nas suas metas. Tome decisões
              financeiras conscientes
            </p>
          </motion.div>

          {/* Card 3 - Gamificação de Metas */}
          <motion.div
            className="group rounded-2xl border-2 border-gray-200 bg-white/80 p-5 shadow-lg transition-all duration-300 hover:border-primary hover:shadow-xl md:p-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ y: -5 }}
          >
            <div className="mb-3">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary-dark to-secondary p-2.5">
                <Target className="h-7 w-7 text-white" />
              </div>
            </div>
            <h3 className="mb-2 text-lg font-bold text-gray-900 sm:text-xl">
              Gamificação para Metas Financeiras
            </h3>
            <p className="text-sm text-gray-600">
              Transforme objetivos financeiros em missões gamificadas. Progresso
              visual e recompensas reais
            </p>
          </motion.div>

          {/* Card 4 - Insights Personalizados */}
          <motion.div
            className="group rounded-2xl border-2 border-gray-200 bg-white/80 p-5 shadow-lg transition-all duration-300 hover:border-primary hover:shadow-xl md:p-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            whileHover={{ y: -5 }}
          >
            <div className="mb-3">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-secondary to-primary p-2.5">
                <Brain className="h-7 w-7 text-white" />
              </div>
            </div>
            <h3 className="mb-2 text-lg font-bold text-gray-900 sm:text-xl">
              Análise Financeira Personalizada
            </h3>
            <p className="text-sm text-gray-600">
              Insights inteligentes sobre seus gastos revelam oportunidades de
              economia
            </p>
          </motion.div>

          {/* Card 5 - Zero Planilhas */}
          <motion.div
            className="group rounded-2xl border-2 border-gray-200 bg-white/80 p-5 shadow-lg transition-all duration-300 hover:border-primary hover:shadow-xl md:p-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            whileHover={{ y: -5 }}
          >
            <div className="mb-3">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-light p-2.5">
                <Zap className="h-7 w-7 text-white" />
              </div>
            </div>
            <h3 className="mb-2 text-lg font-bold text-gray-900 sm:text-xl">
              Substituto de Planilhas Financeiras
            </h3>
            <p className="text-sm text-gray-600">
              Elimine o trabalho manual de controlar gastos. Foque em conquistar
              seus objetivos
            </p>
          </motion.div>

          {/* Card 6 - Foco no Futuro */}
          <motion.div
            className="group rounded-2xl border-2 border-gray-200 bg-white/80 p-5 shadow-lg transition-all duration-300 hover:border-primary hover:shadow-xl md:p-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.7 }}
            whileHover={{ y: -5 }}
          >
            <div className="mb-3">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary-dark to-primary-light p-2.5">
                <TrendingUp className="h-7 w-7 text-white" />
              </div>
            </div>
            <h3 className="mb-2 text-lg font-bold text-gray-900 sm:text-xl">
              Planejamento Financeiro Inteligente
            </h3>
            <p className="text-sm text-gray-600">
              Organize suas finanças pensando no futuro. Conquiste metas
              financeiras mais rápido
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
