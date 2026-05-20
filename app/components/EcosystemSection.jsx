"use client";
import React from "react";
import {
  BrainCircuit,
  Cloud,
  ShieldCheck,
  LayoutGrid,
  BarChart3,
  UserRoundCog,
} from "lucide-react";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const ecosystemItems = [
  {
    icon: BrainCircuit,
    title: "AI & Automation",
    description: "AI systems built for intelligent operations & automation.",
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    description: "Scalable multi cloud environments optimized for performance.",
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity",
    description:
      "Threat intelligence, governance & enterprise security operations.",
  },
  {
    icon: LayoutGrid,
    title: "Enterprise Applications",
    description: "Custom software, ERP, HRM and operational platforms.",
  },
  {
    icon: BarChart3,
    title: "Data & Analytics",
    description: "Real-time business intelligence and decision making systems.",
  },
  {
    icon: UserRoundCog,
    title: "Managed Services",
    description: "Dedicated operational support and infrastructure monitoring.",
  },
];

const EcosystemSection = () => {
  return (
    <section className="relative bg-white py-6 md:py-14 overflow-hidden">


      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-800 leading-tight">
            One Ecosystem
            <br /> Every Enterprise Capability
          </h2>
        </div>

        {/* Swiper Container */}
        <div className="container mx-auto relative group">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={24}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            navigation={false}
            pagination={false}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
              1280: {
                slidesPerView: 4,
              },
            }}
            className="!pb-20"
          >
            {ecosystemItems.map((item, index) => (
              <SwiperSlide key={index} className="flex h-full py-4 px-2">
                <div className="relative bg-[#f8f9fa] border border-gray-100 h-80 rounded-2xl p-6 md:p-8 flex-1 text-left flex flex-col justify-between items-start transition-all duration-500 group/card overflow-hidden hover:shadow-xl hover:shadow-gray-200">

                  {/* Subtle Green Glow on Hover */}
                  <div className="absolute -top-16 -right-16 w-56 h-56 bg-brand-bright-orange/50 blur-[60px] rounded-full opacity-0 group-hover/card:opacity-100 transition-opacity duration-700 pointer-events-none z-0"></div>

                  <div className="w-12 h-12 rounded-full bg-brand-bright-orange flex items-center justify-center text-white relative z-10 transition-transform duration-500 group-hover/card:scale-110 shadow">
                    <item.icon size={22} strokeWidth={2} />
                  </div>

                  <div className="relative z-10 w-full mt-auto pt-14">
                    <h3 className="text-lg md:text-2xl font-semibold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 text-xs md:text-[16px] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default EcosystemSection;
