"use client";

import { useEffect, useState } from "react";
import {
  FaWindows,
  FaShieldAlt,
  FaNetworkWired,
  FaCloud,
  FaTools,
  FaDesktop,
} from "react-icons/fa";

export default function Portfolio() {
  const [activeProject, setActiveProject] = useState<any>(null);

  // Close modal on ESC key
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveProject(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = activeProject ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [activeProject]);

  const projects = [
    {
      year: "2024",
      icon: FaWindows,
      color: "#00d4ff",
      category: "Windows Systems",
      title: "Enterprise PC Optimization Rollout",
      client: "Northbridge Logistics Solutions",
      desc: "Optimized 120+ Windows PCs, improving system speed by 45% and reducing crashes significantly.",
      details: [
        "Bulk Windows updates deployed",
        "Startup optimization applied",
        "Removed malicious background apps",
        "System stability improved across network",
      ],
    },
    {
      year: "2024",
      icon: FaShieldAlt,
      color: "#e040a0",
      category: "Cybersecurity",
      title: "Endpoint Security Hardening",
      client: "Harborview Financial Services",
      desc: "Implemented full endpoint protection and firewall restructuring across all systems.",
      details: [
        "Installed enterprise antivirus suite",
        "Configured firewall rules",
        "Blocked unauthorized access attempts",
        "Enabled real-time threat monitoring",
      ],
    },
    {
      year: "2023",
      icon: FaNetworkWired,
      color: "#00c896",
      category: "Networking",
      title: "Office Network Stabilization",
      client: "BrightCore Retail Group",
      desc: "Resolved persistent connectivity issues affecting productivity across departments.",
      details: [
        "Fixed DNS misconfigurations",
        "Rebuilt LAN structure",
        "Improved Wi-Fi coverage",
        "VPN access restored",
      ],
    },
    {
      year: "2024",
      icon: FaCloud,
      color: "#7c5cfc",
      category: "Cloud Backup",
      title: "Business Data Backup Migration",
      client: "Stonegate Legal Practitioners",
      desc: "Migrated critical data to secure cloud storage with automated backup systems.",
      details: [
        "Configured OneDrive business sync",
        "Set up automated backups",
        "Data recovery testing completed",
        "Disaster recovery plan implemented",
      ],
    },
    {
      year: "2023",
      icon: FaTools,
      color: "#ff7a2f",
      category: "System Repair",
      title: "Critical System Recovery",
      client: "Metroline Consumer Services Ltd",
      desc: "Recovered multiple corrupted systems and restored full operational capacity.",
      details: [
        "Fixed corrupted OS installations",
        "Recovered lost files",
        "Removed malware infections",
        "Restored system boot integrity",
      ],
    },
    {
      year: "2024",
      icon: FaDesktop,
      color: "#9b59b6",
      category: "Remote Support",
      title: "Remote IT Support Deployment",
      client: "SummitBridge Multi-Branch Enterprises",
      desc: "Enabled secure remote access support across 6 office locations.",
      details: [
        "Installed remote access tools",
        "Configured secure access policies",
        "Reduced on-site support needs",
        "Improved response time",
      ],
    },
  ];

  return (
    <section id="portfolio" className="py-16 sm:py-20 lg:py-[120px] bg-[var(--bg)]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="text-center mb-5">
          <span className="inline-flex items-center gap-1.5 bg-[var(--card2)] border border-[var(--border)] text-[var(--muted)] text-[13px] font-medium px-4 py-1.5 rounded-full">
            Case Studies
          </span>
        </div>

        <h2 className="font-syne text-[clamp(28px,5vw,52px)] font-black text-center leading-tight mb-5 text-[var(--text)]">
          Real Work <span className="gradient-text">We Deliver</span>
        </h2>

        <p className="text-center text-[var(--muted)] max-w-[650px] mx-auto text-sm sm:text-[17px] leading-[1.7] mb-10 sm:mb-16">
          Practical IT solutions delivered to businesses — from system repairs
          and cybersecurity to networking and full infrastructure support.
        </p>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {projects.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className="bg-[var(--card)] border border-[var(--border)] rounded-2xl overflow-hidden hover:-translate-y-1 transition-all cursor-pointer"
                onClick={() => setActiveProject(p)}
              >
                {/* TOP */}
                <div className="h-[140px] sm:h-[160px] flex items-center justify-center bg-gradient-to-br from-[var(--card2)] to-[var(--bg2)] relative">
                  <span className="absolute top-3 left-3 text-xs text-[var(--muted)]">
                    {p.year}
                  </span>
                  <Icon className="text-[36px] sm:text-[40px]" style={{ color: p.color }} />
                </div>

                {/* BODY */}
                <div className="p-5 sm:p-6">
                  <div
                    className="text-[11px] font-bold tracking-[0.12em] uppercase mb-2"
                    style={{ color: p.color }}
                  >
                    {p.category}
                  </div>

                  <h3 className="font-bold text-[16px] sm:text-[18px] mb-1.5 text-[var(--text)] leading-snug">
                    {p.title}
                  </h3>

                  <p className="text-[var(--muted)] text-[13px] mb-2">
                    Client: {p.client}
                  </p>

                  <p className="text-[var(--muted)] text-sm leading-[1.6] mb-4">
                    {p.desc}
                  </p>

                  <button
                    onClick={(e) => { e.stopPropagation(); setActiveProject(p); }}
                    className="text-[#9d7fff] text-sm font-medium hover:underline"
                  >
                    View Case Study →
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* MODAL */}
      {activeProject && (
        <div
          className="fixed inset-0 bg-black/80 flex items-end sm:items-center justify-center p-0 sm:p-6 z-50 animate-fadeIn"
          onClick={() => setActiveProject(null)}
        >
          <div
            className="bg-[var(--card)] w-full sm:max-w-[850px] rounded-t-3xl sm:rounded-2xl overflow-hidden border border-[var(--border)] shadow-2xl animate-scaleIn max-h-[92svh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* MAC TOP BAR */}
            <div className="flex items-center gap-2 px-4 py-3 bg-[var(--bg2)] shrink-0">
              <span className="w-3 h-3 rounded-full bg-red-500"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
              <span className="w-3 h-3 rounded-full bg-green-500"></span>
              <span className="ml-3 text-xs text-[var(--muted)]">Case Study Viewer</span>
            </div>

            {/* SCROLLABLE BODY */}
            <div className="p-5 sm:p-8 space-y-5 sm:space-y-6 overflow-y-auto">

              {/* HEADER */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                <div className="flex items-center gap-3 sm:gap-4">
                  <activeProject.icon
                    className="text-[32px] sm:text-[38px] shrink-0"
                    style={{ color: activeProject.color }}
                  />
                  <div>
                    <h3 className="text-lg sm:text-2xl font-bold text-[var(--text)] leading-snug">
                      {activeProject.title}
                    </h3>
                    <p className="text-[var(--muted)] text-sm mt-1">
                      {activeProject.client}
                    </p>
                  </div>
                </div>

                <span
                  className="self-start text-xs px-3 py-1 rounded-full border border-[var(--border)] whitespace-nowrap"
                  style={{ color: activeProject.color }}
                >
                  {activeProject.category}
                </span>
              </div>

              {/* DESCRIPTION */}
              <div className="bg-[var(--bg2)] border border-[var(--border)] rounded-xl p-4">
                <p className="text-[var(--text)] text-sm leading-[1.7] opacity-80">
                  {activeProject.desc}
                </p>
              </div>

              {/* IMPACT */}
              <div className="grid grid-cols-3 gap-2 sm:gap-3">
                {[
                  { label: "Impact",      sub: "System Stabilized",    color: "#9d7fff" },
                  { label: "Efficiency",  sub: "+40% Improvement",     color: "#00d4ff" },
                  { label: "Downtime",    sub: "Reduced Significantly", color: "#00c896" },
                ].map((stat) => (
                  <div key={stat.label} className="bg-[var(--card)] border border-[var(--border)] rounded-xl p-3 text-center">
                    <p className="font-bold text-xs sm:text-sm" style={{ color: stat.color }}>{stat.label}</p>
                    <p className="text-[11px] sm:text-xs text-[var(--muted)] mt-1">{stat.sub}</p>
                  </div>
                ))}
              </div>

              {/* TASKS */}
              <div>
                <h4 className="text-sm font-semibold text-[var(--text)] mb-3">
                  Work Completed
                </h4>
                <div className="space-y-2">
                  {activeProject.details.map((d: string, i: number) => (
                    <div
                      key={i}
                      className="flex items-start gap-2 text-sm text-[var(--muted)]"
                    >
                      <span className="text-[#9d7fff] mt-0.5 shrink-0">•</span>
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* FOOTER */}
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 pt-4 border-t border-[var(--border)]">
                <span className="text-xs text-[var(--muted)]">
                  Tap outside or press ESC to close
                </span>
                <button
                  onClick={() => setActiveProject(null)}
                  className="text-sm text-[#9d7fff] hover:underline self-start sm:self-auto"
                >
                  Close Preview
                </button>
              </div>

            </div>
          </div>
        </div>
      )}
    </section>
  );
}