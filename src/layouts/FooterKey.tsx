import React from "react"
import { validateLicense } from "../utils/validateLicense"

interface FooterProps {
  style: React.CSSProperties
  children: React.ReactNode
}

const FooterKey: React.FC<FooterProps> = () => {
  const key = process.env.NEXT_PUBLIC_PROJECT_LICENSE
  const isValid = validateLicense(key)

  if (!isValid) {
    return (
      <footer className="text-center p-4 text-sm text-slate-700-500">
        Developed by{" "}
        <a
          href="https://linkedin.com/in/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
        >
          Your Name
        </a>
      </footer>
    )
  }

  return null
}

export default FooterKey
