"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi"; // Heroicons for menu/cross
import clsx from "clsx";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about-metal-scrap" },
  { name: "Services", href: "/services-metal-scrap-trading" },
  { name: "Contact", href: "/contact-metal-scrap" },
  { name: "Blog", href: "/scrap-enterprise-blogs" },
];

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full px-6 py-4 flex items-center justify-between bg-slate-100 shadow-sm">
      {/* Logo */}
      <div className="flex flex-col items-center space-y-1">
        <Image src="/media/images/logo.png" alt="Logo" width={40} height={40} />
        <span className="text-xs tracking-wide text-gray-600 font-semibold">
          AI ENTERPRISE
        </span>
      </div>

      {/* Desktop Nav */}
      <nav className="hidden md:flex space-x-8">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={clsx(
              "text-sm font-medium text-slate-800 hover:underline underline-offset-4",
              pathname === item.href && "underline"
            )}
          >
            {item.name}
          </Link>
        ))}
      </nav>

      {/* Mobile Menu Toggle */}
      <button
        className="md:hidden text-slate-800 text-2xl focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <HiX /> : <HiMenu />}
      </button>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute top-20 right-6 bg-white  rounded shadow-lg w-48 flex flex-col z-50 md:hidden">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={clsx(
                "px-4 py-3 text-sm text-slate-800 hover:bg-slate-100 border-b last:border-none",
                pathname === item.href && "font-semibold underline"
              )}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
