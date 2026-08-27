"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "海鮮一覧", href: "/seafood" },
    { name: "旬の厳選", href: "/seasonal" },
    { name: "産地について", href: "/sourcing" },
    { name: "海鮮の文化", href: "/culture" },
    { name: "読み物", href: "/journal" },
  ];

  // Determine if we need light text (only on home page when not scrolled and mobile menu is closed)
  const useLightText = pathname === "/" && !isScrolled && !mobileMenuOpen;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
        isScrolled
          ? "bg-ivory/95 backdrop-blur-md border-sand py-4 shadow-sm"
          : "bg-transparent border-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 z-50 relative group">
          <span className={`font-serif text-2xl font-semibold tracking-widest transition-colors ${useLightText ? "text-ivory group-hover:text-ivory/80" : "text-navy group-hover:text-vermilion"}`}>
            海川
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm font-serif tracking-widest transition-colors ${
                useLightText
                  ? "text-ivory/90 hover:text-white"
                  : pathname.startsWith(link.href)
                  ? "text-vermilion font-medium"
                  : "text-charcoal/80 hover:text-vermilion"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            className={`text-sm font-serif tracking-widest border px-5 py-2 transition-colors duration-300 ${
              useLightText
                ? "border-ivory text-ivory hover:bg-ivory hover:text-navy"
                : "border-navy text-navy hover:bg-navy hover:text-ivory"
            }`}
          >
            お問い合わせ
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className={`md:hidden z-50 p-2 transition-colors ${useLightText ? "text-ivory" : "text-navy"}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="メニュー切り替え"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 bg-ivory z-40 overflow-y-auto transition-all duration-500 ease-in-out ${
            mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <div className="flex flex-col items-center justify-start min-h-full pt-32 pb-16 px-6">
            <nav className="flex flex-col items-center gap-6 sm:gap-8 w-full">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-xl sm:text-2xl font-serif tracking-widest text-navy hover:text-vermilion transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-6 text-sm font-serif tracking-widest border border-navy text-navy px-8 py-3 hover:bg-navy hover:text-ivory transition-colors duration-300"
              >
                お問い合わせ
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
