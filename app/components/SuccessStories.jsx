"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, ArrowLeft, ArrowRight, Check, Play } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import ScrollReveal from "./ScrollReveal";

import "swiper/css";

// Import the shared case studies dataset
import { caseStudies } from "../case-studies/data";
import RollingButton from "./RollingButton";

export default function SuccessStories() {
  const [selectedIndustry, setSelectedIndustry] = useState(null);
  const [selectedService, setSelectedService] = useState(null);
  const [selectedGeography, setSelectedGeography] = useState(null);
  const [openDropdown, setOpenDropdown] = useState(null);

  const industryRef = useRef(null);
  const serviceRef = useRef(null);
  const geographyRef = useRef(null);

  // Close dropdowns on click outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        openDropdown &&
        industryRef.current && !industryRef.current.contains(event.target) &&
        serviceRef.current && !serviceRef.current.contains(event.target) &&
        geographyRef.current && !geographyRef.current.contains(event.target)
      ) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [openDropdown]);

  // Normalize case studies & apply overrides to match the mockup exactly on load
  const normalizedStudies = caseStudies.map((study) => {
    let cardImage = study.image;
    if (study.id === "valrpro") {
      cardImage = "/caseStudyImg/videoTumbline/Ronald.png";
    } else if (study.id === "count-trust") {
      cardImage = "/caseStudyImg/videoTumbline/jacob.png";
    } else if (study.id === "the-clue") {
      cardImage = "/caseStudyImg/videoTumbline/carina.png";
    }

    if (study.id === "re") {
      return {
        ...study,
        title: "HIPAA-grade AI triage for a US hospital network",
        industry: "Healthcare",
        geography: "North America",
        image: cardImage,
      };
    }
    if (study.id === "count-trust") {
      return {
        ...study,
        title: "Multi-cloud migration for a Tier-1 Asian bank",
        industry: "Healthcare",
        geography: "Asia",
        image: cardImage,
      };
    }
    if (study.id === "nex-fitness") {
      return {
        ...study,
        title: "Predictive maintenance for 42 global plants",
        industry: "Manufacturing",
        geography: "Global",
        image: cardImage,
      };
    }
    return {
      ...study,
      geography: study.region || "Global",
      image: cardImage,
    };
  }).sort((a, b) => {
    const aHasVideo = !!a.video;
    const bHasVideo = !!b.video;
    if (aHasVideo && !bHasVideo) return -1;
    if (!aHasVideo && bHasVideo) return 1;

    const priority = { "valrpro": 1, "count-trust": 2, "the-clue": 3, "re": 4, "nex-fitness": 5 };
    const aPriority = priority[a.id] || 999;
    const bPriority = priority[b.id] || 999;
    return aPriority - bPriority;
  });

  // Extract unique filter options from the normalized data
  const industries = ["All", ...new Set(normalizedStudies.map((s) => s.industry))];
  const services = ["All", ...new Set(normalizedStudies.map((s) => s.service))];
  const geographies = ["All", ...new Set(normalizedStudies.map((s) => s.geography))];

  // Filter case studies based on active selections
  const filteredStudies = normalizedStudies.filter((study) => {
    if (selectedIndustry && selectedIndustry !== "All" && study.industry !== selectedIndustry) {
      return false;
    }
    if (selectedService && selectedService !== "All" && study.service !== selectedService) {
      return false;
    }
    if (selectedGeography && selectedGeography !== "All" && study.geography !== selectedGeography) {
      return false;
    }
    return true;
  });

  // Helper to toggle dropdowns
  const toggleDropdown = (dropdownName) => {
    setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
  };

  return (
    <section className="bg-white py-16 md:py-24 overflow-hidden relative w-full border-t border-gray-100">
      <div className="container mx-auto px-6 md:px-2 2xl:px-2">

        {/* Header Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 mb-4 md:mb-8">
          <div className="text-left shrink-0">
            <ScrollReveal duration={0.7} delay={0.1}>
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-gray-700 leading-tight">
                Enterprise Success Stories
              </h2>
            </ScrollReveal>
          </div>

          <div className="max-w-2xl lg:text-right text-center">
            <ScrollReveal duration={0.7} delay={0.2}>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed lg:max-w-md ml-auto">
                See how organizations modernize operations, automate workflows, and scale through Betopia&apos;s intelligent enterprise systems.
              </p>
            </ScrollReveal>
          </div>
        </div>

        {/* Filter Controls Row */}
        <div className="w-full relative z-30 flex items-center justify-between pb-0 md:pb-4 mb-10 border-b-0 md:border-b md:border-zinc-200">
          <div className="flex items-center gap-1 md:gap-4 pr-0">
            <span className="text-sm font-bold text-zinc-400 tracking-wider uppercase pr-6 border-r border-zinc-200 hidden md:inline-block">
              Filter
            </span>
            <div className="hidden md:flex items-center gap-2 md:gap-4">

              {/* Industry Dropdown */}
              <div ref={industryRef} className="relative">
                <button
                  type="button"
                  onClick={() => toggleDropdown("industry")}
                  className={`text-xs md:text-sm font-semibold px-4 py-1.5 rounded-full transition-all duration-200 cursor-pointer flex items-center gap-1 min-w-0 ${selectedIndustry
                    ? "text-brand-bright-orange bg-orange-500/10"
                    : "text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50"
                    }`}
                >
                  <span className="truncate max-w-[100px] md:max-w-[180px]">{selectedIndustry || "Industry"}</span>
                  <ChevronDown size={12} className={`text-slate-500 shrink-0 transition-transform duration-200 ${openDropdown === "industry" ? "rotate-180" : ""}`} />
                </button>
                {openDropdown === "industry" && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-white border border-gray-100 rounded-2xl shadow-xl py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150 max-h-60 overflow-y-auto">
                    {industries.map((ind) => (
                      <button
                        key={ind}
                        type="button"
                        onClick={() => {
                          setSelectedIndustry(ind === "All" ? null : ind);
                          setOpenDropdown(null);
                        }}
                        className="w-full text-left px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-955 hover:bg-slate-50 transition-colors flex items-center justify-between"
                      >
                        <span>{ind}</span>
                        {(selectedIndustry === ind || (ind === "All" && !selectedIndustry)) && <Check size={12} className="text-brand-bright-orange" />}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Service Dropdown */}
              <div ref={serviceRef} className="relative">
                <button
                  type="button"
                  onClick={() => toggleDropdown("service")}
                  className={`text-xs md:text-sm font-semibold px-4 py-1.5 rounded-full transition-all duration-200 cursor-pointer flex items-center gap-1 min-w-0 ${selectedService
                    ? "text-brand-bright-orange bg-orange-500/10"
                    : "text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50"
                    }`}
                >
                  <span className="truncate max-w-[100px] md:max-w-[180px]">{selectedService || "Service"}</span>
                  <ChevronDown size={12} className={`text-slate-500 shrink-0 transition-transform duration-200 ${openDropdown === "service" ? "rotate-180" : ""}`} />
                </button>
                {openDropdown === "service" && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-white border border-gray-100 rounded-2xl shadow-xl py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150 max-h-60 overflow-y-auto">
                    {services.map((srv) => (
                      <button
                        key={srv}
                        type="button"
                        onClick={() => {
                          setSelectedService(srv === "All" ? null : srv);
                          setOpenDropdown(null);
                        }}
                        className="w-full text-left px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-955 hover:bg-slate-50 transition-colors flex items-center justify-between"
                      >
                        <span>{srv}</span>
                        {(selectedService === srv || (srv === "All" && !selectedService)) && <Check size={12} className="text-brand-bright-orange" />}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Geography Dropdown */}
              <div ref={geographyRef} className="relative">
                <button
                  type="button"
                  onClick={() => toggleDropdown("geography")}
                  className={`text-xs md:text-sm font-semibold px-4 py-1.5 rounded-full transition-all duration-200 cursor-pointer flex items-center gap-1 min-w-0 ${selectedGeography
                    ? "text-brand-bright-orange bg-orange-500/10"
                    : "text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50"
                    }`}
                >
                  <span className="truncate max-w-[100px] md:max-w-[180px]">{selectedGeography || "Geography"}</span>
                  <ChevronDown size={12} className={`text-slate-500 shrink-0 transition-transform duration-200 ${openDropdown === "geography" ? "rotate-180" : ""}`} />
                </button>
                {openDropdown === "geography" && (
                  <div className="absolute top-full right-0 mt-2 w-56 bg-white border border-gray-100 rounded-2xl shadow-xl py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150 max-h-60 overflow-y-auto">
                    {geographies.map((geo) => (
                      <button
                        key={geo}
                        type="button"
                        onClick={() => {
                          setSelectedGeography(geo === "All" ? null : geo);
                          setOpenDropdown(null);
                        }}
                        className="w-full text-left px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-955 hover:bg-slate-50 transition-colors flex items-center justify-between"
                      >
                        <span>{geo}</span>
                        {(selectedGeography === geo || (geo === "All" && !selectedGeography)) && <Check size={12} className="text-brand-bright-orange" />}
                      </button>
                    ))}
                  </div>
                )}
              </div>

            </div>
          </div>

          {/* Custom Swiper Navigation Controls */}
          <div className="flex items-center gap-3 shrink-0">
            <button className="swiper-prev-success w-8 h-8 md:w-10 md:h-10 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-500 hover:text-brand-bright-orange hover:border-brand-bright-orange transition-all duration-200 cursor-pointer bg-white hover:shadow-md disabled:opacity-40 disabled:pointer-events-none">
              <ArrowLeft size={16} />
            </button>
            <button className="swiper-next-success w-8 h-8 md:w-10 md:h-10 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-500 hover:text-brand-bright-orange hover:border-brand-bright-orange transition-all duration-200 cursor-pointer bg-white hover:shadow-md disabled:opacity-40 disabled:pointer-events-none">
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* Carousel Content */}
        <div className="relative z-10">
          {filteredStudies.length > 0 ? (
            <Swiper
              modules={[Navigation]}
              navigation={{
                prevEl: ".swiper-prev-success",
                nextEl: ".swiper-next-success",
              }}
              spaceBetween={32}
              slidesPerView={1}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
              loop={true}
              observer={true}
              observeParents={true}
              className="success-swiper !pb-2"
            >
              {filteredStudies.map((study, idx) => (
                <SwiperSlide key={study.id} className="h-auto">
                  <div className="w-full h-full group cursor-pointer pb-2 flex flex-col text-left">
                    <Link
                      href={`/case-studies/${study.id}`}
                      className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden group block transition-all duration-500 ease-out cursor-pointer bg-slate-950 shadow-md hover:shadow-xl hover:-translate-y-1"
                    >
                      {/* Background Image */}
                      {study.image ? (
                        <Image
                          src={study.image}
                          alt={study.title}
                          fill
                          priority={idx === 0}
                          className="object-cover transition-transform duration-750 group-hover:scale-[1.12]"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                      ) : (
                        <div className={`absolute inset-0 bg-gradient-to-br ${study.fallbackGradient || "from-slate-800 to-slate-950"} opacity-75`} />
                      )}

                      {/* High Fidelity Dark Gradient Overlay from Bottom to Top */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-black/5 transition-all duration-500 group-hover:via-black/55 group-hover:from-black" />



                      {/* Pill Overlay Badge */}
                      <div className="absolute top-4 right-4 z-20">
                        <span className="inline-flex items-center gap-1.5 text-[10px] md:text-[11px] font-bold text-slate-800 bg-white/95 border border-slate-200/50 backdrop-blur rounded-full px-2.5 py-0.5 shadow-sm">
                          <span className="w-1 h-1 rounded-full bg-slate-600 inline-block shrink-0 mr-0.5" />
                          {study.industry}
                        </span>
                      </div>

                      {/* Content Overlayed at the bottom */}
                      <div className="absolute bottom-0 inset-x-0 p-6 md:p-8 z-20 flex flex-col justify-end min-h-[50%]">
                        {/* Company / Solution Case Study Title */}
                        <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-white leading-snug tracking-tight mb-2 group-hover:text-brand-bright-orange transition-colors duration-300">
                          {study.title}
                        </h3>

                        {/* Tagline / Brief Description */}
                        <p className="text-slate-200 text-xs md:text-[13px] font-light leading-relaxed mb-3 opacity-90 group-hover:opacity-100 transition-opacity line-clamp-2">
                          {study.tagline || study.description}
                        </p>

                        {/* Read More Section with Document Icon */}
                        <div className="flex items-center gap-2 pt-2 border-t border-white/10">
                          <div className="flex items-center gap-2 group-hover:underline underline-offset-4 text-white font-bold text-[10px] md:text-[11px] uppercase tracking-[0.2em] group-hover:text-brand-bright-orange transition-colors duration-300">
                            {/* Custom SVG Document Icon */}
                            <svg
                              className="w-3.5 h-3.5 fill-current shrink-0"
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
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <div className="w-full text-center py-20 text-slate-400 text-sm bg-slate-50 rounded-2xl border border-dashed border-slate-200">
              No success stories match the selected filters.
            </div>
          )}
        </div>

        {/* Bottom CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 md:mt-12">
          <RollingButton text="Tell us what you need to build" href="/book-consultation" />
          <RollingButton text="Explore Case Studies" href="/case-studies" variant="secondary" />
        </div>

      </div>
    </section>
  );
}
