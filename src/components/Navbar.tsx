import { useEffect, useState } from "react";
import primeLogo from "@/assets/prime_logo.png";
import whiteLogo from "@/assets/whitelogo.png";

const menuItems = [
  { label: "Prime", href: "#hero" },
  { label: "Services", href: "#services" },
  { label: "Benefits", href: "#benefits" },
  { label: "Wealth", href: "#wealth" },
  { label: "Eligibility", href: "#eligibility" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-primary/95 backdrop-blur-xl shadow-lg border-b border-border/20"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <img src={primeLogo} alt="Prime Banking" className="h-10 md:h-12 brightness-0 invert" />
        
        <ul className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-foreground/80 hover:text-foreground text-sm font-light tracking-wide transition-colors duration-300"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <img src={whiteLogo} alt="Dukhan Bank" className="h-8 md:h-10" />
      </div>
    </nav>
  );
};

export default Navbar;
