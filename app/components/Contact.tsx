"use client";

import { useState } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaLaptop,
  FaPaperPlane,
  FaLinkedin,
  FaGithub,
  FaTwitter,
} from "react-icons/fa";
import {toast} from 'sonner'

const contactInfo = [
  {
    icon: FaEnvelope,
    label: "Email",
    value: "support@youritcompany.com",
  },
  {
    icon: FaPhone,
    label: "Office",
    value: "+27 21 555 0100",
  },
  {
    icon: FaWhatsapp,
    label: "WhatsApp",
    value: "+27 82 555 0100",
  },
  {
    icon: FaMapMarkerAlt,
    label: "Location",
    value: "Boston, Massachusetts, USA",
  },
];

const services = [
  "Technical Support & Helpdesk",
  "System Monitoring & Maintenance",
  "Software Installation & Updates",
  "Cybersecurity Management",
  "Device Configuration & Management",
  "Data Backup & Recovery",
  "Network & Connectivity Support",
  "IT Asset Management",
  "System Migration & Deployment",
  "Compliance & Auditing",
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("Message sent successfully!", {
    description: "We'll respond within 24 hours.",
  });
  };

  const inputClass =
    "bg-[var(--bg)] border border-[var(--border)] rounded-[10px] px-3.5 py-3 text-[var(--text)] text-sm outline-none focus:border-[#7c5cfc] transition w-full";

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-[120px] bg-[var(--bg)]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="text-center mb-5">
          <span className="inline-flex items-center gap-1.5 bg-[#7c5cfc]/15 border border-[#7c5cfc]/35 text-[#9d7fff] text-[13px] font-medium px-4 py-1.5 rounded-full">
            IT Support Contact
          </span>
        </div>

        <h2 className="font-syne text-[clamp(28px,5vw,52px)] font-black text-center leading-tight mb-5">
          Get Expert <span className="gradient-text">Windows Support</span>
        </h2>

        <p className="text-center text-[var(--muted)] max-w-[650px] mx-auto text-sm sm:text-[17px] leading-[1.7] mb-8 sm:mb-10">
          We provide fast remote and on-site IT support for Windows systems,
          business networks, cybersecurity, and system maintenance.
        </p>

        {/* SLA */}
        <div className="text-center mb-10 sm:mb-14">
          <span className="inline-flex items-center gap-2 bg-[var(--card)] border border-[var(--border)] px-4 py-2 rounded-full text-sm text-[var(--muted)]">
            ⚡ Average Response Time:{" "}
            <strong className="text-[#9d7fff]">Under 2 Hours</strong>
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">

          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="bg-[var(--card)] border border-[var(--border)] rounded-2xl p-5 sm:p-8"
          >
            {/* Name + Email — stack on mobile, side by side on sm+ */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <input
                name="name"
                placeholder="Full Name"
                className={inputClass}
                onChange={handleChange}
              />
              <input
                name="email"
                placeholder="Email"
                className={inputClass}
                onChange={handleChange}
              />
            </div>

            {/* Phone + Service — stack on mobile, side by side on sm+ */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <input
                name="phone"
                placeholder="Phone / WhatsApp"
                className={inputClass}
                onChange={handleChange}
              />
              <select
                name="service"
                className={inputClass}
                onChange={handleChange}
              >
                <option value="">Select Service</option>
                {services.map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            </div>

            <textarea
              name="message"
              placeholder="Describe your issue..."
              rows={5}
              className={`${inputClass} mb-5`}
              onChange={handleChange}
            />

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#7c5cfc] to-[#e040a0] text-white py-3.5 rounded-xl font-semibold flex items-center justify-center gap-2"
            >
              Send Request <FaPaperPlane />
            </button>
          </form>

          {/* CONTACT INFO */}
          <div className="flex flex-col gap-4">
            {contactInfo.map((c) => {
              const Icon = c.icon;
              return (
                <div
                  key={c.label}
                  className="bg-[var(--card)] border border-[var(--border)] rounded-xl p-4 flex items-center gap-4"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#7c5cfc]/15 flex items-center justify-center text-[#9d7fff] shrink-0">
                    <Icon />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs text-[var(--muted)] uppercase tracking-wider">
                      {c.label}
                    </div>
                    <div className="text-[var(--text)] font-medium text-sm truncate">
                      {c.value}
                    </div>
                  </div>
                </div>
              );
            })}

            {/* SUPPORT CARD */}
            <div className="bg-[var(--card)] border border-[var(--border)] rounded-xl p-5 sm:p-6">
              <div className="flex items-center gap-3 mb-3">
                <FaLaptop className="text-[#9d7fff] shrink-0" />
                <h4 className="font-bold text-[var(--text)] text-sm sm:text-base">
                  Windows IT Support Center
                </h4>
              </div>
              <p className="text-[var(--muted)] text-sm leading-[1.6]">
                Remote troubleshooting, cybersecurity, system maintenance,
                backups, and IT management.
              </p>
            </div>

            {/* SOCIAL */}
            <div className="flex gap-3 flex-wrap">
              {[
                { icon: FaLinkedin, label: "LinkedIn" },
                { icon: FaGithub, label: "GitHub" },
                { icon: FaTwitter, label: "Twitter" },
              ].map((s) => {
                const Icon = s.icon;
                return (
                  <button
                    key={s.label}
                    className="flex items-center gap-2 border border-[var(--border)] px-4 py-2 rounded-full text-sm text-[var(--muted)] hover:text-[#9d7fff] hover:border-[#9d7fff] transition"
                  >
                    <Icon />
                    {s.label}
                  </button>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}