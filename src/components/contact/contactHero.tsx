"use client"
import React, { useState } from "react"

interface ContactFormData {
  name: string
  email: string
  message: string
}

export default function ContactHeroSection() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
  })

  const [errors, setErrors] = useState<Partial<ContactFormData>>({})
  const [submitted, setSubmitted] = useState(false)

  const validate = () => {
    const newErrors: Partial<ContactFormData> = {}
    if (!formData.name.trim()) newErrors.name = "Name is required"
    if (!formData.email.trim()) newErrors.email = "Email is required"
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Invalid email format"
    if (!formData.message.trim()) newErrors.message = "Message is required"

    return newErrors
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setErrors({ ...errors, [e.target.name]: undefined })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
    } else {
      // Send data somewhere or console.log
      console.log("Submitted:", formData)
      setSubmitted(true)
      setFormData({ name: "", email: "", message: "" })
    }
  }

  return (
    <section
      className="relative min-h-screen bg-fixed bg-cover bg-center bg-no-repeat flex items-center justify-center px-4 py-20"
      style={{
        backgroundImage: `url('/media/images/contact/heroContact.avif')`,
      }}
    >
      <div className="bg-white max-w-xl w-full rounded-3xl shadow-2xl p-8 space-y-6">
        <h2 className="text-3xl font-bold text-center">Contact Us</h2>
        <p className="text-center text-gray-600">
          Get in touch for sustainable metal scrap trading inquiries.
        </p>

        {submitted && (
          <div className="text-green-600 text-center font-medium">
            ✅ Your message has been sent!
          </div>
        )}

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium mb-1">
              Enter your first name
            </label>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              type="text"
              placeholder="Your first name here"
              className={`w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 ${
                errors.name ? "border-red-500" : "focus:ring-green-500"
              }`}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Enter your email address*
            </label>
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              type="email"
              placeholder="Your email address here"
              className={`w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 ${
                errors.email ? "border-red-500" : "focus:ring-green-500"
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Enter your message*
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              placeholder="Your message here"
              className={`w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 ${
                errors.message ? "border-red-500" : "focus:ring-green-500"
              }`}
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 rounded-full transition"
          >
            Submit your inquiry now
          </button>
        </form>
      </div>
    </section>
  )
}
