"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Play, Star, Quote, ShieldCheck, Zap, Sparkles, ArrowUpRight, Award, Flame } from "lucide-react";
import ScrollReveal from "../components/ScrollReveal";
import RollingButton from "../components/RollingButton";
import { caseStudies } from "../case-studies/data";
import CtaSection from "../components/CtaSection";

// Video Testimonials data generated dynamically from case study data (only showing case studies that have video)
const videoTestimonials = caseStudies
  .filter((study) => study.video)
  .map((study, idx) => {
    // Custom avatars matching the original mock data
    let avatar = study.image;
    if (study.testimonial?.author === "Jacob Opoku") {
      avatar = "/client/chris.webp";
    } else if (study.testimonial?.author === "Ronald Mensah") {
      avatar = "/ron photo.webp";
    } else if (study.testimonial?.author === "Corinna Reibchen") {
      avatar = "/IMG_8843.jpg";
    }

    // Role and Company extraction
    const roleParts = study.testimonial?.role?.split(", ") || [];
    const role = roleParts[0] || "Client Partner";
    const company = roleParts[1] || study.title;

    // Map to specific thumbnails in public/caseStudyImg/videoTumbline
    let thumbnail = study.image;
    if (study.id === "valrpro") {
      thumbnail = "/caseStudyImg/videoTumbline/Ronald.png";
    } else if (study.id === "count-trust") {
      thumbnail = "/caseStudyImg/videoTumbline/jacob.png";
    } else if (study.id === "the-clue") {
      thumbnail = "/caseStudyImg/videoTumbline/carina.png";
    }

    return {
      id: idx + 1,
      name: study.testimonial?.author || "Client Team",
      role: role,
      company: company,
      quote: study.testimonial?.quote || study.description,
      avatar: avatar,
      thumbnail: thumbnail,
      videoUrl: `https://youtu.be/${study.video.youtubeId}`,
      rating: 5,
      date: study.date || "2026",
      tags: study.techStack ? study.techStack.slice(0, 3) : [],
      isYoutube: true,
      youtubeId: study.video.youtubeId,
      caseStudyId: study.id,
      title: study.title,
      tagline: study.tagline,
      industry: study.industry,
    };
  });

// Premium Stats block data
const stats = [
  {
    id: 1,
    value: "99%",
    label: "Client Retention Rate",
    icon: ShieldCheck,
    desc: "Long-term trusted technology partnerships"
  },
  {
    id: 2,
    value: "150+",
    label: "Enterprise Solutions Delivered",
    icon: Zap,
    desc: "Custom web applications & scalable platforms"
  },
  {
    id: 3,
    value: "4.9/5",
    label: "Average Client Rating",
    icon: Star,
    desc: "Voted by top business and tech leaders"
  }
];

// Text Testimonials data for infinite scrolling marquee
const textTestimonials = [
  {
    id: 1,
    name: "Gabrielle Williams",
    role: "CEO and Co-founder",
    company: "ABC Company",
    quote: "Creative geniuses who listen, understand, and craft captivating visuals - an agency that truly understands our needs and exceeds them every single time.",
    avatar: "/client/stacy.webp"
  },
  {
    id: 2,
    name: "Samantha Johnson",
    role: "VP of Product",
    company: "Apex Digital",
    quote: "Exceeded our expectations with innovative designs that brought our vision to life - a truly remarkable and highly responsive engineering partner.",
    avatar: "/client/chris.webp"
  },
  {
    id: 3,
    name: "Natalie Martinez",
    role: "Product Lead",
    company: "CloudBase Solutions",
    quote: "From concept to execution, their creativity and attention to detail know no bounds - a absolute game-changer for our brand's global success.",
    avatar: "/ron photo.webp"
  },
  {
    id: 4,
    name: "Victoria Thompson",
    role: "Marketing Director",
    company: "Elevate Retail Group",
    quote: "A refreshing and imaginative team that consistently delivers exceptional results - highly recommended for any enterprise seeking real scale.",
    avatar: "/IMG_8843.jpg"
  },
  {
    id: 5,
    name: "John Peter",
    role: "Operations Director",
    company: "Delta Corp Industries",
    quote: "Their team's artistic flair and highly structured strategic execution resulted in remarkable engineering releases - a extremely reliable tech collaborator.",
    avatar: "/client/stacy.webp"
  },
  {
    id: 6,
    name: "Isabella Rodriguez",
    role: "Founder",
    company: "CoreCreative",
    quote: "Their ability to capture our brand's exact essence in every single product milestone is unparalleled - an invaluable creative and engineering ally.",
    avatar: "/client/chris.webp"
  },
  {
    id: 7,
    name: "Arthur Pendelton",
    role: "VP of Technology",
    company: "Vanguard Finance",
    quote: "Their agile engineering delivery speed combined with rigorous QA testing and compliance metrics makes them an outstanding engineering partner.",
    avatar: "/ron photo.webp"
  },
  {
    id: 8,
    name: "Elena Rostova",
    role: "Director of Product",
    company: "ZenFlow Platforms",
    quote: "Betopia resolved our high-throughput latency and cloud infrastructure bottleneck issues in record time. Their technical mastery is absolute.",
    avatar: "/IMG_8843.jpg"
  }
];

export default function ClientStoriesPage() {
  // Divide text testimonials into two marquee rows and repeat them to ensure a seamless infinite loop on wide displays
  const marqueeRow1 = [
    ...textTestimonials.slice(0, 4),
    ...textTestimonials.slice(0, 4),
    ...textTestimonials.slice(0, 4)
  ];
  const marqueeRow2 = [
    ...textTestimonials.slice(4, 8),
    ...textTestimonials.slice(4, 8),
    ...textTestimonials.slice(4, 8)
  ];

  return (
    <main className="bg-slate-950 min-h-screen overflow-x-hidden relative text-white">
      {/* ─── HERO SECTION ─── */}
      <section className="pt-40 pb-20 relative z-10">
        <div className="container mx-auto px-6 lg:px-12 text-center max-w-5xl">
          <ScrollReveal delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight leading-[1.08] bg-gradient-to-b from-white via-white to-slate-400 bg-clip-text text-transparent">
              Architecting Digital {<span className="bg-gradient-to-r from-brand-bright-orange to-orange-400 bg-clip-text text-transparent">Scale & Momentum</span>}
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <p className="text-base md:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed font-light mb-12">
              We partner with ambitious global enterprises and high-growth organizations to design, engineer, and scale the technology that powers their futures. Hear directly from the leaders driving digital modernization with Betopia.
            </p>
          </ScrollReveal>
        </div>
      </section>



      {/* ─── VIDEO TESTIMONIALS SECTION (PREMIUM LIGHT BREAK) ─── */}
      <section className="py-24 bg-white text-slate-950 relative z-10">
        <div className="container mx-auto px-6 lg:px-10">
          {/* Header */}
          <div className="mb-16 text-center">

            <ScrollReveal delay={0.15}>
              <h2 className="text-2xl md:text-5xl font-semibold tracking-tight text-gray-700">
                Hear what our clients are saying
              </h2>
            </ScrollReveal>
          </div>

          {/* Grid Layout of Video Stories (Only case studies with videos shown) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {videoTestimonials.map((t, idx) => (
              <ScrollReveal key={t.id} delay={idx * 0.1}>
                <Link
                  href={`/case-studies/${t.caseStudyId}`}
                  className="relative aspect-[3/4] w-full rounded-lg overflow-hidden group block transition-all duration-500 ease-out cursor-pointer bg-slate-950"
                >
                  {/* Background Image */}
                  <Image
                    src={t.thumbnail}
                    alt={t.title}
                    fill
                    priority={idx === 0}
                    className="object-cover transition-transform duration-750 group-hover:scale-[1.3]"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />

                  {/* High Fidelity Dark Gradient Overlay from Bottom to Top (highly readable) */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-black/5 transition-all duration-500 group-hover:via-black/55 group-hover:from-black" />

                  {/* Premium Play Button Overlay (centered in upper area) */}
                  <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                    <div className="w-14 h-14 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:bg-brand-bright-orange group-hover:border-orange-400">
                      <Play size={20} fill="currentColor" className="ml-0.5" />
                    </div>
                  </div>



                  {/* Content Overlayed at the bottom (exactly matching reference image layout) */}
                  <div className="absolute bottom-0 inset-x-0 p-8 z-20 flex flex-col justify-end min-h-[50%]">


                    {/* Company / Solution Case Study Title (large, white, elegant) */}
                    <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight tracking-tight">
                      {t.title}
                    </h3>

                    {/* Tagline / Brief Description */}
                    <p className="text-slate-200 text-[13px] md:text-sm font-light leading-relaxed mb-2 opacity-90 group-hover:opacity-100 transition-opacity">
                      {t.tagline}
                    </p>

                    {/* Read More Section with Document Icon */}
                    <div className="flex items-center gap-2 pt-2 border-t border-white/10">
                      <div className="flex items-center gap-2 group-hover:underline underline-offset-4 text-white font-bold text-[11px] uppercase tracking-[0.2em] group-hover:text-brand-bright-orange transition-colors duration-300">
                        {/* Custom SVG Document Icon matching the image */}
                        <svg
                          className="w-4 h-4 fill-current shrink-0"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
                        </svg>
                        READ MORE
                      </div>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <div>
        <CtaSection />
      </div>
    </main>
  );
}
