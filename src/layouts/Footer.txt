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

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
        {/* Left Section */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Sustainability</h2>
          <div className="flex items-start gap-2 mb-2">
            <FaGlobe className="text-green-500 mt-1" />
            <p className="text-sm">
              <span className="font-bold">
                AIEnterprise | Metal Scrap Importers & Exporters
              </span>
              <br />
              <em>
                HMS 1 & 2 • Motor Scrap • Aluminum • Industrial Recyclables
              </em>
            </p>
          </div>
          <div className="flex items-start gap-2 mb-2">
            <FaRecycle className="text-green-500 mt-1" />
            <p className="text-sm">
              Driving Ethical Recycling Worldwide <br />
              Based in Bhavnagar, Gujarat — Serving Global Markets
            </p>
          </div>
          <div className="flex items-start gap-2 mb-2">
            <FaMapMarkerAlt className="text-green-500 mt-1" />
            <p className="text-sm">
              Plot No. 28/F, Madhiya Road, Near Victor Rolling Mill, Above
              Khumbarwada, Bhavnagar, Gujarat – 364006
            </p>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <FaPhoneAlt className="text-green-500" />
            <a href="tel:+917434986686" className="text-sm hover:underline">
              +91 7434986686
            </a>
          </div>
          <div className="flex items-center gap-2 mb-4">
            <FaEnvelope className="text-green-500" />
            <a
              href="mailto:aienterprise1008@gmail.com"
              className="text-sm hover:underline"
            >
              aienterprise1008@gmail.com
            </a>
          </div>
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} AIEnterprise. All rights reserved. |
            <span className="text-white font-semibold ml-1">
              Committed to Sustainable Trade
            </span>
          </p>
        </div>

        {/* Middle Section */}
        <div>
          <h2 className="text-lg font-semibold mb-4">For Inquiries</h2>
          <div className="flex items-center gap-2 mb-2">
            <FaEnvelope className="text-green-500" />
            <a
              href="mailto:infoaienterprise3@gmail.com"
              className="text-sm hover:underline"
            >
              infoaienterprise3@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-2 mb-6">
            <FaPhoneAlt className="text-green-500" />
            <a href="tel:+918000852020" className="text-sm hover:underline">
              +91-8000852020
            </a>
          </div>

          <div className="flex gap-4 text-xl text-white">
            <a
              href="#"
              className="hover:text-green-500 transition-all"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="hover:text-green-500 transition-all"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="hover:text-green-500 transition-all"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>
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
