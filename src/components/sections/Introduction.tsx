import bgTexture from "@/assets/bg.png";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Introduction = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="relative py-24 md:py-32 overflow-hidden">
      {/* Background Texture */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url(${bgTexture})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <p className={`text-lg md:text-xl text-muted-foreground leading-relaxed transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            At Dukhan Bank, true wealth extends beyond assets; it is reflected in the quality of
            experience. We are proud to introduce Prime Banking, a bespoke segment crafted
            exclusively for discerning individuals who seek more than banking, who seek a lifestyle
            defined by privilege, discretion, and world-class service.
          </p>
          <p
            className={`text-lg md:text-xl text-muted-foreground leading-relaxed transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            As a Prime client, you gain access to a curated suite of services designed to enhance
            every aspect of your financial journey. From seamless daily banking to sophisticated
            wealth solutions, every interaction is built around effortless luxury, precision, and
            personalized care, whether in-branch, online, or through private consultation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
