"use client"

import React from "react"
import { FaMapMarkerAlt, FaClock } from "react-icons/fa"

interface ContactInfo {
  title: string
  description: string
  location: string
  hours: string
  mapEmbedUrl: string
}

const contactInfo: ContactInfo = {
  title: "Contact Us",
  description:
    "Reach out to us for inquiries about sustainable metal scrap trading and our global services in import and export.",
  location:
    "Plot no 28/F, Madhiya Road, near Viktor Rollingmill, above Khumbharwada, Bhavnagar, Gujarat, India 364006",
  hours: "8 AM – 5 PM",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14739.237337982105!2d72.13400565912791!3d21.7621343446219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395f5a0df0be2f6f%3A0x2d8200847bb15a7e!2sBhavnagar%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1721800000000!5m2!1sen!2sin",
}

const ContactInfoSection: React.FC = () => {
  return (
    <section className="w-full py-16 bg-white">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-start gap-10">
        {/* Left Text Content */}
        <div className="w-full lg:w-1/2 space-y-6">
          <h2 className="text-4xl font-bold text-gray-900">
            {contactInfo.title}
          </h2>
          <p className="text-lg text-gray-600">{contactInfo.description}</p>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-green-600 mt-1" size={20} />
              <div>
                <h4 className="font-semibold text-gray-800">Location</h4>
                <p className="text-gray-600">{contactInfo.location}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <FaClock className="text-green-600 mt-1" size={20} />
              <div>
                <h4 className="font-semibold text-gray-800">Hours</h4>
                <p className="text-gray-600">{contactInfo.hours}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Map Embed */}
        <div className="w-full lg:w-1/2 h-[400px] rounded-xl overflow-hidden shadow-lg">
          <iframe
            src={contactInfo.mapEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  )
}

export default ContactInfoSection
