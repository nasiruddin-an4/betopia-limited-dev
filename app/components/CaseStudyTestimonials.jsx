"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const caseStudyReviews = [
  {
    id: 1,
    name: "Ronald Vergara",
    role: "Chief Marketing Officer",
    company: "Meridian Financial",
    image: "/leadershipImg/CEO.png",
    quote:
      "The dedicated team at Betopia has provided our enterprise with significant leverage. Their custom software development is exceptionally professional, and their engineers take the time to understand our complex briefs and offer brilliant direction.",
  },
  {
    id: 2,
    name: "Jacob Opoku",
    role: "Managing Director",
    company: "M-J Global",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
    quote:
      "Betopia's custom technology solutions transformed our operational agility and customer engagement. Their deep expertise in cloud architectures and seamless agile delivery exceeded our expectations at every stage.",
  },
  {
    id: 3,
    name: "Valrpro Client",
    role: "Chief Technology Officer",
    company: "Valrpro",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400",
    quote:
      "We found the perfect AI and digital transformation partner in Betopia. Their technical capabilities, rapid MVP deployment, and professional support enabled our product team to launch ahead of schedule with premium quality.",
  },
  {
    id: 4,
    name: "Corinna Reibchen",
    role: "Founder",
    company: "Theclue Education",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
    quote:
      "What makes Betopia an excellent partner is the sheer caliber of robust software systems they bring to life. Their attention to cybersecurity, cloud optimization, and timeline accuracy is outstanding.",
  },
  {
    id: 5,
    name: "Marcus Aurelius",
    role: "VP of Engineering",
    company: "Apex Capital Markets",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400",
    quote:
      "From zero-trust security integrations to high-performance content delivery systems, Betopia delivers enterprise-grade products with absolute architectural perfection, reducing our cloud spend by 30%.",
  },
];

export default function CaseStudyTestimonials() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="bg-white py-24 md:py-32 overflow-hidden border-t border-gray-100">
      <div className="container mx-auto px-6 lg:px-12">
        
        {/* Header Section */}
        <div className="w-full flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
          <div className="flex-1">
            <ScrollReveal>
              <span className="text-orange-500 text-xs font-black uppercase tracking-[0.3em] mb-4 block text-left">
                Client Success
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-[1.1] tracking-tighter text-left">
                Delivering Proven Outcomes <br />
                <span className="text-gray-400 font-medium">
                  What our clients say about us.
                </span>
              </h2>
            </ScrollReveal>
          </div>

          {/* Navigation Buttons */}
          <div className="flex-shrink-0">
            <ScrollReveal delay={0.2}>
              <div className="flex gap-4">
                <button
                  ref={prevRef}
                  className="w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:border-orange-500 hover:text-orange-500 transition-all cursor-pointer shadow-sm hover:shadow-md bg-white disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  ref={nextRef}
                  className="w-14 h-14 rounded-full bg-gray-900 text-white flex items-center justify-center hover:bg-orange-500 transition-all cursor-pointer shadow-lg hover:shadow-orange-500/20 disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Swiper Slider */}
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
            {caseStudyReviews.map((item) => (
              <SwiperSlide key={item.id} className="!h-auto flex">
                <div className="bg-[#fcfbfb] rounded-[2.5rem] p-10 md:p-12 border border-gray-100 shadow-xl shadow-gray-100/50 w-full flex flex-col justify-between hover:shadow-2xl hover:border-orange-100 hover:bg-white transition-all duration-500 group h-full min-h-[460px]">
                  
                  {/* Card Content */}
                  <div>
                    {/* Header: Portrait & Quote Icon */}
                    <div className="flex justify-between items-center mb-8">
                      <div className="relative w-14 h-14 rounded-full overflow-hidden border border-gray-100 shadow-sm group-hover:scale-105 transition-transform duration-500">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <Quote className="text-orange-200 group-hover:text-orange-400 transition-colors w-8 h-8 rotate-180" />
                    </div>

                    {/* Client Quote */}
                    <blockquote className="text-gray-600 text-[16px] leading-[1.8] mb-8 font-medium">
                      &ldquo;{item.quote}&rdquo;
                    </blockquote>
                  </div>

                  {/* Card Footer: Metadata */}
                  <div className="border-t border-gray-100 pt-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-1">
                      {item.name}
                    </h4>
                    <p className="text-orange-500 text-[10px] uppercase tracking-widest font-black">
                      {item.role} at {item.company}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </ScrollReveal>
      </div>
    </section>
  );
}
