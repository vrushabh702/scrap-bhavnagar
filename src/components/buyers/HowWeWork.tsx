"use client";

import { JSX } from "react";
import {
  FaFileContract,
  FaChartLine,
  FaRecycle,
  FaFileInvoiceDollar,
  FaGavel,
  FaLaptopCode,
} from "react-icons/fa";

interface Offer {
  title: string;
  icon: JSX.Element;
}

const offers: Offer[] = [
  {
    icon: <FaFileContract />,
    title: "Flexible contract options—one-time or annual",
  },
  {
    icon: <FaChartLine />,
    title: "Real-time dashboards",
  },
  {
    icon: <FaRecycle />,
    title: "Centralized scrap management access",
  },
  {
    icon: <FaFileInvoiceDollar />,
    title: "Automated invoice system",
  },
  {
    icon: <FaGavel />,
    title: "Regular actioning of lot-materials",
  },
  {
    icon: <FaLaptopCode />,
    title: "E-contract and E-Tender capabilities",
  },
];

export default function WhatWeOffer() {
  return (
    <section className="bg-slate-800 py-16 px-4 sm:px-8 lg:px-20 text-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-2 text-neutral-100">
          What We Offer
        </h2>
        <p className="text-stone-300 text-lg mb-12">
          Tailored Solutions That Meet Your All Scrap Buying Needs
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {offers.map((offer, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-xl p-6 text-left bg-slate-900 border border-emerald-600 shadow-md transition duration-300 animate-giggle"
            >
              {/* Glow spot in bottom-right */}
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-radial from-emerald-400/20 to-transparent rounded-full blur-2xl pointer-events-none"></div>

              {/* Icon */}
              <div className="bg-emerald-700/10 p-6 inline-block rounded-lg mb-4 text-lime-300 text-3xl">
                {offer.icon}
              </div>

              {/* Title */}
              <h3 className="text-stone-100 text-xl font-semibold leading-snug">
                {offer.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
