"use client";

import { motion } from "framer-motion";
import { Clock, Users } from "lucide-react";

const days = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

const schedule = {
  MON: [
    { time: "6:00 AM", name: "Morning HIIT", coach: "Elena T.", spots: 8 },
    { time: "9:00 AM", name: "Yoga Flow", coach: "Sofia J.", spots: 12 },
    { time: "12:00 PM", name: "Powerlifting", coach: "Marcus C.", spots: 4 },
    { time: "5:30 PM", name: "Boxing Basics", coach: "Dax M.", spots: 6 },
    { time: "7:00 PM", name: "HIIT Blast", coach: "Elena T.", spots: 10 },
  ],
  TUE: [
    { time: "7:00 AM", name: "Spin Cycling", coach: "Kai R.", spots: 15 },
    { time: "10:00 AM", name: "Pilates Core", coach: "Sofia J.", spots: 9 },
    { time: "1:00 PM", name: "Strength & Cond.", coach: "Marcus C.", spots: 7 },
    { time: "6:00 PM", name: "CrossFit WOD", coach: "Dax M.", spots: 5 },
    { time: "8:00 PM", name: "Mobility Reset", coach: "Sofia J.", spots: 18 },
  ],
  WED: [
    { time: "6:00 AM", name: "Boot Camp", coach: "Marcus C.", spots: 3 },
    { time: "9:30 AM", name: "Yoga Stretch", coach: "Sofia J.", spots: 14 },
    { time: "12:30 PM", name: "Boxing Combo", coach: "Dax M.", spots: 8 },
    { time: "5:00 PM", name: "HIIT Circuit", coach: "Elena T.", spots: 11 },
    { time: "7:30 PM", name: "Spin & Burn", coach: "Kai R.", spots: 20 },
  ],
  THU: [
    { time: "6:30 AM", name: "Powerlifting", coach: "Marcus C.", spots: 6 },
    { time: "10:00 AM", name: "Functional Fit", coach: "Elena T.", spots: 9 },
    { time: "1:00 PM", name: "Yoga Foundations", coach: "Sofia J.", spots: 16 },
    { time: "6:00 PM", name: "Kickboxing", coach: "Dax M.", spots: 4 },
    { time: "7:30 PM", name: "Core & More", coach: "Elena T.", spots: 13 },
  ],
  FRI: [
    { time: "7:00 AM", name: "Morning CrossFit", coach: "Dax M.", spots: 7 },
    { time: "9:00 AM", name: "Spin Cycling", coach: "Kai R.", spots: 20 },
    { time: "12:00 PM", name: "HIIT Lunch", coach: "Elena T.", spots: 15 },
    { time: "5:30 PM", name: "Strength Session", coach: "Marcus C.", spots: 5 },
    { time: "7:00 PM", name: "Recovery Yoga", coach: "Sofia J.", spots: 18 },
  ],
  SAT: [
    { time: "8:00 AM", name: "Weekend HIIT", coach: "Elena T.", spots: 2 },
    { time: "9:30 AM", name: "Boxing Club", coach: "Dax M.", spots: 9 },
    { time: "11:00 AM", name: "Deep Stretch", coach: "Sofia J.", spots: 20 },
    { time: "2:00 PM", name: "Olympic Lifting", coach: "Marcus C.", spots: 6 },
  ],
  SUN: [
    { time: "9:00 AM", name: "Sunrise Yoga", coach: "Sofia J.", spots: 22 },
    { time: "11:00 AM", name: "CrossFit Open", coach: "Dax M.", spots: 10 },
    { time: "2:00 PM", name: "Spin Recovery", coach: "Kai R.", spots: 14 },
  ],
};

import { useState } from "react";

export default function Schedule() {
  const [activeDay, setActiveDay] = useState("MON");

  return (
    <section
      className="py-10 md:py-16 bg-zinc-950 relative overflow-hidden"
      id="schedule"
    >
      {/* Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-[#F40532]/6 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-4 mb-12">
          <div className="flex items-center gap-3">
            <span className="w-10 h-[2px] bg-[#F40532]" />
            <span className="text-[#F40532] font-black text-xs uppercase tracking-[0.35em]">
              Weekly Timetable
            </span>
            <span className="w-10 h-[2px] bg-[#F40532]" />
          </div>
          <h2
            className="font-black uppercase tracking-[4px] leading-[0.9] text-white"
            style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)" }}
          >
            CLASS <span className="text-[#F40532]">SCHEDULE</span>
          </h2>
          <p className="text-white/40 max-w-lg font-medium text-lg leading-relaxed">
            200+ classes every week. Find your session and book your spot.
          </p>
        </div>

        {/* Day tabs */}
        <div className="flex gap-2 flex-wrap justify-center mb-8">
          {days.map((day) => (
            <button
              key={day}
              onClick={() => setActiveDay(day)}
              className={`px-5 py-2.5 rounded-full font-black uppercase tracking-widest text-xs transition-all duration-200 ${
                activeDay === day
                  ? "bg-[#F40532] text-white shadow-[0_0_20px_rgba(244,5,50,0.4)]"
                  : "bg-white/5 text-white/40 hover:bg-white/10 hover:text-white border border-white/8"
              }`}
            >
              {day}
            </button>
          ))}
        </div>

        {/* Class list */}
        <motion.div
          key={activeDay}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3"
        >
          {schedule[activeDay].map((cls, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06 }}
              className="group flex items-center gap-4 p-4 rounded-2xl border border-white/6 bg-white/2 hover:border-[#F40532]/30 hover:bg-[#F40532]/4 transition-all duration-200"
            >
              <div className="text-center min-w-[64px]">
                <p className="text-[#F40532] font-black text-sm">{cls.time}</p>
                <p className="text-white/25 text-[10px] font-bold uppercase tracking-widest">
                  {cls.coach}
                </p>
              </div>
              <div className="w-px h-10 bg-white/8 shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="text-white font-black uppercase tracking-tight text-sm">
                  {cls.name}
                </p>
                <div className="flex items-center gap-1 mt-0.5">
                  <Users className="w-3 h-3 text-white/25" />
                  <span className="text-white/25 text-[10px] font-bold">
                    {cls.spots} spots left
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
