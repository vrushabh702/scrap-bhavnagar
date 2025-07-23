"use client";

import React from "react";

interface AboutUsContent {
  id: number;
  title: string;
  //   subtitle: string;
  description: string;
  buttonText: string;
  onClick?: () => void;
}

const aboutUsData: AboutUsContent[] = [
  {
    id: 1,
    title: "About Us – Your Trusted Scrap Import Partner",
    description:
      "Our mission is to provide the best deals you can get in India by sourcing premium scrap such as Bare Bright Copper Wire Scrap, Electrical Scrap with Insulators, HMS1 & HMS2 (80:20), and Electric Motor Scrap. We aim to support a circular economy by transforming industrial waste into valuable resources for manufacturers and recyclers.",
    buttonText: "Learn more",
    onClick: () => alert("Redirect to About Us Page"),
  },
];

const AboutUsSection: React.FC = () => {
  return (
    <section className="bg-green-900 text-white py-20 px-4 md:px-10 text-center">
      {aboutUsData.map(({ id, title, description, buttonText, onClick }) => (
        <div key={id} className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>

          <p className="text-lg md:text-xl mb-10 leading-relaxed">
            {description}
          </p>
          <button
            onClick={onClick}
            className="bg-white text-green-700 font-semibold px-6 py-3 rounded-full border border-green-800 hover:bg-green-100 transition"
          >
            {buttonText}
          </button>
        </div>
      ))}
    </section>
  );
};

export default AboutUsSection;
