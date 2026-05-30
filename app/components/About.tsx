"use client";

import Image from "next/image";
import Seth from "../assets/images/seth-morgan.jpg";
import {
  FaCheckCircle,
  FaWindows,
  FaMapMarkerAlt,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
} from "react-icons/fa";

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

const ownerTraits = [
  "10+ Years IT Experience",
  "Microsoft Certified",
  "Cybersecurity Expert",
  "Client-First Philosophy",
];

export default function About() {
  return (
    <>
      {/* ── COMPANY ABOUT ── */}
      <section className="py-16 sm:py-20 lg:py-[120px] bg-[var(--bg2)] text-[var(--text)] transition-colors duration-300">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-[80px] items-center">
            {/* LEFT */}
            <div className="fade-up">
              <div className="flex items-center gap-2 mb-5 text-[var(--purple-light)] text-sm font-medium">
                <FaWindows className="text-lg shrink-0" />
                <span>Windows-Based IT Support Specialists</span>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {stats.map((s) => (
                  <div
                    key={s.label}
                    className="bg-[var(--card)] border border-[var(--border)] rounded-2xl p-5 sm:p-7 text-center transition-colors"
                  >
                    <span
                      className="block font-syne text-[32px] sm:text-[42px] font-black mb-1.5"
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
                    <span className="text-[var(--muted)] text-xs sm:text-sm">
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>

              <div className="bg-[var(--card2)] border border-[var(--border)] rounded-2xl p-4 sm:p-5 flex items-start sm:items-center gap-3.5 mt-4 transition-colors">
                <div className="w-[38px] h-[38px] rounded-[10px] bg-[var(--purple)]/20 flex items-center justify-center text-[var(--purple-light)] shrink-0">
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

              <h2 className="font-syne text-[clamp(26px,4vw,46px)] font-black leading-tight mb-5 text-[var(--text)]">
                Built on Trust,{" "}
                <span className="gradient-text">Driven by Innovation</span>
              </h2>

              <p className="text-[var(--muted)] leading-[1.8] mb-5 text-sm sm:text-base">
                We are a professional IT support and technology services company
                specializing in Windows-based systems. Our mission is to deliver
                reliable, secure, and efficient technical solutions for
                individuals and businesses.
              </p>

              <p className="text-[var(--muted)] leading-[1.8] mb-5 text-sm sm:text-base">
                From hardware troubleshooting and software support to
                cybersecurity and system maintenance, we ensure your technology
                works seamlessly so you can focus on what matters most.
              </p>

              <p className="text-[var(--muted)] leading-[1.8] text-sm sm:text-base">
                We understand the demands of modern business environments —
                especially the need for reliability, security, and fast response
                times.
              </p>

              <div className="flex flex-wrap gap-2 sm:gap-2.5 mt-6">
                {certs.map((c) => (
                  <span
                    key={c}
                    className="flex items-center gap-1.5 border border-[var(--border)] rounded-full px-3 sm:px-3.5 py-1.5 text-[12px] sm:text-[13px] text-[var(--muted)] bg-[var(--card)]/40 transition-colors"
                  >
                    <FaCheckCircle className="text-[var(--purple-light)] shrink-0" />
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── OWNER SECTION ── */}
      <section className="py-16 sm:py-20 lg:py-[100px] bg-[var(--bg)] text-[var(--text)] transition-colors duration-300">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section label */}
          <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-1.5 bg-[var(--purple)]/15 border border-[var(--border)] text-[var(--purple-light)] text-[13px] font-medium px-4 py-1.5 rounded-full mb-4">
              Meet the Owner
            </div>
            <h2 className="font-syne text-[clamp(24px,3.5vw,42px)] font-black leading-tight text-[var(--text)]">
              The Person{" "}
              <span className="gradient-text">Behind the Mission</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-[80px] items-center">
            {/* LEFT — Photo */}
            <div className="fade-up flex justify-center lg:justify-end">
              <div className="relative">
                {/* Decorative glow ring */}
                <div
                  className="absolute inset-0 rounded-3xl blur-2xl opacity-30 -z-10 scale-110"
                  style={{
                    background:
                      "linear-gradient(135deg,var(--purple-light),var(--pink))",
                  }}
                />

                {/* Photo container */}
                <div className="w-[280px] sm:w-[320px] lg:w-[360px] aspect-[3/4] rounded-3xl overflow-hidden border border-[var(--border)] bg-[var(--card)] relative">
                  <Image
                    src={Seth}
                    alt="Seth Morgan — Owner"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 640px) 280px, (max-width: 1024px) 320px, 360px"
                  />

                  {/* Name badge overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-5 z-10">
                    <p className="font-syne font-black text-white text-lg leading-tight">
                      Seth Morgan
                    </p>
                    <p className="text-white/70 text-sm">Founder & Owner</p>
                  </div>
                </div>

                {/* Floating experience badge */}
                <div className="z-100 absolute -bottom-4 -right-4 sm:-bottom-5 sm:-right-5 bg-[var(--card)] border border-[var(--border)] rounded-2xl px-4 py-3 shadow-xl">
                  <span
                    className="block font-syne text-[28px] sm:text-[34px] font-black leading-none"
                    style={{
                      background:
                        "linear-gradient(135deg,var(--purple-light),var(--pink))",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    10+
                  </span>
                  <span className="text-[var(--muted)] text-[11px] sm:text-xs">
                    Yrs Experience
                  </span>
                </div>
              </div>
            </div>

            {/* RIGHT — Bio */}
            <div className="fade-up [transition-delay:0.15s]">
              <h3 className="font-syne text-[clamp(22px,3vw,36px)] font-black leading-tight mb-2 text-[var(--text)]">
                Seth Morgan
              </h3>
              <p
                className="text-sm font-medium mb-5"
                style={{
                  background:
                    "linear-gradient(135deg,var(--purple-light),var(--pink))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Founder & Owner
              </p>

              <p className="text-[var(--muted)] leading-[1.8] mb-4 text-sm sm:text-base">
                Seth Morgan founded the company with a singular vision: to make
                enterprise-grade IT support accessible to every business,
                regardless of size. With over a decade of hands-on experience in
                Windows infrastructure, cybersecurity, and systems
                administration, Seth has built a reputation for solving the
                problems others can't.
              </p>

              <p className="text-[var(--muted)] leading-[1.8] mb-4 text-sm sm:text-base">
                His approach is simple — treat every client like a long-term
                partner, not a ticket number. That philosophy has driven a 98%
                client satisfaction rate and lasting relationships with
                businesses across the United States and beyond.
              </p>

              <p className="text-[var(--muted)] leading-[1.8] mb-6 text-sm sm:text-base">
                When Seth isn't engineering solutions for clients, he's staying
                ahead of the curve — studying emerging threats, testing new
                tools, and ensuring his team is always equipped to deliver at
                the highest level.
              </p>

              {/* Traits */}
              <div className="flex flex-wrap gap-2 sm:gap-2.5 mb-7">
                {ownerTraits.map((t) => (
                  <span
                    key={t}
                    className="flex items-center gap-1.5 border border-[var(--border)] rounded-full px-3 sm:px-3.5 py-1.5 text-[12px] sm:text-[13px] text-[var(--muted)] bg-[var(--card)]/40 transition-colors"
                  >
                    <FaCheckCircle className="text-[var(--purple-light)] shrink-0" />
                    {t}
                  </span>
                ))}
              </div>

              {/* Social / Contact links */}
              <div className="flex items-center gap-3">
                <a
                  href="mailto:seth@yourcompany.com"
                  className="flex items-center gap-2 bg-[var(--card)] border border-[var(--border)] rounded-full px-4 py-2 text-sm text-[var(--muted)] hover:text-[var(--purple-light)] hover:border-[var(--purple-light)] transition-colors"
                >
                  <FaEnvelope className="shrink-0" />
                  <span>Email Seth</span>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[38px] h-[38px] rounded-full bg-[var(--card)] border border-[var(--border)] flex items-center justify-center text-[var(--muted)] hover:text-[var(--purple-light)] hover:border-[var(--purple-light)] transition-colors"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[38px] h-[38px] rounded-full bg-[var(--card)] border border-[var(--border)] flex items-center justify-center text-[var(--muted)] hover:text-[var(--purple-light)] hover:border-[var(--purple-light)] transition-colors"
                >
                  <FaTwitter />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}