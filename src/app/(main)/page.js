"use client";

import Hero from "./_components/hero";
import Stats from "./_components/stats";
import About from "./_components/about";
import WhyUs from "./_components/why-us";
import Classes from "./_components/classes";
import Schedule from "./_components/schedule";
import Trainers from "./_components/trainers";
import Gallery from "./_components/gallery";
import Membership from "./_components/membership";
import CtaBanner from "./_components/cta-banner";
import Testimonials from "./_components/testimonials";
import FAQ from "./_components/faq";
import Contact from "./_components/contact";
import WelcomeAnimation from "./_components/welcome-animation";

export default function Home() {
  return (
    <>
      <WelcomeAnimation />
      <main className="bg-black">
        <Hero />
        <Stats />
        <About />
        <WhyUs />
        <Classes />
        <Schedule />
        <Trainers />
        <Gallery />
        <Membership />
        <CtaBanner />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
    </>
  );
}
