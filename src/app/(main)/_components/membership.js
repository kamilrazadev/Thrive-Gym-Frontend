"use client";

import { motion } from "framer-motion";
import { Check, X, Zap, Crown, Flame } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "39",
    icon: Flame,
    description: "Perfect for those just beginning their fitness journey.",
    features: [
      "Gym Floor Access",
      "Locker Room & Showers",
      "2 Group Classes / Week",
      "Fitness Assessment",
      "Member App Access",
    ],
    notIncluded: [
      "Unlimited Classes",
      "Personal Training Sessions",
      "Nutrition Coaching",
      "Recovery Suite",
    ],
    popular: false,
    cta: "Get Moving",
  },
  {
    name: "Thrive",
    price: "79",
    icon: Zap,
    description: "Everything you need to hit every goal. Our best value.",
    features: [
      "Unlimited Gym Access",
      "Unlimited Group Classes",
      "2 Personal Training / Month",
      "Nutrition Guidance",
      "Priority Class Booking",
      "2 Guest Passes / Month",
      "Towel & Locker Service",
    ],
    notIncluded: ["Dedicated Coach", "Recovery Suite Access"],
    popular: true,
    cta: "Start Thriving",
  },
  {
    name: "Elite",
    price: "149",
    icon: Crown,
    description:
      "For serious athletes demanding the absolute best.",
    features: [
      "Everything in Thrive",
      "Unlimited Personal Training",
      "Dedicated Personal Coach",
      "Recovery Suite & Ice Bath",
      "Monthly Body Composition Scan",
      "Unlimited Guest Passes",
      "VIP Locker & 24/7 Access",
    ],
    notIncluded: [],
    popular: false,
    cta: "Go Elite",
  },
];

export default function Membership() {
  return (
    <section className="py-10 md:py-16 relative overflow-hidden bg-black" id="membership">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#F40C41]/6 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-4 mb-14">
          <div className="flex items-center gap-3">
            <span className="w-10 h-[2px] bg-[#F40C41]" />
            <span className="text-[#F40C41] font-black text-xs uppercase tracking-[0.35em]">
              Membership Plans
            </span>
            <span className="w-10 h-[2px] bg-[#F40C41]" />
          </div>
          <h2
            className="font-black uppercase tracking-tighter leading-[0.9] text-white"
            style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)" }}
          >
            INVEST IN
            <br />
            <span className="text-[#F40C41]">YOUR BEST SELF</span>
          </h2>
          <p className="text-white/40 max-w-lg font-medium text-lg leading-relaxed">
            No contracts. No hidden fees. Cancel anytime. Just results and a
            community that shows up for you.
          </p>
        </div>

        {/* Plans grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-start">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`relative rounded-[36px] p-8 flex flex-col border transition-all ${
                plan.popular
                  ? "bg-[#F40C41]/8 border-[#F40C41]/60 shadow-[0_0_60px_rgba(244,12,65,0.12)] md:-mt-4 md:pb-12 md:pt-12"
                  : "bg-white/2 border-white/8 hover:border-white/15"
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#F40C41] text-white text-[10px] font-black uppercase tracking-widest px-5 py-2 rounded-full whitespace-nowrap shadow-lg shadow-[#F40C41]/40">
                  Most Popular
                </div>
              )}

              {/* Icon + name */}
              <div
                className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 ${
                  plan.popular ? "bg-[#F40C41]" : "bg-white/6"
                }`}
              >
                <plan.icon
                  className={`w-6 h-6 ${plan.popular ? "text-white" : "text-white/50"}`}
                />
              </div>

              <h3 className="text-xl font-black text-white uppercase italic tracking-widest mb-1">
                {plan.name}
              </h3>

              <div className="flex items-baseline gap-1 mb-3">
                <span className="text-5xl font-black text-white italic tracking-tighter">
                  ${plan.price}
                </span>
                <span className="text-white/25 font-bold uppercase tracking-widest text-xs">
                  / month
                </span>
              </div>

              <p className="text-white/35 font-medium text-sm leading-relaxed mb-7 pb-7 border-b border-white/6">
                {plan.description}
              </p>

              {/* Features */}
              <div className="flex flex-col gap-3 grow mb-8">
                {plan.features.map((f) => (
                  <div key={f} className="flex items-start gap-3">
                    <div
                      className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                        plan.popular ? "bg-[#F40C41]/20" : "bg-white/6"
                      }`}
                    >
                      <Check
                        className={`w-3 h-3 ${plan.popular ? "text-[#F40C41]" : "text-white/50"}`}
                      />
                    </div>
                    <span className="text-white/70 text-sm font-medium">{f}</span>
                  </div>
                ))}
                {plan.notIncluded.map((f) => (
                  <div key={f} className="flex items-start gap-3 opacity-25">
                    <div className="w-5 h-5 rounded-full bg-white/5 flex items-center justify-center shrink-0 mt-0.5">
                      <X className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-white/50 text-sm font-medium line-through">
                      {f}
                    </span>
                  </div>
                ))}
              </div>

              <button
                className={`w-full py-4 rounded-2xl font-black uppercase tracking-widest text-sm transition-all duration-300 ${
                  plan.popular
                    ? "bg-[#F40C41] text-white hover:bg-[#d00a37] hover:shadow-[0_8px_30px_rgba(244,12,65,0.4)] hover:-translate-y-0.5"
                    : "bg-white/5 text-white hover:bg-white/10 border border-white/8"
                }`}
              >
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-white/18 text-xs font-medium mt-8 uppercase tracking-widest">
          No contracts. No lock-ins. Cancel anytime.
        </p>
      </div>
    </section>
  );
}
