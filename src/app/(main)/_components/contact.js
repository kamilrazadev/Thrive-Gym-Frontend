"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Loader2, Clock } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    goal: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");

  const handleChange = (e) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    await new Promise((r) => setTimeout(r, 1200));
    setStatus("success");
    setForm({ name: "", email: "", phone: "", goal: "", message: "" });
  };

  return (
    <section
      className="py-10 md:py-16 bg-black relative overflow-hidden"
      id="contact"
    >
      {/* Glow orbs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#F40532]/7 blur-[160px] rounded-full -translate-y-1/3 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#F40532]/5 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/4 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-8"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-[2px] bg-[#F40532]" />
                <span className="text-[#F40532] font-black text-xs uppercase tracking-[0.35em]">
                  Get In Touch
                </span>
              </div>
              <h2
                className="font-black uppercase tracking-[4px] leading-[0.88] text-white mb-5"
                style={{ fontSize: "clamp(3rem, 6vw, 6rem)" }}
              >
                READY TO
                <br />
                <span className="text-[#F40532]">THRIVE?</span>
              </h2>
              <p className="text-white/40 text-lg font-medium leading-relaxed max-w-md border-l-4 border-[#F40532]/20 pl-5">
                Drop us a message and our team will be back within 24 hours.
                Your transformation starts with a single step.
              </p>
            </div>

            {/* Contact info */}
            <div className="flex flex-col gap-3">
              {[
                {
                  icon: MapPin,
                  l: "Visit Us",
                  v: "123 Fitness Blvd, New York, NY 10001",
                },
                { icon: Phone, l: "Call Us", v: "+1 (555) 234-5678" },
                { icon: Mail, l: "Email Us", v: "hello@thrivefitness.com" },
              ].map(({ icon: Icon, l, v }) => (
                <div
                  key={l}
                  className="flex items-center gap-4 p-4 bg-white/2 border border-white/6 rounded-2xl hover:border-[#F40532]/25 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#F40532]/10 flex items-center justify-center shrink-0 group-hover:bg-[#F40532]/20 transition-colors">
                    <Icon className="w-4 h-4 text-[#F40532]" />
                  </div>
                  <div>
                    <p className="text-white/25 text-[10px] font-black uppercase tracking-widest">
                      {l}
                    </p>
                    <p className="text-white font-bold text-sm">{v}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Hours */}
            <div className="p-5 bg-[#F40532]/6 border border-[#F40532]/12 rounded-2xl">
              <div className="flex items-center gap-2 mb-4">
                <Clock className="w-4 h-4 text-[#F40532]" />
                <p className="text-[#F40532] text-xs font-black uppercase tracking-widest">
                  Opening Hours
                </p>
              </div>
              {[
                { d: "Mon – Fri", h: "5:00 AM – 11:00 PM" },
                { d: "Sat – Sun", h: "6:00 AM – 10:00 PM" },
                { d: "Elite Members", h: "24 / 7 Access" },
              ].map(({ d, h }) => (
                <div
                  key={d}
                  className="flex justify-between items-center border-b border-white/5 py-2.5 last:border-0"
                >
                  <span className="text-white/45 text-sm font-bold uppercase tracking-widest">
                    {d}
                  </span>
                  <span className="text-white font-black text-sm">{h}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="bg-zinc-950 border border-white/6 rounded-[40px] p-8 md:p-10 relative overflow-hidden">
              {/* Top accent */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#F40532]/60 to-transparent" />

              <div className="mb-8">
                <p className="text-[#F40532] text-[10px] font-black uppercase tracking-[0.5em] mb-1">
                  Send a Message
                </p>
                <h3 className="text-2xl font-black text-white uppercase tracking-[4px]">
                  Let's Talk <span className="text-[#F40532]">Fitness</span>
                </h3>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className="h-13 bg-white/3 border border-white/8 rounded-xl px-5 text-white font-medium text-sm placeholder:text-white/20 outline-none focus:border-[#F40532]/40 transition-all"
                    style={{ height: "52px" }}
                  />
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    required
                    className="h-13 bg-white/3 border border-white/8 rounded-xl px-5 text-white font-medium text-sm placeholder:text-white/20 outline-none focus:border-[#F40532]/40 transition-all"
                    style={{ height: "52px" }}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className="bg-white/3 border border-white/8 rounded-xl px-5 text-white font-medium text-sm placeholder:text-white/20 outline-none focus:border-[#F40532]/40 transition-all"
                    style={{ height: "52px" }}
                  />
                  <select
                    name="goal"
                    value={form.goal}
                    onChange={handleChange}
                    className="bg-white/3 border border-white/8 rounded-xl px-5 text-white font-medium text-sm outline-none focus:border-[#F40532]/40 transition-all appearance-none"
                    style={{
                      height: "52px",
                      backgroundColor: "rgba(255,255,255,0.03)",
                    }}
                  >
                    <option value="" className="bg-zinc-900">
                      My Primary Goal
                    </option>
                    <option value="weight-loss" className="bg-zinc-900">
                      Weight Loss
                    </option>
                    <option value="muscle" className="bg-zinc-900">
                      Build Muscle
                    </option>
                    <option value="fitness" className="bg-zinc-900">
                      General Fitness
                    </option>
                    <option value="sport" className="bg-zinc-900">
                      Sport Performance
                    </option>
                  </select>
                </div>

                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us about your goals..."
                  rows={4}
                  required
                  className="bg-white/3 border border-white/8 rounded-2xl p-5 text-white font-medium text-sm placeholder:text-white/20 outline-none focus:border-[#F40532]/40 transition-all resize-none"
                />

                <button
                  type="submit"
                  disabled={status === "sending" || status === "success"}
                  className="w-full bg-[#F40532] hover:bg-[#d00a37] disabled:opacity-60 text-white font-black uppercase tracking-widest text-sm rounded-2xl transition-all hover:shadow-[0_8px_35px_rgba(244,5,50,0.4)] hover:-translate-y-0.5 flex items-center justify-center gap-3 group mt-1"
                  style={{ height: "56px" }}
                >
                  {status === "sending" ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : status === "success" ? (
                    "Message Sent — We'll be in touch!"
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
                    </>
                  )}
                </button>

                {status === "success" && (
                  <div className="flex items-center justify-center p-3.5 bg-[#F40532]/10 border border-[#F40532]/20 rounded-xl">
                    <span className="text-[#F40532] font-black uppercase tracking-widest text-xs">
                      We'll contact you within 24 hours!
                    </span>
                  </div>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
