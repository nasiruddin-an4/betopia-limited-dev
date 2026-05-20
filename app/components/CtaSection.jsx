"use client";

import React, { useState } from "react";
import { ArrowRight, Play, ChevronLeft, ChevronRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import Link from "next/link";
import Image from "next/image";
import RollingButton from "./RollingButton";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const carouselData = [
  {
    id: 1,
    name: "Jacob Opoku",
    role: "Managing Director",
    company: "VALRPRO Ltd",
    quote: "Betopia completely modernised our backend systems and server infrastructures. Their speed of execution, communication clarity, and technical support is truly stellar.",
    avatar: "/client/chris.webp",
    thumbnail: "/client/chris.webp",
    videoUrl: "https://youtu.be/7jF9txRy0Yc",
    rating: 5,
    date: "April 18, 2026",
    tags: ["Backend Systems", "Digital Scale", "Agile Dev"],
    isYoutube: true,
    youtubeId: "7jF9txRy0Yc"
  },
  {
    id: 2,
    name: "Ronald Mensah",
    role: "Co-founder & CEO",
    company: "VALRPRO",
    quote: "The development expertise that Betopia brings is unmatched. They worked hand-in-hand with our teams to deliver a zero-latency web application ahead of schedule.",
    avatar: "/ron photo.webp",
    thumbnail: "/ron photo.webp",
    videoUrl: "https://youtu.be/f7Bhdjn-Fyk",
    rating: 5,
    date: "May 2, 2026",
    tags: ["AI/ML Solutions", "FinTech", "Platform Dev", "Web Architecture"],
    isYoutube: true,
    youtubeId: "f7Bhdjn-Fyk"
  },
  {
    id: 3,
    name: "Corinna Reibchen",
    role: "Founder & CEO",
    company: "Theclue Education Platform",
    quote: "What makes Betopia an extraordinary partner is the scale of solutions they bring to the table. Their interaction is highly professional, and they consistently deliver ahead of schedule. Truly a trusted partner.",
    avatar: "/IMG_8843.jpg",
    thumbnail: "/IMG_8843.jpg",
    videoUrl: "https://youtu.be/3L0yhDu6WW4",
    rating: 5,
    date: "May 10, 2026",
    tags: ["SaaS Platform", "E-learning", "UX Strategy"],
    isYoutube: true,
    youtubeId: "3L0yhDu6WW4"
  }
];

export default function CtaSection() {
  const [activeVideoId, setActiveVideoId] = useState(null);

  return (
    <section className="py-10 md:py-20 bg-gray-50">
      <div className="container mx-auto px-6 md:px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left: Text Content */}
          <div className="flex flex-col">
            <ScrollReveal delay={0.15}>
              <h2 className="text-xl md:text-3xl font-medium text-gray-600 leading-[1.3] mb-8">
                Betopia helps forward-thinking organizations build intelligent operations powered by AI, automation, and scalable enterprise technology.
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.4}>
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <RollingButton
                  text="Let's Build with Betopia"
                  href="/contact"
                />
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Video Carousel */}
          <ScrollReveal delay={0.2}>
            <div className="relative w-full aspect-video rounded-xl overflow-hidden group bg-gray-900 shadow-2xl shadow-orange-500/10 border border-gray-200/50">



              {/* Navigation Arrows (visible on hover) */}
              {!activeVideoId && (
                <>
                  <button className="swiper-button-prev-custom absolute left-4 top-1/2 -translate-y-1/2 z-40 w-12 h-12 rounded-full bg-black/30 text-white backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/50 border border-white/10 shadow-lg">
                    <ChevronLeft size={28} />
                  </button>
                  <button className="swiper-button-next-custom absolute right-4 top-1/2 -translate-y-1/2 z-40 w-12 h-12 rounded-full bg-black/30 text-white backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/50 border border-white/10 shadow-lg">
                    <ChevronRight size={28} />
                  </button>
                </>
              )}

              {!activeVideoId ? (
                <Swiper
                  modules={[Autoplay, EffectFade, Pagination, Navigation]}
                  effect="fade"
                  autoplay={{ delay: 4000, disableOnInteraction: false }}
                  pagination={{
                    clickable: true,
                    el: '.cta-video-pagination',
                    renderBullet: function (index, className) {
                      return '<span class="' + className + ' flex-1 !h-1.5 !rounded-full cursor-pointer transition-all duration-300 bg-white/30 hover:bg-white/50 backdrop-blur-md overflow-hidden"></span>';
                    }
                  }}
                  navigation={{
                    nextEl: '.swiper-button-next-custom',
                    prevEl: '.swiper-button-prev-custom',
                  }}
                  loop={true}
                  style={{ '--swiper-theme-color': '#f97316' }}
                  className="w-full h-full"
                >
                  {carouselData.map((slide) => (
                    <SwiperSlide key={slide.id}>
                      <div
                        className="relative w-full h-full cursor-pointer group/slide"
                        onClick={() => setActiveVideoId(slide.youtubeId)}
                      >
                        {/* YouTube Thumbnail */}
                        <img
                          src={`https://img.youtube.com/vi/${slide.youtubeId}/maxresdefault.jpg`}
                          alt={`${slide.name} - ${slide.company} Video`}
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover/slide:scale-105"
                        />

                        {/* Top Gradient for Pagination Legibility */}
                        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/70 to-transparent z-20 pointer-events-none" />

                        {/* Bottom Gradient for Text Legibility */}
                        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-20 pointer-events-none" />

                        {/* Glassmorphism Play Button */}
                        <div className="absolute bottom-6 right-6 md:bottom-8 md:right-8 z-30">
                          <div className="relative group/btn flex items-center justify-center">
                            {/* Glowing backdrop */}
                            <div className="absolute inset-0 bg-orange-500 rounded-full blur-xl opacity-0 group-hover/btn:opacity-60 transition-opacity duration-500"></div>
                            {/* Pulse ring */}
                            <div className="absolute inset-0 rounded-full border-2 border-white/30 scale-[1.3] animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite]"></div>

                            {/* Button body */}
                            <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white transform transition-all duration-500 group-hover/btn:scale-110 group-hover/btn:bg-orange-500 group-hover/btn:border-orange-400 relative z-10 shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
                              <Play size={28} fill="currentColor" className="ml-1.5 drop-shadow-md" />
                            </div>
                          </div>
                        </div>

                        {/* Slide Info Overlay */}
                        <div className="absolute bottom-6 md:bottom-8 left-6 md:left-8 right-28 md:right-32 z-40 transform transition-transform duration-500 group-hover/slide:translate-y-[-4px]">

                          <h4 className="text-white font-bold text-2xl md:text-3xl  tracking-tight">{slide.name}</h4>
                          <p className="text-gray-300 font-medium text-sm md:text-base">{slide.role}, <span className="text-orange-400">{slide.company}</span></p>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              ) : (
                <iframe
                  src={`https://www.youtube.com/embed/${activeVideoId}?autoplay=1`}
                  title="Betopia Client Video"
                  className="absolute inset-0 w-full h-full rounded-2xl"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
