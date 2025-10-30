import metropoleDigital from "../assets/images/metropole-digital.svg";
import sebrae from "../assets/images/sebrae.png";
import ufrn from "../assets/images/ufrn.png";

export default function Partners() {
  return (
    <section className="w-full overflow-hidden bg-gray-50 py-8 md:py-12">
      <div className="container-custom">
        {/* Title */}
        <h2 className="mb-8 text-center text-xl font-bold text-gray-900 sm:text-2xl md:mb-12 md:text-3xl">
          Com o Apoio de:
        </h2>

        {/* Logos Grid */}
        <div className="mx-auto flex max-w-4xl flex-col items-center justify-center gap-6 sm:gap-8 md:flex-row md:gap-12">
          {/* SEBRAE */}
          <div className="flex h-16 w-full max-w-[200px] items-center justify-center sm:h-20 sm:max-w-[240px] md:h-20 md:w-auto md:max-w-none md:flex-1">
            <img
              src={sebrae}
              alt="SEBRAE"
              className="max-h-full max-w-full object-contain opacity-70 transition-opacity hover:opacity-100"
            />
          </div>

          {/* UFRN */}
          <div className="flex h-16 w-full max-w-[200px] items-center justify-center sm:h-20 sm:max-w-[240px] md:h-24 md:w-auto md:max-w-none md:flex-1">
            <img
              src={ufrn}
              alt="UFRN"
              className="max-h-full max-w-full object-contain opacity-70 transition-opacity hover:opacity-100"
            />
          </div>

          {/* Metrópole Digital */}
          <div className="flex h-16 w-full max-w-[200px] items-center justify-center sm:h-20 sm:max-w-[240px] md:h-24 md:w-auto md:max-w-none md:flex-1">
            <img
              src={metropoleDigital}
              alt="Metrópole Digital"
              className="max-h-full max-w-full object-contain opacity-70 transition-opacity hover:opacity-100"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
