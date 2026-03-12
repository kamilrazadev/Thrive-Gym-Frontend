"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function WelcomeAnimation() {
  const [visible, setVisible] = useState(true);
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 80),      // vertical slash shoots across
      setTimeout(() => setPhase(2), 420),     // logo + tagline fade in
      setTimeout(() => setPhase(3), 980),     // progress bar starts
      setTimeout(() => setPhase(4), 2300),    // exit curtain slides in
      setTimeout(() => setVisible(false), 2750), // unmount
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="welcome"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeIn" }}
          className="fixed inset-0 z-[9999] bg-black flex items-center justify-center overflow-hidden select-none"
        >

          {/* ── Red radial glow ── */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full pointer-events-none"
            style={{ background: "radial-gradient(ellipse, rgba(244,12,65,0.22) 0%, transparent 70%)" }}
            initial={{ opacity: 0, scale: 0.4 }}
            animate={{ opacity: phase >= 2 ? 1 : 0, scale: phase >= 2 ? 1 : 0.4 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />

          {/* ── Vertical red slash shoots left → right ── */}
          <motion.div
            className="absolute top-0 bottom-0 pointer-events-none"
            style={{
              width: "3px",
              background: "linear-gradient(to bottom, transparent, #F40C41 20%, #F40C41 80%, transparent)",
              boxShadow: "0 0 24px 4px rgba(244,12,65,0.7)",
            }}
            initial={{ left: "-6px" }}
            animate={{ left: phase >= 1 ? "110%" : "-6px" }}
            transition={{ duration: 0.32, ease: [0.6, 0, 0.8, 1] }}
          />

          {/* ── Center content ── */}
          <div className="relative z-10 flex flex-col items-center gap-5">

            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7, y: 20 }}
              animate={{
                opacity: phase >= 2 && phase < 4 ? 1 : 0,
                scale: phase >= 4 ? 1.08 : phase >= 2 ? 1 : 0.7,
                y: phase >= 2 ? 0 : 20,
              }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <div style={{ mixBlendMode: "screen" }}>
                <img
                  src="/images/logo.png"
                  alt="Thrive Fitness"
                  className="h-20 sm:h-24 w-auto"
                  style={{ filter: "invert(1) hue-rotate(180deg)" }}
                  draggable={false}
                />
              </div>
            </motion.div>

            {/* Red separator */}
            <motion.div
              className="h-[1px]"
              style={{ background: "linear-gradient(to right, transparent, #F40C41, transparent)" }}
              initial={{ width: 0, opacity: 0 }}
              animate={{
                width: phase >= 2 && phase < 4 ? 180 : 0,
                opacity: phase >= 2 && phase < 4 ? 1 : 0,
              }}
              transition={{ duration: 0.55, delay: 0.15, ease: "easeOut" }}
            />

            {/* Tagline */}
            <motion.p
              className="text-white/45 font-black uppercase tracking-[0.5em] text-[10px] sm:text-xs"
              initial={{ opacity: 0, y: 10 }}
              animate={{
                opacity: phase >= 2 && phase < 4 ? 1 : 0,
                y: phase >= 2 ? 0 : 10,
              }}
              transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
            >
              Forge Your Strongest Self
            </motion.p>

            {/* Weight rings */}
            <motion.div
              className="flex items-center gap-2 mt-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: phase >= 2 && phase < 4 ? 1 : 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="rounded-full border border-[#F40C41]/40"
                  style={{ width: 6, height: 6 }}
                  initial={{ scale: 0 }}
                  animate={{ scale: phase >= 2 ? 1 : 0 }}
                  transition={{ delay: 0.5 + i * 0.06, duration: 0.3, ease: "backOut" }}
                />
              ))}
            </motion.div>
          </div>

          {/* ── Progress bar at bottom ── */}
          <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-white/5">
            <motion.div
              className="h-full bg-[#F40C41] origin-left"
              style={{ boxShadow: "0 0 10px rgba(244,12,65,0.6)" }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: phase >= 3 ? 1 : 0 }}
              transition={{ duration: 1.25, ease: [0.25, 0.46, 0.45, 0.94] }}
            />
          </div>

          {/* ── Loading label ── */}
          <motion.div
            className="absolute bottom-5 right-5 sm:right-8 text-right"
            initial={{ opacity: 0 }}
            animate={{ opacity: phase >= 3 && phase < 4 ? 1 : 0 }}
            transition={{ duration: 0.4 }}
          >
            <p className="text-white/20 text-[9px] font-black uppercase tracking-[0.3em]">Loading</p>
          </motion.div>

          {/* ── Exit curtain ── */}
          <motion.div
            className="absolute inset-0 bg-black origin-right pointer-events-none"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: phase >= 4 ? 1 : 0 }}
            transition={{ duration: 0.42, ease: [0.6, 0, 0.8, 1] }}
          />

        </motion.div>
      )}
    </AnimatePresence>
  );
}
