import Link from "next/link";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaTools,
  FaShieldAlt,
  FaCloud,
} from "react-icons/fa";

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

export default function Footer() {
  return (
    <footer className="bg-[#12121e] border-t border-white/[0.07] pt-[70px] pb-8">
      <div className="max-w-[1200px] mx-auto px-8">
        {/* TOP GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* BRAND */}
          <div>
            <Link
              href="#home"
              className="flex items-center gap-2.5 no-underline mb-4"
            >
              <div className="w-[38px] h-[38px] rounded-[10px] bg-gradient-to-br from-[#7c5cfc] to-[#e040a0] flex items-center justify-center text-lg">
                <FaTools className="text-white" />
              </div>

              <span className="font-syne text-[22px] font-bold text-[#f0f0f8]">
                Nova<span className="text-[#9d7fff]">Tech</span>
              </span>
            </Link>

            <p className="text-[#8888aa] text-sm leading-[1.7] max-w-[280px] mb-6">
              Boston-based IT support specialists providing Windows system
              maintenance, cybersecurity, networking, and remote technical
              support for businesses.
            </p>

            {/* SOCIAL */}
            <div className="flex gap-2.5">
              <SocialIcon icon={FaLinkedin} />
              <SocialIcon icon={FaGithub} />
              <SocialIcon icon={FaTwitter} />
              <SocialIcon icon={FaFacebook} />
            </div>
          </div>

          {/* SERVICE LINKS */}
          <div>
            <h4 className="font-syne text-[13px] font-bold tracking-[0.1em] uppercase text-[#8888aa] mb-4">
              IT Services
            </h4>

            <ul className="flex flex-col gap-3">
              {footerLinks.IT_Services.map((link) => (
                <li key={link}>
                  <Link
                    href="#services"
                    className="text-[#8888aa] text-sm hover:text-[#9d7fff] transition-colors"
                  >
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
                  <Link
                    href="#"
                    className="text-[#8888aa] text-sm hover:text-[#9d7fff] transition-colors"
                  >
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
                  <Link
                    href="#"
                    className="text-[#8888aa] text-sm hover:text-[#9d7fff] transition-colors"
                  >
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
            © 2026 NovaTech Solutions. All rights reserved. Built for Windows IT
            Support Systems.
          </p>

          <p className="text-[#8888aa] text-[13px]">
            Boston, Massachusetts · USA
          </p>
        </div>
      </div>
    </footer>
  );
}

/* SOCIAL ICON COMPONENT */
function SocialIcon({ icon: Icon }) {
  return (
    <button className="w-[38px] h-[38px] rounded-[10px] border border-white/[0.07] flex items-center justify-center text-[#8888aa] hover:text-[#9d7fff] hover:border-[#9d7fff] transition">
      <Icon />
    </button>
  );
}
