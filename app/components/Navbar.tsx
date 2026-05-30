"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

function Logo({ size = 38 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="logo-grad" x1="0" y1="0" x2="38" y2="38" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#7c5cfc" />
          <stop offset="100%" stopColor="#e040a0" />
        </linearGradient>
      </defs>
      {/* Rounded square bg */}
      <rect width="38" height="38" rx="10" fill="url(#logo-grad)" />
      {/* Shield outline */}
      <path
        d="M19 7L9 11v8c0 5.25 4.3 10.15 10 11.35C24.7 29.15 29 24.25 29 19v-8L19 7z"
        fill="white"
        fillOpacity="0.15"
      />
      <path
        d="M19 7L9 11v8c0 5.25 4.3 10.15 10 11.35C24.7 29.15 29 24.25 29 19v-8L19 7z"
        stroke="white"
        strokeWidth="1.4"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Circuit node center */}
      <circle cx="19" cy="19" r="2.5" fill="white" />
      {/* Circuit lines */}
      <line x1="19" y1="16.5" x2="19" y2="13" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="21.5" y1="19" x2="25" y2="19" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="19" y1="21.5" x2="19" y2="25" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="16.5" y1="19" x2="13" y2="19" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
      {/* Corner dots */}
      <circle cx="19" cy="13" r="1.2" fill="white" fillOpacity="0.7" />
      <circle cx="25" cy="19" r="1.2" fill="white" fillOpacity="0.7" />
      <circle cx="19" cy="25" r="1.2" fill="white" fillOpacity="0.7" />
      <circle cx="13" cy="19" r="1.2" fill="white" fillOpacity="0.7" />
    </svg>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme]       = useState("dark");
  const [mounted, setMounted]   = useState(false);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved) {
      setTheme(saved);
      document.documentElement.classList.toggle("light", saved === "light");
    } else {
      const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const defaultTheme = systemDark ? "dark" : "light";
      setTheme(defaultTheme);
      document.documentElement.classList.toggle("light", defaultTheme === "light");
    }
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("light", newTheme === "light");
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
          ${scrolled
            ? "bg-[var(--bg)]/80 backdrop-blur-xl border-b border-[var(--border)]"
            : "bg-transparent"
          }`}
      >
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-[14px] sm:py-[16px] flex items-center justify-between">

          {/* LOGO */}
          <Link href="#home" className="flex items-center gap-2.5 shrink-0">
            <Logo size={38} />
            <span className="font-syne text-[18px] sm:text-[20px] font-bold text-[var(--text)]">
              Axon<span className="text-[var(--purple-light)]">sys</span>
            </span>
          </Link>

          {/* DESKTOP NAV */}
          <ul className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-[var(--muted)] hover:text-[var(--text)] text-[14px] transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-2 sm:gap-3">
            {mounted && (
              <button
                onClick={toggleTheme}
                className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--card)]/60 hover:bg-[var(--card2)] transition"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <FaSun className="text-yellow-400 text-sm sm:text-base" />
                ) : (
                  <FaMoon className="text-[var(--purple-light)] text-sm sm:text-base" />
                )}
              </button>
            )}

            <Link
              href="#contact"
              className="hidden md:flex bg-gradient-to-r from-[#7c5cfc] to-[#e040a0] text-white px-4 lg:px-5 py-2.5 rounded-full text-sm font-semibold hover:opacity-90 transition whitespace-nowrap"
            >
              Get a Quote →
            </Link>

            <button
              className="md:hidden w-9 h-9 flex items-center justify-center border border-[var(--border)] rounded-lg bg-[var(--card)]/60"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
            >
              <FaBars className="text-[var(--text)]" />
            </button>
          </div>
        </div>
      </nav>

      {/* BACKDROP */}
      <div
        className={`fixed inset-0 bg-black/60 z-40 md:hidden transition-opacity duration-300
          ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={() => setMenuOpen(false)}
      />

      {/* MOBILE DRAWER */}
      <div
        className={`fixed top-0 right-0 h-full w-[75%] max-w-[300px] z-50
          bg-[var(--bg)] backdrop-blur-xl border-l border-[var(--border)]
          transform transition-transform duration-300 ease-in-out md:hidden
          ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-[var(--border)]">
          <div className="flex items-center gap-2">
            <Logo size={28} />
            <span className="font-syne font-bold text-[var(--text)]">Axon<span className="text-[var(--purple-light)]">sys</span></span>
          </div>
          <button
            onClick={() => setMenuOpen(false)}
            className="w-9 h-9 flex items-center justify-center rounded-lg border border-[var(--border)]"
            aria-label="Close menu"
          >
            <FaTimes className="text-[var(--text)]" />
          </button>
        </div>

        <div className="flex flex-col p-5 gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-[var(--muted)] hover:text-[var(--text)] hover:bg-[var(--card)] text-[15px] px-3 py-3 rounded-xl transition-colors"
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-5 bg-gradient-to-r from-[#7c5cfc] to-[#e040a0] text-white px-5 py-3 rounded-xl text-sm font-semibold text-center"
          >
            Get a Quote →
          </Link>
        </div>
      </div>
    </>
  );
}