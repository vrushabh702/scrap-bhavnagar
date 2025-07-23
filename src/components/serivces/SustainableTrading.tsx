"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface TradingItem {
  title: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
}

const tradingItems: TradingItem[] = [
  {
    title: "Global Scrap Solutions",
    description:
      "We specialize in sourcing and exporting high-quality ferrous and non-ferrous metal scrap, ensuring ethical practices and environmental responsibility in every transaction for a sustainable future.",
    image: {
      src: "/media/images/services/sustainableTrading1.avif",
      alt: "Global Scrap Solutions",
    },
  },
  {
    title: "Ethical Recycling",
    description:
      "Our commitment to ethical recycling practices supports global environmental responsibility, ensuring that every piece of metal scrap contributes to a sustainable and circular economy for future generations.",
    image: {
      src: "/media/images/services/sustainableTrading2.avif",
      alt: "Ethical Recycling",
    },
  },
];

export default function SustainableTrading() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold">Sustainable Trading</h2>
        <p className="text-gray-600 mt-2">
          Leading the future of sustainable metal scrap trading globally.
        </p>
      </div>

      <div className="space-y-20">
        {tradingItems.map((item, i) => (
          <motion.div
            key={i}
            className={`flex flex-col md:flex-row items-center ${
              i % 2 === 1 ? "md:flex-row-reverse" : ""
            } gap-8`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="w-full md:w-1/2 rounded-xl overflow-hidden shadow-lg">
              <Image
                src={item.image.src}
                alt={item.image.alt}
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
