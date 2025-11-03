import Hero from "../components/Hero";
import Partners from "../components/Partners";
import Problem from "../components/Problem";
import Solution from "../components/Solution";
import Forms from "../components/Forms";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Partners />
      {/* Wrapper com background contínuo para Problem, Solution e Forms */}
      <div className="relative overflow-hidden bg-white">
        {/* Background abstract shapes - Contínuo para os 3 componentes */}
        <div className="absolute inset-0">
          {/* Large circle top-left */}
          <div
            className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-primary/10"
            style={{ filter: "blur(80px)" }}
          />

          {/* Medium circle top-right */}
          <div
            className="absolute -right-32 top-20 h-80 w-80 rounded-full bg-primary-light/15"
            style={{ filter: "blur(70px)" }}
          />

          {/* Circle middle-left */}
          <div
            className="absolute left-1/4 top-1/3 h-72 w-72 rounded-full bg-primary-lighter/20"
            style={{ filter: "blur(60px)" }}
          />

          {/* Circle middle-right */}
          <div
            className="absolute right-1/4 top-1/2 h-80 w-80 rounded-full bg-primary/8"
            style={{ filter: "blur(70px)" }}
          />

          {/* Large ellipse bottom-left */}
          <div
            className="absolute -bottom-20 left-1/4 h-80 w-[500px] rounded-full bg-primary-light/12"
            style={{ filter: "blur(90px)", transform: "rotate(45deg)" }}
          />

          {/* Large ellipse bottom-right */}
          <div
            className="absolute -bottom-20 right-1/3 h-96 w-[600px] rounded-full bg-primary/10"
            style={{ filter: "blur(90px)", transform: "rotate(-45deg)" }}
          />

          {/* Decorative geometric shapes */}
          <div
            className="absolute left-1/3 top-1/4 h-64 w-64 bg-secondary/12"
            style={{
              borderRadius: "40% 60% 60% 40% / 40% 40% 60% 60%",
              filter: "blur(50px)",
            }}
          />

          <div
            className="absolute bottom-1/3 right-1/3 h-72 w-72 bg-primary-lighter/15"
            style={{
              borderRadius: "60% 40% 40% 60% / 60% 60% 40% 40%",
              filter: "blur(55px)",
            }}
          />
        </div>

        {/* Componentes com background contínuo */}
        <Problem />
        <Solution />
        <Forms />
      </div>
      <Footer />
    </>
  );
}
