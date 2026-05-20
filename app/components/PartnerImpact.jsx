"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import ScrollReveal from "./ScrollReveal";
import RollingNumber from "./RollingNumber";
import { ChevronLeft, ChevronRight } from "lucide-react";

const impactMetrics = [
  {
    value: 5000,
    suffix: "+",
    label: "Global Engineering Talent",
    description:
      "Access a massive bench of specialized developers, architects and AI experts to handle any project scale.",
  },
  {
    value: 60,
    suffix: "%",
    label: "Cost-to-Quality Advantage",
    description:
      "Deliver enterprise-grade solutions at significantly lower rates than domestic development — no quality loss.",
  },
  {
    value: 100,
    suffix: "%",
    label: "Zero Technical Liability",
    description:
      "Betopia assumes full responsibility for delivery and warranties. You hold no technical or financial risk.",
  },
  {
    value: 300,
    suffix: "+",
    label: "Enterprise Success Stories",
    description:
      "Proven track record across healthcare, BFSI and manufacturing with industry-leading global organizations.",
  },
];

const featuredTestimonials = [
  {
    quote:
      "Partnering with Betopia didn't just give us a vendor; it gave us a 5,000-person engineering bench. We now walk into enterprise rooms with the delivery muscle of a global giant and the de-risked confidence of a local firm.",
    author: "Ronald Vergara",
    title: "President, Beyond-Al Solutions Inc.",
    image: "/ron photo.webp",
  },
  {
    quote:
      "The cost-to-quality advantage we've gained with Betopia is unprecedented. They seamlessly act as an extension of our in-house team, enabling us to scale up quickly for major cloud migrations without the traditional offshore friction.",
    author: "Sarah Jenkins",
    title: "CTO, CloudTech Innovations",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80",
  },
  {
    quote:
      "Betopia assumed full responsibility for our enterprise ERP integration. Their zero technical liability model and sheer engineering talent allowed us to launch months ahead of schedule, drastically reducing our time-to-market.",
    author: "Marcus Chen",
    title: "VP of Engineering, NexaCorp Logistics",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80",
  },
];

export default function PartnerImpact() {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonialIndex(
        (prev) => (prev + 1) % featuredTestimonials.length,
      );
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonialIndex(
      (prev) => (prev + 1) % featuredTestimonials.length,
    );
  };

  const prevTestimonial = () => {
    setCurrentTestimonialIndex(
      (prev) =>
        (prev - 1 + featuredTestimonials.length) % featuredTestimonials.length,
    );
  };

  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-14 max-w-5xl mx-auto">
          <ScrollReveal delay={0.2}>
            <h2 className="text-4xl md:text-5xl font-semibold text-brand-black mb-6">
              The impact we&apos;ve created for businesses
            </h2>
            <p className="text-gray-500 text-lg md:text-xl leading-relaxed mt-6 max-w-5xl mx-auto">
              We deliver measurable business outcomes across every engagement.
              Our solutions consistently drive significant improvements in
              efficiency, scalability and market velocity. These results reflect
              our unwavering commitment to excellence and our partners' success.
            </p>
          </ScrollReveal>
        </div>

        {/* Impact Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {impactMetrics.map((metric, idx) => (
            <ScrollReveal
              key={idx}
              delay={0.2 + idx * 0.1}
              scale={0}
              yOffset={0}
            >
              <div className="bg-[#F8F9FA] rounded-2xl p-8 md:p-10 flex flex-col items-center text-center h-full hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                <div className="text-4xl md:text-5xl font-bold text-brand-black mb-4">
                  <RollingNumber value={metric.value} suffix={metric.suffix} />
                </div>
                <h4 className="text-brand-black font-bold text-lg mb-3">
                  {metric.label}
                </h4>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {metric.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Featured Testimonial Carousel */}
        <ScrollReveal delay={0.6}>
          <div className="bg-[#F8F9FA] rounded-3xl flex flex-col lg:flex-row items-stretch gap-12 relative overflow-hidden min-h-[500px]">
            {/* Quote Icon Background */}
            <div className="absolute top-10 left-10 md:top-20 md:left-20 pointer-events-none opacity-[0.03]">
              <svg
                width="120"
                height="120"
                viewBox="0 0 120 120"
                fill="currentColor"
              >
                <path d="M30 40c-11 0-20 9-20 20s9 20 20 20 20-9 20-20V40H30zm60 0c-11 0-20 9-20 20s9 20 20 20 20-9 20-20V40H90z" />
              </svg>
            </div>

            <div className="flex-1 flex flex-col justify-center relative z-10 p-8 md:p-14">
              <div className="relative overflow-hidden w-full transition-opacity duration-500">
                <p className="text-2xl md:text-3xl font-medium text-brand-black leading-snug mb-10 transition-all duration-500 min-h-[160px]">
                  "{featuredTestimonials[currentTestimonialIndex].quote}"
                </p>
                <div>
                  <h5 className="text-brand-black font-bold text-xl">
                    {featuredTestimonials[currentTestimonialIndex].author}
                  </h5>
                  <p className="text-gray-500 text-sm">
                    {featuredTestimonials[currentTestimonialIndex].title}
                  </p>
                </div>
              </div>

              {/* Carousel Controls */}
              <div className="flex items-center gap-4 mt-12 z-20">
                <button
                  onClick={prevTestimonial}
                  className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-brand-black hover:bg-brand-bright-orange hover:text-white hover:border-transparent transition-all duration-300"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <div className="flex gap-2">
                  {featuredTestimonials.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentTestimonialIndex(idx)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        currentTestimonialIndex === idx
                          ? "bg-brand-bright-orange w-6"
                          : "bg-gray-300 hover:bg-gray-400"
                      }`}
                      aria-label={`Go to testimonial ${idx + 1}`}
                    />
                  ))}
                </div>
                <button
                  onClick={nextTestimonial}
                  className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-brand-black hover:bg-brand-bright-orange hover:text-white hover:border-transparent transition-all duration-300"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>

            <div className="w-full lg:w-[450px] shrink-0 relative flex justify-center lg:justify-end lg:items-end">
              <div className="relative w-full aspect-4/3 lg:aspect-auto lg:h-[110%] mt-auto lg:-mb-10">
                {featuredTestimonials.map((testimonial, idx) => (
                  <Image
                    key={idx}
                    src={testimonial.image}
                    alt={testimonial.author}
                    fill
                    className={`object-cover ${testimonial.image.includes("unsplash") ? "object-center lg:object-top" : "object-top"} transition-opacity duration-700 ease-in-out ${
                      currentTestimonialIndex === idx
                        ? "opacity-100 relative"
                        : "opacity-0 absolute inset-0"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
