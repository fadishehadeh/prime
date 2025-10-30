import { Headset, Clock } from "lucide-react";
import supportImg from "@/assets/support.jpg";

const SupportChannels = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Image Side */}
          <div className="relative h-[400px] lg:h-[600px] rounded-3xl overflow-hidden group animate-slide-right">
            <img
              src={supportImg}
              alt="Support"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
          </div>

          {/* Content Side */}
          <div className="space-y-8 animate-slide-left">
            <h2 className="text-4xl md:text-5xl font-light text-foreground">
              Dedicated Support <span className="text-gold">Channels</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Access priority assistance anytime, anywhere through exclusive support channels:
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-6 group">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors duration-300">
                  <Headset className="w-8 h-8 text-gold" />
                </div>
                <div>
                  <h3 className="text-2xl font-light text-foreground mb-2">
                    24/7 Dedicated Call Center Line
                  </h3>
                  <p className="text-muted-foreground">Instant expert support whenever you need it</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors duration-300">
                  <Clock className="w-8 h-8 text-gold" />
                </div>
                <div>
                  <h3 className="text-2xl font-light text-foreground mb-2">Priority Service</h3>
                  <p className="text-muted-foreground">
                    Fast application processing across all Dukhan Bank branches
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportChannels;
