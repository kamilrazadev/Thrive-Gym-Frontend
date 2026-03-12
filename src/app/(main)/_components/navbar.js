"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";

const links = [
  { label: "Classes", hash: "#classes", num: "01" },
  { label: "Trainers", hash: "#trainers", num: "02" },
  { label: "Schedule", hash: "#schedule", num: "03" },
  { label: "Membership", hash: "#membership", num: "04" },
  { label: "Contact", hash: "#contact", num: "05" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // On home page use bare hash so scroll is smooth; on other pages go home first
  const href = (hash) => (pathname === "/" ? hash : `/${hash}`);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-black/90 backdrop-blur-xl border-b border-white/5 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="relative z-10 group">
            <div style={{ mixBlendMode: "screen" }}>
              <img
                src="/images/logo.png"
                alt="Thrive Fitness"
                className="h-9 w-auto group-hover:scale-105 transition-transform duration-300"
                style={{ filter: "invert(1) hue-rotate(180deg)" }}
              />
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative text-white/45 hover:text-white text-sm font-bold uppercase tracking-widest transition-colors duration-200 group"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-[1px] bg-[#F40C41] group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <a
            href="#membership"
            className="hidden md:flex items-center gap-2 bg-[#F40C41] hover:bg-[#d00a37] text-white font-black uppercase tracking-widest text-xs px-6 py-3 rounded-full transition-all duration-300 hover:shadow-[0_0_28px_rgba(244,12,65,0.5)] hover:-translate-y-px"
          >
            Get Started
          </a>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden relative z-10 w-10 h-10 flex items-center justify-center text-white"
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* ── Full-screen mobile menu overlay ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] md:hidden flex flex-col overflow-hidden"
          >
            {/* Background layers */}
            <div className="absolute inset-0 bg-black" />
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                opacity: 0.07,
              }}
            />
            {/* Red glow bottom-left */}
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#F40C41]/20 blur-[120px] rounded-full -translate-x-1/4 translate-y-1/4 pointer-events-none" />
            {/* Red glow top-right */}
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#F40C41]/10 blur-[100px] rounded-full translate-x-1/4 -translate-y-1/4 pointer-events-none" />

            {/* Top bar */}
            <div className="relative z-10 flex items-center justify-between px-6 pt-5 pb-0">
              <a href="#" onClick={() => setOpen(false)}>
                <div style={{ mixBlendMode: "screen" }}>
                  <img
                    src="/images/logo.png"
                    alt="Thrive Fitness"
                    className="h-8 w-auto"
                    style={{ filter: "invert(1) hue-rotate(180deg)" }}
                  />
                </div>
              </a>
              <button
                onClick={() => setOpen(false)}
                className="w-10 h-10 rounded-full bg-white/8 flex items-center justify-center text-white hover:bg-white/15 transition-colors"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Nav links — staggered slide from bottom */}
            <nav className="relative z-10 flex-1 min-h-0 overflow-y-auto px-8 flex flex-col gap-1" style={{ scrollbarWidth: "none" }}>
              <div className="my-auto py-6 flex flex-col gap-1">
              {links.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 60 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 40 }}
                  transition={{ delay: 0.06 * i + 0.1, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="group flex items-center justify-between py-5 border-b border-white/6 last:border-0"
                >
                  <div className="flex items-baseline gap-4">
                    <span className="text-[#F40C41]/40 text-xs font-black tabular-nums">
                      {link.num}
                    </span>
                    <span className="text-white font-black uppercase italic tracking-tighter group-hover:text-[#F40C41] transition-colors duration-200"
                      style={{ fontSize: "clamp(2rem, 9vw, 3rem)" }}>
                      {link.label}
                    </span>
                  </div>
                  <ArrowRight className="w-5 h-5 text-white/20 group-hover:text-[#F40C41] group-hover:translate-x-1 transition-all duration-200" />
                </motion.a>
              ))}
              </div>
            </nav>

            {/* Bottom CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.45, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 px-6 pb-10 pt-4"
            >
              <a
                href="#membership"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-3 w-full bg-[#F40C41] hover:bg-[#d00a37] text-white font-black uppercase tracking-widest text-sm py-5 rounded-2xl transition-all shadow-[0_0_40px_rgba(244,12,65,0.35)]"
              >
                Start Training Today
                <ArrowRight className="w-4 h-4" />
              </a>
              <p className="text-white/20 text-xs font-medium text-center mt-4 uppercase tracking-widest">
                No credit card required
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
