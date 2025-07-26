// /meta-scrap-buyers

import StepsToBuy from "./BiddingSection";
import BuyersHeroSection from "./BuyerHeroSection";
import WhatWeOffer from "./HowWeWork";
import OurBenefits from "./ourBenefits";
import SellScrap from "./sellScrap";

export default function BuyerPage() {
  return (
    <>
      <BuyersHeroSection />
      <StepsToBuy />
      <WhatWeOffer />
      <OurBenefits />
      <SellScrap />
    </>
  );
}
