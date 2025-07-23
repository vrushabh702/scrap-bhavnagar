import React from "react";
import SustainableMetalTrading from "./SustainableMetalTrading";
import ServiceGallerySection from "./ServiceGallerySection";
import SustainableTrading from "./SustainableTrading";

export const metaData = {
  title: "Sustainable Metal Trading AI enterprices",
  description: "Explore our sustainable metal trading services in detail.",
};

const ServicePage: React.FC = () => {
  return (
    <>
      <SustainableMetalTrading />
      <ServiceGallerySection />
      <SustainableTrading />
    </>
  );
};
export default ServicePage;
