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

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
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
      const systemDark = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches;

      const defaultTheme = systemDark ? "dark" : "light";

      setTheme(defaultTheme);
      document.documentElement.classList.toggle(
        "light",
        defaultTheme === "light",
      );
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("light", newTheme === "light");
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${
          scrolled
            ? "bg-[var(--bg)]/80 backdrop-blur-xl border-b border-[var(--border)]"
            : "bg-transparent"
        }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 py-[16px] flex items-center justify-between">
        {/* LOGO */}
        <Link href="#home" className="flex items-center gap-2.5">
          <div className="w-[38px] h-[38px] rounded-[10px] bg-gradient-to-br from-[#7c5cfc] to-[#e040a0] flex items-center justify-center text-lg">
            ⚙️
          </div>

          <span className="font-syne text-[20px] font-bold text-[var(--text)]">
            Nova<span className="text-[var(--purple-light)]">Tech</span>
          </span>
        </Link>

        {/* DESKTOP NAV */}
        <ul className="hidden md:flex items-center gap-8">
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
        <div className="flex items-center gap-3">
          {/* THEME TOGGLE */}
          <button
            onClick={toggleTheme}
            className="w-10 h-10 flex items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--card)]/60 hover:bg-[var(--card2)] transition"
          >
            {theme === "dark" ? (
              <FaSun className="text-yellow-400" />
            ) : (
              <FaMoon className="text-[var(--purple-light)]" />
            )}
          </button>

          {/* CTA */}
          <Link
            href="#contact"
            className="hidden md:flex bg-gradient-to-r from-[#7c5cfc] to-[#e040a0] text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:opacity-90 transition"
          >
            Get a Quote →
          </Link>

          {/* MOBILE BUTTON */}
          <button
            className="md:hidden w-10 h-10 flex items-center justify-center border border-[var(--border)] rounded-lg bg-[var(--card)]/60"
            onClick={() => setMenuOpen(true)}
          >
            <FaBars className="text-[var(--text)]" />
          </button>
        </div>
      </div>

      {/* BACKDROP */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40 md:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* MOBILE MENU */}
      <div
        className={`fixed top-0 right-0 h-full w-[50%] max-w-[320px] z-50
        bg-[var(--bg)]/95 backdrop-blur-xl border-l border-[var(--border)]
        transform transition-transform duration-300 md:hidden
        ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* HEADER */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-[var(--border)]">
          <span className="text-[var(--text)] font-semibold">Menu</span>

          <button
            onClick={() => setMenuOpen(false)}
            className="w-9 h-9 flex items-center justify-center rounded-lg border border-[var(--border)]"
          >
            <FaTimes className="text-[var(--text)]" />
          </button>
        </div>

        {/* LINKS */}
        <div className="flex flex-col gap-5 p-5">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-[var(--muted)] hover:text-[var(--text)] text-[15px]"
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-4 bg-gradient-to-r from-[#7c5cfc] to-[#e040a0] text-white px-5 py-3 rounded-xl text-sm font-semibold text-center"
          >
            Get a Quote →
          </Link>
        </div>
      </div>
    </nav>
  );
}
