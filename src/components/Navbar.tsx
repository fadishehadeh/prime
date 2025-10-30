import { useEffect, useState } from "react";
import primeLogo from "@/assets/prime_logo.png";
import whiteLogo from "@/assets/whitelogo.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-primary/80 backdrop-blur-xl shadow-lg border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <img src={primeLogo} alt="Prime Banking" className="h-12 md:h-16" />
        <img src={whiteLogo} alt="Dukhan Bank" className="h-10 md:h-12" />
      </div>
    </nav>
  );
};

export default Navbar;
