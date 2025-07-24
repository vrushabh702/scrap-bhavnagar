"use client"

import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaGlobe,
  FaRecycle,
} from "react-icons/fa"
import { IconType } from "react-icons"
interface ContactInfo {
  icon: IconType
  label: string
  href?: string
  isLink?: boolean
}

interface InfoBlock {
  icon: IconType
  title: string
  description: string
}

interface SocialLink {
  icon: IconType
  href: string
  label: string
}

const infoBlocks: InfoBlock[] = [
  {
    icon: FaGlobe,
    title: "AIEnterprise | Metal Scrap Importers & Exporters",
    description: "HMS 1 & 2 • Motor Scrap • Aluminum • Industrial Recyclables",
  },
  {
    icon: FaRecycle,
    title: "Driving Ethical Recycling Worldwide",
    description: "Based in Bhavnagar, Gujarat — Serving Global Markets",
  },
  {
    icon: FaMapMarkerAlt,
    title: "",
    description:
      "Plot No. 28/F, Madhiya Road, Near Victor Rolling Mill, Above Khumbarwada, Bhavnagar, Gujarat – 364006",
  },
]

const contactDetails: ContactInfo[] = [
  {
    icon: FaPhoneAlt,
    label: "+91 7434986686",
    href: "tel:+917434986686",
    isLink: true,
  },
  {
    icon: FaEnvelope,
    label: "aienterprise1008@gmail.com",
    href: "mailto:aienterprise1008@gmail.com",
    isLink: true,
  },
]

const inquiryContacts: ContactInfo[] = [
  {
    icon: FaEnvelope,
    label: "infoaienterprise3@gmail.com",
    href: "mailto:infoaienterprise3@gmail.com",
    isLink: true,
  },
  {
    icon: FaPhoneAlt,
    label: "+91-8000852020",
    href: "tel:+918000852020",
    isLink: true,
  },
]

const socialLinks: SocialLink[] = [
  {
    icon: FaFacebookF,
    href: "#",
    label: "Facebook",
  },
  {
    icon: FaInstagram,
    href: "#",
    label: "Instagram",
  },
  {
    icon: FaWhatsapp,
    href: "#",
    label: "WhatsApp",
  },
]

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
        {/* Left Section */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Sustainability</h2>

          {infoBlocks.map((block, i) => (
            <div key={i} className="flex items-start gap-2 mb-2">
              <block.icon className="text-green-500 mt-1" />
              <p className="text-sm">
                {block.title && (
                  <span className="font-bold">
                    {block.title}
                    <br />
                  </span>
                )}
                <em>{block.description}</em>
              </p>
            </div>
          ))}

          {contactDetails.map((item, i) => (
            <div key={i} className="flex items-center gap-2 mb-2">
              <item.icon className="text-green-500" />
              {item.isLink ? (
                <a href={item.href} className="text-sm hover:underline">
                  {item.label}
                </a>
              ) : (
                <span className="text-sm">{item.label}</span>
              )}
            </div>
          ))}

          <p className="text-xs text-gray-400 mt-4">
            © {new Date().getFullYear()} AIEnterprise. All rights reserved. |{" "}
            <span className="text-white font-semibold ml-1">
              Committed to Sustainable Trade
            </span>
          </p>
        </div>

        {/* Middle Section */}
        <div>
          <h2 className="text-lg font-semibold mb-4">For Inquiries</h2>

          {inquiryContacts.map((item, i) => (
            <div key={i} className="flex items-center gap-2 mb-2">
              <item.icon className="text-green-500" />
              <a href={item.href} className="text-sm hover:underline">
                {item.label}
              </a>
            </div>
          ))}

          <div className="flex gap-4 text-xl text-white mt-6">
            {socialLinks.map((social, i) => (
              <a
                key={i}
                href={social.href}
                aria-label={social.label}
                className="hover:text-green-500 transition-all"
              >
                <social.icon />
              </a>
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Innovation</h2>
          <form className="flex flex-col gap-4">
            <input
              type="email"
              placeholder="Your email for inquiries"
              className="rounded-md px-4 py-2 text-slate-300 outline-none focus:ring-2 ring-green-500"
            />
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white rounded-full py-2 font-medium transition-all"
            >
              Submit your inquiry now
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} All rights reserved.
      </div>
    </footer>
  )
}
