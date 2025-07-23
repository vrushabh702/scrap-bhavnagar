"use client";

import React from "react";
import Image from "next/image";
// import { tradingCards } from "@/data/tradingData";
import { FiArrowRight } from "react-icons/fi";

export interface TradingCard {
  title: string;
  description: string;
  image: string;
}

export const tradingCards: TradingCard[] = [
  {
    title: "Global Networks",
    description:
      "Connecting suppliers with sustainable scrap solutions and resources.",
    image: "/media/images/aboutus/image1.avif", // Black & white metal pile
  },
  {
    title: "Quality Scraps",
    description: "High-quality ferrous and non-ferrous metals for recycling.",
    image: "/media/images/aboutus/image2.avif", // Scrapyard tanks
  },
  {
    title: "Ethical Trade",
    description:
      "Committed to global environmental responsibility and support.",
    image: "/media/images/aboutus/image3.avif", // Dump truck unloading
  },
  {
    title: "Seamless Logistics",
    description: "Efficient logistics for metal scrap import and export.",
    image: "/media/images/aboutus/image4.avif", // Car bumpers behind blue stand
  },
];

const SustainableTrading = () => {
  return (
    <section className="bg-slate-50 py-24 px-4 md:px-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Sustainable Trading</h2>
        <p className="text-gray-600 mb-16 text-lg">
          Leading the future of ethical metal scrap recycling globally.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-18">
          {tradingCards.map((card, index) => (
            <div
              key={index}
              className="space-y-4 text-left group cursor-pointer"
            >
              <div className="overflow-hidden l shadow-lg">
                <Image
                  src={card.image}
                  alt={card.title}
                  width={600}
                  height={400}
                  className="w-full  object-cover  transition-transform group-hover:scale-[1.02]"
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-4xl font-semibold text-gray-900 mb-1">
                    {card.title}
                  </h2>
                  <p className="text-gray-600">{card.description}</p>
                </div>
                {/* <ArrowRight className="text-black shrink-0" /> */}
                <FiArrowRight className="text-xl text-gray-700" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SustainableTrading;
