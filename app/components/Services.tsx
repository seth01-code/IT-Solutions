"use client";

import { useState } from "react";
import {
  FaHeadset,
  FaHeartbeat,
  FaDownload,
  FaShieldAlt,
  FaUserCog,
  FaDatabase,
  FaNetworkWired,
  FaBox,
  FaExchangeAlt,
  FaClipboardCheck,
} from "react-icons/fa";

const services = [
  {
    icon: FaHeadset,
    title: "Technical Support & Helpdesk",
    gradient: "from-[#ff7a2f] to-[#ff4f00]",
    description:
      "On-demand IT support for everyday technical issues affecting your Windows systems.",
    points: [
      "Fixing software errors and application crashes",
      "Resolving login or access issues",
      "Troubleshooting system slowdowns or freezes",
      "Printer, email, and connectivity problems",
    ],
  },
  {
    icon: FaHeartbeat,
    title: "System Monitoring & Maintenance",
    gradient: "from-[#00d4ff] to-[#0088ff]",
    description:
      "Continuous monitoring to ensure your systems stay healthy, stable, and optimized.",
    points: [
      "Monitoring CPU, RAM, disk usage, and system health",
      "Cleaning junk files and optimizing performance",
      "Checking event logs for system errors",
      "Ensuring system uptime and stability",
    ],
  },
  {
    icon: FaDownload,
    title: "Software Installation & Updates",
    gradient: "from-[#9b59b6] to-[#6c3483]",
    description:
      "Keeping your Windows environment updated, secure, and properly configured.",
    points: [
      "Installing business applications remotely",
      "Updating Windows OS and drivers",
      "Patching third-party software (Office, Chrome, etc.)",
      "Removing unwanted or malicious software",
    ],
  },
  {
    icon: FaShieldAlt,
    title: "Cybersecurity Management",
    gradient: "from-[#e040a0] to-[#a0006a]",
    description:
      "Protecting your systems from malware, threats, and unauthorized access.",
    points: [
      "Installing antivirus and endpoint protection",
      "Running malware scans and removal",
      "Applying security patches and updates",
      "Configuring firewall protection",
    ],
  },
  {
    icon: FaUserCog,
    title: "Device Configuration & Management",
    gradient: "from-[#00c896] to-[#007a5e]",
    description:
      "Proper setup and configuration of Windows devices for business environments.",
    points: [
      "User accounts and permission setup",
      "System policy configuration",
      "Startup and service optimization",
      "VPN and remote access setup",
    ],
  },
  {
    icon: FaDatabase,
    title: "Data Backup & Recovery",
    gradient: "from-[#ffb930] to-[#ff8c00]",
    description:
      "Preventing data loss and ensuring quick recovery when issues occur.",
    points: [
      "Automated backup setup",
      "File recovery and restoration",
      "Cloud and device migration",
      "Disaster recovery planning",
    ],
  },
  {
    icon: FaNetworkWired,
    title: "Network & Connectivity Support",
    gradient: "from-[#00d4ff] to-[#007bff]",
    description: "Ensuring stable and secure internet and network performance.",
    points: [
      "Fixing Wi-Fi and LAN issues",
      "DNS and IP configuration",
      "VPN troubleshooting",
      "Network performance diagnostics",
    ],
  },
  {
    icon: FaBox,
    title: "IT Asset Management",
    gradient: "from-[#7c5cfc] to-[#4a3aff]",
    description:
      "Tracking and managing all IT assets within your organization.",
    points: [
      "Hardware and software inventory tracking",
      "License management",
      "Compliance reporting",
    ],
  },
  {
    icon: FaExchangeAlt,
    title: "System Migration & Deployment",
    gradient: "from-[#ff4f81] to-[#ff2d55]",
    description:
      "Seamless migration and deployment of Windows systems at scale.",
    points: [
      "Windows OS migration",
      "Bulk system deployment",
      "PC cloning and imaging",
    ],
  },
  {
    icon: FaClipboardCheck,
    title: "Compliance & Auditing",
    gradient: "from-[#2dd4bf] to-[#0f766e]",
    description:
      "Ensuring systems meet security and operational compliance standards.",
    points: [
      "Security compliance checks",
      "System audits and reporting",
      "Policy enforcement validation",
    ],
  },
];

export default function Services() {
  const [activeService, setActiveService] = useState<any>(null);

  return (
    <section className="py-[120px] bg-[var(--bg)] text-[var(--text)] relative transition-colors duration-300">
      <div className="max-w-[1200px] mx-auto px-8">
        {/* HEADER */}
        <div className="text-center mb-14">
          <h2 className="text-[clamp(32px,5vw,52px)] font-black mb-4">
            What We <span className="gradient-text">Offer</span>
          </h2>

          <p className="text-[var(--muted)] max-w-[750px] mx-auto text-[16px] leading-[1.7]">
            We provide professional Windows IT support services designed for
            individuals and businesses. From troubleshooting and maintenance to
            cybersecurity and system management, we ensure your technology works
            reliably, securely, and efficiently at all times.
          </p>
        </div>

        {/* PROCESS STRIP */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16 text-center">
          {[
            {
              t: "1. Diagnose",
              d: "We identify the root cause of your IT issue",
            },
            { t: "2. Resolve", d: "We fix, optimize, or secure your system" },
            { t: "3. Maintain", d: "We ensure long-term system stability" },
          ].map((p) => (
            <div
              key={p.t}
              className="bg-[var(--card)] border border-[var(--border)] rounded-2xl p-6 transition-colors"
            >
              <h3 className="text-[var(--text)] font-bold mb-2">{p.t}</h3>
              <p className="text-[var(--muted)] text-sm">{p.d}</p>
            </div>
          ))}
        </div>

        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((svc) => {
            const Icon = svc.icon;

            return (
              <div
                key={svc.title}
                className="bg-[var(--card)] border border-[var(--border)] rounded-2xl p-7 hover:-translate-y-1 transition-all duration-300"
              >
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${svc.gradient} flex items-center justify-center text-white text-2xl mb-5`}
                >
                  <Icon />
                </div>

                <h3 className="font-bold text-[17px] mb-2 text-[var(--text)]">
                  {svc.title}
                </h3>

                <p className="text-[var(--muted)] text-sm mb-4 leading-[1.6]">
                  {svc.description}
                </p>

                <button
                  onClick={() => setActiveService(svc)}
                  className="text-[var(--purple-light)] text-sm font-medium cursor-pointer hover:underline"
                >
                  View Details →
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* MODAL */}
      {activeService && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-6 z-50">
          <div className="bg-[var(--bg2)] border border-[var(--border)] max-w-[520px] w-full rounded-2xl p-6 relative text-[var(--text)]">
            <button
              onClick={() => setActiveService(null)}
              className="absolute top-3 right-4 text-[var(--muted)] text-xl hover:text-[var(--text)]"
            >
              ✕
            </button>

            <div className="flex items-center gap-3 mb-3">
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${activeService.gradient} flex items-center justify-center text-white`}
              >
                <activeService.icon />
              </div>

              <h3 className="text-xl font-bold">{activeService.title}</h3>
            </div>

            <p className="text-[var(--muted)] text-sm mb-4 leading-[1.6]">
              {activeService.description}
            </p>

            <ul className="space-y-2 text-sm text-[var(--text)]/80">
              {activeService.points.map((p: string, i: number) => (
                <li key={i}>• {p}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </section>
  );
}
