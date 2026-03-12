"use client";

import { motion } from "framer-motion";
import { Instagram, Facebook, Twitter } from "lucide-react";
import Link from "next/link";

const trainers = [
  {
    slug: "marcus-cole",
    name: "Marcus Cole",
    role: "Strength Coach",
    specialty: "Powerlifting & Olympic Lifting",
    exp: "8 Yrs",
    classes: 12,
    image: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?q=80&w=800&auto=format&fit=crop",
  },
  {
    slug: "elena-torres",
    name: "Elena Torres",
    role: "HIIT Specialist",
    specialty: "Metabolic Conditioning",
    exp: "6 Yrs",
    classes: 16,
    image: "https://images.unsplash.com/photo-1611672585731-fa10603fb9e0?q=80&w=800&auto=format&fit=crop",
  },
  {
    slug: "dax-merritt",
    name: "Dax Merritt",
    role: "Boxing Coach",
    specialty: "Combat Fitness & Striking",
    exp: "10 Yrs",
    classes: 10,
    image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=800&auto=format&fit=crop",
  },
  {
    slug: "sofia-james",
    name: "Sofia James",
    role: "Yoga & Mobility",
    specialty: "Flexibility & Recovery",
    exp: "7 Yrs",
    classes: 14,
    image: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=800&auto=format&fit=crop",
  },
];

export default function Trainers() {
  return (
    <section className="py-10 md:py-16 relative overflow-hidden bg-black" id="trainers">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(244,12,65,0.04)_0%,transparent_60%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col items-center gap-4 text-center mb-14">
          <div className="flex items-center gap-3">
            <span className="w-10 h-[2px] bg-[#F40C41]" />
            <span className="text-[#F40C41] font-black text-xs uppercase tracking-[0.35em]">The Experts</span>
            <span className="w-10 h-[2px] bg-[#F40C41]" />
          </div>
          <h2
            className="font-black uppercase tracking-tighter leading-[0.9] text-white"
            style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)" }}
          >
            MEET YOUR <span className="text-[#F40C41]">COACHES</span>
          </h2>
          <p className="text-white/40 max-w-lg font-medium text-lg leading-relaxed">
            Certified, passionate, and relentless. Our coaches don't just teach — they lead by example.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {trainers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
            <Link href={`/trainers/${t.slug}`} className="block">
              <div className="relative rounded-[26px] overflow-hidden border border-white/5 group-hover:border-[#F40C41]/25 transition-all duration-300">
                {/* Image */}
                <div className="relative h-[340px] overflow-hidden">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="trainer-photo w-full h-full object-cover object-top img-zoom"
                    style={{ filter: "grayscale(55%)" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/15 to-transparent" />

                  {/* Exp badge */}
                  <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-sm border border-white/10 rounded-full px-3 py-1">
                    <span className="text-white/60 text-[10px] font-black uppercase tracking-widest">{t.exp}</span>
                  </div>

                  {/* Classes badge */}
                  <div className="absolute top-3 right-3 bg-[#F40C41]/90 rounded-full px-2 py-1">
                    <span className="text-white text-[10px] font-black uppercase tracking-widest">{t.classes}/wk</span>
                  </div>

                  {/* Social — slides up */}
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center translate-y-20 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                    <div className="flex items-center gap-1 bg-[#F40C41] p-2 rounded-2xl shadow-2xl shadow-[#F40C41]/30">
                      {[Instagram, Facebook, Twitter].map((Icon, idx) => (
                        <button key={idx} className="w-9 h-9 rounded-xl bg-white/15 hover:bg-white/25 flex items-center justify-center transition-colors">
                          <Icon className="w-4 h-4 text-white" />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="p-4 bg-zinc-950 group-hover:bg-[#F40C41]/5 transition-colors duration-300">
                  <h3 className="text-white font-black uppercase italic tracking-tighter text-lg leading-none">{t.name}</h3>
                  <p className="text-[#F40C41] font-bold uppercase tracking-widest text-xs mt-1">{t.role}</p>
                  <p className="text-white/30 text-xs font-medium mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{t.specialty}</p>
                </div>
              </div>
            </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-5 border border-white/5 rounded-2xl p-6 bg-white/2"
        >
          <div>
            <h3 className="text-xl font-black text-white uppercase italic tracking-tighter">Want 1-on-1 Personal Training?</h3>
            <p className="text-white/40 font-medium text-sm mt-1">Book a session with any of our certified coaches.</p>
          </div>
          <a
            href="#contact"
            className="shrink-0 bg-[#F40C41] hover:bg-[#d00a37] text-white font-black uppercase tracking-widest text-xs px-7 py-3.5 rounded-full transition-all hover:shadow-[0_0_25px_rgba(244,12,65,0.4)] hover:-translate-y-px"
          >
            Book a Session
          </a>
        </motion.div>
      </div>
    </section>
  );
}
