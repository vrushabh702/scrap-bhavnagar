import Footer from "@/layouts/Footer"
import AnimatedSection from "../animation/AnimatedSection"
import FaqSection from "./FAQ"
import HeroSection from "./HeroSection"
import ProductsWeBuySection from "./ProductsWeBuySection"
import SustainableMetalTradingSection from "./SustainableMetalTradingSection"
import TestimonialsSection from "./TestimonialsSection"
import TradingIntroSection from "./TradingIntroSection"

export default function HomePage() {
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
      <Footer />
    </>
  )
}
