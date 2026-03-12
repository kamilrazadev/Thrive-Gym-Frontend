"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "Do I need any fitness experience to join?",
    a: "Not at all. Thrive Fitness welcomes everyone — from complete beginners to competitive athletes. Our coaches will assess your current fitness level and tailor a programme specifically for you.",
  },
  {
    q: "How do I get started with my free trial?",
    a: "Simply click 'Claim Free Trial', fill in your details, and one of our team will contact you within 24 hours to book your first session. No credit card required.",
  },
  {
    q: "Can I cancel my membership at any time?",
    a: "Yes. All plans are on a rolling monthly basis with no lock-in contracts. You can cancel at any time directly from the Thrive app or by speaking to our front desk.",
  },
  {
    q: "What are your opening hours?",
    a: "We're open Monday–Friday 5:00 AM to 11:00 PM, and Saturday–Sunday 6:00 AM to 10:00 PM. Elite plan members have 24/7 keycard access.",
  },
  {
    q: "Do you offer nutrition coaching?",
    a: "Yes. The Thrive and Elite plans include nutrition guidance from our qualified nutritionists. You'll receive personalised meal plans, macro targets, and ongoing support.",
  },
  {
    q: "Are there classes for kids or teenagers?",
    a: "We currently offer youth fitness programmes for ages 13–17 on weekends. Contact us for details on schedule and pricing.",
  },
  {
    q: "Can I bring a guest to the gym?",
    a: "Yes — the Thrive plan includes 2 guest passes per month, and the Elite plan includes unlimited guest passes. The Starter plan offers a discounted day-pass rate for guests.",
  },
  {
    q: "Is parking available?",
    a: "Yes, free parking is available at all Thrive Fitness locations. We also have secure bike storage and are conveniently located near public transport routes.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section className="py-10 md:py-16 bg-black relative overflow-hidden" id="faq">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#F40C41]/5 blur-[120px] rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-4 mb-14">
          <div className="flex items-center gap-3">
            <span className="w-10 h-[2px] bg-[#F40C41]" />
            <span className="text-[#F40C41] font-black text-xs uppercase tracking-[0.35em]">
              FAQ
            </span>
            <span className="w-10 h-[2px] bg-[#F40C41]" />
          </div>
          <h2
            className="font-black uppercase tracking-tighter leading-[0.9] text-white"
            style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)" }}
          >
            GOT <span className="text-[#F40C41]">QUESTIONS?</span>
          </h2>
          <p className="text-white/40 max-w-md font-medium text-lg leading-relaxed">
            We've got answers. Can't find what you're looking for? Drop us a
            message.
          </p>
        </div>

        {/* Accordion */}
        <div className="flex flex-col gap-2">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
              className={`rounded-2xl border overflow-hidden transition-all duration-200 ${
                open === i
                  ? "border-[#F40C41]/35 bg-[#F40C41]/5"
                  : "border-white/6 bg-white/2 hover:border-white/12"
              }`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className="text-white font-bold text-sm md:text-base leading-snug">
                  {faq.q}
                </span>
                <div
                  className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 ${
                    open === i
                      ? "bg-[#F40C41] shadow-[0_0_12px_rgba(244,12,65,0.5)]"
                      : "bg-white/6 hover:bg-white/12"
                  }`}
                >
                  {open === i ? (
                    <Minus className="w-4 h-4 text-white" />
                  ) : (
                    <Plus className="w-4 h-4 text-white/60" />
                  )}
                </div>
              </button>

              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <p className="text-white/50 font-medium leading-relaxed px-6 pb-6 text-sm md:text-base">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-white/25 text-sm mt-10 font-medium">
          Still have questions?{" "}
          <a href="#contact" className="text-[#F40C41] hover:underline font-bold">
            Contact our team →
          </a>
        </p>
      </div>
    </section>
  );
}
