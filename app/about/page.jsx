import React from "react";
import AboutSection from "../components/AboutSection";
import WhyChooseBetopia from "../components/WhyChooseBetopia";
import TestimonialsCarousel from "../components/TestimonialsCarousel";
import LogoMarquee from "../components/LogoMarquee";
import CtaSection from "../components/CtaSection";

export const metadata = {
  title: "About Us | Betopia Limited",
  description:
    "Learn about our journey, vision and the people driving the digital transformation for enterprises worldwide.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen flex bg-slate-900 flex-col pt-16">
      {/* Hero Section for About */}
      <section className="relative px-6 py-20 md:py-32 bg-slate-900 overflow-hidden border-b border-gray-100">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-bright-orange/5 blur-[100px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/5 blur-[100px] rounded-full pointer-events-none" />

        <div className="container mx-auto max-w-5xl text-center relative z-10">
          <div className="inline-block px-4 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-500 font-semibold text-sm mb-6 uppercase tracking-wider">
            Our Story
          </div>
          <h1 className="text-4xl md:text-6xl font-semibold text-gray-50 tracking-tight leading-[1.1] mb-6">
            Empowering the Future of{" "}
            <span className="bg-gradient-to-r from-brand-bright-orange to-brand-coral bg-clip-text text-transparent">
              Enterprise Software
            </span>
          </h1>
          <p className="text-gray-200 text-lg md:text-xl leading-relaxed max-w-4xl mx-auto">
            Betopia Limited is a global technology powerhouse dedicated to
            engineering next-generation applications, orchestrating seamless
            cloud transitions and delivering transformative AI solutions. We
            don't just write code; we build the digital infrastructure of
            tomorrow.
          </p>
        </div>
      </section>

      <AboutSection />

      {/* Soft divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

      <WhyChooseBetopia />

      <section className="py-20 bg-white border-t border-gray-100">
        <div className="container mx-auto px-6 mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 tracking-tight">
            Trusted by Industry Leaders
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-lg">
            Our global network of technology partners and ecosystem
            collaborators.
          </p>
        </div>
        <LogoMarquee />
      </section>
      <section className="bg-gray-50 pb-12">
        <TestimonialsCarousel />
      </section>

      <CtaSection />
    </main>
  );
}
