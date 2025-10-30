import { Plane, Shield, Sparkles, ShoppingBag, Utensils, Smartphone } from "lucide-react";
import visaCardImg from "@/assets/visa-card.jpg";
import bgTexture from "@/assets/bg.png";

const benefits = [
  { icon: Plane, text: "Complimentary airport lounges access" },
  { icon: Shield, text: "Global travel insurance" },
  { icon: Sparkles, text: "24/7 concierge services" },
  { icon: ShoppingBag, text: "Purchase protection and extended warranty" },
  { icon: Utensils, text: "Dining, hotel, and retail offers worldwide" },
  { icon: Smartphone, text: "Contactless and digital wallet integration" },
];

const VisaInfinite = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-navy-dark">
      {/* Background */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url(${bgTexture})`,
          backgroundSize: "cover",
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-6 animate-fade-in">
            Visa Infinite <span className="text-gold">Credit Card</span>
          </h2>
          <p className="text-xl text-muted-foreground animate-fade-in-up">
            Unlock premium global privileges with your Visa Infinite Card
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Card Display */}
          <div className="relative h-[400px] flex items-center justify-center animate-scale-in">
            <div className="relative group">
              <img
                src={visaCardImg}
                alt="Visa Infinite Card"
                className="w-full max-w-md rounded-3xl shadow-2xl group-hover:shadow-[0_0_60px_hsl(var(--gold)/0.4)] transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </div>
          </div>

          {/* Benefits List */}
          <div className="space-y-4">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-4 rounded-xl bg-card/40 backdrop-blur-sm border border-border/50 hover:border-gold/50 transition-all duration-300 hover:translate-x-2 animate-slide-left"
                style={{ animationDelay: `${index * 0.1}s`, opacity: 0, animationFillMode: "forwards" }}
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
                  <benefit.icon className="w-6 h-6 text-gold" />
                </div>
                <p className="text-foreground text-lg">{benefit.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisaInfinite;
