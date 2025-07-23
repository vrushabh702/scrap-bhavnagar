"use client"
import { motion } from "framer-motion"
import Image from "next/image"

const features = [
  {
    image: "/media/images/ferrous-scrap.avif",
    text: "High-quality ferrous and non-ferrous metal scrap.",
  },
  {
    image: "/media/images/pricing-options.avif",
    text: "Reliable sourcing with competitive pricing options.",
  },
  {
    image: "/media/images/logistics.avif",
    text: "Seamless logistics for efficient global operations.",
  },
]

export default function HeroSection() {
  return (
    <section className="bg-blue-900  text-white py-16 px-6 text-center">
      <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
        Sustainable Metal <br /> Scrap Trading Solutions
      </h1>
      <p className="mt-4 text-base sm:text-lg">
        Leading the future of ethical metal recycling globally.
      </p>
      <div className="mt-8">
        <button className="border border-white px-6 py-2 rounded-full text-white hover:bg-white hover:text-green-600 transition">
          Explore
        </button>
      </div>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <div key={index} className="bg-green-500 p-4 rounded">
            <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded">
              <motion.div
                initial={{ scale: 1.1, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="w-full h-full"
              >
                <Image
                  src={feature.image}
                  alt="Feature"
                  width={400}
                  height={300}
                  className="object-cover w-full h-full"
                />
              </motion.div>
            </div>
            <p className="mt-4 text-sm">{feature.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
