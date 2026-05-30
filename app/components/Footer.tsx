import Link from "next/link";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

import type { IconType } from "react-icons";

const footerLinks = {
  IT_Services: [
    "Technical Support",
    "System Monitoring",
    "Software Installation",
    "Cybersecurity",
    "Network Support",
    "Data Backup & Recovery",
  ],
  Company: ["About Us", "Portfolio", "Testimonials", "Contact", "Blog"],
  Legal: [
    "Privacy Policy",
    "Terms of Service",
    "POPIA Compliance",
    "Cookie Policy",
  ],
};

function Logo({ size = 38 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="footer-logo-grad" x1="0" y1="0" x2="38" y2="38" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#7c5cfc" />
          <stop offset="100%" stopColor="#e040a0" />
        </linearGradient>
      </defs>
      <rect width="38" height="38" rx="10" fill="url(#footer-logo-grad)" />
      <path
        d="M19 7L9 11v8c0 5.25 4.3 10.15 10 11.35C24.7 29.15 29 24.25 29 19v-8L19 7z"
        fill="white"
        fillOpacity="0.15"
      />
      <path
        d="M19 7L9 11v8c0 5.25 4.3 10.15 10 11.35C24.7 29.15 29 24.25 29 19v-8L19 7z"
        stroke="white"
        strokeWidth="1.4"
        strokeLinejoin="round"
        fill="none"
      />
      <circle cx="19" cy="19" r="2.5" fill="white" />
      <line x1="19" y1="16.5" x2="19" y2="13" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="21.5" y1="19" x2="25" y2="19" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="19" y1="21.5" x2="19" y2="25" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="16.5" y1="19" x2="13" y2="19" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
      <circle cx="19" cy="13" r="1.2" fill="white" fillOpacity="0.7" />
      <circle cx="25" cy="19" r="1.2" fill="white" fillOpacity="0.7" />
      <circle cx="19" cy="25" r="1.2" fill="white" fillOpacity="0.7" />
      <circle cx="13" cy="19" r="1.2" fill="white" fillOpacity="0.7" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#12121e] border-t border-white/[0.07] pt-12 sm:pt-16 lg:pt-[70px] pb-8">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* TOP GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 mb-12">

          {/* BRAND */}
          <div className="col-span-2 lg:col-span-1">
            <Link href="#home" className="flex items-center gap-2.5 no-underline mb-4">
              <Logo size={38} />
              <span className="font-syne text-[22px] font-bold text-[#f0f0f8]">
                Axon<span className="text-[#9d7fff]">sys</span>
              </span>
            </Link>

            <p className="text-[#8888aa] text-sm leading-[1.7] max-w-[320px] mb-6">
              Boston-based IT support specialists providing Windows system
              maintenance, cybersecurity, networking, and remote technical
              support for businesses.
            </p>

            <div className="flex gap-2.5">
              <SocialIcon icon={FaLinkedin} />
              <SocialIcon icon={FaGithub} />
              <SocialIcon icon={FaTwitter} />
              <SocialIcon icon={FaFacebook} />
            </div>
          </div>

          {/* IT SERVICES */}
          <div>
            <h4 className="font-syne text-[13px] font-bold tracking-[0.1em] uppercase text-[#8888aa] mb-4">
              IT Services
            </h4>
            <ul className="flex flex-col gap-3">
              {footerLinks.IT_Services.map((link) => (
                <li key={link}>
                  <Link href="#services" className="text-[#8888aa] text-sm hover:text-[#9d7fff] transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COMPANY */}
          <div>
            <h4 className="font-syne text-[13px] font-bold tracking-[0.1em] uppercase text-[#8888aa] mb-4">
              Company
            </h4>
            <ul className="flex flex-col gap-3">
              {footerLinks.Company.map((link) => (
                <li key={link}>
                  <Link href="#" className="text-[#8888aa] text-sm hover:text-[#9d7fff] transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* LEGAL */}
          <div>
            <h4 className="font-syne text-[13px] font-bold tracking-[0.1em] uppercase text-[#8888aa] mb-4">
              Legal
            </h4>
            <ul className="flex flex-col gap-3">
              {footerLinks.Legal.map((link) => (
                <li key={link}>
                  <Link href="#" className="text-[#8888aa] text-sm hover:text-[#9d7fff] transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-white/[0.07] pt-7 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[#8888aa] text-[13px] text-center sm:text-left">
            © 2026 Axonsys. All rights reserved. Built for Windows IT Support Systems.
          </p>
          <p className="text-[#8888aa] text-[13px] text-center sm:text-right">
            Boston, Massachusetts · USA
          </p>
        </div>

      </div>
    </footer>
  );
}

function SocialIcon({ icon: Icon }: { icon: IconType }) {
  return (
    <button className="w-[38px] h-[38px] rounded-[10px] border border-white/[0.07] flex items-center justify-center text-[#8888aa] hover:text-[#9d7fff] hover:border-[#9d7fff] transition">
      <Icon />
    </button>
  );
}