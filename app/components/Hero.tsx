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

export default function Hero() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);

  // IMPORTANT: prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  // mouse movement ONLY after mount
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
    <section className="relative min-h-[100svh] flex items-center overflow-hidden bg-[var(--bg)] text-[var(--text)]">
      {/* glow */}
      <div className="absolute w-[420px] h-[420px] blur-[120px] bg-[var(--purple)]/20 top-[-120px] right-[-80px]" />
      <div className="absolute w-[320px] h-[320px] blur-[120px] bg-[var(--pink)]/10 bottom-[-80px] left-[-80px]" />

      {/* ORBIT (ONLY AFTER MOUNT) */}
      {mounted && (
        <div
          className="absolute inset-0 pointer-events-none"
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

            {/* center */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
              w-[90px] h-[90px] rounded-2xl bg-gradient-to-br from-[var(--purple)] to-[var(--pink)]
              flex items-center justify-center text-white shadow-[0_0_60px_rgba(124,92,252,0.4)]
              animate-pulse"
            >
              <FaNetworkWired size={32} />
            </div>

            {/* cards */}
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
                  style={{
                    transform: `translate(${x}px, ${y}px)`,
                  }}
                >
                  <div className="bg-[var(--card)] border border-[var(--border)] rounded-[14px] px-4 py-3 flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-[10px] bg-gradient-to-br ${card.bg} flex items-center justify-center text-white`}
                    >
                      <Icon />
                    </div>

                    <div>
                      <div className="text-sm font-medium">{card.label}</div>
                      <div className="text-xs text-[var(--muted)]">
                        {card.sub}
                      </div>
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
        <div className="md:w-1/2">
          <h1 className="font-syne text-[clamp(38px,6vw,72px)] font-black leading-[1.05] mb-6">
            Reliable <br />
            <span className="text-[var(--purple-light)]">Windows</span> <br />
            IT Support
          </h1>

          <p className="text-[var(--muted)] mb-8 max-w-[520px]">
            Professional IT support, cybersecurity, maintenance, and system
            management.
          </p>

          <div className="flex gap-4">
            <Link
              href="#services"
              className="bg-gradient-to-r from-[var(--purple)] to-[var(--pink)] text-white px-6 py-3 rounded-full"
            >
              Explore Services →
            </Link>

            <Link
              href="#contact"
              className="border border-[var(--border)] px-6 py-3 rounded-full"
            >
              Get Support
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
