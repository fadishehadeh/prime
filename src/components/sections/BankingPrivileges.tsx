import { Percent, DollarSign, TrendingUp, Zap } from "lucide-react";
import privilegesImg from "@/assets/privileges.jpg";
import bgTexture from "@/assets/bg.png";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const privileges = [
  { icon: Percent, title: "Preferential Rates & Fees", description: "Exclusive pricing" },
  { icon: DollarSign, title: "Enhanced FX Exchange Rates", description: "Better value" },
  { icon: TrendingUp, title: "Higher Transaction Limits", description: "More flexibility" },
  { icon: Zap, title: "Expedited Processing", description: "Faster approvals" },
];

const BankingPrivileges = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={privilegesImg}
          alt="Banking Privileges"
          className="w-full h-full object-cover opacity-20 blur-sm"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/95 to-primary/90" />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url(${bgTexture})`,
            backgroundSize: "cover",
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-6">
            Exclusive Banking <span className="text-gold">Privileges</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Experience enhanced value and priority across all your banking needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {privileges.map((privilege, index) => (
            <div
              key={index}
              className={`group relative bg-card/40 backdrop-blur-md border border-border/50 rounded-2xl p-8 text-center hover:border-gold/50 transition-all duration-1000 hover:shadow-[0_0_30px_hsl(var(--gold)/0.2)] hover:-translate-y-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors duration-300">
                <privilege.icon className="w-8 h-8 text-gold" />
              </div>
              <h3 className="text-xl font-light text-foreground mb-2">{privilege.title}</h3>
              <p className="text-muted-foreground">{privilege.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BankingPrivileges;
