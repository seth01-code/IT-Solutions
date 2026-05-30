"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  FaLaptop,
  FaCode,
  FaHeadset,
  FaCloud,
  FaShieldAlt,
  FaTools,
  FaNetworkWired,
} from "react-icons/fa";

const floatingCards = [
  {
    label: "Technical",
    sub: "Support",
    icon: FaHeadset,
    bg: "from-[#ff7a2f] to-[#ff4f00]",
  },
  {
    label: "Software",
    sub: "Installation",
    icon: FaCode,
    bg: "from-[#00d4ff] to-[#0088ff]",
  },
  {
    label: "Device",
    sub: "Management",
    icon: FaLaptop,
    bg: "from-[#9b59b6] to-[#6c3483]",
  },
  {
    label: "System",
    sub: "Maintenance",
    icon: FaTools,
    bg: "from-[#ffb930] to-[#ff8c00]",
  },
  {
    label: "Cloud",
    sub: "Backup",
    icon: FaCloud,
    bg: "from-[#00c896] to-[#007a5e]",
  },
  {
    label: "Cyber",
    sub: "Security",
    icon: FaShieldAlt,
    bg: "from-[#e040a0] to-[#a0006a]",
  },
];

// Planets: radius matches the 3 rings (310=outer, 230=mid, 150=inner) + extras between
const planets = [
  // outer ring
  { size: 16, radius: 310, duration: 18, startAngle: 0,   color: "#a78bfa", shadow: "rgba(167,139,250,0.7)" },
  { size: 10, radius: 310, duration: 18, startAngle: 180, color: "#c084fc", shadow: "rgba(192,132,252,0.6)" },
  // mid ring
  { size: 14, radius: 230, duration: 12, startAngle: 60,  color: "#f472b6", shadow: "rgba(244,114,182,0.7)" },
  { size: 9,  radius: 230, duration: 12, startAngle: 240, color: "#fb7185", shadow: "rgba(251,113,133,0.6)" },
  // inner ring
  { size: 12, radius: 150, duration: 7,  startAngle: 120, color: "#34d399", shadow: "rgba(52,211,153,0.7)"  },
  { size: 8,  radius: 150, duration: 7,  startAngle: 300, color: "#38bdf8", shadow: "rgba(56,189,248,0.6)"  },
];

export default function Hero() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const handleMouseMove = (e: MouseEvent) => {
      setMouse({
        x: (e.clientX / window.innerWidth - 0.5) * 16,
        y: (e.clientY / window.innerHeight - 0.5) * 16,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mounted]);

  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden bg-[var(--bg)] text-[var(--text)] pb-16 lg:pb-0">
      {/* planet keyframes */}
      <style>{`
        ${planets.map((p, i) => `
          @keyframes planet${i} {
            from { transform: rotate(${p.startAngle}deg) translateX(${p.radius}px) rotate(-${p.startAngle}deg); }
            to   { transform: rotate(${p.startAngle + 360}deg) translateX(${p.radius}px) rotate(-${p.startAngle + 360}deg); }
          }
        `).join("")}
      `}</style>

      {/* glow */}
      <div className="absolute w-[420px] h-[420px] blur-[120px] bg-[var(--purple)]/20 top-[-120px] right-[-80px]" />
      <div className="absolute w-[320px] h-[320px] blur-[120px] bg-[var(--pink)]/10 bottom-[-80px] left-[-80px]" />

      {/* ORBIT — desktop only */}
      {mounted && (
        <div
          className="absolute inset-0 pointer-events-none hidden lg:block"
          style={{
            transform: `translate(${mouse.x}px, ${mouse.y}px)`,
            transition: "transform 0.2s ease-out",
          }}
        >
          <div className="absolute right-[120px] top-1/2 -translate-y-1/2 w-[620px] h-[620px]">
            {/* rings */}
            <div className="absolute inset-0 rounded-full border border-[var(--border)]" />
            <div className="absolute inset-[80px] rounded-full border border-[var(--border)]" />
            <div className="absolute inset-[160px] rounded-full border border-[var(--border)]" />

            {/* planets */}
            {planets.map((p, i) => (
              <div
                key={i}
                className="absolute top-1/2 left-1/2"
                style={{
                  width: p.size,
                  height: p.size,
                  marginTop: -p.size / 2,
                  marginLeft: -p.size / 2,
                  borderRadius: "50%",
                  background: p.color,
                  boxShadow: `0 0 ${p.size + 6}px ${p.shadow}`,
                  animation: `planet${i} ${p.duration}s linear infinite`,
                }}
              />
            ))}

            {/* center */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
              w-[90px] h-[90px] rounded-2xl bg-gradient-to-br from-[var(--purple)] to-[var(--pink)]
              flex items-center justify-center text-white shadow-[0_0_60px_rgba(124,92,252,0.4)]
              animate-pulse"
            >
              <FaNetworkWired size={32} />
            </div>

            {/* orbit cards */}
            {floatingCards.map((card, i) => {
              const angle = (i / floatingCards.length) * Math.PI * 2;
              const radius = 210;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;
              const Icon = card.icon;

              return (
                <div
                  key={card.label}
                  className="absolute top-1/2 left-1/2"
                  style={{ transform: `translate(${x}px, ${y}px)` }}
                >
                  <div className="bg-[var(--card)] border border-[var(--border)] rounded-[14px] px-4 py-3 flex items-center gap-3 -translate-x-1/2 -translate-y-1/2">
                    <div
                      className={`w-10 h-10 rounded-[10px] bg-gradient-to-br ${card.bg} flex items-center justify-center text-white shrink-0`}
                    >
                      <Icon />
                    </div>
                    <div>
                      <div className="text-sm font-medium whitespace-nowrap">{card.label}</div>
                      <div className="text-xs text-[var(--muted)]">{card.sub}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* CONTENT */}
      <div className="max-w-[1200px] mx-auto px-6 relative z-10 w-full">
        <div className="w-full lg:w-1/2">
          <h1 className="font-syne text-[clamp(32px,6vw,72px)] font-black leading-[1.05] mb-6">
            Reliable <br />
            <span className="text-[var(--purple-light)]">Windows</span> <br />
            IT Support
          </h1>

          <p className="text-[var(--muted)] mb-8 max-w-[520px] text-sm sm:text-base">
            Professional IT support, cybersecurity, maintenance, and system
            management.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="#services"
              className="bg-gradient-to-r from-[var(--purple)] to-[var(--pink)] text-white px-6 py-3 rounded-full text-center font-medium"
            >
              Explore Services →
            </Link>
            <Link
              href="#contact"
              className="border border-[var(--border)] px-6 py-3 rounded-full text-center font-medium"
            >
              Get Support
            </Link>
          </div>

          {/* Mobile service grid */}
          <div className="mt-10 grid grid-cols-2 gap-3 lg:hidden">
            {floatingCards.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.label}
                  className="bg-[var(--card)] border border-[var(--border)] rounded-[14px] px-4 py-3 flex items-center gap-3"
                >
                  <div
                    className={`w-9 h-9 rounded-[10px] bg-gradient-to-br ${card.bg} flex items-center justify-center text-white shrink-0`}
                  >
                    <Icon size={15} />
                  </div>
                  <div>
                    <div className="text-sm font-medium leading-tight">{card.label}</div>
                    <div className="text-xs text-[var(--muted)]">{card.sub}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}