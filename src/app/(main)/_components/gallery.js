"use client";

import { motion } from "framer-motion";
import { Instagram } from "lucide-react";

// All unique images — none used in any other section
const gallery = {
  // Row 1: 1 wide (60%) + 1 tall (40%)
  wideLeft: {
    src: "https://images.unsplash.com/photo-1571731956672-f2b94d7dd0cb?q=80&w=1400&auto=format&fit=crop",
    label: "Morning Session",
  },
  tallRight: {
    src: "https://images.unsplash.com/photo-1590487988256-9ed24133863e?q=80&w=800&auto=format&fit=crop",
    label: "Personal Training",
  },

  // Row 2: Full-width cinematic banner
  banner: {
    src: "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=2000&auto=format&fit=crop",
    label: "The Thrive Floor",
  },

  // Row 3: 3 equal + 1 double-height stacked with row 4
  threeA: {
    src: "https://images.unsplash.com/photo-1545389336-cf090694435e?q=80&w=800&auto=format&fit=crop",
    label: "HIIT Class",
  },
  threeB: {
    src: "https://images.unsplash.com/photo-1604480133435-25b86862d276?q=80&w=800&auto=format&fit=crop",
    label: "Group Energy",
  },
  threeC: {
    src: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=80&w=800&auto=format&fit=crop",
    label: "Active Life",
  },
  tallRight2: {
    src: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=800&auto=format&fit=crop",
    label: "Strength Training",
  },

  // Row 4 left-side under threeA/B/C
  fourA: {
    src: "https://images.unsplash.com/photo-1579758629938-03607ccdbaba?q=80&w=800&auto=format&fit=crop",
    label: "Recovery",
  },
  fourB: {
    src: "https://images.unsplash.com/photo-1581009137042-c552e485697a?q=80&w=800&auto=format&fit=crop",
    label: "Core Work",
  },
  fourC: {
    src: "https://images.unsplash.com/photo-1550259979-ed79b48d2a30?q=80&w=800&auto=format&fit=crop",
    label: "Boxing Bag",
  },
};

function GalleryImg({ src, label, className }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5 }}
      className={`group relative overflow-hidden cursor-pointer ${className}`}
    >
      <img
        src={src}
        alt={label}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
      />
      {/* Hover overlays */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-400" />
      <div className="absolute inset-0 bg-[#F40532]/0 group-hover:bg-[#F40532]/10 transition-all duration-400" />

      {/* Label */}
      <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-400 ease-out">
        <p className="text-white font-black uppercase tracking-widest text-xs">
          {label}
        </p>
      </div>

      {/* Instagram icon */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all duration-300">
        <div className="w-10 h-10 rounded-full bg-[#F40532] flex items-center justify-center shadow-lg shadow-[#F40532]/40">
          <Instagram className="w-4 h-4 text-white" />
        </div>
      </div>
    </motion.div>
  );
}

export default function Gallery() {
  return (
    <section className="py-10 md:py-16 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-10">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-10 h-[2px] bg-[#F40532]" />
              <span className="text-[#F40532] font-black text-xs uppercase tracking-[0.35em]">
                Life at Thrive
              </span>
            </div>
            <h2
              className="font-black uppercase tracking-[4px] leading-[0.9] text-white"
              style={{ fontSize: "clamp(2.2rem, 4vw, 4rem)" }}
            >
              SEE THE <span className="text-[#F40532]">ENERGY</span>
            </h2>
          </div>
          <a
            href="#"
            className="flex items-center gap-2 text-white/40 hover:text-white font-bold uppercase tracking-widest text-xs transition-colors border border-white/8 hover:border-[#F40532]/30 px-5 py-3 rounded-full group"
          >
            <Instagram className="w-4 h-4 group-hover:text-[#F40532] transition-colors" />
            @thrivefitness
          </a>
        </div>

        {/* ── Creative editorial bento grid ── */}
        <div className="flex flex-col gap-3">
          {/* Row 1: Wide (60%) + Tall (40%) */}
          <div className="grid grid-cols-5 gap-3 h-72 md:h-96">
            <GalleryImg
              src={gallery.wideLeft.src}
              label={gallery.wideLeft.label}
              className="col-span-5 md:col-span-3 rounded-2xl"
            />
            <GalleryImg
              src={gallery.tallRight.src}
              label={gallery.tallRight.label}
              className="col-span-5 md:col-span-2 rounded-2xl"
            />
          </div>

          {/* Row 2: Full-width cinematic banner */}
          <div className="relative rounded-2xl overflow-hidden h-48 md:h-64 group cursor-pointer">
            <motion.img
              src={gallery.banner.src}
              alt={gallery.banner.label}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              initial={{ scale: 1.05 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-black/60" />
            {/* Big overlay text */}
            <div className="absolute inset-0 flex items-center justify-between px-8 md:px-12">
              <div>
                <p className="text-white/50 text-xs font-black uppercase tracking-[0.4em] mb-1">
                  Our Space
                </p>
                <h3
                  className="text-white font-black uppercase tracking-[4px] leading-none"
                  style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
                >
                  {gallery.banner.label}
                </h3>
              </div>
              <a
                href="#"
                className="hidden md:flex items-center gap-2 bg-[#F40532]/90 hover:bg-[#F40532] text-white font-black uppercase tracking-widest text-xs px-5 py-3 rounded-full transition-all"
              >
                <Instagram className="w-3.5 h-3.5" />
                Follow Us
              </a>
            </div>
          </div>

          {/* Row 3+4: 3-col (left 3/4) + 1 double-tall (right 1/4) */}
          <div className="grid grid-cols-4 gap-3">
            {/* Left: 3 + 3 in a 3-col sub-grid */}
            <div className="col-span-4 md:col-span-3 grid grid-cols-3 gap-3">
              <GalleryImg
                src={gallery.threeA.src}
                label={gallery.threeA.label}
                className="col-span-1 rounded-2xl h-44"
              />
              <GalleryImg
                src={gallery.threeB.src}
                label={gallery.threeB.label}
                className="col-span-1 rounded-2xl h-44"
              />
              <GalleryImg
                src={gallery.threeC.src}
                label={gallery.threeC.label}
                className="col-span-1 rounded-2xl h-44"
              />
              <GalleryImg
                src={gallery.fourA.src}
                label={gallery.fourA.label}
                className="col-span-1 rounded-2xl h-44"
              />
              <GalleryImg
                src={gallery.fourB.src}
                label={gallery.fourB.label}
                className="col-span-1 rounded-2xl h-44"
              />
              <GalleryImg
                src={gallery.fourC.src}
                label={gallery.fourC.label}
                className="col-span-1 rounded-2xl h-44"
              />
            </div>

            {/* Right: Single tall image spanning both rows */}
            <GalleryImg
              src={gallery.tallRight2.src}
              label={gallery.tallRight2.label}
              className="hidden md:block col-span-1 rounded-2xl"
              style={{ minHeight: "368px" }}
            />
          </div>
        </div>

        {/* Bottom tag */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-white/20 text-xs font-medium mt-8 uppercase tracking-widest"
        >
          Tag us <span className="text-[#F40532]">@thrivefitness</span> to be
          featured
        </motion.p>
      </div>
    </section>
  );
}
