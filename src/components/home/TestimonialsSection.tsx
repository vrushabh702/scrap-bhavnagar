"use client"

import Image from "next/image"

type Testimonial = {
  name: string
  message: string
  quote: string
  rating: number
  avatar: string
}

export default function TestimonialsSection() {
  const testimonials: Testimonial[] = [
    {
      name: "John Doe",
      quote: "Smooth transactions and clear communication",
      message: `Al Enterprise is one of the most professional buyers we've worked with in India. They clearly understand the international trade process, and every container we shipped was handled without delays. Hope to expand business with them in future.`,
      rating: 5,
      avatar: "/media/images/home/testimonial/john.avif",
    },
    {
      name: "Jane Smith",
      quote: "They are serious and consistent buyers.",
      message: `We started with one container of copper wire scrap, and now we're doing monthly shipments. Mr. Yahiya is honest, responsive, and ensures his side of the deal is fulfilled every time. Highly recommended.`,
      rating: 5,
      avatar: "/media/images/home/testimonial/jane.avif",
    },
  ]

  return (
    <section
      className="relative bg-fixed bg-cover bg-center text-white py-20 px-4"
      style={{
        backgroundImage: "url('/media/images/home/testimonial/background.jpg')",
      }}
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
        {testimonials.map((t, idx) => (
          <div
            key={idx}
            className="bg-black/60 rounded-xl p-6 shadow-lg backdrop-blur-sm"
          >
            <div className="text-xl font-bold mb-3 text-center">
              {"★".repeat(t.rating)}
            </div>
            <p className="italic text-lg text-center mb-4">"{t.quote}"</p>
            <p className="text-sm text-center font-light">{t.message}</p>
            <div className="mt-6 flex flex-col items-center justify-center">
              <Image
                src={t.avatar}
                alt={t.name}
                width={48}
                height={48}
                className="rounded-full object-cover"
              />
              <p className="mt-2 text-white text-sm">{t.name}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
