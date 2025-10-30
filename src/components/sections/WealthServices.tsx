import { TrendingUp, Globe, FileText, Users } from "lucide-react";
import wealthImg from "@/assets/wealth.jpg";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const services = [
  {
    icon: TrendingUp,
    text: "Advisory and discretionary portfolio management",
  },
  {
    icon: Globe,
    text: "Local and global investment products",
  },
  {
    icon: FileText,
    text: "Regular market insights and financial reviews",
  },
  {
    icon: Users,
    text: "Comprehensive wealth planning for retirement and succession",
  },
];

const WealthServices = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="wealth" ref={ref} className="relative py-24 md:py-32 overflow-hidden bg-navy-dark">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Content Side */}
          <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <h2 className="text-4xl md:text-5xl font-light text-foreground">
              Wealth & Investment <span className="text-gold">Services</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Access a full spectrum of investment opportunities tailored to your goals:
            </p>

            <div className="space-y-4">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-xl bg-card/40 backdrop-blur-sm border border-border/50 hover:border-gold/50 transition-all duration-300 hover:translate-x-2"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-gold" />
                  </div>
                  <p className="text-foreground text-lg pt-2">{service.text}</p>
                </div>
              ))}
            </div>

            <p className="text-muted-foreground italic">
              Your Relationship Manager and our investment specialists will work with you to create a
              portfolio aligned with your aspirations.
            </p>
          </div>

          {/* Image Side */}
          <div className={`relative h-[400px] lg:h-[600px] rounded-3xl overflow-hidden group transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <img
              src={wealthImg}
              alt="Wealth Services"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WealthServices;
