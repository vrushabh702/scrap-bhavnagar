"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const BuyersHeroSection = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background Image Layer */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('/media/images/home/testimonial/background.jpg')",
        }}
      />

      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black opacity-60" />

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-white text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
          Buy Industrial Scrap Materials Online
        </h1>
        <p className="text-white text-lg md:text-xl max-w-3xl mb-8 drop-shadow-md">
          Transparent Deals, Competitive Rates, and Sustainable Recycling
          Practices for all types of scrap materials. We make your industrial
          buying experience seamless and secure – from bidding to doorstep
          delivery.
        </p>
        <button className="border-2 border-green-500 text-green-500 px-8 py-3 rounded-full hover:bg-green-500 hover:text-white transition font-semibold text-lg">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default BuyersHeroSection;
