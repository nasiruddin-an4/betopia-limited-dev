"use client";

import React from "react";
import ScrollReveal from "./ScrollReveal";
import RollingButton from "./RollingButton";
import { PhoneCall } from "lucide-react";
import { motion } from "framer-motion";

const AnimatedPhoneCall = (props) => (
  <motion.div
    animate={{ rotate: [0, -15, 15, -15, 15, 0] }}
    transition={{
      repeat: Infinity,
      duration: 1.2,
      ease: "easeInOut",
      repeatDelay: 1,
    }}
    style={{ display: "inline-flex" }}
  >
    <PhoneCall {...props} />
  </motion.div>
);

export default function PartnerCta() {
  return (
    <section className="bg-white py-10 md:py-14">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-[#0B1628] px-6 md:px-16 py-20 text-center">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-bright-orange/30 to-transparent" />
          <div className="absolute top-0 right-0 w-[40%] h-[60%] bg-[radial-gradient(ellipse_at_top_right,rgba(247,149,73,0.1),transparent_70%)] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[40%] h-[60%] bg-[radial-gradient(ellipse_at_bottom_left,rgba(247,149,73,0.06),transparent_70%)] pointer-events-none" />

          {/* Grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.02] pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          <div className="relative z-10 max-w-5xl mx-auto">
            <ScrollReveal>
              <span className="text-brand-bright-orange text-xs font-bold uppercase tracking-[0.25em] block mb-2">
                Ready to Grow?
              </span>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <h2 className="text-4xl md:text-5xl font-semibold text-white mb-4 tracking-tight leading-[1.1]">
                Join the Betopia{" "}
                <span className="text-brand-bright-orange">Partnership</span>{" "}
                Today
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <p className="text-gray-400 text-lg md:text-xl mb-8 leading-relaxed max-w-3xl mx-auto">
                Scale your business with enterprise-grade delivery, zero
                technical liability and up to 30% revenue share. Go from
                signature to first invoice in 2–4 weeks.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <RollingButton
                  text="Become a Partner"
                  href="/become-partner"
                  icon={AnimatedPhoneCall}
                  className="shadow-[0_0_40px_rgba(247,149,73,0.3)]"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
