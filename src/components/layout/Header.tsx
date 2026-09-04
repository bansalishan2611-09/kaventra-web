"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "/about" },
    { name: "Ecosystem", href: "/ecosystem" },
    { name: "Ventures", href: "/ventures" },
    { name: "Documentation", href: "/documentation" },
    { name: "Updates", href: "/updates" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-black/50 backdrop-blur-xl border-b border-white/5 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group relative z-50">
          <div className="relative w-8 h-8 overflow-hidden bg-white rounded-md p-1 transition-transform group-hover:scale-105">
            <Image
              src="/favicon.png"
              alt="KAVENTRA"
              fill
              className="object-contain"
            />
          </div>
          <span className="font-heading font-semibold text-lg tracking-wide text-white transition-opacity group-hover:opacity-80">
            KAVENTRA
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 backdrop-blur-md">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-white/70 hover:text-white hover:bg-white/10 px-4 py-1.5 rounded-full transition-all duration-300"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <Link href="/careers" className="text-sm font-medium text-white/70 hover:text-white transition-colors">
            Careers
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium bg-white text-black px-5 py-2 rounded-full hover:scale-105 transition-transform duration-300"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden relative z-50 text-white/80 p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/95 backdrop-blur-xl z-40 flex flex-col justify-center items-center transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <nav className="flex flex-col items-center gap-6">
          {navLinks.concat([{ name: "Careers", href: "/careers" }, { name: "Contact", href: "/contact" }]).map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-3xl font-heading font-medium text-white/80 hover:text-white transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
