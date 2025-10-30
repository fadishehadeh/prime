import { UserCheck, TrendingUp, Shield, Home } from "lucide-react";
import consultationImg from "@/assets/consultation.jpg";
import bgTexture from "@/assets/bg.png";

const benefits = [
  {
    icon: UserCheck,
    title: "Personalized Financial Guidance",
    description: "Your dedicated expert, always available",
  },
  {
    icon: TrendingUp,
    title: "Tailored Banking & Investment Solutions",
    description: "Customized to your unique needs",
  },
  {
    icon: Shield,
    title: "Proactive Support",
    description: "For your short- and long-term goals",
  },
  {
    icon: Home,
    title: "Door-to-Door Service",
    description: "Banking that comes to you",
  },
];

const RelationshipManagement = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={consultationImg}
          alt="Consultation"
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
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-6 animate-fade-in">
            Relationship <span className="text-gold">Management</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up">
            Enjoy a dedicated banking experience with your own Relationship Manager, your single
            point of contact for all financial matters.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group relative bg-card/40 backdrop-blur-md border border-border/50 rounded-2xl p-8 hover:border-gold/50 transition-all duration-500 hover:shadow-[0_0_30px_hsl(var(--gold)/0.2)] animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s`, opacity: 0, animationFillMode: "forwards" }}
            >
              <benefit.icon className="w-12 h-12 text-gold mb-4 group-hover:scale-110 transition-transform duration-500" />
              <h3 className="text-2xl font-light text-foreground mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>

        <p className="text-center text-lg text-muted-foreground mt-12 animate-fade-in-up">
          You will also benefit from priority access and complete discretion across all Dukhan Bank
          touchpoints.
        </p>
      </div>
    </section>
  );
};

export default RelationshipManagement;
