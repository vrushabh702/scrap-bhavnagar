"use client"

type FAQ = {
  question: string
  answer: string
}

export default function FaqSection() {
  const faqs: FAQ[] = [
    {
      question: "What type of scrap does your business handle?",
      answer:
        "We specialize in importing and processing a variety of scrap materials, including Bare Bright Copper Wire Scrap, Electrical Scrap with Insulators, HMS1 & HMS2 (80:20), and Electric Motor Scrap.",
    },
    {
      question: "Where is your business located?",
      answer:
        "We are based at Plot no 28/F Madhiya Road, near Viktor Rolling Mill, above Khumbarwada, Bhavnagar, Gujarat, India 364006.",
    },
    {
      question: "What makes your scrap the best deal in India?",
      answer:
        "We offer competitive pricing, high-quality materials with excellent recovery potential, and a sustainable approach, ensuring the best value for our clients across the country.",
    },
    {
      question: "How do you source your scrap materials?",
      answer:
        "We import scrap from various industrial regions across India as well as foreign countrys, carefully selecting and processing each batch to maintain quality and consistency.",
    },
    {
      question: "Do you offer customized scrap solutions?",
      answer:
        "Yes, we can tailor our offerings to meet specific industrial needs, ensuring you get the right materials for your projects.",
    },
    {
      question: "What is your process for importing scrap?",
      answer:
        "We source scrap nationwide, transport it to our facility, and dismantle or process it to optimize metal recovery, readying it for reuse.",
    },
  ]

  return (
    <section className="py-20 px-4 bg-white text-slate-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Frequently asked questions
        </h2>

        <div className="grid md:grid-cols-2 gap-y-12 gap-x-16">
          {faqs.map((faq, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
              <p className="text-slate-700 text-sm">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
