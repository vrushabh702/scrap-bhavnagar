"use client";

import Image from "next/image";
import React from "react";

interface Stat {
  id: number;
  value: string;
  label: string;
}

interface HeroContent {
  title: string;
  description: string;
  buttonText: string;
  imageSrc: string;
  stats: Stat[];
}

const heroData: HeroContent = {
  title: "Leading Sustainable Metal Scrap Trading",
  description:
    "Alenterprise leads in sustainable metal scrap trading globally. We specialize in high-quality ferrous and non-ferrous scrap, ensuring ethical trade and efficient logistics. Join us in supporting recycling and environmental responsibility.",
  buttonText: "Explore",
  imageSrc: "/media/images/aboutus/aboutusStates.avif", // Replace with your own public folder image
  stats: [
    { id: 1, value: "150+", label: "Trusted Partner" },
    { id: 2, value: "15", label: "Global Leader" },
  ],
};

const HeroWithStatsSection: React.FC = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text Section */}
        <div>
          <h2 className="text-4xl text-slate-800 md:text-5xl font-bold mb-6">
            {heroData.title}
          </h2>
          <p className="text-lg text-gray-700 mb-8">{heroData.description}</p>
          <button className="px-8 py-3 border-2 border-black rounded-full font-semibold hover:bg-gray-100 transition">
            {heroData.buttonText}
          </button>
        </div>

        {/* Image + Stats Section */}
        <div className="relative">
          <div className="rounded-3xl overflow-hidden">
            <Image
              src={heroData.imageSrc}
              alt="Scrap Image"
              width={700}
              height={500}
              className="rounded-3xl object-cover w-full h-auto"
              priority
            />
          </div>

          <div className="absolute top-2/3 left-1/2 -translate-x-1/2 md:-left-22 md:translate-x-0 bg-green-600 text-white rounded-md px-10 py-6 flex gap-12 shadow-lg">
            {heroData.stats.map((stat) => (
              <div key={stat.id} className="text-center">
                <div className="text-3xl font-bold">{stat.value}</div>
                <div className="text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroWithStatsSection;
