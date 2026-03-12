"use client";

import { motion } from "framer-motion";

// Ticker marquee strip — infinite scroll of class names
const items = [
  "HIIT TRAINING",
  "POWERLIFTING",
  "BOXING",
  "CROSSFIT",
  "SPIN CYCLING",
  "YOGA & MOBILITY",
  "FUNCTIONAL FITNESS",
  "BOOT CAMP",
  "KICKBOXING",
  "PILATES",
  "STRENGTH & CONDITIONING",
  "ZUMBA",
];

export default function Stats() {
  return (
    <div className="bg-[#F40532] overflow-hidden py-4 relative">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#F40532] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#F40532] to-transparent z-10 pointer-events-none" />

      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        className="flex items-center gap-8 whitespace-nowrap"
        style={{ width: "max-content" }}
      >
        {[...items, ...items].map((item, i) => (
          <div key={i} className="flex items-center gap-8">
            <span className="text-white font-black uppercase tracking-[0.25em] text-sm">
              {item}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

