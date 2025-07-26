"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { IconType } from "react-icons";
import {
  FaGavel,
  FaClipboard,
  FaMoneyCheckAlt,
  FaCalendarAlt,
  FaTruck,
  FaHandshake,
} from "react-icons/fa";
import { JSX } from "react";

type TimelineCardProps = {
  icon: JSX.Element;
  title: string;
  description: string;
  step: number;
};

const steps: TimelineCardProps[] = [
  {
    icon: <FaClipboard />,
    title: "Register to Bid",
    description:
      "Join us effortlessly as a seller or buyer with our simple sign-up process.",
    step: 1,
  },
  {
    icon: <FaGavel />,
    title: "Bid and Win",
    description:
      "Engage in the bidding process and get hold of the scrap materials listed on our platform, through auction cycles.",
    step: 2,
  },
  {
    icon: <FaMoneyCheckAlt />,
    title: "Pay in Advance",
    description:
      "Secure the deal with an upfront auction payment after signing the contract, keeping operations smooth and sellers satisfied.",
    step: 3,
  },
  {
    icon: <FaCalendarAlt />,
    title: "Schedule Pick-ups",
    description:
      "Arrange material pickups conveniently through our portal for organized scheduling and hassle-free collections.",
    step: 4,
  },
  {
    icon: <FaTruck />,
    title: "Pick-up of Materials",
    description:
      "Coordinate vehicle arrangements for scheduled pickups, ensuring swift and efficient transportation.",
    step: 5,
  },
  {
    icon: <FaHandshake />,
    title: "Final Payment",
    description:
      "Complete the transaction with the final payment once the auction closes and you get the nod.",
    step: 6,
  },
];

const containerVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const StepsToBuy = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section className="py-20 bg-white" id="steps" ref={ref}>
      <div className="max-w-5xl mx-auto text-center mb-12 px-4">
        <h2 className="text-5xl font-bold text-gray-800 mb-4">Steps to Buy</h2>
        <p className="text-gray-600 text-lg">
          Uncover how simple it is to buy scrap materials on ScrapEco. From
          browsing listings to doorstep delivery, we’ve made every step quick
          and hassle-free for you!
        </p>
      </div>

      <motion.div
        variants={containerVariant}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="relative"
      >
        {/* Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-300 z-0" />

        {steps.map(({ icon, title, description, step }, index) => {
          const isEven = step % 2 === 0;

          return (
            <motion.div
              key={index}
              variants={cardVariant}
              className={`relative w-full flex ${
                isEven ? "justify-start" : "justify-end"
              } my-8`}
            >
              {/* Step Circle */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-white border-2 border-gray-500 z-14 flex items-center justify-center text-lg font-semibold">
                {String(step).padStart(2, "0")}
              </div>

              {/* Card */}
              <div
                className={`relative bg-green-200 shadow-lg rounded-md p-6 w-[90%] max-w-xl z-20 ${
                  isEven ? "ml-[10%]" : "mr-[10%]"
                }`}
              >
                <div className="flex gap-4 items-start">
                  <div className="bg-green-800 p-6 rounded-full text-amber-400 text-2xl">
                    {icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-1">
                      {title}
                    </h3>
                    <div className="h-1 w-12 bg-amber-500 mb-3" />
                    <p className="text-gray-600 text-base leading-relaxed">
                      {description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default StepsToBuy;
