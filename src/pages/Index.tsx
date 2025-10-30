import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import Introduction from "@/components/sections/Introduction";
import RelationshipManagement from "@/components/sections/RelationshipManagement";
import SupportChannels from "@/components/sections/SupportChannels";
import VisaInfinite from "@/components/sections/VisaInfinite";
import LifestyleBenefits from "@/components/sections/LifestyleBenefits";
import WealthServices from "@/components/sections/WealthServices";
import BankingPrivileges from "@/components/sections/BankingPrivileges";
import Eligibility from "@/components/sections/Eligibility";
import Discovery from "@/components/sections/Discovery";
import Footer from "@/components/sections/Footer";

const Index = () => {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <div className="min-h-screen bg-primary text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <Introduction />
      <RelationshipManagement />
      <SupportChannels />
      <VisaInfinite />
      <LifestyleBenefits />
      <WealthServices />
      <BankingPrivileges />
      <Eligibility />
      <Discovery />
      <Footer />
    </div>
  );
};

export default Index;
