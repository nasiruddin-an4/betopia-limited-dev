"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Play, ChevronLeft, ChevronRight, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const testimonials = [
  {
    id: 1,
    name: "Ronald Vergara",
    role: "Chief Marketing Officer",
    company: "Meridian Financial",
    image: "/leadershipImg/CEO.png",
    quote:
      "The lovely team at Betopia has provided our startup with significant leverage. Their work is exceptionally professional, and Adrian is always attentive to our needs, taking the time to understand our briefs and offer valuable direction.",
    type: "text",
  },
  {
    id: 2,
    name: "Jacob Opoku",
    role: "Managing Director",
    company: "M-J Global",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
    quote:
      "Betopia's enterprise solutions transformed our customer outreach and operational agility. Their team is exceptionally dedicated and professional.",
    type: "video",
    youtubeId: "7jF9txRy0Yc",
  },
  {
    id: 3,
    name: "Valrpro Client",
    role: "Chief Technology Officer",
    company: "Valrpro",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400",
    quote:
      "We found the perfect digital transformation partner in Betopia. Their technical capabilities and rapid turnaround exceeded all our expectations.",
    type: "video",
    youtubeId: "f7Bhdjn-Fyk",
  },
  {
    id: 4,
    name: "Bangladesh to the World",
    role: "Global Enterprise Partner",
    company: "Betopia Client",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400",
    quote:
      "From Bangladesh to the world. Betopia delivers state-of-the-art AI systems and cloud modernization services with absolute perfection.",
    type: "video",
    youtubeId: "3L0yhDu6WW4",
  },
  {
    id: 5,
    name: "Corinna Reibchen",
    role: "Founder",
    company: "Theclue Education",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
    quote:
      "What makes Betopia a great partner is the sheer scale of solutions they bring to the table. Their interaction is highly professional and the delivery is always on time.",
    type: "text",
  },
];

export default function PartnerTestimonials({ textOnly = false, bgWhite = false }) {
  const [activeVideo, setActiveVideo] = useState(null);
  const prevRef = React.useRef(null);
  const nextRef = React.useRef(null);

  const bgClass = bgWhite ? "bg-white" : "bg-gray-50/50";

  return (
    <section className={`py-24 md:py-32 overflow-hidden border-t border-gray-100 ${bgClass}`}>
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="w-full flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
          <div className="flex-1">
            <ScrollReveal>
              <span className="text-brand-bright-orange text-xs font-black uppercase tracking-[0.3em] mb-4 block text-left">
                Testimonials
              </span>
              <h2 className="text-4xl md:text-6xl font-bold text-gray-900 leading-[1.1] tracking-tighter text-left">
                Don't take our word for it! <br />
                <span className="text-gray-400 font-medium">
                  Hear it from our partners.
                </span>
              </h2>
            </ScrollReveal>
          </div>

          <div className="flex-shrink-0">
            <ScrollReveal delay={0.2}>
              <div className="flex gap-4 mb-4 md:mb-2">
                <button
                  ref={prevRef}
                  className="w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:border-brand-bright-orange hover:text-brand-bright-orange transition-all cursor-pointer shadow-sm hover:shadow-md bg-white disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  ref={nextRef}
                  className="w-14 h-14 rounded-full bg-gray-900 text-white flex items-center justify-center hover:bg-brand-bright-orange transition-all cursor-pointer shadow-lg hover:shadow-orange-500/20 disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Carousel */}
        <ScrollReveal delay={0.3}>
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            onInit={(swiper) => {
              swiper.navigation.init();
              swiper.navigation.update();
            }}
            autoplay={{ delay: 6000, disableOnInteraction: false }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1280: { slidesPerView: 3 },
            }}
            className="!pb-16"
          >
            {testimonials.map((t) => {
              const isVideo = t.type === "video" && !textOnly;
              return (
                <SwiperSlide key={t.id} className="!h-auto flex">
                  {isVideo ? (
                    <div className="relative w-full rounded-2xl overflow-hidden group min-h-[500px] flex flex-col h-full shadow-xl shadow-gray-200/40">
                      <Image
                        src={`https://img.youtube.com/vi/${t.youtubeId}/hqdefault.jpg`}
                        alt={t.name}
                        fill
                        className="object-cover transition-transform duration-1000 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                      <div
                        onClick={() => setActiveVideo(t)}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/30 cursor-pointer shadow-2xl scale-90 group-hover:scale-100 transition-all duration-500 z-10"
                      >
                        <Play className="text-white fill-white ml-1" size={32} />
                      </div>

                      <div className="absolute bottom-10 left-10 text-white z-10">
                        <h4 className="text-2xl font-bold mb-1">
                          {t.name}
                        </h4>
                        <p className="text-white/60 text-[10px] uppercase tracking-widest font-bold">
                          {t.role} at {t.company}
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className={`rounded-[2.5rem] p-12 border shadow-xl shadow-gray-200/40 w-full flex flex-col justify-between hover:shadow-2xl transition-all duration-500 group h-full min-h-[500px] ${bgWhite ? 'bg-gray-50/50 border-gray-100/80' : 'bg-white border-gray-100'}`}>
                      <div>
                        {t.image ? (
                          <div className="relative w-12 h-12 rounded-full overflow-hidden mb-10 group-hover:scale-110 transition-transform duration-500">
                            <Image
                              src={t.image}
                              alt={t.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                        ) : (
                          <div className="w-12 h-12 rounded-full bg-brand-bright-orange/10 flex items-center justify-center text-brand-bright-orange font-bold mb-10">
                            {t.name.charAt(0)}
                          </div>
                        )}
                        <blockquote className="text-gray-500 text-lg leading-relaxed mb-12">
                          &ldquo;{t.quote}&rdquo;
                        </blockquote>
                      </div>
                      <div>
                        <h4 className="text-2xl font-bold text-gray-900 mb-1">
                          {t.name}
                        </h4>
                        <p className="text-gray-400 text-[10px] uppercase tracking-widest font-black">
                          {t.role} at {t.company}
                        </p>
                      </div>
                    </div>
                  )}
                </SwiperSlide>
              );
            })}
          </Swiper>
        </ScrollReveal>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 md:p-10"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-5xl aspect-video rounded-3xl overflow-hidden shadow-2xl"
            >
              <button
                onClick={() => setActiveVideo(null)}
                className="absolute top-6 right-6 z-50 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-all border border-white/10 group"
              >
                <X
                  size={24}
                  className="group-hover:rotate-90 transition-transform"
                />
              </button>
              <iframe
                src={`https://www.youtube.com/embed/${activeVideo.youtubeId}?autoplay=1`}
                title={activeVideo.name}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
