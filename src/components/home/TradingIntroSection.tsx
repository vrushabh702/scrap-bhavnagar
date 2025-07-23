"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { JSX } from "react"

type StatItem = {
  label: string
  value: string
}

type SectionContent = {
  heading: string
  description: string
  buttonLabel: string
  image: string
  stats: StatItem[]
}

export default function TradingIntroSection(): JSX.Element {
  const sections: SectionContent[] = [
    {
      heading: "Leading Sustainable Metal Scrap Trading",
      description:
        "Aienterprise is your trusted partner in global metal scrap trading, committed to ethical practices and sustainable recycling for a better future.",
      buttonLabel: "Explore",
      image: "/media/images/home/scrap-museum.avif",
      stats: [
        { label: "Ethical Trade", value: "150+" },
        { label: "Global Leader", value: "15" },
      ],
    },
    // 🔧 Add more sections here as needed
  ]

  return (
    <>
      {sections.map((section, index) => (
        <section
          key={index}
          className="w-full px-6 py-16 bg-white border-b border-gray-100"
        >
          <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
            {/* Left Text */}
            <div className="md:w-1/2 text-center md:text-left">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                {section.heading}
              </h2>
              <p className="text-gray-600 mb-6">{section.description}</p>
              <button className="border border-black text-slate-800 px-6 py-3 rounded-full text-sm font-medium hover:bg-black hover:text-white transition">
                {section.buttonLabel}
              </button>
            </div>

            {/* Right Image + Stats */}
            <div className="relative md:w-1/2">
              <motion.div
                initial={{ scale: 1.1, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="w-full h-full"
              >
                <Image
                  src={section.image}
                  alt={section.heading}
                  width={600}
                  height={400}
                  className="rounded-xl w-full object-cover"
                />
              </motion.div>
              <div className="md:absolute md:left-0 md:top-1/2 md:-translate-x-1/2 md:translate-y-1/2 bg-green-600 text-white px-4  py-4 md:px-8 md:py-6 md:flex md:space-x-12  space-y-4 md:space-y-0  shadow-lg rounded-md">
                {section.stats.map((item, i) => (
                  <div key={i} className="text-center">
                    <p className="text-3xl font-bold">{item.value}</p>
                    <p className="text-sm mt-1">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  )
}
