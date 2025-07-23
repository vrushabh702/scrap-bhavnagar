"use client";

import Image from "next/image";
import React from "react";
import AnimatedText from "../animation/AnimatedText";

export interface MetalCard {
  title: string;
  description: string;
  image: string;
}

export const metalCards: MetalCard[] = [
  {
    title: "Global Environmental Responsibility",
    description:
      "Our mission focuses on supporting sustainable recycling through ethical trade and efficient operations worldwide.",
    image: "/media/images/services/service1.avif", // Cars scrap
  },
  {
    title: "Reliable Sourcing Solutions",
    description:
      "We ensure competitive pricing and seamless logistics for all your metal scrap trading needs.",
    image: "/media/images/services/service2.avif", // Inside scrap facility
  },
];

const SustainableMetalTrading = () => {
  return (
    <section className="bg-[#f5f4ed] py-24 px-4 md:px-20">
      <div className="max-w-7xl mx-auto text-center">
        <AnimatedText>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Sustainable Metal Trading
          </h2>
        </AnimatedText>
        <p className="text-gray-600 mb-16 text-lg">
          Leading global provider of high-quality metal scrap with a commitment
          to sustainable practices and ethics.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {metalCards.map((card, index) => (
            <div key={index} className="relative rounded-3xl overflow-hidden">
              <Image
                src={card.image}
                alt={card.title}
                width={800}
                height={500}
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute bottom-0 w-full bg-white p-6 text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {card.title}
                </h3>
                <p className="text-gray-600 text-sm">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SustainableMetalTrading;
