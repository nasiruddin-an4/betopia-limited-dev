"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import * as LucideIcons from "lucide-react";
import * as RiIcons from "react-icons/ri";
import ScrollReveal from "./ScrollReveal";
import RollingButton from "./RollingButton";

// Dynamic Icon Component
const DynamicIcon = ({ name, ...props }) => {
  if (!name) return <LucideIcons.Circle {...props} />;

  // Try Lucide first, then Remix Icon (Ri prefix)
  let Icon = LucideIcons[name];
  if (!Icon) {
    // If not found, try adding 'Ri' prefix for react-icons/ri
    const riName = name.startsWith("Ri") ? name : `Ri${name}`;
    Icon = RiIcons[riName];
  }

  if (!Icon) return <LucideIcons.Circle {...props} />;
  return <Icon {...props} />;
};

const STEP_ICONS = [
  RiIcons.RiDiscussLine,       // Step 1: Consult / Discuss
  RiIcons.RiPaletteLine,       // Step 2: Design / Palette
  RiIcons.RiSettings3Line,     // Step 3: Implement / Settings
  RiIcons.RiRocketLine,        // Step 4: Optimize / Rocket
  RiIcons.RiDiscussLine,
  RiIcons.RiPulseLine
];

export default function IndustryPageLayout({ data }) {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [isAutoplay, setIsAutoplay] = React.useState(true);

  // Map old data format to new format if needed
  const isNewFormat = !!data.hero;

  const title = data.title || "";

  const hero =
    data.hero ||
    (!isNewFormat
      ? {
        breadcrumb: `INDUSTRIES > ${title.toUpperCase()}`,
        title1: data.subtitle ? "" : "Transforming",
        titleHighlight: title,
        title2: data.subtitle || "",
        description: data.description,
        features: [],
        image: data.image || "/bankCoverImg/banking v2.png",
      }
      : null);

  const intro =
    data.intro ||
    (!isNewFormat
      ? {
        title1: "How Betopia is transforming",
        titleHighlight: title,
        title2: "through AI-driven solutions.",
        description: data.description,
        tags: [
          "# AI & Automation",
          "Predictive Analytics",
          "Enterprise Security",
          "Data Intelligence",
        ],
      }
      : null);

  const approach =
    data.approach ||
    (!isNewFormat && data.sections
      ? {
        title: "Designed for",
        titleHighlight: title,
        cards: (data.sections || []).map((sec) => ({
          title: sec.title,
          description: sec.content,
          bullets: [],
          image: null,
        })),
      }
      : null);

  const valueChain = data.valueChain; // Optional
  const challenges = data.challenges; // Optional

  const impact = data.impact; // Optional
  const solutions = data.solutions; // Optional

  const cta =
    data.cta ||
    (!isNewFormat
      ? {
        subtitle: "LET'S BUILD TOGETHER",
        title1: "Ready to transform your",
        titleHighlight: title,
        title2: "operations?",
        description: `Partner with Betopia Limited to unlock intelligent, AI-driven solutions tailored specifically for the ${title.toLowerCase()} sector.`,
        benefitsTitle: "What you'll gain working with us",
        benefits: [
          "AI-powered automation tailored to your workflows",
          "Real-time data insights and predictive analytics",
          "Enterprise-grade security and compliance",
          "Global delivery with 24/7 expert support",
          "Measurable business impact and ROI",
        ],
      }
      : null);

  const trustedBy = data.trustedBy;
  const successStories = data.successStories;

  React.useEffect(() => {
    if (!isAutoplay || !cta || !cta.benefits || cta.benefits.length === 0) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % cta.benefits.length);
    }, 3800);
    return () => clearInterval(interval);
  }, [isAutoplay, cta?.benefits?.length]);

  return (
    <div className="text-gray-900 min-h-screen overflow-x-hidden">
      {/* 1. HERO SECTION (Dark) */}
      {hero && (
        <section
          className="relative min-h-screen flex items-center overflow-hidden bg-[#04060e] pt-24 pb-16"
          style={{ clipPath: "inset(0)" }}
        >
          {/* Background Image on Right */}
          <div className="absolute inset-0 z-0 flex justify-end pointer-events-none">
            <div className="fixed inset-y-0 right-0 w-full lg:w-[60%] opacity-60 mix-blend-lighten mask-image-gradient pointer-events-none">
              <Image
                src={hero.image}
                alt={title}
                fill
                className="object-cover object-right"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#04060e] via-[#04060e]/80 to-transparent"></div>
            </div>
          </div>

          {/* Glow Effects */}
          <div className="absolute top-1/4 -left-[10%] w-[500px] h-[500px] rounded-full bg-brand-bright-orange/10 blur-[120px] pointer-events-none" />

          <div className="relative z-10 container mx-auto px-6 md:px-6 w-full">
            <div className="max-w-3xl">
              <ScrollReveal delay={0.1} yOffset={35}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-[1.12] tracking-tight mb-6">
                  {hero.titleHighlights && (
                    <span className="text-brand-bright-orange block md:inline md:mr-4 mb-2 md:mb-0">
                      {hero.titleHighlights}
                    </span>
                  )}
                  {hero.heroTitle || title}
                </h1>
              </ScrollReveal>

              <ScrollReveal delay={0.2} yOffset={25}>
                <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-2xl">
                  {hero.description}
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.3} yOffset={15}>
                <RollingButton text="Book a Consultation" href="/book-consultation" />
              </ScrollReveal>
            </div>
          </div>
        </section>
      )}

      {/* 2. INTRO SECTION (White) */}
      {intro && (
        <section className="bg-white py-20 md:py-28 relative border-b border-gray-100">
          <div className="container mx-auto px-4 md:px-6">
            <ScrollReveal>
              <span className="text-[11px] font-bold uppercase tracking-[3px] text-brand-bright-orange mb-6 block">
                {title.toUpperCase()}
              </span>
            </ScrollReveal>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
              <ScrollReveal delay={0.1}>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-gray-800 leading-[1.15]">
                  {intro.title1}{" "}
                  <span className="text-brand-bright-orange">
                    {intro.titleHighlight}
                  </span>{" "}
                  {intro.title2}
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <p className="text-gray-500 text-lg leading-relaxed mb-8">
                  {intro.description}
                </p>
                {intro.tags && (
                  <div className="flex flex-wrap gap-3">
                    {intro.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-xs font-semibold uppercase tracking-wider text-gray-600 bg-gray-50 border border-gray-200 px-4 py-2 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </ScrollReveal>
            </div>
          </div>
        </section>
      )}

      {/* 3. APPROACH SECTION (Light Gray) */}
      {approach && approach.cards && approach.cards.length > 0 && (
        <section className="bg-gray-50 py-20 md:py-28 relative">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <ScrollReveal>
                <span className="text-[11px] font-bold uppercase tracking-[3px] text-brand-bright-orange mb-4 block">
                  OUR APPROACH
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-gray-800">
                  {approach.title}{" "}
                  <span className="text-brand-bright-orange">
                    {approach.titleHighlight}
                  </span>
                </h2>
              </ScrollReveal>
            </div>

            <div className="flex flex-wrap justify-center gap-8">
              {approach.cards.map((card, idx) => (
                <div key={idx} className="w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-1.5rem)] flex flex-col">
                  <ScrollReveal
                    delay={0.1 * idx}
                    className="h-full w-full flex flex-col"
                  >
                    <div className="group bg-white rounded-3xl p-8 md:p-10 border border-gray-100 shadow-sm hover:shadow-xl hover:border-brand-bright-orange/20 transition-all duration-500 flex flex-col relative overflow-hidden h-full w-full">
                      {/* Subtle Background Accent */}
                      <div className="absolute -right-8 -top-8 w-32 h-32 bg-brand-bright-orange/5 rounded-full blur-3xl group-hover:bg-brand-bright-orange/10 transition-colors duration-500" />

                      <div className="flex text-left items-start md:items-center justify-start md:justify-center mb-8">
                        <div className="w-14 h-14 rounded-2xl bg-brand-bright-orange/10 text-brand-bright-orange flex items-center justify-center font-bold text-xl group-hover:bg-brand-bright-orange group-hover:text-white transition-all duration-500">
                          0{idx + 1}
                        </div>
                      </div>

                      <h3 className="text-2xl font-bold text-gray-800 mb-5 leading-tight group-hover:text-brand-bright-orange transition-colors duration-300 text-left md:text-center">
                        {card.title}
                      </h3>
                      <p className="text-gray-500 text-lg leading-relaxed mb-8 flex-grow text-left md:text-center">
                        {card.description}
                      </p>

                      {card.bullets && card.bullets.length > 0 && (
                        <div className="space-y-4 pt-6 border-t border-gray-50">
                          {card.bullets.map((bullet, i) => (
                            <div
                              key={i}
                              className="flex items-start gap-4 text-[15px] text-gray-600 group/item"
                            >
                              <div className="mt-1 w-5 h-5 rounded-full bg-brand-bright-orange/10 flex items-center justify-center shrink-0 group-hover/item:bg-brand-bright-orange transition-colors">
                                <LucideIcons.Check className="w-3 h-3 text-brand-bright-orange group-hover/item:text-white transition-colors" />
                              </div>
                              <span className="font-medium">{bullet}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </ScrollReveal>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 4. VALUE CHAIN SECTION (White) - Only render if exists */}
      {valueChain && (
        <section className="bg-white py-20 md:py-28">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <ScrollReveal>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                  {valueChain.title}
                </h2>
              </ScrollReveal>
            </div>

            {/* Steps Ribbon */}
            <ScrollReveal delay={0.1}>
              <div className="flex flex-wrap items-start justify-center gap-4 md:gap-2 mb-16">
                {valueChain.steps &&
                  Array.isArray(valueChain.steps) &&
                  valueChain.steps.map((step, idx) => {
                    const stepObj =
                      typeof step === "string"
                        ? { label: step, icon: "ShieldCheck" }
                        : step;
                    return (
                      <React.Fragment key={idx}>
                        <div className="flex flex-col items-center max-w-[180px] text-center">
                          <div className="w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center text-brand-bright-orange mb-6 bg-white shadow-sm">
                            <DynamicIcon
                              name={stepObj.icon || "ShieldCheck"}
                              size={20}
                              strokeWidth={1.5}
                            />
                          </div>
                          <span className="text-sm text-gray-700 leading-tight">
                            {stepObj.label}
                          </span>
                        </div>
                        {idx < valueChain.steps.length - 1 && (
                          <div className="h-14 flex items-center px-2">
                            <LucideIcons.ChevronRight
                              className="text-gray-300 hidden md:block"
                              size={18}
                            />
                          </div>
                        )}
                      </React.Fragment>
                    );
                  })}
              </div>
            </ScrollReveal>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {valueChain.cards &&
                Array.isArray(valueChain.cards) &&
                valueChain.cards.map((card, idx) => (
                  <ScrollReveal key={idx} delay={0.2 + 0.05 * idx}>
                    <div className="group bg-gray-50 border border-gray-100 rounded-3xl p-8 h-[280px] flex flex-col justify-between hover:bg-brand-bright-orange hover:border-brand-bright-orange transition-all duration-500 cursor-default">
                      <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-brand-bright-orange group-hover:bg-white/20 group-hover:text-white transition-all duration-500">
                        <DynamicIcon
                          name={card.icon}
                          size={28}
                          strokeWidth={1.5}
                        />
                      </div>

                      <div>
                        <h4 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-white transition-colors duration-300">
                          {card.title}
                        </h4>
                        <p className="text-gray-500 text-md leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                          {card.description}
                        </p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
            </div>
          </div>
        </section>
      )}

      {/* 5. CHALLENGES SECTION (Dark) - Only render if exists */}
      {challenges && (
        <section className="bg-[#04060e] py-20 md:py-28 relative border-t border-white/5">
          <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-brand-bright-orange/5 to-transparent pointer-events-none" />

          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              {/* Left Title */}
              <div className="lg:col-span-3">
                <ScrollReveal>
                  <span className="text-[11px] font-bold uppercase tracking-[3px] text-brand-bright-orange mb-4 block">
                    INDUSTRY CHALLENGES
                  </span>
                  <h2 className="text-3xl md:text-4xl font-semibold text-white leading-tight">
                    {challenges.title1}
                    <br />
                    {challenges.title2}{" "}
                    <span className="text-brand-bright-orange">
                      {challenges.titleHighlight}
                    </span>
                  </h2>
                </ScrollReveal>
              </div>

              {/* Middle Grid */}
              <div
                className={`grid grid-cols-1 sm:grid-cols-2 gap-6 ${challenges.advantageItems &&
                  challenges.advantageItems.length > 0
                  ? "lg:col-span-6"
                  : "lg:col-span-9"
                  }`}
              >
                {challenges.items &&
                  Array.isArray(challenges.items) &&
                  challenges.items.map((item, idx) => (
                    <ScrollReveal key={idx} delay={0.1 * idx}>
                      <div className="bg-white/5 border border-white/10 rounded-xl p-5 flex gap-4">
                        <div className="mt-1 text-gray-400 shrink-0">
                          <DynamicIcon name={item.icon} size={20} />
                        </div>
                        <div>
                          <h4 className="text-white font-semibold text-sm mb-1">
                            {item.title}
                          </h4>
                          <p className="text-gray-400 text-xs leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </ScrollReveal>
                  ))}
              </div>

              {/* Right Advantage Card */}
              {challenges.advantageItems &&
                challenges.advantageItems.length > 0 && (
                  <div className="lg:col-span-3">
                    <ScrollReveal delay={0.4}>
                      <div className="bg-gradient-to-b from-brand-bright-orange/10 to-transparent border border-brand-bright-orange/20 rounded-2xl p-6 h-full">
                        <h3 className="text-white font-bold mb-6">
                          {challenges.advantageTitle || "The Betopia Advantage"}
                        </h3>
                        <ul className="space-y-4">
                          {challenges.advantageItems.map((adv, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <div className="w-2 h-2 rounded-full bg-brand-bright-orange mt-1.5 shrink-0" />
                              <span className="text-gray-300 text-sm">
                                {adv}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </ScrollReveal>
                  </div>
                )}
            </div>
          </div>
        </section>
      )}



      {/* 6B. IMPACT SECTION (Dark) - Only render if exists */}
      {impact && (
        <section className="bg-[#04060e] py-20 md:py-28 relative rounded-3xl mx-4 md:mx-8 my-12 overflow-hidden border border-white/10">
          <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-brand-bright-orange/10 to-transparent pointer-events-none" />

          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <ScrollReveal>
                  <span className="text-[11px] font-bold uppercase tracking-[3px] text-brand-bright-orange mb-4 block">
                    {impact.subtitle || "OUR IMPACT"}
                  </span>
                  <h2 className="text-4xl md:text-5xl font-semibold text-white mb-12">
                    {impact.title1}{" "}
                    <span className="text-brand-bright-orange">
                      {impact.titleHighlight}
                    </span>{" "}
                    {impact.title2}
                  </h2>
                </ScrollReveal>

                <div className="grid grid-cols-2 gap-x-8 gap-y-12">
                  {impact.items &&
                    Array.isArray(impact.items) &&
                    impact.items.map((item, idx) => (
                      <ScrollReveal key={idx} delay={0.1 * idx}>
                        <div>
                          <div className="text-4xl md:text-5xl font-bold text-brand-bright-orange mb-2">
                            {item.value}
                          </div>
                          <div className="text-sm font-medium text-gray-300">
                            {item.label}
                          </div>
                        </div>
                      </ScrollReveal>
                    ))}
                </div>
              </div>

              {impact.image && (
                <ScrollReveal delay={0.3}>
                  <div className="relative w-full aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden">
                    <Image
                      src={impact.image}
                      alt="Impact"
                      fill
                      className="object-contain"
                    />
                  </div>
                </ScrollReveal>
              )}
            </div>
          </div>
        </section>
      )}


      {/* 8. SUCCESS STORIES SECTION (CPG Style) */}
      {successStories && (
        <section className="bg-gray-50 py-20 md:py-28 overflow-hidden">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <ScrollReveal>
                <span className="text-[11px] font-bold uppercase tracking-[3px] text-brand-bright-orange mb-4 block">
                  {successStories.subtitle || "SUCCESS STORIES"}
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-800">
                  {successStories.title}
                </h2>
              </ScrollReveal>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {successStories.items &&
                Array.isArray(successStories.items) &&
                successStories.items.map((story, idx) => (
                  <ScrollReveal key={idx} delay={0.1 * idx}>
                    <div className="bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-lg transition-all h-full flex flex-col">
                      <div className="relative h-12 w-32 mb-8 grayscale hover:grayscale-0 transition-all">
                        <Image
                          src={story.logo}
                          alt={story.brand}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <p className="text-gray-500 text-sm mb-8 flex-grow">
                        {story.description}
                      </p>
                      <div className="pt-6 border-t border-gray-50">
                        <div className="text-3xl font-bold text-brand-bright-orange mb-1">
                          {story.metric}
                        </div>
                        <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                          {story.metricLabel}
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
            </div>
          </div>
        </section>
      )}

      {/* 7B. SOLUTIONS SECTION (White) - Only render if exists */}
      {solutions && (
        <section className="bg-white py-20 md:py-24 border-t border-gray-100">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <ScrollReveal>
                <span className="text-[11px] font-bold uppercase tracking-[3px] text-brand-bright-orange mb-4 block">
                  {solutions.subtitle}
                </span>
              </ScrollReveal>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {solutions.items &&
                Array.isArray(solutions.items) &&
                solutions.items.map((item, idx) => (
                  <ScrollReveal key={idx} delay={0.05 * idx}>
                    <div className="bg-gray-50 group hover:-translate-y-2 duration-500 transition-all border border-gray-100 rounded-2xl p-8 text-center h-[260px] hover:shadow-md flex flex-col">
                      <div className="mx-auto group-hover:bg-brand-bright-orange group-hover:text-white duration-500 transition-all w-16 h-16 rounded-full border border-gray-200 flex items-center justify-center text-brand-bright-orange mb-6">
                        <DynamicIcon name={item.icon} size={24} />
                      </div>
                      <div className="mt-auto px-6">
                        <div className="text-lg font-bold text-gray-800 mb-3">
                          {item.title}
                        </div>
                        <div className="text-sm font-medium text-gray-500 leading-relaxed">
                          {item.description}
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
            </div>
          </div>
        </section>
      )}

      {/* 7. BENEFITS SECTION */}
      {cta && cta.benefits && (
        <section className="bg-white py-16 md:py-24 relative overflow-hidden">
          {/* Subtle background glows */}
          <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-brand-bright-orange/5 rounded-full blur-[140px] pointer-events-none" />

          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="text-center mb-16">
              <ScrollReveal>
                <h3 className="text-gray-900 text-3xl md:text-4xl font-extrabold tracking-tight">
                  {cta.benefitsTitle}
                </h3>
              </ScrollReveal>
            </div>

            {/* Timeline Progress Bar (Visible on tablet/desktop) */}
            <div className="hidden md:block relative w-full max-w-3xl mx-auto mb-16 h-10">
              {/* Track wrapper that aligns exactly with button centers */}
              <div className="absolute left-5 right-5 top-1/2 -translate-y-1/2 h-[2px]">
                {/* Background gray line */}
                <div className="absolute inset-0 bg-gray-200" />

                {/* Active filled line */}
                <div
                  className="absolute left-0 top-0 bottom-0 bg-brand-bright-orange transition-all duration-700 ease-out"
                  style={{
                    width: `${(activeIndex / (cta.benefits.length - 1)) * 100}%`
                  }}
                />
              </div>

              {/* Step indicator bubbles */}
              <div className="absolute inset-0 flex justify-between items-center z-10">
                {cta.benefits.map((_, idx) => {
                  const isActive = idx <= activeIndex;
                  const isCurrent = idx === activeIndex;
                  return (
                    <button
                      key={idx}
                      onClick={() => {
                        setActiveIndex(idx);
                        setIsAutoplay(false);
                      }}
                      className={`w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all duration-500 bg-white ${isCurrent
                        ? "border-brand-bright-orange bg-brand-bright-orange text-white scale-110 shadow-lg shadow-orange-500/20"
                        : isActive
                          ? "border-brand-bright-orange text-brand-bright-orange bg-orange-50/50"
                          : "border-gray-200 text-gray-400 hover:border-gray-300"
                        }`}
                    >
                      {isActive ? (
                        <LucideIcons.Check size={16} strokeWidth={3} />
                      ) : (
                        <span className="text-xs font-bold">0{idx + 1}</span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Cards Grid */}
            <div className="flex flex-wrap justify-center gap-6 z-10 relative">
              {cta.benefits.map((ben, idx) => {
                const isCurrent = idx === activeIndex;
                const hasColon = ben.includes(":");
                let title = "";
                let desc = ben;
                if (hasColon) {
                  const parts = ben.split(":");
                  title = parts[0].trim();
                  desc = parts.slice(1).join(":").trim();
                }

                // Choose a dynamic icon from standard STEP_ICONS constant
                const IconComponent = STEP_ICONS[idx % STEP_ICONS.length] || LucideIcons.CheckCircle2;

                return (
                  <ScrollReveal
                    key={idx}
                    delay={0.08 * idx}
                    width="auto"
                    className="w-full sm:w-[calc(50%-12px)] lg:flex-1 lg:min-w-[220px] lg:max-w-[260px] flex flex-col"
                  >
                    <div
                      onClick={() => {
                        setActiveIndex(idx);
                        setIsAutoplay(false);
                      }}
                      className={`group bg-white rounded-[24px] p-8 border cursor-pointer transition-all duration-500 ease-out flex flex-col text-left h-[280px] w-full relative overflow-hidden ${isCurrent
                        ? "border-brand-bright-orange shadow-2xl shadow-orange-500/10 -translate-y-2 scale-105 z-10"
                        : "border-gray-100/80 shadow-sm opacity-60 hover:opacity-100 hover:-translate-y-1"
                        }`}
                    >
                      {/* Top internal glow effect for active card */}
                      {isCurrent && (
                        <div className="absolute -right-16 -top-16 w-32 h-32 bg-brand-bright-orange/10 rounded-full blur-2xl pointer-events-none" />
                      )}

                      {/* Step Tag */}
                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4 block">
                        Step 0{idx + 1}
                      </span>

                      {/* Icon */}
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-all duration-500 ${isCurrent
                        ? "bg-brand-bright-orange text-white scale-110 shadow-md shadow-orange-500/20"
                        : "bg-gray-50 text-gray-400 group-hover:bg-gray-100 group-hover:text-gray-600"
                        }`}>
                        <IconComponent size={20} />
                      </div>

                      {/* Content */}
                      <div className="mt-auto">
                        <h4 className="text-[20px] font-bold text-gray-900 mb-2 leading-snug">
                          {title || ben}
                        </h4>
                        {title && (
                          <p className="text-sm text-gray-500 font-medium leading-relaxed line-clamp-3">
                            {desc}
                          </p>
                        )}
                      </div>

                      {/* Animated bottom bar progress line indicator */}
                      <div className={`absolute bottom-0 left-0 right-0 h-1.5 bg-brand-bright-orange transition-transform duration-700 origin-left ${isCurrent ? "scale-x-100" : "scale-x-0"
                        }`} />
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* 8. CTA SECTION */}
      {cta && (
        <section
          className="bg-gray-50 py-20 md:py-28 relative overflow-hidden text-center"
        >
          <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-5xl">
            <ScrollReveal>
              <span className="text-[11px] font-bold uppercase tracking-[3px] text-brand-bright-orange mb-4 block">
                {cta.subtitle}
              </span>
              <h2
                className="text-4xl lg:text-5xl font-semibold text-gray-900 mb-6 leading-[1.15]"
              >
                {cta.title1}{" "}
                <span className="text-brand-bright-orange">
                  {cta.titleHighlight}
                </span>{" "}
                {cta.title2}
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p
                className="text-gray-600 text-lg mb-10 mx-auto max-w-2xl leading-relaxed"
              >
                {cta.description}
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <RollingButton
                text="Start Your Transformation"
                href="/contact"
              />
            </ScrollReveal>
          </div>
        </section>
      )}
    </div>
  );
}
