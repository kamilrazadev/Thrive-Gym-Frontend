"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Clock, Users } from "lucide-react";

const classes = [
  {
    name: "HIIT Training",
    category: "High Intensity",
    duration: "45 min",
    capacity: "20",
    description: "Explosive interval training that incinerates fat and builds cardiovascular power. Burn calories for 24hrs post-session.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1400&auto=format&fit=crop",
    tag: "Most Popular",
  },
  {
    name: "Power Lifting",
    category: "Strength",
    duration: "60 min",
    capacity: "12",
    description: "Build raw functional strength with expert-coached compound lifts. Every level welcome.",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=900&auto=format&fit=crop",
    tag: "Beginner Friendly",
  },
  {
    name: "Boxing",
    category: "Combat Fitness",
    duration: "50 min",
    capacity: "15",
    description: "Coordination, speed, and confidence through professional boxing technique and bag work.",
    image: "https://images.unsplash.com/photo-1576678927484-cc907957088c?q=80&w=900&auto=format&fit=crop",
    tag: "High Energy",
  },
  {
    name: "CrossFit",
    category: "Functional Fitness",
    duration: "55 min",
    capacity: "18",
    description: "Constantly varied movements at high intensity. Community-driven and guaranteed to work.",
    image: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=1200&auto=format&fit=crop",
    tag: "Community Fave",
  },
  {
    name: "Yoga & Mobility",
    category: "Recovery",
    duration: "60 min",
    capacity: "25",
    description: "Restore, lengthen, strengthen. Essential recovery for athletes who want to train harder.",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=900&auto=format&fit=crop",
    tag: "All Levels",
  },
  {
    name: "Spin Cycling",
    category: "Cardio",
    duration: "45 min",
    capacity: "30",
    description: "High-energy cycling to the beat. Burn up to 800 calories. Ride with a purpose.",
    image: "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?q=80&w=900&auto=format&fit=crop",
    tag: "Fat Burner",
  },
];

export default function Classes() {
  return (
    <section className="py-10 md:py-16 bg-black relative overflow-hidden" id="classes">
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#F40C41]/5 blur-[140px] rounded-full translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-[2px] bg-[#F40C41]" />
              <span className="text-[#F40C41] font-black text-xs uppercase tracking-[0.35em]">What We Offer</span>
            </div>
            <h2
              className="font-black uppercase tracking-tighter leading-[0.9] text-white"
              style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)" }}
            >
              ELITE<br /><span className="text-[#F40C41]">CLASSES</span>
            </h2>
          </div>
          <p className="text-white/40 max-w-sm font-medium text-lg leading-relaxed md:text-right">
            From explosive HIIT to restorative yoga — the perfect programme for every body and every goal.
          </p>
        </div>

        {/* Hero class — full width */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="group relative rounded-3xl overflow-hidden cursor-pointer mb-4 h-[420px] md:h-[500px]"
        >
          <img
            src={classes[0].image}
            alt={classes[0].name}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute top-5 left-5 bg-[#F40C41] text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full">
            {classes[0].tag}
          </div>
          <div className="absolute bottom-0 left-0 p-8 md:p-12 max-w-2xl">
            <span className="text-[#F40C41] text-xs font-black uppercase tracking-widest flex items-center gap-2 mb-3">
              {classes[0].category}
              <span className="w-1 h-1 rounded-full bg-white/30" />
              <Clock className="w-3 h-3 text-white/40" />
              <span className="text-white/40">{classes[0].duration}</span>
            </span>
            <h3
              className="font-black uppercase italic text-white tracking-tighter leading-none mb-4"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
            >
              {classes[0].name}
            </h3>
            <p className="text-white/55 font-medium leading-relaxed text-base max-w-lg opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400">
              {classes[0].description}
            </p>
          </div>
          <div className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
            <ArrowUpRight className="w-5 h-5 text-white" />
          </div>
        </motion.div>

        {/* Two medium cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          {classes.slice(1, 3).map((cls, i) => (
            <ClassCard key={cls.name} cls={cls} index={i + 1} height="h-72" />
          ))}
        </div>

        {/* Three small cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {classes.slice(3).map((cls, i) => (
            <ClassCard key={cls.name} cls={cls} index={i + 3} height="h-64" />
          ))}
        </div>
      </div>
    </section>
  );
}

function ClassCard({ cls, index, height }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.07 }}
      viewport={{ once: true }}
      className={`group relative rounded-2xl overflow-hidden cursor-pointer ${height}`}
    >
      <img
        src={cls.image}
        alt={cls.name}
        className="absolute inset-0 w-full h-full object-cover img-zoom"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
      <div className="absolute inset-0 bg-[#F40C41]/0 group-hover:bg-[#F40C41]/6 transition-all duration-500" />
      <div className="absolute top-3 left-3 bg-[#F40C41] text-white text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full">
        {cls.tag}
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <span className="text-[#F40C41] text-[10px] font-black uppercase tracking-widest">{cls.category}</span>
        <h3 className="text-xl font-black uppercase italic text-white tracking-tighter leading-tight mt-0.5">
          {cls.name}
        </h3>
        <div className="flex items-center gap-3 mt-1.5 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          <span className="flex items-center gap-1 text-white/40 text-[10px] font-bold">
            <Clock className="w-3 h-3" />{cls.duration}
          </span>
          <span className="flex items-center gap-1 text-white/40 text-[10px] font-bold">
            <Users className="w-3 h-3" />{cls.capacity} spots
          </span>
        </div>
      </div>
    </motion.div>
  );
}
