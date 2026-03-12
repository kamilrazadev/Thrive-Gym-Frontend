"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-black">
      {/* Full-bleed background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center 20%",
        }}
      />
      <div className="absolute inset-0 z-0 bg-black/60" />
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-black/90 via-black/40 to-black/10" />
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-black via-transparent to-transparent" />

      {/* Red glow orbs */}
      <div className="absolute z-0 bottom-[-80px] left-[-80px] w-[700px] h-[700px] rounded-full bg-[#F40C41]/18 blur-[150px]" />
      <div className="absolute z-0 top-[-80px] right-[20%] w-[400px] h-[400px] rounded-full bg-[#F40C41]/8 blur-[120px]" />

      {/* Main content */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full pt-28 pb-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-12 items-center">

            {/* Left */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-3 mb-6"
              >
                <span className="w-10 h-[2px] bg-[#F40C41]" />
                <span className="text-[#F40C41] font-black text-xs uppercase tracking-[0.35em]">
                  Thrive Fitness — Est. 2012
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="font-black italic uppercase tracking-tighter leading-[0.88] mb-6"
                style={{ fontSize: "clamp(3.5rem, 8vw, 8rem)" }}
              >
                <span className="block text-white">FORGE YOUR</span>
                <span className="block text-[#F40C41]">STRONGEST</span>
                <span
                  className="block text-transparent"
                  style={{ WebkitTextStroke: "2px rgba(255,255,255,0.35)" }}
                >
                  SELF
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.35 }}
                className="text-white/55 text-lg font-medium max-w-lg mb-10 leading-relaxed"
              >
                Elite coaching. Premium equipment. A community that pushes you
                past every limit you thought you had. Your transformation starts
                today.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-wrap gap-4 mb-12"
              >
                <a
                  href="#membership"
                  className="group flex items-center gap-2 bg-[#F40C41] hover:bg-[#d00a37] text-white font-black uppercase tracking-widest text-sm px-8 py-4 rounded-full transition-all duration-300 shadow-[0_0_30px_rgba(244,12,65,0.45)] hover:shadow-[0_0_50px_rgba(244,12,65,0.65)] hover:-translate-y-0.5"
                >
                  Transform Your Body
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#classes"
                  className="flex items-center gap-3 bg-white/8 hover:bg-white/14 border border-white/15 text-white font-bold uppercase tracking-widest text-sm px-7 py-4 rounded-full transition-all duration-300 backdrop-blur-sm"
                >
                  <span className="w-7 h-7 bg-white/15 rounded-full flex items-center justify-center">
                    <Play className="w-3 h-3 fill-white text-white ml-0.5" />
                  </span>
                  View Classes
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="flex items-center gap-6 flex-wrap"
              >
                {[
                  { v: "5K+", l: "Members" },
                  { v: "50+", l: "Coaches" },
                  { v: "200+", l: "Classes/wk" },
                  { v: "12yr", l: "Experience" },
                ].map((s, i) => (
                  <div key={i} className="flex flex-col">
                    <span className="text-2xl font-black text-white leading-none">{s.v}</span>
                    <span className="text-white/35 text-[11px] font-bold uppercase tracking-widest">{s.l}</span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right — image collage */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.3 }}
              className="hidden lg:flex flex-col gap-3"
            >
              {/* Top — HIIT */}
              <div className="relative rounded-3xl overflow-hidden h-52 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=800&auto=format&fit=crop"
                  alt="HIIT"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <span className="absolute bottom-3 left-4 text-white font-black text-xs uppercase tracking-widest">HIIT Training</span>
              </div>

              {/* Two side-by-side */}
              <div className="grid grid-cols-2 gap-3">
                {/* Strength */}
                <div className="relative rounded-2xl overflow-hidden h-36 shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=600&auto=format&fit=crop"
                    alt="Strength"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <span className="absolute bottom-2 left-3 text-white font-black text-[10px] uppercase tracking-widest">Strength</span>
                </div>
                {/* CrossFit — replaces broken boxing */}
                <div className="relative rounded-2xl overflow-hidden h-36 shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=600&auto=format&fit=crop"
                    alt="CrossFit"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <span className="absolute bottom-2 left-3 text-white font-black text-[10px] uppercase tracking-widest">CrossFit</span>
                </div>
              </div>

              {/* Community badge */}
              <div className="flex items-center justify-between bg-[#F40C41]/15 backdrop-blur-sm border border-[#F40C41]/25 rounded-2xl p-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <img
                      key={i}
                      src={`https://i.pravatar.cc/48?u=m${i}`}
                      className="w-8 h-8 rounded-full border-2 border-black object-cover"
                      alt=""
                    />
                  ))}
                </div>
                <div className="text-right">
                  <p className="text-white font-black text-sm">5,000+ Strong</p>
                  <p className="text-white/40 text-[10px] uppercase tracking-widest font-bold">Active community</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Stats strip at bottom */}
      <div className="relative z-10 border-t border-white/8">
        <div
          className="flex overflow-x-auto"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {[
            { v: "5,000+", l: "Members" },
            { v: "12 Yrs", l: "Experience" },
            { v: "200+", l: "Classes/wk" },
            { v: "4.9★", l: "Rated" },
            { v: "50+", l: "Coaches" },
          ].map((s, i) => (
            <div
              key={i}
              className={`flex-1 min-w-[80px] flex flex-col items-center justify-center text-center py-4 px-3 ${
                i > 0 ? "border-l border-white/8" : ""
              }`}
            >
              <span className="text-base sm:text-lg font-black text-white leading-none">{s.v}</span>
              <span className="text-white/30 text-[9px] font-bold uppercase tracking-widest mt-1">{s.l}</span>
            </div>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ delay: 1.5, duration: 2, repeat: Infinity }}
        className="absolute bottom-16 right-10 z-10 hidden md:flex flex-col items-center gap-1"
      >
        <span className="text-white/20 text-[9px] font-black uppercase tracking-[0.4em]">scroll</span>
        <ChevronDown className="w-4 h-4 text-white/20" />
      </motion.div>
    </section>
  );
}
