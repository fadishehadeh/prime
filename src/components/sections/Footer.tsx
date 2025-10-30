import bgTexture from "@/assets/bg.png";
import whiteLogo from "@/assets/whitelogo.png";

const Footer = () => {
  return (
    <footer id="contact" className="relative py-16 overflow-hidden bg-navy-dark border-t border-gold/20">
      {/* Background */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `url(${bgTexture})`,
          backgroundSize: "cover",
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <img src={whiteLogo} alt="Dukhan Bank" className="h-12 mx-auto" />

          <div className="space-y-4 text-muted-foreground">
            <p className="text-sm">
              <span className="text-gold">Terms and Conditions</span>
            </p>
            <p className="text-sm">
              Terms and conditions apply to all Prime Banking services and benefits. Please contact
              us for detailed information.
            </p>
          </div>

          <div className="pt-8 border-t border-border/30">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Dukhan Bank. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
