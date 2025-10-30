import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-doha.jpg";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("discovery")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Doha Skyline"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-primary/70" />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gold/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-6 animate-fade-in tracking-wide">
          Welcome to a World of <span className="text-white font-normal">Distinction</span>
        </h1>
        <h2
          className="text-2xl md:text-3xl lg:text-4xl font-light text-platinum mb-8 animate-fade-in-up"
          style={{ animationDelay: "0.3s", opacity: 0, animationFillMode: "forwards" }}
        >
          Introducing Dukhan Bank Prime
        </h2>
        <p
          className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto animate-fade-in-up leading-relaxed"
          style={{ animationDelay: "0.6s", opacity: 0, animationFillMode: "forwards" }}
        >
          An Elevated Experience
        </p>
        <div
          className="animate-fade-in-up"
          style={{ animationDelay: "0.9s", opacity: 0, animationFillMode: "forwards" }}
        >
          <Button
            onClick={scrollToContact}
            size="lg"
            className="bg-transparent border-2 border-gold text-gold hover:bg-gold hover:text-primary px-12 py-6 text-lg font-light tracking-wider transition-all duration-500 hover:shadow-[0_0_30px_hsl(var(--gold)/0.5)]"
          >
            Contact Us
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-gold" />
      </div>
    </section>
  );
};

export default Hero;
