import { Zap, Instagram, Facebook, Twitter, Youtube } from "lucide-react";

const footerLinks = {
  Classes: [
    { label: "HIIT Training", href: "#classes" },
    { label: "Power Lifting", href: "#classes" },
    { label: "Boxing", href: "#classes" },
    { label: "CrossFit", href: "#classes" },
    { label: "Yoga & Mobility", href: "#classes" },
    { label: "Spin Cycling", href: "#classes" },
  ],
  Membership: [
    { label: "Starter Plan", href: "#membership" },
    { label: "Thrive Plan", href: "#membership" },
    { label: "Elite Plan", href: "#membership" },
    { label: "Corporate Packages", href: "#contact" },
    { label: "Student Discounts", href: "#contact" },
  ],
  Company: [
    { label: "About Us", href: "#" },
    { label: "Our Trainers", href: "#trainers" },
    { label: "Careers", href: "#" },
    { label: "Press", href: "#" },
    { label: "Contact", href: "#contact" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy", href: "#" },
    { label: "Accessibility", href: "#" },
  ],
};

const socials = [
  { Icon: Instagram, href: "#" },
  { Icon: Facebook, href: "#" },
  { Icon: Twitter, href: "#" },
  { Icon: Youtube, href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/5 pt-20 pb-10 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="/" className="flex items-center gap-2 mb-6 group">
              <div className="w-9 h-9 bg-[#F40C41] rounded-lg flex items-center justify-center">
                <Zap className="w-4 h-4 text-white fill-white" />
              </div>
              <span className="text-xl font-black uppercase tracking-tighter text-white">
                Thrive<span className="text-[#F40C41]">.</span>
              </span>
            </a>
            <p className="text-white/30 text-sm font-medium leading-relaxed max-w-xs mb-8">
              Where champions are made. Your journey to a stronger, healthier
              life starts here — and we'll be with you every rep of the way.
            </p>
            {/* Socials */}
            <div className="flex items-center gap-3">
              {socials.map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-9 h-9 bg-white/5 hover:bg-[#F40C41] border border-white/8 rounded-full flex items-center justify-center transition-all hover:border-transparent group"
                >
                  <Icon className="w-4 h-4 text-white/50 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="flex flex-col gap-4">
              <h4 className="text-white font-black uppercase tracking-widest text-xs">
                {category}
              </h4>
              <ul className="flex flex-col gap-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-white/30 hover:text-[#F40C41] text-sm font-medium transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-t border-white/5 pt-8">
          <p className="text-white/20 text-xs font-medium uppercase tracking-widest">
            © {new Date().getFullYear()} Thrive Fitness. All rights reserved.
          </p>
          <p className="text-white/20 text-xs font-medium uppercase tracking-widest">
            Built for strength. Powered by consistency.
          </p>
        </div>

      </div>

      <p className="pointer-events-none select-none absolute bottom-0 left-1/2 -translate-x-1/2 whitespace-nowrap uppercase font-black tracking-[0.16em] leading-none text-[clamp(2.4rem,12vw,10rem)] bg-linear-to-t from-white/8 via-white/3 to-transparent text-transparent bg-clip-text">
        THRIVE FITNESS
      </p>
    </footer>
  );
}
