// components/OurBenefits.tsx
"use client";

import Image from "next/image";

const benefits = [
  {
    title: "Enhanced Transparency",
    description:
      "Connect with hundreds of verified suppliers. Foster trust with transparent transactions between scrap buyers and sellers.",
    image: "/media/images/buyers/transparency.png",
  },
  {
    title: "Revenue Enhancement",
    description:
      "Access Empower buyers to drive up to 2x revenue and streamline workflows.",
    image: "/media/images/buyers/revenue.png",
  },
  {
    title: "Regulatory Support",
    description:
      "Facilitate easy access to EPR credits and ensure regulatory compliance.",
    image: "/media/images/buyers/regulatory.png",
  },
];

export default function OurBenefits() {
  return (
    <section className="bg-gray-100 py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-2">Our Benefits</h2>
        <p className="text-gray-500 text-lg mb-12">
          Discover what makes us stand out from the crowd.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white border border-gray-300 rounded-xl shadow-sm hover:shadow-md transition duration-300 p-6 flex flex-col justify-between"
            >
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
              <div className="mt-6 overflow-hidden rounded-lg">
                <Image
                  src={benefit.image}
                  alt={benefit.title}
                  width={500}
                  height={300}
                  className="w-full h-48 object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
