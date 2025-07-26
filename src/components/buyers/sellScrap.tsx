"use client";
import React from "react";

type CTASection = {
  title: string;
  subtitle: string;
  buttonText: string;
  onClick: () => void;
  bgImage?: string;
  darkText?: boolean;
};

export default function SellScrap() {
  const sections: CTASection[] = [
    {
      title: "Looking to Sell Scrap Materials?",
      subtitle: "Explore Our Services Today",
      buttonText: "Sell With Us",
      onClick: () => alert("Sell With Us clicked"),
      darkText: true,
    },
    {
      title: "Simplify Recycling with ScrapEco",
      subtitle: "Explore Eco-Friendly Solutions with us",
      buttonText: "Schedule a Call",
      onClick: () => alert("Schedule a Call clicked"),
      bgImage: "/media/images/buyers/rightContent.png",
      darkText: false,
    },
  ];

  return (
    <div className="flex flex-col md:flex-row w-full h-screen">
      {sections.map((section, idx) => (
        <div
          key={idx}
          className={`w-full md:w-1/2 relative flex items-center justify-center p-8 ${
            section.bgImage ? "bg-cover bg-center" : "bg-gray-100"
          }`}
          style={
            section.bgImage
              ? { backgroundImage: `url(${section.bgImage})` }
              : {}
          }
        >
          <div
            className={`text-center max-w-md z-10 ${
              section.darkText ? "text-black" : "text-white"
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
              {section.title}
            </h2>
            <p className="text-lg mb-6">{section.subtitle}</p>
            <button
              onClick={section.onClick}
              className={`px-6 py-3 rounded border-2 font-medium transition ${
                section.darkText
                  ? "text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white"
                  : "text-white border-white hover:bg-white hover:text-black"
              }`}
            >
              {section.buttonText}
            </button>
          </div>
          {/* Optional overlay for better readability */}
          {section.bgImage && (
            <div className="absolute inset-0 bg-black bg-opacity-40 z-0"></div>
          )}
        </div>
      ))}
    </div>
  );
}
