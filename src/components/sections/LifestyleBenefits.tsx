import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import valetImg from "@/assets/valet-2.jpg";
import gymImg from "@/assets/gym-2.jpg";
import cinemaImg from "@/assets/cinema-2.jpg";
import clubImg from "@/assets/club-2.jpg";
import parkingImg from "@/assets/parking-2.jpg";
import diningImg from "@/assets/dining-2.jpg";
import bgTexture from "@/assets/bg.png";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const benefits = [
  {
    image: valetImg,
    title: "Valet Parking",
    description: "15 free accesses per month",
  },
  {
    image: gymImg,
    title: "Gym Access",
    description: "50% off at partner gyms",
  },
  {
    image: cinemaImg,
    title: "Cinema Offers",
    description: "Buy 1 get 1 free via NOVO (4 tickets per month, including Majlis and 7-Star)",
  },
  {
    image: clubImg,
    title: "Club Privileges",
    description: "50% off membership at The NED Doha and SANAD (by invitation only)",
  },
  {
    image: parkingImg,
    title: "Reserved Parking",
    description: "At dedicated Dukhan Bank branches",
  },
  {
    image: diningImg,
    title: "Family Privileges",
    description: "Extended family privileges",
  },
];

const LifestyleBenefits = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { ref, isVisible } = useScrollAnimation();

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % benefits.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + benefits.length) % benefits.length);
  };

  return (
    <section id="benefits" ref={ref} className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url(${bgTexture})`,
          backgroundSize: "cover",
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-6">
            Dukhan <span className="text-gold">Lifestyle Benefits</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Enjoy exclusive lifestyle advantages designed to complement your status
          </p>
        </div>

        {/* Carousel */}
        <div className={`relative max-w-5xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <div className="relative h-[500px] md:h-[600px] rounded-3xl overflow-hidden group">
            <img
              src={benefits[currentIndex].image}
              alt={benefits[currentIndex].title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />

            {/* Content Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
              <div className="max-w-2xl">
                <h3 className="text-3xl md:text-4xl font-light text-foreground mb-4">
                  {benefits[currentIndex].title}
                </h3>
                <p className="text-lg md:text-xl text-muted-foreground">
                  {benefits[currentIndex].description}
                </p>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 flex justify-between pointer-events-none">
              <Button
                onClick={prev}
                size="icon"
                className="pointer-events-auto w-12 h-12 rounded-full bg-card/80 backdrop-blur-sm border border-gold/50 hover:bg-gold hover:border-gold transition-all duration-300"
              >
                <ChevronLeft className="w-6 h-6" />
              </Button>
              <Button
                onClick={next}
                size="icon"
                className="pointer-events-auto w-12 h-12 rounded-full bg-card/80 backdrop-blur-sm border border-gold/50 hover:bg-gold hover:border-gold transition-all duration-300"
              >
                <ChevronRight className="w-6 h-6" />
              </Button>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {benefits.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-gold w-8" : "bg-muted"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LifestyleBenefits;
