"use client";

import {
  FaWindows,
  FaDesktop,
  FaShieldAlt,
  FaTools,
  FaNetworkWired,
  FaHdd,
  FaSync,
  FaHeadset,
} from "react-icons/fa";

export default function TechStack() {
  const techCategories = [
    {
      label: "Windows Systems",
      icon: FaWindows,
      tagClass:
        "bg-[var(--card)] text-[var(--purple-light)] border border-[var(--border)]",
      tags: [
        "Windows 10/11",
        "Windows Server",
        "Active Directory",
        "Group Policy",
      ],
    },
    {
      label: "Remote Support Tools",
      icon: FaDesktop,
      tagClass:
        "bg-[var(--card)] text-[var(--purple-light)] border border-[var(--border)]",
      tags: ["TeamViewer", "AnyDesk", "Quick Assist", "Remote Desktop"],
    },
    {
      label: "Cybersecurity",
      icon: FaShieldAlt,
      tagClass:
        "bg-[var(--card)] text-[var(--pink)] border border-[var(--border)]",
      tags: [
        "Windows Defender",
        "Bitdefender",
        "Malwarebytes",
        "Firewall Protection",
      ],
    },
    {
      label: "System Maintenance",
      icon: FaTools,
      tagClass:
        "bg-[var(--card)] text-[var(--orange)] border border-[var(--border)]",
      tags: ["Disk Cleanup", "Task Manager", "Event Viewer", "System Restore"],
    },
    {
      label: "Networking",
      icon: FaNetworkWired,
      tagClass:
        "bg-[var(--card)] text-[var(--green)] border border-[var(--border)]",
      tags: ["Wi-Fi Setup", "LAN Configuration", "VPN Setup", "DNS Management"],
    },
    {
      label: "Backup & Recovery",
      icon: FaHdd,
      tagClass:
        "bg-[var(--card)] text-[var(--muted)] border border-[var(--border)]",
      tags: ["OneDrive", "Google Drive", "System Backup", "File Recovery"],
    },
  ];

  const marqueeItems = [
    { label: "Windows Support", icon: FaWindows },
    { label: "System Repair", icon: FaTools },
    { label: "Cybersecurity", icon: FaShieldAlt },
    { label: "Remote Access", icon: FaDesktop },
    { label: "Data Backup", icon: FaHdd },
    { label: "Network Fixes", icon: FaNetworkWired },
    { label: "PC Optimization", icon: FaSync },
    { label: "IT Helpdesk", icon: FaHeadset },
  ];

  return (
    <section
      id="stack"
      className="py-16 sm:py-20 lg:py-[120px] bg-[var(--bg2)] text-[var(--text)] transition-colors duration-300"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="text-center mb-5">
          <span className="inline-flex items-center gap-1.5 bg-[var(--purple)]/15 border border-[var(--border)] text-[var(--purple-light)] text-[13px] font-medium px-4 py-1.5 rounded-full">
            IT Infrastructure Stack
          </span>
        </div>

        <h2 className="font-syne text-[clamp(28px,5vw,52px)] font-black text-center leading-tight mb-5">
          Tools We Use to{" "}
          <span className="gradient-text-cyan">Support Your Systems</span>
        </h2>

        <p className="text-center text-[var(--muted)] max-w-[650px] mx-auto text-sm sm:text-[17px] leading-[1.7] mb-10 sm:mb-16">
          We use industry-standard Windows tools, remote support systems, and
          security platforms to diagnose, fix, and maintain your IT environment
          efficiently.
        </p>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {techCategories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.label}
                className="fade-up bg-[var(--card)] border border-[var(--border)] rounded-2xl p-5 sm:p-7 transition-colors"
              >
                <div className="flex items-center gap-2 mb-4">
                  <Icon className="text-[var(--purple-light)] text-base sm:text-lg shrink-0" />
                  <span className="text-[11px] font-bold tracking-[0.12em] text-[var(--muted)] uppercase">
                    {cat.label}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cat.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`px-3 sm:px-3.5 py-1.5 rounded-lg text-[12px] sm:text-[13px] font-medium ${cat.tagClass}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* MARQUEE — overflow hidden on the wrapper prevents horizontal scroll */}
        <div className="overflow-hidden mt-10 sm:my-14 py-4 sm:py-6 group">
          <div className="flex gap-6 sm:gap-10 animate-marquee whitespace-nowrap w-max group-hover:[animation-play-state:paused]">
            {[...marqueeItems, ...marqueeItems].map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="flex items-center gap-2 sm:gap-3 flex-shrink-0"
                >
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[var(--card)] border border-[var(--border)] flex items-center justify-center text-[var(--purple-light)]">
                    <Icon />
                  </div>
                  <span className="text-[var(--text)]/80 text-xs sm:text-sm font-medium">
                    {item.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
