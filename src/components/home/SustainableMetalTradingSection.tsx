"use client"

import Image from "next/image"
import { JSX } from "react"

type CardItem = {
  image: string
  title: string
  description: string
}

export default function SustainableMetalTradingSection(): JSX.Element {
  const cards: CardItem[] = [
    {
      image: "/media/images/home/scrap-1.jpg",
      title: "Import and Export Services",
      description:
        "Specializing in ferrous and non-ferrous metal scrap for global markets.",
    },
    {
      image: "/media/images/home/scrap-2.avif",
      title: "Reliable Sourcing Solutions",
      description:
        "Efficient logistics and competitive pricing for all your metal scrap needs.",
    },
    {
      image: "/media/images/home/scrap-3.avif",
      title: "Sustainable Recycling Initiatives",
      description:
        "Commitment to global environmental responsibility through ethical trade practices.",
    },
  ]

  return (
    <section className="w-full bg-[#1e211e] py-16 px-6 text-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Sustainable Metal Trading</h2>
        <p className="text-gray-300 mb-12 max-w-2xl mx-auto">
          Leading global provider of high-quality metal scrap with sustainable
          and ethical practices.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-md text-gray-800 flex flex-col"
            >
              <Image
                src={card.image}
                alt={card.title}
                width={400}
                height={250}
                className="w-full h-56 object-cover"
              />
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="font-semibold text-lg mb-2">{card.title}</h3>
                <p className="text-sm text-gray-600">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
