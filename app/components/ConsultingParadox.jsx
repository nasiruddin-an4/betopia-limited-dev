"use client";

import React from "react";
import ScrollReveal from "./ScrollReveal";

const problems = [
  {
    id: "01",
    label: "The Revenue You Can't Book",
    title: "You're leaving money on the table.",
    points: [
      "A client asks for a project you can't deliver — so you say no.",
      "A client needs a new vertical — you lack the team.",
      "A client wants to expand scope — you hit a capacity wall.",
    ],
    result: "Your competition wins the deal.",
  },
  {
    id: "02",
    label: "The Scaling Trap",
    title: "The traditional way to scale doesn't work.",
    points: [
      "Hiring takes 3–6 months. Onboarding takes 2–3 more.",
      "You carry bench costs during ramp — every month.",
      "You compete with FAANG for talent and lose.",
      "You inherit overhead: office, benefits, payroll risk.",
    ],
    result: "By the time you scale, the opportunity is gone.",
  },
];

export default function ConsultingParadox() {
  return (
    <section
      id="consulting-paradox"
      className="bg-gray-50 py-10 lg:py-20 relative overflow-hidden"
    >
      <div className="max-w-5xl mx-auto text-center px-4 md:px-8">
        <ScrollReveal delay={0.3}>
          <h2 className="text-2xl md:text-6xl text-center font-medium text-gray-700 leading-[1.3] mb-2">
            Let&apos;s build long-term growth <br />
            <span className="text-brand-bright-orange">Limitless together</span>
          </h2>
          <p className="text-gray-500 text-md md:text-2xl leading-relaxed ">
            We&apos;re not here to replace you. We&apos;re here to amplify you.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
