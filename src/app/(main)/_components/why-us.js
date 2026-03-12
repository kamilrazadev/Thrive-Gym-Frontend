"use client";

import { motion } from "framer-motion";
import { ArrowRight, Dumbbell, Users, Calendar, Trophy } from "lucide-react";

const features = [
  {
    icon: Dumbbell,
    tag: "Equipment",
    title: "WORLD-CLASS\nEQUIPMENT",
    desc: "Commercial-grade gear from the world's top brands — always spotless, always maintained. Barbells, power racks, cable machines, sled tracks. Everything you need. Nothing you don't.",
    stat: { v: "500+", l: "Pieces of Equipment" },
    image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1400&auto=format&fit=crop",
    glowPos: "right",
    imgSide: "right",
  },
  {
    icon: Users,
    tag: "Coaching",
    title: "EXPERT COACHES\nWHO DELIVER",
    desc: "50+ certified personal trainers, class instructors, and nutritionists — each hand-picked and obsessed with one thing: your results. Whether you're a first-timer or a competitive athlete, we have your coach.",
    stat: { v: "50+", l: "Certified Coaches" },
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=1400&auto=format&fit=crop",
    glowPos: "left",
    imgSide: "left",
  },
  {
    icon: Calendar,
    tag: "Classes",
    title: "200+ CLASSES\nEVERY WEEK",
    desc: "HIIT, boxing, CrossFit, spin, yoga, pilates — 15 disciplines running morning to night. Our timetable is built around your life. Never miss a session because there's always one that fits.",
    stat: { v: "200+", l: "Weekly Classes" },
    image: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?q=80&w=1400&auto=format&fit=crop",
    glowPos: "right",
    imgSide: "right",
  },
  {
    icon: Trophy,
    tag: "Results",
    title: "REAL RESULTS.\nEVERY TIME.",
    desc: "Thousands of members have lost weight, built muscle, crushed anxiety, and discovered what their bodies are truly capable of. This is a place where transformation isn't the exception — it's the expectation.",
    stat: { v: "5K+", l: "Transformations" },
    image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=1400&auto=format&fit=crop",
    glowPos: "left",
    imgSide: "left",
  },
];

export default function WhyUs() {
  return (
    <section className="relative overflow-hidden bg-black">
      {/* Section header */}
      <div className="pt-10 md:pt-16 pb-8 md:pb-10 text-center relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_100%,rgba(244,12,65,0.07),transparent_65%)] pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="w-10 h-[2px] bg-[#F40C41]" />
            <span className="text-[#F40C41] font-black text-xs uppercase tracking-[0.35em]">Why Thrive</span>
            <span className="w-10 h-[2px] bg-[#F40C41]" />
          </div>
          <h2
            className="font-black uppercase tracking-tighter leading-[0.9] text-white mb-5"
            style={{ fontSize: "clamp(2.8rem, 6vw, 5.5rem)" }}
          >
            EVERYTHING YOU NEED.
            <br />
            <span className="text-[#F40C41]">NOTHING YOU DON'T.</span>
          </h2>
          <p className="text-white/40 max-w-xl mx-auto font-medium text-lg leading-relaxed">
            We've stripped away the fluff and doubled down on what actually drives results.
          </p>
        </div>
      </div>

      {/* Feature panels */}
      {features.map((f, i) => (
        <FeaturePanel key={f.tag} feature={f} index={i} />
      ))}
    </section>
  );
}

function FeaturePanel({ feature: f, index }) {
  const imgRight = f.imgSide === "right";

  return (
    <div
      className={`relative min-h-[520px] flex items-stretch overflow-hidden ${
        index % 2 === 0 ? "bg-zinc-950" : "bg-black"
      }`}
    >
      {/* Red glow orb behind image */}
      <div
        className={`absolute top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#F40C41]/12 blur-[130px] rounded-full pointer-events-none ${
          imgRight ? "right-0 translate-x-1/3" : "left-0 -translate-x-1/3"
        }`}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full grid grid-cols-1 lg:grid-cols-2 items-center gap-0">

        {/* Text side */}
        <motion.div
          initial={{ opacity: 0, x: imgRight ? -40 : 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className={`flex flex-col justify-center py-8 md:py-16 ${imgRight ? "lg:pr-20" : "lg:pl-20 lg:order-2"}`}
        >
          {/* Icon + tag */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-[#F40C41]/12 border border-[#F40C41]/20 flex items-center justify-center">
              <f.icon className="w-5 h-5 text-[#F40C41]" />
            </div>
            <span className="text-[#F40C41] font-black text-xs uppercase tracking-[0.35em]">{f.tag}</span>
          </div>

          {/* Title */}
          <h3
            className="font-black uppercase italic tracking-tighter leading-[0.88] text-white mb-6 whitespace-pre-line"
            style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.8rem)" }}
          >
            {f.title}
          </h3>

          {/* Stat */}
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-[#F40C41] rounded-xl px-5 py-3 shadow-lg shadow-[#F40C41]/25">
              <p className="text-white text-2xl font-black leading-none">{f.stat.v}</p>
              <p className="text-white/70 text-[10px] font-bold uppercase tracking-widest mt-0.5">{f.stat.l}</p>
            </div>
          </div>

          {/* Desc */}
          <p className="text-white/45 text-base font-medium leading-relaxed mb-8 max-w-md">
            {f.desc}
          </p>

          <a
            href="#membership"
            className="group inline-flex items-center gap-3 text-white/60 hover:text-[#F40C41] font-black uppercase tracking-widest text-xs transition-colors duration-200"
          >
            <span className="w-10 h-[1px] bg-current group-hover:w-16 transition-all duration-300" />
            Get Started
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

        {/* Image side — floating PNG look via CSS mask */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.05 }}
          className={`relative flex items-center justify-center py-10 lg:py-0 ${
            imgRight ? "lg:order-2" : "lg:order-1"
          }`}
        >
          {/* Secondary glow directly behind the image */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-72 h-72 bg-[#F40C41]/15 blur-[80px] rounded-full" />
          </div>

          {/* PNG-style floating image */}
          <div className="relative w-full max-w-[480px] mx-auto">
            <img
              src={f.image}
              alt={f.title}
              className="w-full h-[420px] object-cover rounded-2xl"
              style={{
                WebkitMaskImage:
                  "radial-gradient(ellipse 88% 90% at 50% 50%, black 35%, rgba(0,0,0,0.7) 55%, transparent 80%)",
                maskImage:
                  "radial-gradient(ellipse 88% 90% at 50% 50%, black 35%, rgba(0,0,0,0.7) 55%, transparent 80%)",
              }}
            />

            {/* Accent line at the bottom of the image */}
            <div
              className={`absolute bottom-0 h-[2px] w-32 bg-gradient-to-r from-[#F40C41] to-transparent ${
                imgRight ? "left-8" : "right-8 rotate-180"
              }`}
            />
          </div>
        </motion.div>
      </div>

      {/* Horizontal separator */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
    </div>
  );
}
