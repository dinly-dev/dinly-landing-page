import metropoleDigital from "../assets/images/metropole-digital.svg";
import sebrae from "../assets/images/sebrae.png";
import ufrn from "../assets/images/ufrn.png";

export default function Partners() {
  return (
    <section className="bg-gray-50 py-8">
      <div className="container-custom">
        {/* Title */}
        <h2 className="mb-12 text-center text-2xl font-bold text-gray-900 md:text-3xl">
          Com o Apoio de:
        </h2>

        {/* Logos Grid */}
        <div className="grid grid-cols-2 items-center justify-items-center gap-12 md:grid-cols-3 md:gap-12">
          {/* SEBRAE */}
          <div className="flex h-20 w-full items-center justify-center">
            <img
              src={sebrae}
              alt="SEBRAE"
              className="max-h-full w-auto object-contain opacity-70 transition-opacity hover:opacity-100"
            />
          </div>

          {/* UFRN */}
          <div className="flex h-24 w-full items-center justify-center">
            <img
              src={ufrn}
              alt="UFRN"
              className="max-h-full w-auto object-contain opacity-70 transition-opacity hover:opacity-100"
            />
          </div>

          {/* Metrópole Digital */}
          <div className="flex h-24 w-full items-center justify-center">
            <img
              src={metropoleDigital}
              alt="Metrópole Digital"
              className="max-h-full w-auto object-contain opacity-70 transition-opacity hover:opacity-100"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
