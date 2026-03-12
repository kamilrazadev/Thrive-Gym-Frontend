"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const pillars = [
  "Expert-led programming that gets real results",
  "Premium equipment — commercial-grade, always maintained",
  "A welcoming community for every level of athlete",
  "Flexible schedules — 5AM opens, 11PM closes",
  "Clean, spacious facilities across multiple locations",
];

export default function About() {
  return (
    <section className="py-10 md:py-16 relative overflow-hidden bg-black">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#F40C41]/6 blur-[140px] rounded-full translate-x-1/3 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left — image collage */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative pt-6 pl-0 pr-6 pb-6"
          >
            {/* Main large image */}
            <div className="relative rounded-3xl overflow-hidden h-[460px]">
              <img
                src="https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=1200&auto=format&fit=crop"
                alt="Thrive Fitness gym floor"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>

            {/* Overlapping small card — bottom right, inset so no overflow */}
            <div className="absolute bottom-0 right-0 w-44 rounded-2xl overflow-hidden border-[3px] border-black shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=400&auto=format&fit=crop"
                alt="HIIT class"
                className="w-full h-32 object-cover"
              />
              <div className="bg-zinc-900 px-3 py-2">
                <p className="text-white font-black text-xs uppercase tracking-wide">HIIT Training</p>
                <p className="text-white/40 text-[10px] font-medium">45 min · 20 spots</p>
              </div>
            </div>

            {/* Floating stat card — top left */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute top-0 left-0 bg-[#F40C41] rounded-2xl px-5 py-4 shadow-2xl shadow-[#F40C41]/30"
            >
              <p className="text-white text-3xl font-black leading-none">12+</p>
              <p className="text-white/75 text-[10px] font-bold uppercase tracking-widest mt-1">
                Years Strong
              </p>
            </motion.div>
          </motion.div>

          {/* Right — copy */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col gap-6"
          >
            <div className="flex items-center gap-3">
              <span className="w-10 h-[2px] bg-[#F40C41]" />
              <span className="text-[#F40C41] font-black text-xs uppercase tracking-[0.35em]">
                Our Story
              </span>
            </div>

            <h2
              className="font-black uppercase tracking-tighter leading-[0.9] text-white"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
            >
              MORE THAN A GYM —
              <br />
              <span className="text-[#F40C41]">A MOVEMENT</span>
            </h2>

            <p className="text-white/50 text-lg leading-relaxed font-medium">
              Founded in 2012, Thrive Fitness was built on one belief: everyone
              deserves access to world-class fitness. We're not a big-box gym
              where you're just a membership number. We're a performance
              community where every rep, every session, and every milestone
              matters.
            </p>

            <p className="text-white/35 leading-relaxed font-medium">
              From first-timers to competitive athletes, our expert coaches
              design programmes that meet you exactly where you are — and take
              you further than you ever thought possible.
            </p>

            <ul className="flex flex-col gap-2.5">
              {pillars.map((p, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.07 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#F40C41] shrink-0 mt-0.5" />
                  <span className="text-white/65 font-medium">{p}</span>
                </motion.li>
              ))}
            </ul>

            <a
              href="#membership"
              className="self-start mt-1 bg-white/6 hover:bg-white/12 border border-white/10 hover:border-[#F40C41]/40 text-white font-black uppercase tracking-widest text-sm px-8 py-4 rounded-full transition-all duration-300"
            >
              Start Your Story →
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
