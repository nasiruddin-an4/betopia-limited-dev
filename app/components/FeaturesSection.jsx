"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ClipboardList,
  Users,
  BarChart2,
  ThumbsUp,
  Sliders,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const features = [
  {
    id: 1,
    icon: ClipboardList,
    title: "Resource Augmentation",
    description:
      "Deploy a dedicated tech team that integrates seamlessly with your business. They’ll tackle your project needs with precision.",
    image: "/Brand-Design.avif",
    href: "/services/team-augmentation",
  },
  {
    id: 2,
    icon: Users,
    title: "MVP Services",
    description:
      "From idea to launch, we provide the essentials to build your startup’s product effectively.",
    image: "/UI&UX-Design.avif",
  },
  {
    id: 3,
    icon: BarChart2,
    title: "End to End Development",
    description:
      "Comprehensive development services from initial design through deployment and maintenance.",
    image: "/Website-Design-&-Development.avif",
  },
];

export default function FeaturesSection() {
  return (
    <section className="bg-white py-10 md:py-16">
      <div className="container mx-auto px-4 md:px-2 lg:px-10">
        {/* Header */}
        <div className="text-center mb-10 max-w-5xl mx-auto">
          <ScrollReveal>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-gray-600 leading-[1.1] mb-4">
              Our Methodology to Collaboration
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <p className="text-gray-500 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
              We follow an agile development methodology and guarantee the
              timely delivery of high-quality software products.
            </p>
          </ScrollReveal>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, idx) => {
            return (
              <ScrollReveal key={feature.id} delay={0.2 + idx * 0.1}>
                <div className="group relative rounded-2xl overflow-hidden flex flex-col h-[560px] cursor-pointer border border-gray-200">
                  {/* Background Image */}
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:opacity-0"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />

                  {/* Default: subtle gradient for title readability */}
                  <div className="absolute inset-0 bg-linear-to-b from-white/80 via-transparent to-transparent z-1 transition-opacity duration-500 group-hover:opacity-0" />

                  {/* Hover: brand orange overlay */}
                  <div className="absolute inset-0 bg-brand-bright-orange z-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Title (always visible, same position) */}
                  <div className="relative z-2 p-8 md:p-10 text-center">
                    <h3 className="text-gray-700 font-semibold text-3xl leading-snug tracking-tight group-hover:text-white transition-colors duration-500">
                      {feature.title}
                    </h3>
                  </div>

                  {/* Description + Button (hidden by default, slides up on hover) */}
                  <div className="relative z-2 mt-auto p-8 md:p-10 pt-0 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                    <p className="text-white/90 text-lg leading-relaxed mb-6">
                      {feature.description}
                    </p>
                    <Link
                      href={feature.href || "#"}
                      className="inline-flex items-center gap-2 bg-black text-white font-semibold text-lg border border-white/40 rounded-full px-6 py-2.5 hover:bg-transparent hover:border-white hover:text-white transition-colors duration-300"
                    >
                      Learn More
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
