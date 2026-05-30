"use client";

import {
  FaQuoteLeft,
  FaShieldAlt,
  FaWindows,
  FaCloud,
  FaNetworkWired,
} from "react-icons/fa";

const testimonials = [
  {
    icon: FaWindows,
    quote:
      "Our office systems were constantly slowing down and crashing. The team optimized all our Windows PCs and everything now runs smoothly with far fewer disruptions.",
    name: "Northbridge Logistics Solutions",
    role: "Operations Department",
    initials: "NL",
    avatarGrad: "from-[#00aaff] to-[#0066cc]",
  },
  {
    icon: FaNetworkWired,
    quote:
      "We had major connectivity issues across multiple branches. They restructured our entire network and stabilized our VPN access across all locations.",
    name: "BrightCore Retail Group",
    role: "IT Operations Team",
    initials: "BC",
    avatarGrad: "from-[#00c896] to-[#007a5e]",
  },
  {
    icon: FaShieldAlt,
    quote:
      "A full cybersecurity review revealed several vulnerabilities in our systems. They secured everything, installed protection tools, and set up real-time monitoring.",
    name: "Harborview Financial Services",
    role: "Risk & Compliance Unit",
    initials: "HF",
    avatarGrad: "from-[#e040a0] to-[#a0006a]",
  },
  {
    icon: FaCloud,
    quote:
      "Our critical business files were migrated to a secure cloud backup system with automated recovery. We now operate with far more confidence and data safety.",
    name: "Stonegate Legal Practitioners",
    role: "Administrative Office",
    initials: "SL",
    avatarGrad: "from-[#9b59b6] to-[#6c3483]",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 sm:py-20 lg:py-[120px] bg-[var(--bg)]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="text-center mb-5">
          <span className="inline-flex items-center gap-1.5 bg-[var(--card2)] border border-[var(--border)] text-[var(--muted)] text-[13px] font-medium px-4 py-1.5 rounded-full">
            Client Feedback
          </span>
        </div>

        <h2 className="font-syne text-[clamp(28px,5vw,52px)] font-black text-center leading-tight mb-5 text-[var(--text)]">
          Real Results, <span className="gradient-text">Real Clients</span>
        </h2>

        <p className="text-center text-[var(--muted)] max-w-[650px] mx-auto text-sm sm:text-[17px] leading-[1.7] mb-10 sm:mb-16">
          Businesses trust us to keep their systems running, secure, and reliable.
          Here's what they experienced after working with us.
        </p>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          {testimonials.map((t) => {
            const Icon = t.icon;
            return (
              <div
                key={t.name}
                className="bg-[var(--card)] border border-[var(--border)] rounded-2xl p-5 sm:p-7 hover:-translate-y-1 transition-all duration-300"
              >
                {/* HEADER ICON */}
                <div className="flex items-center justify-between mb-4">
                  <Icon className="text-[#9d7fff] text-lg sm:text-xl shrink-0" />
                  <FaQuoteLeft className="text-[var(--muted)]/40 text-lg sm:text-xl shrink-0" />
                </div>

                {/* QUOTE */}
                <blockquote className="text-[var(--text)] text-sm sm:text-[15px] leading-[1.75] mb-5 sm:mb-6 italic opacity-90">
                  "{t.quote}"
                </blockquote>

                {/* FOOTER */}
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gradient-to-br ${t.avatarGrad} flex items-center justify-center text-white font-bold text-sm shrink-0`}
                  >
                    {t.initials}
                  </div>
                  <div className="min-w-0">
                    <div className="font-semibold text-[var(--text)] text-sm sm:text-[15px] truncate">
                      {t.name}
                    </div>
                    <div className="text-[var(--muted)] text-[12px] sm:text-[13px]">
                      {t.role}
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}