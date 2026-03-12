"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CtaBanner() {
  return (
    <section className="relative py-0 overflow-hidden bg-black">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative overflow-hidden rounded-none"
      >
        {/* Background */}
        <div
          className="relative h-80 md:h-72"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop')",
            backgroundSize: "cover",
            backgroundPosition: "center 60%",
            backgroundAttachment: "fixed",
          }}
        >
          <div className="absolute inset-0 bg-[#F40532]/85" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50" />

          {/* Content */}
          <div className="relative z-10 h-full flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <p className="text-white/70 font-black uppercase tracking-[0.35em] text-xs mb-2">
                  Limited Spots Available
                </p>
                <h2
                  className="text-white font-black uppercase tracking-[4px] leading-none"
                  style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
                >
                  YOUR FIRST WEEK IS FREE.
                  <br />
                  NO EXCUSES.
                </h2>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                <a
                  href="#membership"
                  className="group flex items-center gap-2 bg-white text-[#F40532] hover:bg-white/90 font-black uppercase tracking-widest text-sm px-8 py-4 rounded-full transition-all hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:-translate-y-0.5"
                >
                  Secure Your Spot
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#contact"
                  className="flex items-center gap-2 bg-white/15 hover:bg-white/25 border border-white/30 text-white font-black uppercase tracking-widest text-sm px-7 py-4 rounded-full transition-all backdrop-blur-sm"
                >
                  Talk to Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
