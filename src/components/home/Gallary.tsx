"use client"

import Image from "next/image"
import { JSX } from "react"

type GalleryImage = {
  src: string
  alt: string
}

export default function GallerySection(): JSX.Element {
  const galleryImages: GalleryImage[] = [
    { src: "/media/gallery/image1.jpg", alt: "Scrap motors" },
    { src: "/media/gallery/image2.avif", alt: "Copper wire scrap" },
    { src: "/media/gallery/image3.avif", alt: "Steel scrap" },
    { src: "/media/gallery/image4.jpg", alt: "Brake rotors" },
    { src: "/media/gallery/image5.jpg", alt: "Industrial parts" },
    { src: "/media/gallery/image6.jpg", alt: "Battery scrap" },
    { src: "/media/gallery/image7.avif", alt: "Scrap yard machinery" },
    { src: "/media/gallery/image8.jpg", alt: "Mixed metal scrap" },
  ]

  return (
    <section className="w-full bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-2">Gallery</h2>
        <p className="text-gray-600 mb-10">
          Showcasing our commitment to sustainable metal scrap trading globally.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {galleryImages.map((img, index) => (
            <div key={index} className="overflow-hidden rounded-xl shadow-sm">
              <Image
                src={img.src}
                alt={img.alt}
                width={300}
                height={300}
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
