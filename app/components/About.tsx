"use client";

import { FaCheckCircle, FaWindows, FaMapMarkerAlt } from "react-icons/fa";

const stats = [
  { num: "5+", label: "Years in Business" },
  { num: "30+", label: "Projects Delivered" },
  { num: "98%", label: "Client Satisfaction" },
  { num: "24/7", label: "Support Availability" },
];

const certs = [
  "Hardware Certified",
  "AWS Partner",
  "ISO 27001 Aligned",
  "POPIA Compliant",
];

export default function About() {
  return (
    <section className="py-[120px] bg-[var(--bg2)] text-[var(--text)] transition-colors duration-300">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[80px] items-center">
          {/* LEFT */}
          <div className="fade-up">
            {/* Windows badge */}
            <div className="flex items-center gap-2 mb-5 text-[var(--purple-light)] text-sm font-medium">
              <FaWindows className="text-lg" />
              Windows-Based IT Support Specialists
            </div>

            {/* STATS */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="bg-[var(--card)] border border-[var(--border)] rounded-2xl p-7 text-center transition-colors"
                >
                  <span
                    className="block font-syne text-[42px] font-black mb-1.5"
                    style={{
                      background:
                        "linear-gradient(135deg,var(--purple-light),var(--pink))",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {s.num}
                  </span>

                  <span className="text-[var(--muted)] text-sm">{s.label}</span>
                </div>
              ))}
            </div>

            {/* LOCATION */}
            <div className="bg-[var(--card2)] border border-[var(--border)] rounded-2xl p-5 flex items-center gap-3.5 mt-4 transition-colors">
              <div className="w-[38px] h-[38px] rounded-[10px] bg-[var(--purple)]/20 flex items-center justify-center text-[var(--purple-light)]">
                <FaMapMarkerAlt />
              </div>

              <div>
                <strong className="block text-[var(--text)] text-sm">
                  Headquartered in Boston, Massachusetts
                </strong>
                <p className="text-[var(--muted)] text-sm">
                  Serving clients across the United States & globally
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="fade-up [transition-delay:0.15s]">
            <div className="inline-flex items-center gap-1.5 bg-[var(--purple)]/15 border border-[var(--border)] text-[var(--purple-light)] text-[13px] font-medium px-4 py-1.5 rounded-full mb-4">
              About Our Company
            </div>

            <h2 className="font-syne text-[clamp(30px,4vw,46px)] font-black leading-tight mb-5 text-[var(--text)]">
              Built on Trust,{" "}
              <span className="gradient-text">Driven by Innovation</span>
            </h2>

            <p className="text-[var(--muted)] leading-[1.8] mb-5">
              We are a professional IT support and technology services company
              specializing in Windows-based systems. Our mission is to deliver
              reliable, secure, and efficient technical solutions for
              individuals and businesses.
            </p>

            <p className="text-[var(--muted)] leading-[1.8] mb-5">
              From hardware troubleshooting and software support to
              cybersecurity and system maintenance, we ensure your technology
              works seamlessly so you can focus on what matters most.
            </p>

            <p className="text-[var(--muted)] leading-[1.8]">
              We understand the demands of modern business environments —
              especially the need for reliability, security, and fast response
              times.
            </p>

            {/* CERTIFICATIONS */}
            <div className="flex flex-wrap gap-2.5 mt-6">
              {certs.map((c) => (
                <span
                  key={c}
                  className="flex items-center gap-1.5 border border-[var(--border)] rounded-full px-3.5 py-1.5 text-[13px] text-[var(--muted)] bg-[var(--card)]/40 transition-colors"
                >
                  <FaCheckCircle className="text-[var(--purple-light)]" />
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
