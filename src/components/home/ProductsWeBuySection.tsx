"use client"

import Image from "next/image"
import { JSX } from "react"

type ProductItem = {
  image: string
  title: string
  details: string[]
}

export default function ProductsWeBuySection(): JSX.Element {
  const products: ProductItem[] = [
    {
      image: "/media/images/home/product/copper.avif",
      title: "Bare Bright Copper Wire Scrap (99.9%)",
      details: [
        "Uncoated, unalloyed, clean copper",
        "Premium grade for re-melting Sourced from dismantled industrial cables",
      ],
    },
    {
      image: "/media/images/home/product/hms.avif",
      title: "HMS1 & HMS2 (80:20)",
      details: [
        "HMS 1: Heavy, clean steel scrap (thickness 6mm+), includes beams, plates, and industrial parts.",
        "HMS 2: Slightly lighter scrap (below 6mm), includes galvanized, painted, or mixed thin metal sheets",
      ],
    },
    {
      image: "/media/images/home/product/automobile.avif",
      title: "Automobile Brake Disc & Drum Scrap",
      details: [
        "Cast iron brake rotors & drums",
        "Heavy weight, clean grade",
        "Suitable for melting and foundry use",
      ],
    },
  ]

  return (
    <section className="w-full bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 text-gray-900">
          Products We Buy
        </h2>
        <p className="text-gray-600 mb-12">
          Provide a short description of categories listed below.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-[#0c1e2c] rounded-xl overflow-hidden shadow-md text-white flex flex-col"
            >
              <Image
                src={product.image}
                alt={product.title}
                width={400}
                height={250}
                className="w-full h-56 object-cover"
              />
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="font-semibold text-lg mb-4">{product.title}</h3>
                <ul className="text-sm space-y-2 text-gray-100">
                  {product.details.map((line, i) => (
                    <li key={i}>• {line}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
