"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Jordan Blake",
    role: "Lost 28 lbs in 4 months",
    avatar: "https://i.pravatar.cc/100?u=jordan1",
    quote:
      "I've tried every gym in the city. Thrive is on a completely different level. The trainers actually care, the community is electric, and I've hit goals I never thought possible.",
    stat: "28 lbs Lost",
    bg: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=900&auto=format&fit=crop",
    large: true,
  },
  {
    name: "Priya Sharma",
    role: "Competed in her first triathlon",
    avatar: "https://i.pravatar.cc/100?u=priya2",
    quote:
      "Twelve months ago I couldn't run a mile. Last month I finished my first triathlon. The coaching here is genuinely transformative.",
    stat: "First Triathlon",
    large: false,
  },
  {
    name: "Marcus Webb",
    role: "Added 40 lbs to his deadlift",
    avatar: "https://i.pravatar.cc/100?u=marcus3",
    quote:
      "The programming is elite. Stronger, leaner, and sharper than ever after six months at Thrive.",
    stat: "+40 lbs Deadlift",
    large: false,
  },
  {
    name: "Alexis Chen",
    role: "Daily member for 2 years",
    avatar: "https://i.pravatar.cc/100?u=alexis4",
    quote:
      "Thrive changed my relationship with my body and mind. The yoga and recovery sessions are as transformative as the strength classes.",
    stat: "2-Year Member",
    large: false,
  },
];

export default function Testimonials() {
  const large = testimonials.find((t) => t.large);
  const rest = testimonials.filter((t) => !t.large);

  return (
    <section className="py-10 md:py-16 relative overflow-hidden bg-zinc-950" id="testimonials">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_50%,rgba(244,12,65,0.05)_0%,transparent_65%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-4 mb-14">
          <div className="flex items-center gap-3">
            <span className="w-10 h-[2px] bg-[#F40C41]" />
            <span className="text-[#F40C41] font-black text-xs uppercase tracking-[0.35em]">
              Real Results
            </span>
            <span className="w-10 h-[2px] bg-[#F40C41]" />
          </div>
          <h2
            className="font-black uppercase tracking-tighter leading-[0.9] text-white"
            style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)" }}
          >
            LIVES <span className="text-[#F40C41]">CHANGED</span>
          </h2>
        </div>

        {/* Layout: large left + stack right */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-5">
          {/* Large hero testimonial */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group relative rounded-[36px] overflow-hidden min-h-[480px] cursor-pointer"
          >
            <div
              className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
              style={{
                backgroundImage: `url('${large.bg}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-transparent" />
            <div className="absolute inset-0 bg-[#F40C41]/0 group-hover:bg-[#F40C41]/6 transition-all duration-500" />

            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, s) => (
                  <Star key={s} className="w-4 h-4 fill-[#F40C41] text-[#F40C41]" />
                ))}
              </div>
              <Quote className="w-12 h-12 text-[#F40C41]/25 mb-3" />
              <p className="text-white text-xl md:text-2xl font-bold italic leading-snug mb-7">
                "{large.quote}"
              </p>
              <div className="flex items-center justify-between border-t border-white/10 pt-5">
                <div className="flex items-center gap-3">
                  <img
                    src={large.avatar}
                    alt={large.name}
                    className="w-11 h-11 rounded-full border-2 border-[#F40C41] object-cover"
                  />
                  <div>
                    <p className="text-white font-black uppercase italic tracking-tighter">
                      {large.name}
                    </p>
                    <p className="text-white/35 text-[10px] font-bold uppercase tracking-widest">
                      {large.role}
                    </p>
                  </div>
                </div>
                <span className="bg-[#F40C41]/20 border border-[#F40C41]/30 text-[#F40C41] text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full">
                  {large.stat}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Three small cards stacked */}
          <div className="flex flex-col gap-4">
            {rest.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, x: 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.12 }}
                viewport={{ once: true }}
                className="group relative rounded-2xl p-6 border border-white/6 bg-white/2 hover:border-[#F40C41]/25 hover:bg-[#F40C41]/3 transition-all duration-300 flex-1 overflow-hidden cursor-pointer"
              >
                <Quote className="w-8 h-8 text-[#F40C41]/10 absolute top-4 right-4 group-hover:text-[#F40C41]/20 transition-colors" />

                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, s) => (
                    <Star key={s} className="w-3.5 h-3.5 fill-[#F40C41] text-[#F40C41]" />
                  ))}
                </div>

                <p className="text-white/75 font-bold italic leading-relaxed text-sm mb-5">
                  "{t.quote}"
                </p>

                <div className="flex items-center justify-between border-t border-white/6 pt-4">
                  <div className="flex items-center gap-2.5">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="w-9 h-9 rounded-full border border-white/10 object-cover"
                    />
                    <div>
                      <p className="text-white font-black uppercase italic tracking-tighter text-sm">
                        {t.name}
                      </p>
                      <p className="text-white/25 text-[10px] font-bold uppercase tracking-widest">
                        {t.role}
                      </p>
                    </div>
                  </div>
                  <span className="bg-[#F40C41]/10 border border-[#F40C41]/15 text-[#F40C41] text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full whitespace-nowrap">
                    {t.stat}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
