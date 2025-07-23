"use client";

import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
export interface GalleryImage {
  src: string;
  alt: string;
}

const images: GalleryImage[] = [
  {
    src: "/media/images/services/serviceGallary1.avif",
    alt: "Stacked Cars in Scrap Yard",
  },
  {
    src: "/media/images/services/serviceGallary2.avif",
    alt: "Rusty Conveyor Machine",
  },
  {
    src: "/media/images/services/serviceGallary3.avif",
    alt: "Scrap Area with Fence",
  },
  {
    src: "/media/images/services/serviceGallary4.avif",
    alt: "Rusty Steel Beams",
  },
];

const ServiceGallerySection = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="py-16 px-4 text-center" ref={ref}>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold"
      >
        Gallery
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="mt-2 mb-10 text-gray-600"
      >
        Explore our commitment to sustainable metal scrap trading solutions.
      </motion.p>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        {images.map((img, i) => (
          <motion.div
            key={i}
            className={`rounded-xl overflow-hidden shadow-md  ${
              i % 2 === 1 ? "mt-10" : ""
            }`}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.4 }}
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={600}
              height={400}
              className={`w-full h-full object-cover `}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default ServiceGallerySection;
