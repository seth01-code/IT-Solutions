"use client";

import { useEffect, useState } from "react";

const stages = [
  { at: 0,  label: "Connecting…"    },
  { at: 25, label: "Loading…"       },
  { at: 50, label: "Configuring…"   },
  { at: 75, label: "Checking…"      },
  { at: 95, label: "Ready"          },
];

function getCurrentStage(progress: number) {
  let current = stages[0];
  for (const s of stages) {
    if (progress >= s.at) current = s;
  }
  return current;
}

function LogoMark({ size = 80 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="pl-grad" x1="0" y1="0" x2="72" y2="72" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#7c5cfc" />
          <stop offset="100%" stopColor="#e040a0" />
        </linearGradient>
        <filter id="pl-glow">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <circle cx="36" cy="36" r="34" stroke="url(#pl-grad)" strokeWidth="1.5" strokeDasharray="4 6" opacity="0.5">
        <animateTransform attributeName="transform" type="rotate" from="0 36 36" to="360 36 36" dur="8s" repeatCount="indefinite" />
      </circle>
      <circle cx="36" cy="36" r="26" stroke="url(#pl-grad)" strokeWidth="1" strokeDasharray="2 4" opacity="0.3">
        <animateTransform attributeName="transform" type="rotate" from="360 36 36" to="0 36 36" dur="5s" repeatCount="indefinite" />
      </circle>
      <path d="M36 14L18 21v13c0 9.4 7.7 18.2 18 20.4C46.3 52.2 54 43.4 54 34V21L36 14z" fill="url(#pl-grad)" fillOpacity="0.18" filter="url(#pl-glow)" />
      <path d="M36 14L18 21v13c0 9.4 7.7 18.2 18 20.4C46.3 52.2 54 43.4 54 34V21L36 14z" stroke="url(#pl-grad)" strokeWidth="1.6" strokeLinejoin="round" fill="none" filter="url(#pl-glow)" />
      <circle cx="36" cy="34" r="4" fill="url(#pl-grad)" filter="url(#pl-glow)" />
      <line x1="36" y1="30" x2="36" y2="24" stroke="white" strokeWidth="1.4" strokeLinecap="round" opacity="0.7" />
      <line x1="40" y1="34" x2="46" y2="34" stroke="white" strokeWidth="1.4" strokeLinecap="round" opacity="0.7" />
      <line x1="36" y1="38" x2="36" y2="44" stroke="white" strokeWidth="1.4" strokeLinecap="round" opacity="0.7" />
      <line x1="32" y1="34" x2="26" y2="34" stroke="white" strokeWidth="1.4" strokeLinecap="round" opacity="0.7" />
      <circle cx="36" cy="24" r="2" fill="white" opacity="0.6" />
      <circle cx="46" cy="34" r="2" fill="white" opacity="0.6" />
      <circle cx="36" cy="44" r="2" fill="white" opacity="0.6" />
      <circle cx="26" cy="34" r="2" fill="white" opacity="0.6" />
    </svg>
  );
}

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase]       = useState<"loading" | "reveal" | "done">("loading");
  const stage = getCurrentStage(progress);

  useEffect(() => {
    const start = performance.now();
    const duration = 2200;
    const tick = (now: number) => {
      const elapsed = now - start;
      const pct = Math.min(100, Math.round((elapsed / duration) * 100));
      setProgress(pct);
      if (pct < 100) {
        requestAnimationFrame(tick);
      } else {
        setTimeout(() => setPhase("reveal"), 300);
        setTimeout(() => setPhase("done"), 1100);
      }
    };
    requestAnimationFrame(tick);
  }, []);

  if (phase === "done") return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center gap-6
        bg-[#080c14] transition-transform duration-700 ease-in-out
        ${phase === "reveal" ? "-translate-y-full" : "translate-y-0"}`}
    >
      {/* Grid bg */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#7c5cfc 1px, transparent 1px), linear-gradient(90deg, #7c5cfc 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      {/* Glows */}
      <div className="absolute w-[500px] h-[500px] rounded-full bg-[#7c5cfc]/10 blur-[120px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      {/* Logo */}
      <div style={{ filter: "drop-shadow(0 0 14px #7c5cfc60)" }}>
        <LogoMark size={80} />
      </div>

      {/* Wordmark */}
      <div className="text-center">
        <div
          className="tracking-[0.22em] text-white/90 font-bold text-xl uppercase"
          style={{ fontFamily: "var(--font-syne, sans-serif)" }}
        >
          Axon<span style={{ color: "#9d7fff" }}>sys</span>
        </div>
        <p className="text-white/25 text-[10px] tracking-[0.3em] uppercase mt-1">
          Windows IT Infrastructure
        </p>
      </div>

      {/* Stage dots */}
      <div className="flex items-center gap-2">
        {stages.map((s, i) => {
          const active = s.at === getCurrentStage(progress).at;
          const done   = progress > s.at && !active;
          return (
            <div
              key={i}
              className="rounded-full transition-all duration-300"
              style={{
                width:  active ? 24 : done ? 8 : 6,
                height: active ? 6  : done ? 8 : 6,
                background: active
                  ? "linear-gradient(90deg,#7c5cfc,#e040a0)"
                  : done
                  ? "#7c5cfc"
                  : "rgba(255,255,255,0.1)",
              }}
            />
          );
        })}
      </div>

      {/* Stage label */}
      <p
        className="text-[11px] tracking-[0.2em] uppercase font-mono transition-all duration-300"
        style={{ color: progress === 100 ? "#34d399" : "rgba(255,255,255,0.35)" }}
      >
        {stage.label}
      </p>

      {/* Progress bar */}
      <div className="w-[220px] sm:w-[280px]">
        <div className="h-[2px] bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-75"
            style={{
              width: `${progress}%`,
              background: "linear-gradient(90deg,#7c5cfc,#e040a0)",
              boxShadow: "0 0 10px #7c5cfc80",
            }}
          />
        </div>
        <div className="flex justify-between mt-1.5">
          {[0, 25, 50, 75, 100].map((tick) => (
            <div
              key={tick}
              className="w-[1px] h-[4px] rounded-full transition-colors duration-200"
              style={{ background: progress >= tick ? "#7c5cfc" : "rgba(255,255,255,0.1)" }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}