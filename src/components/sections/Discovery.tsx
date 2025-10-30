import { Button } from "@/components/ui/button";
import { Phone, Calendar } from "lucide-react";
import bgTexture from "@/assets/bg.png";

const Discovery = () => {
  return (
    <section id="discovery" className="relative py-32 md:py-40 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url(${bgTexture})`,
          backgroundSize: "cover",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/50 to-navy-dark/90" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-8 animate-fade-in">
            Discover the Service You <span className="text-gold">Deserve</span>
          </h2>

          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed animate-fade-in-up">
            Experience banking defined by discretion, distinction, and devotion to excellence.
          </p>

          <p className="text-lg text-muted-foreground animate-fade-in-up" style={{ animationDelay: "0.2s", opacity: 0, animationFillMode: "forwards" }}>
            To explore membership or schedule a private consultation, please contact our Dedicated
            Prime Call Center or visit our Prime offices.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up" style={{ animationDelay: "0.4s", opacity: 0, animationFillMode: "forwards" }}>
            <Button
              size="lg"
              className="bg-gold text-primary hover:bg-gold-light px-10 py-6 text-lg font-light tracking-wider transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--gold)/0.5)] group"
            >
              <Phone className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
              Call Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-gold text-gold hover:bg-gold hover:text-primary px-10 py-6 text-lg font-light tracking-wider transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--gold)/0.3)] group"
            >
              <Calendar className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
              Schedule Consultation
            </Button>
          </div>

          <div className="pt-8 space-y-4 text-muted-foreground animate-fade-in-up" style={{ animationDelay: "0.6s", opacity: 0, animationFillMode: "forwards" }}>
            <p className="text-lg">
              <span className="text-gold">Dedicated Prime Call Center:</span> +974 800 0007
            </p>
            <p className="text-lg">
              <span className="text-gold">Prime Offices:</span> Tajawal & Al Sadd locations
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Discovery;
