import { Wallet, Briefcase } from "lucide-react";
import eligibilityImg from "@/assets/eligibility.jpg";

const Eligibility = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-navy-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-6 animate-fade-in">
            <span className="text-gold">Eligibility</span>
          </h2>
          <p className="text-xl text-muted-foreground animate-fade-in-up">
            Membership in the Prime segment is extended to clients who meet one or more of the
            following:
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Deposits Option */}
          <div className="group relative overflow-hidden rounded-3xl animate-scale-in">
            <img
              src={eligibilityImg}
              alt="Eligibility"
              className="w-full h-full object-cover absolute inset-0 group-hover:scale-110 transition-transform duration-700"
            />
            <div className="relative bg-gradient-to-b from-primary/80 to-primary/95 p-12 min-h-[400px] flex flex-col justify-center border border-gold/30 hover:border-gold transition-colors duration-500">
              <div className="w-16 h-16 mb-6 rounded-full bg-gold/20 flex items-center justify-center group-hover:bg-gold/30 transition-colors duration-300">
                <Wallet className="w-8 h-8 text-gold" />
              </div>
              <h3 className="text-2xl md:text-3xl font-light text-foreground mb-4">
                Minimum Balance
              </h3>
              <p className="text-lg text-muted-foreground">
                Maintain a minimum balance of{" "}
                <span className="text-gold font-normal">QAR 2.5 million</span> across deposits
              </p>
            </div>
          </div>

          {/* Salary Option */}
          <div className="group relative overflow-hidden rounded-3xl animate-scale-in" style={{ animationDelay: "0.2s", opacity: 0, animationFillMode: "forwards" }}>
            <img
              src={eligibilityImg}
              alt="Eligibility"
              className="w-full h-full object-cover absolute inset-0 group-hover:scale-110 transition-transform duration-700"
            />
            <div className="relative bg-gradient-to-b from-primary/80 to-primary/95 p-12 min-h-[400px] flex flex-col justify-center border border-gold/30 hover:border-gold transition-colors duration-500">
              <div className="w-16 h-16 mb-6 rounded-full bg-gold/20 flex items-center justify-center group-hover:bg-gold/30 transition-colors duration-300">
                <Briefcase className="w-8 h-8 text-gold" />
              </div>
              <h3 className="text-2xl md:text-3xl font-light text-foreground mb-4">
                Monthly Salary
              </h3>
              <p className="text-lg text-muted-foreground">
                Transfer a monthly salary of{" "}
                <span className="text-gold font-normal">QAR 75,000</span> or more into a Dukhan
                Bank account
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Eligibility;
