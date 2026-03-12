import { notFound } from "next/navigation";
import { Instagram, Facebook, Twitter, ArrowLeft, Clock, Users, Award, Star, ChevronRight } from "lucide-react";
import Link from "next/link";

const trainersData = [
  {
    slug: "marcus-cole",
    name: "Marcus Cole",
    role: "Strength Coach",
    specialty: "Powerlifting & Olympic Lifting",
    exp: "8 Yrs",
    classes: 12,
    image: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?q=80&w=1200&auto=format&fit=crop",
    heroBg: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2000&auto=format&fit=crop",
    bio: "Marcus Cole is one of the most respected strength coaches in the city, with 8 years of hands-on experience transforming athletes of every level. A former competitive powerlifter with a national ranking, Marcus brings real-world competitive experience into every session he delivers at Thrive Fitness.",
    bio2: "His programming philosophy is simple: master the basics, train with intent, and progress will follow. Whether you're picking up a barbell for the first time or preparing for your next competition, Marcus builds programmes that are structured, measurable, and relentlessly effective.",
    certifications: [
      "NSCA Certified Strength & Conditioning Specialist (CSCS)",
      "USA Weightlifting (USAW) Level 2 Coach",
      "Precision Nutrition Level 1 Certified",
      "CPR/AED First Aid Certified",
    ],
    stats: [
      { v: "8 Yrs", l: "Experience" },
      { v: "12/wk", l: "Classes" },
      { v: "500+", l: "Athletes Coached" },
      { v: "4.9★", l: "Rating" },
    ],
    achievements: [
      "National Powerlifting Championships — Top 5 Finish (2019)",
      "Named Thrive Fitness Coach of the Year (2022, 2023)",
      "Coached 3 athletes to national-level competition",
      "Speaker at National Strength & Conditioning Conference 2023",
    ],
    featuredClasses: [
      { name: "Powerlifting Foundations", duration: "60 min", spots: 8, time: "6:30 AM (THU)" },
      { name: "Olympic Lifting Clinic", duration: "75 min", spots: 6, time: "12:00 PM (MON)" },
      { name: "Strength & Conditioning", duration: "55 min", spots: 7, time: "1:00 PM (TUE)" },
    ],
    quote: "Strength isn't built in comfort zones. Every rep, every set — you're either earning it or you're not.",
  },
  {
    slug: "elena-torres",
    name: "Elena Torres",
    role: "HIIT Specialist",
    specialty: "Metabolic Conditioning",
    exp: "6 Yrs",
    classes: 16,
    image: "https://images.unsplash.com/photo-1611672585731-fa10603fb9e0?q=80&w=1200&auto=format&fit=crop",
    heroBg: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?q=80&w=2000&auto=format&fit=crop",
    bio: "Elena Torres is a high-energy HIIT specialist who has built a reputation as one of Thrive's most electrifying coaches. With 6 years in the fitness industry and a background in competitive athletics, Elena brings intensity, precision, and infectious enthusiasm to every class she runs.",
    bio2: "Her metabolic conditioning programmes are scientifically designed to maximise calorie burn, build cardiovascular endurance, and develop lean muscle — all at once. Elena's classes are known for being tough, smart, and genuinely fun. Her members don't just come back — they bring friends.",
    certifications: [
      "NASM Certified Personal Trainer (CPT)",
      "NASM Performance Enhancement Specialist (PES)",
      "Schwinn Indoor Cycling Certified",
      "TRX Suspension Training Certified",
    ],
    stats: [
      { v: "6 Yrs", l: "Experience" },
      { v: "16/wk", l: "Classes" },
      { v: "800+", l: "Sessions Delivered" },
      { v: "5.0★", l: "Rating" },
    ],
    achievements: [
      "Highest class attendance record at Thrive Fitness (2023)",
      "Featured in FitLife Magazine — 'Coaches to Watch' (2022)",
      "Designed Thrive's signature 28-Day HIIT Challenge programme",
      "Sports Science degree — University of Madrid",
    ],
    featuredClasses: [
      { name: "Morning HIIT", duration: "45 min", spots: 8, time: "6:00 AM (MON/WED)" },
      { name: "HIIT Blast", duration: "45 min", spots: 10, time: "7:00 PM (MON)" },
      { name: "Functional Fit", duration: "50 min", spots: 9, time: "10:00 AM (THU)" },
    ],
    quote: "You don't have to be great to start. But you have to start to be great. Now let's move.",
  },
  {
    slug: "dax-merritt",
    name: "Dax Merritt",
    role: "Boxing Coach",
    specialty: "Combat Fitness & Striking",
    exp: "10 Yrs",
    classes: 10,
    image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=1200&auto=format&fit=crop",
    heroBg: "https://images.unsplash.com/photo-1576678927484-cc907957088c?q=80&w=2000&auto=format&fit=crop",
    bio: "With 10 years in boxing and combat sports coaching, Dax Merritt is the most experienced striking coach on the Thrive roster. A former amateur boxing champion, Dax transitioned to full-time coaching to share the discipline, confidence, and conditioning that combat sports build — with everyone.",
    bio2: "Dax's sessions combine technical striking, footwork, defensive movement, and metabolic conditioning into high-energy classes that are as mentally demanding as they are physical. His clients range from complete beginners to semi-professional fighters — and he meets each one exactly where they are.",
    certifications: [
      "USA Boxing Certified Coach — Level 2",
      "NASM Certified Personal Trainer (CPT)",
      "CrossFit Level 1 Trainer",
      "Mental Performance & Sports Psychology Certificate",
    ],
    stats: [
      { v: "10 Yrs", l: "Experience" },
      { v: "10/wk", l: "Classes" },
      { v: "3×", l: "Amateur Champion" },
      { v: "4.9★", l: "Rating" },
    ],
    achievements: [
      "3× Regional Amateur Boxing Champion",
      "Coached Thrive member to state-level amateur competition (2023)",
      "Developed Thrive's 8-week Boxing Foundations curriculum",
      "Featured coach on SportsFit TV's 'Real Coaches' series",
    ],
    featuredClasses: [
      { name: "Boxing Basics", duration: "50 min", spots: 6, time: "5:30 PM (MON)" },
      { name: "Boxing Combo", duration: "50 min", spots: 8, time: "12:30 PM (WED)" },
      { name: "Kickboxing", duration: "55 min", spots: 4, time: "6:00 PM (THU)" },
    ],
    quote: "Boxing isn't about aggression. It's about discipline, timing, and having the courage to face what's in front of you.",
  },
  {
    slug: "sofia-james",
    name: "Sofia James",
    role: "Yoga & Mobility Coach",
    specialty: "Flexibility & Recovery",
    exp: "7 Yrs",
    classes: 14,
    image: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=1200&auto=format&fit=crop",
    heroBg: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2000&auto=format&fit=crop",
    bio: "Sofia James is Thrive's lead yoga and mobility specialist, bringing 7 years of dedicated practice and teaching to every session. Trained in Vinyasa, Yin, and restorative yoga traditions, Sofia holds a 500-hour Registered Yoga Teacher certification and has studied with teachers across Europe and Southeast Asia.",
    bio2: "Sofia's approach bridges the gap between performance and recovery. Her classes attract everyone from elite athletes looking to improve mobility and prevent injury, to members seeking mindfulness, stress relief, and a deeper connection between body and mind. Her sessions are calm, precise, and genuinely transformative.",
    certifications: [
      "500-Hour Registered Yoga Teacher (RYT-500), Yoga Alliance",
      "Functional Movement Screen (FMS) Certified",
      "Fascial Stretch Therapy (FST) Certified — Level 2",
      "Mindfulness-Based Stress Reduction (MBSR) Facilitator",
    ],
    stats: [
      { v: "7 Yrs", l: "Experience" },
      { v: "14/wk", l: "Classes" },
      { v: "1,200+", l: "Sessions Taught" },
      { v: "5.0★", l: "Rating" },
    ],
    achievements: [
      "RYT-500 certified through internationally accredited programme",
      "Studied Yin Yoga under master teacher in Bali (2021)",
      "Developed Thrive's 6-week 'Recovery & Restore' programme",
      "Meditation & Mindfulness Lead at Thrive since 2020",
    ],
    featuredClasses: [
      { name: "Yoga Flow", duration: "60 min", spots: 12, time: "9:00 AM (MON)" },
      { name: "Yoga Foundations", duration: "60 min", spots: 16, time: "1:00 PM (THU)" },
      { name: "Sunrise Yoga", duration: "60 min", spots: 22, time: "9:00 AM (SUN)" },
    ],
    quote: "The body keeps the score. Give it the rest, attention, and movement it deserves — and it will give you everything back.",
  },
];

export async function generateStaticParams() {
  return trainersData.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const trainer = trainersData.find((t) => t.slug === slug);
  if (!trainer) return {};
  return {
    title: `${trainer.name} — ${trainer.role} | Thrive Fitness`,
    description: `Meet ${trainer.name}, ${trainer.role} at Thrive Fitness. Specialising in ${trainer.specialty} with ${trainer.exp} of experience. Book a session today.`,
    openGraph: {
      title: `${trainer.name} | Thrive Fitness`,
      description: `${trainer.role} specialising in ${trainer.specialty}. ${trainer.exp} experience. ${trainer.classes} classes per week.`,
      images: [
        {
          url: trainer.image,
          width: 1200,
          height: 630,
          alt: trainer.name,
        },
      ],
      type: "profile",
    },
    twitter: {
      card: "summary_large_image",
      title: `${trainer.name} | Thrive Fitness`,
      description: `${trainer.role} · ${trainer.specialty} · ${trainer.exp} Experience`,
      images: [trainer.image],
    },
  };
}

export default async function TrainerPage({ params }) {
  const { slug } = await params;
  const trainer = trainersData.find((t) => t.slug === slug);
  if (!trainer) notFound();

  return (
    <main className="bg-black min-h-screen">
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-end overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url('${trainer.heroBg}')`,
            backgroundSize: "cover",
            backgroundPosition: "center 30%",
          }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        {/* Red glow */}
        <div className="absolute bottom-0 left-0 w-[600px] h-[400px] bg-[#F40C41]/15 blur-[130px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-16 pt-32 w-full">
          <Link
            href="/#trainers"
            className="inline-flex items-center gap-2 text-white/40 hover:text-white text-xs font-black uppercase tracking-widest transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            All Coaches
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-10 items-end">
            {/* Text */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-[2px] bg-[#F40C41]" />
                <span className="text-[#F40C41] font-black text-xs uppercase tracking-[0.35em]">
                  {trainer.role}
                </span>
              </div>
              <h1
                className="font-black italic uppercase tracking-tighter leading-[0.88] text-white mb-4"
                style={{ fontSize: "clamp(3rem, 7vw, 6.5rem)" }}
              >
                {trainer.name.split(" ")[0]}
                <br />
                <span className="text-[#F40C41]">{trainer.name.split(" ")[1]}</span>
              </h1>
              <p className="text-white/55 text-lg font-medium max-w-xl leading-relaxed italic">
                "{trainer.quote}"
              </p>

              {/* Stats strip */}
              <div className="flex flex-wrap gap-6 mt-8 pt-8 border-t border-white/8">
                {trainer.stats.map((s) => (
                  <div key={s.l}>
                    <p className="text-2xl font-black text-white leading-none">{s.v}</p>
                    <p className="text-white/30 text-[10px] font-bold uppercase tracking-widest mt-0.5">{s.l}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Trainer photo */}
            <div className="relative hidden lg:block">
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-64 h-64 bg-[#F40C41]/20 blur-[80px] rounded-full" />
              </div>
              <img
                src={trainer.image}
                alt={trainer.name}
                className="relative w-full h-[440px] object-cover object-top rounded-[28px] border border-white/10"
                style={{ filter: "grayscale(30%)" }}
              />
              {/* Social icons */}
              <div className="absolute bottom-4 left-4 right-4 flex justify-center">
                <div className="flex items-center gap-1 bg-[#F40C41] p-2 rounded-2xl shadow-2xl shadow-[#F40C41]/30">
                  {[Instagram, Facebook, Twitter].map((Icon, idx) => (
                    <button key={idx} className="w-9 h-9 rounded-xl bg-white/15 hover:bg-white/25 flex items-center justify-center transition-colors">
                      <Icon className="w-4 h-4 text-white" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bio & Certs */}
      <section className="py-16 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12">
            {/* Bio */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="w-10 h-[2px] bg-[#F40C41]" />
                <span className="text-[#F40C41] font-black text-xs uppercase tracking-[0.35em]">About</span>
              </div>
              <h2
                className="font-black italic uppercase tracking-tighter leading-[0.9] text-white mb-6"
                style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
              >
                THE STORY BEHIND
                <br />
                <span className="text-[#F40C41]">THE COACH</span>
              </h2>
              <p className="text-white/55 text-base leading-relaxed font-medium mb-5">{trainer.bio}</p>
              <p className="text-white/35 text-base leading-relaxed font-medium">{trainer.bio2}</p>

              {/* Achievements */}
              <div className="mt-8">
                <h3 className="text-white font-black uppercase tracking-widest text-sm mb-4">
                  Key Achievements
                </h3>
                <div className="flex flex-col gap-3">
                  {trainer.achievements.map((a, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#F40C41]/20 border border-[#F40C41]/30 flex items-center justify-center shrink-0 mt-0.5">
                        <Award className="w-3 h-3 text-[#F40C41]" />
                      </div>
                      <span className="text-white/60 text-sm font-medium">{a}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Certifications + Book CTA */}
            <div className="flex flex-col gap-5">
              {/* Certs card */}
              <div className="rounded-[24px] border border-white/8 bg-white/2 p-6">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-9 h-9 rounded-xl bg-[#F40C41]/15 border border-[#F40C41]/25 flex items-center justify-center">
                    <Star className="w-4 h-4 text-[#F40C41]" />
                  </div>
                  <h3 className="text-white font-black uppercase tracking-widest text-sm">
                    Certifications
                  </h3>
                </div>
                <div className="flex flex-col gap-3">
                  {trainer.certifications.map((cert, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <ChevronRight className="w-4 h-4 text-[#F40C41] shrink-0 mt-0.5" />
                      <span className="text-white/55 text-sm font-medium leading-relaxed">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Specialty tag */}
              <div className="rounded-[24px] border border-[#F40C41]/20 bg-[#F40C41]/5 p-6">
                <p className="text-[#F40C41] font-black uppercase tracking-widest text-xs mb-2">
                  Specialty
                </p>
                <p className="text-white font-black text-xl uppercase italic tracking-tighter">
                  {trainer.specialty}
                </p>
              </div>

              {/* Book CTA */}
              <a
                href="#contact"
                className="flex items-center justify-center gap-2 bg-[#F40C41] hover:bg-[#d00a37] text-white font-black uppercase tracking-widest text-sm py-5 rounded-[24px] transition-all hover:shadow-[0_0_40px_rgba(244,12,65,0.4)] hover:-translate-y-0.5"
              >
                Book 1-on-1 Session
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Classes */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-8">
            <span className="w-10 h-[2px] bg-[#F40C41]" />
            <span className="text-[#F40C41] font-black text-xs uppercase tracking-[0.35em]">Schedule</span>
          </div>
          <h2
            className="font-black italic uppercase tracking-tighter leading-[0.9] text-white mb-8"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
          >
            {trainer.name.split(" ")[0]}'S
            <br />
            <span className="text-[#F40C41]">UPCOMING CLASSES</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {trainer.featuredClasses.map((cls, i) => (
              <div
                key={i}
                className="group flex flex-col gap-3 p-5 rounded-2xl border border-white/6 bg-white/2 hover:border-[#F40C41]/30 hover:bg-[#F40C41]/4 transition-all duration-200"
              >
                <div>
                  <p className="text-white font-black uppercase tracking-tight text-base">{cls.name}</p>
                  <p className="text-[#F40C41] text-xs font-black uppercase tracking-widest mt-1">{cls.time}</p>
                </div>
                <div className="flex items-center gap-4 pt-3 border-t border-white/6">
                  <span className="flex items-center gap-1.5 text-white/40 text-xs font-bold">
                    <Clock className="w-3.5 h-3.5" />
                    {cls.duration}
                  </span>
                  <span className="flex items-center gap-1.5 text-white/40 text-xs font-bold">
                    <Users className="w-3.5 h-3.5" />
                    {cls.spots} spots left
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-zinc-950">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2
            className="font-black italic uppercase tracking-tighter leading-[0.9] text-white mb-4"
            style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
          >
            TRAIN WITH
            <br />
            <span className="text-[#F40C41]">{trainer.name.toUpperCase()}</span>
          </h2>
          <p className="text-white/40 font-medium text-base mb-8 max-w-md mx-auto leading-relaxed">
            Ready to work with one of Thrive's best? Book your first session today — no commitment needed.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/#contact"
              className="flex items-center justify-center gap-2 bg-[#F40C41] hover:bg-[#d00a37] text-white font-black uppercase tracking-widest text-sm px-10 py-4 rounded-full transition-all hover:shadow-[0_0_40px_rgba(244,12,65,0.45)] hover:-translate-y-0.5"
            >
              Book a Session
            </a>
            <Link
              href="/#trainers"
              className="flex items-center gap-2 bg-white/6 hover:bg-white/10 border border-white/10 text-white font-black uppercase tracking-widest text-sm px-8 py-4 rounded-full transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              Meet All Coaches
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
