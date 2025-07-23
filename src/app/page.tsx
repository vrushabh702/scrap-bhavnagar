import AnimatedSection from "@/components/animation/AnimatedSection";
import FaqSection from "@/components/home/FAQ";
import HeroSection from "@/components/home/HeroSection";
import ProductsWeBuySection from "@/components/home/ProductsWeBuySection";
import SustainableMetalTradingSection from "@/components/home/SustainableMetalTradingSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import TradingIntroSection from "@/components/home/TradingIntroSection";
import Footer from "@/layouts/Footer";

export default function Home() {
  return (
    <>
      <AnimatedSection>
        <HeroSection />
      </AnimatedSection>
      <AnimatedSection delay={0.3}>
        <TradingIntroSection />
      </AnimatedSection>
      <SustainableMetalTradingSection />
      <ProductsWeBuySection />
      <TestimonialsSection />
      <FaqSection />
    </>
  );
}
