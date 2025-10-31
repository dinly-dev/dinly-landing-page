import metropoleDigital from "../assets/images/metropole-digital.svg";
import sebrae from "../assets/images/sebrae.png";
import ufrn from "../assets/images/ufrn.png";

export default function Partners() {
  return (
    <section className="relative w-full overflow-hidden bg-gray-50 py-4 md:py-6 lg:py-8">
      <div className="container-custom relative z-10">
        {/* Title */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
            Apoiado por <span className="text-primary">grandes parceiros</span>
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-sm text-gray-600 sm:text-base">
            Recebemos mentorias e capacitações exclusivas para impulsionar nossa
            jornada de inovação e empreendedorismo.
          </p>
        </div>

        {/* Logos Grid */}
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-center gap-8 sm:gap-10 md:flex-row md:gap-16">
          {/* SEBRAE */}
          <div className="group flex h-20 w-full max-w-[220px] items-center justify-center rounded-xl bg-white p-6 shadow-sm transition-all hover:shadow-md sm:h-24 sm:max-w-[260px] md:h-24 md:w-auto md:max-w-none md:flex-1">
            <img
              src={sebrae}
              alt="SEBRAE"
              className="max-h-full max-w-full object-contain opacity-60 transition-opacity group-hover:opacity-100"
            />
          </div>

          {/* UFRN */}
          <div className="group flex h-20 w-full max-w-[220px] items-center justify-center rounded-xl bg-white p-6 shadow-sm transition-all hover:shadow-md sm:h-24 sm:max-w-[260px] md:h-28 md:w-auto md:max-w-none md:flex-1">
            <img
              src={ufrn}
              alt="UFRN"
              className="max-h-full max-w-full object-contain opacity-60 transition-opacity group-hover:opacity-100"
            />
          </div>

          {/* Metrópole Digital */}
          <div className="group flex h-20 w-full max-w-[220px] items-center justify-center rounded-xl bg-white p-6 shadow-sm transition-all hover:shadow-md sm:h-24 sm:max-w-[260px] md:h-28 md:w-auto md:max-w-none md:flex-1">
            <img
              src={metropoleDigital}
              alt="Metrópole Digital"
              className="max-h-full max-w-full object-contain opacity-60 transition-opacity group-hover:opacity-100"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
