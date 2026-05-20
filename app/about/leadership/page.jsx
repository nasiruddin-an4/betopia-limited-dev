"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Target,
  Users,
  Lightbulb,
  TrendingUp,
  Heart,
  Zap,
  Globe,
  Star,
} from "lucide-react";
import RollingButton from "@/app/components/RollingButton";

// Icon lookup for philosophy pillars (dashboard saves icon name as string)
const ICON_MAP = {
  Target,
  Users,
  Lightbulb,
  TrendingUp,
  Heart,
  Zap,
  Globe,
  Star,
};

// Animated Counter Component
const Counter = ({ end, duration = 2000, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) setHasStarted(true);
      },
      { threshold: 0.1 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;
    const startTime = Date.now();
    const animate = () => {
      const progress = Math.min((Date.now() - startTime) / duration, 1);
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(ease * end));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [hasStarted, end, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

export default function LeadershipPage() {
  // Hero Section
  const [heroImage, setHeroImage] = useState(
    "https://res.cloudinary.com/dij1tdcai/image/upload/v1777531338/hero_poster_x3q9u0.png",
  );
  const [heroLabel, setHeroLabel] = useState("Our Leadership");
  const [heroTitle, setHeroTitle] = useState(
    "Leaders Buidling the Future",
  );
  const [heroDescription, setHeroDescription] = useState(
    "Our leadership team combines decades of industry expertise with a passion for innovation. Together, they guide Betopia Group's mission to transform businesses through cutting-edge technology.",
  );

  // Philosophy Section
  const [philTitle, setPhilTitle] = useState(
    "Leadership That Inspires Excellence",
  );
  const [philDescription, setPhilDescription] = useState(
    "Our leadership philosophy is built on four core pillars that drive organizational success",
  );
  const [philPillars, setPhilPillars] = useState([
    {
      id: 1,
      icon: "Target",
      title: "Strategic Vision",
      description:
        "Forward-thinking leadership that anticipates market trends and technological disruptions",
    },
    {
      id: 2,
      icon: "Users",
      title: "People First",
      description:
        "Building a culture of excellence through empowerment and continuous learning",
    },
    {
      id: 3,
      icon: "Lightbulb",
      title: "Innovation Driven",
      description:
        "Fostering creativity and breakthrough thinking across all levels of the organization",
    },
    {
      id: 4,
      icon: "TrendingUp",
      title: "Results Oriented",
      description:
        "Delivering measurable business outcomes through accountable leadership",
    },
  ]);

  // Custodians Section
  const [custodiansTitle, setCustodiansTitle] = useState(
    "Custodians of the Future",
  );
  const [custodiansDescription, setCustodiansDescription] = useState(
    "Our leadership structure combines visionary foresight with operational excellence",
  );

  // CEO Profile
  const [ceoName, setCeoName] = useState("Muhammad Monir Hossain");
  const [ceoTitle, setCeoTitle] = useState("Founder & CEO, Betopia Group");
  const [ceoBio, setCeoBio] = useState(
    "Founder of 22+ worldwide ventures, Muhammad Monir Hossain, is the man bringing Bangladesh to the world stage. From industrial transformation to community empowerment, his life's work is dedicated to holding our country uphold through sustainable growth and global leadership.",
  );
  const [ceoImage, setCeoImage] = useState(
    "https://res.cloudinary.com/dij1tdcai/image/upload/v1777531338/hero_poster_x3q9u0.png",
  );
  const [ceoLink, setCeoLink] = useState("https://muhammadmonirhossain.com");

  // Chair Profile
  const [chairName, setChairName] = useState("Sabina Akter");
  const [chairTitle, setChairTitle] = useState("Chairperson, Betopia Group");
  const [chairBio, setChairBio] = useState(
    "Sabina Akter represents the new era of leadership combining grace with grit. She is dedicated to empowering women and youth, building sustainable ecosystems, and driving national growth through the Betopia Group.",
  );
  const [chairImage, setChairImage] = useState(
    "https://res.cloudinary.com/dij1tdcai/image/upload/v1777531338/hero_poster_x3q9u0.png",
  );
  const [chairLink, setChairLink] = useState("https://sabinaakter.com/");

  // Executive Leadership (COO, CMO)
  const [cooName, setCooName] = useState("Md. Nasir");
  const [cooTitle, setCooTitle] = useState("Group COO");
  const [cooImage, setCooImage] = useState("/C_suite/nasir-3.png");
  const [cmoName, setCmoName] = useState("Md. Abdullah Al Alamin");
  const [cmoTitle, setCmoTitle] = useState("Group CMO");
  const [cmoImage, setCmoImage] = useState("/C_suite/abdullah-2.png");

  // Departmental Heads (Finance, HR, Admin)
  const [fbHeadName, setFbHeadName] = useState("Md. Saiful Islam");
  const [fbHeadTitle, setFbHeadTitle] = useState("Director, Finance");
  const [fbHeadImage, setFbHeadImage] = useState("/C_suite/saiful-2.png");

  const [hrHeadName, setHrHeadName] = useState("Md. Sajedul Islam");
  const [hrHeadTitle, setHrHeadTitle] = useState("Head of Human Resources");
  const [hrHeadImage, setHrHeadImage] = useState("/C_suite/sajedul2.png");

  const [adminHeadName, setAdminHeadName] = useState("Md. Rezaul Karim");
  const [adminHeadTitle, setAdminHeadTitle] = useState(
    "Head of Administration & Legal",
  );
  const [adminHeadImage, setAdminHeadImage] = useState("/C_suite/reja-2.png");

  // Group Management
  const [gm1Name, setGm1Name] = useState("Md. Ashraful Mamun");
  const [gm1Title, setGm1Title] = useState("CSO, Betopia Limited");
  const [gm1Image, setGm1Image] = useState("/C_suite/Md.-Ashraful-Mamun,-CSO.png");

  const [gm2Name, setGm2Name] = useState("Shahed Iqbal");
  const [gm2Title, setGm2Title] = useState("CBO, Betopia Limited");
  const [gm2Image, setGm2Image] = useState("/C_suite/CBO.jpeg");

  // Vice Presidents
  const [vp1Name, setVp1Name] = useState("Md. Abdul Motin");
  const [vp1Title, setVp1Title] = useState("Vice President");
  const [vp1Image, setVp1Image] = useState(
    "/C_suite/Md.-Abdul-Motin,-VICE-PRESIDENT.png",
  );

  const [vp2Name, setVp2Name] = useState("Md. Amirul Haque");
  const [vp2Title, setVp2Title] = useState("Vice President, Sales");
  const [vp2Image, setVp2Image] = useState(
    "/C_suite/Md.-Amirul-Haque,-VICE-PRESIDENT-SALES.png",
  );

  const [vp3Name, setVp3Name] = useState("Md. Shamim Miah");
  const [vp3Title, setVp3Title] = useState(
    "VP, Business Development",
  );
  const [vp3Image, setVp3Image] = useState(
    "/C_suite/Md.-Shamim-Miah,-VICE-PRESIDENT-BUSINESS-DEVELOPMENT.png",
  );

  useEffect(() => {
    const fetchLeadershipData = async () => {
      try {
        const baseUrl = process.env.NEXT_PUBLIC_PAGE_DATA_API || "/api";
        const normalizedBaseUrl = baseUrl.startsWith("/")
          ? window.location.origin + baseUrl
          : baseUrl;
        const res = await fetch(`${normalizedBaseUrl}/pages/leadership/`);

        if (!res.ok) {
          console.warn(`Leadership API failed with status: ${res.status}`);
          return;
        }

        const contentType = res.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
          console.warn("Leadership API returned non-JSON response");
          return;
        }

        const result = await res.json();

        if (result.success && result.data) {
          const d = result.data;
          if (d.hero_image) setHeroImage(d.hero_image);
          if (d.hero_label) setHeroLabel(d.hero_label);
          if (d.hero_title) setHeroTitle(d.hero_title);
          if (d.hero_description) setHeroDescription(d.hero_description);
          if (d.phil_title) setPhilTitle(d.phil_title);
          if (d.phil_description) setPhilDescription(d.phil_description);
          if (d.phil_pillars) setPhilPillars(d.phil_pillars);
          if (d.custodians_title) setCustodiansTitle(d.custodians_title);
          if (d.custodians_description)
            setCustodiansDescription(d.custodians_description);
          if (d.ceo_name) setCeoName(d.ceo_name);
          if (d.ceo_title) setCeoTitle(d.ceo_title);
          if (d.ceo_bio) setCeoBio(d.ceo_bio);
          if (d.ceo_image) setCeoImage(d.ceo_image);
          if (d.ceo_link) setCeoLink(d.ceo_link);
          if (d.chair_name) setChairName(d.chair_name);
          if (d.chair_title) setChairTitle(d.chair_title);
          if (d.chair_bio) setChairBio(d.chair_bio);
          if (d.chair_image) setChairImage(d.chair_image);
          if (d.chair_link) setChairLink(d.chair_link);
        }
      } catch (error) {
        console.error("Error fetching leadership page data:", error);
      }
    };
    fetchLeadershipData();
  }, []);

  return (
    <div className="">
      {/* Hero Section */}
      <section className="relative w-full min-h-[50vh] md:min-h-[70vh] overflow-hidden flex flex-col justify-center py-24 md:py-0">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImage}
            alt="Leadership Hero Background"
            fill
            className="object-cover object-right md:object-center"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-r from-white/95 via-white/50 to-white/20 md:from-white md:via-white/60 md:to-transparent z-10" />
        </div>
        <div className="relative z-20 container mx-auto px-4 md:px-8 flex flex-col justify-center w-full mt-10 md:mt-0">
          <span className="text-gray-600 text-sm font-semibold uppercase tracking-wider mb-4">
            {heroLabel}
          </span>
          <h1 className="text-4xl md:text-5xl font-semibold text-[#0B1B32] mb-6 leading-[1.1] max-w-4xl whitespace-pre-line">
            {heroTitle}
          </h1>
          <p className="text-gray-600 text-base md:text-lg max-w-xl leading-relaxed">
            {heroDescription}
          </p>
        </div>
      </section>

      {/* Our Philosophy Section */}
      <section className="bg-[#F8F9FC] py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[1.5rem] md:text-[2.5rem] font-semibold text-[#0B1B32] mb-1">
              {philTitle}
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              {philDescription}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {philPillars.map((pillar, i) => {
              const PillarIcon = ICON_MAP[pillar.icon] || Target;
              return (
                <div
                  key={pillar.id || i}
                  className="bg-white rounded-[24px] p-8 hover:shadow-xl transition-shadow duration-300 group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-[#FF8F3D] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <PillarIcon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#0B1B32] mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Custodians of the Future */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[1.5rem] md:text-[2.5rem] font-semibold text-[#0B1B32] mb-1">
              {custodiansTitle}
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              {custodiansDescription}
            </p>
          </div>

          {/* Leadership Cards Container */}
          <div className="max-w-7xl mx-auto flex flex-col gap-12">
            {/* CEO Card */}
            <div className="bg-white rounded-[2.5rem] overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-700 group flex flex-col lg:flex-row">
              <div className="lg:w-[40%] relative h-[500px] lg:h-auto min-h-[500px] bg-gray-50 overflow-hidden">
                <Image
                  src={ceoImage}
                  alt={ceoName}
                  fill
                  className="object-cover object-top transition-transform duration-1000 group-hover:scale-110"
                  priority
                />
                {/* Subtle Gradient Overlay */}
                <div className="absolute inset-0 bg-linear-to-r from-black/20 via-transparent to-transparent" />
              </div>

              <div className="lg:w-[60%] p-10 lg:p-16 flex flex-col justify-center bg-white relative z-10">
                <div className="mb-8">
                  <h3 className="text-2xl md:text-5xl font-bold text-[#0B1B32] mb-2 tracking-tight">
                    {ceoName}
                  </h3>
                  <div className="w-16 h-1.5 bg-[#FF8F3D] rounded-full mb-3" />
                  <span className="text-[#FF8F3D] text-md md:text-lg font-semibold tracking-widest uppercase block">
                    {ceoTitle}
                  </span>
                </div>

                <div className="mb-12">
                  <p className="text-gray-600 leading-relaxed text-lg font-medium max-w-2xl">
                    {ceoBio}
                  </p>
                </div>

                {ceoLink && (
                  <div>
                    <a
                      href={ceoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-4 border border-gray-100 text-brand-dark-blue px-10 py-5 rounded-full font-bold hover:bg-[#FF8F3D] transition-all duration-300 shadow-md hover:shadow-lg group/btn"
                    >
                      Visit Official Website
                      <ArrowRight
                        size={20}
                        className="transition-transform group-hover/btn:translate-x-1"
                      />
                    </a>
                  </div>
                )}
              </div>
            </div>

            {/* Chairperson Card */}
            <div className="bg-white rounded-[2.5rem] overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-700 group flex flex-col lg:flex-row">
              <div className="lg:w-[40%] relative h-[500px] lg:h-auto min-h-[500px] bg-gray-50 overflow-hidden">
                <Image
                  src={chairImage}
                  alt={chairName}
                  fill
                  className="object-cover object-top transition-transform duration-1000 group-hover:scale-110"
                  priority
                />
                {/* Subtle Gradient Overlay */}
                <div className="absolute inset-0 bg-linear-to-r from-black/20 via-transparent to-transparent" />
              </div>

              <div className="lg:w-[60%] p-10 lg:p-16 flex flex-col justify-center bg-white relative z-10">
                <div className="mb-8">
                  <h3 className="text-2xl md:text-5xl font-bold text-[#0B1B32] mb-2 tracking-tight">
                    {chairName}
                  </h3>
                  <div className="w-16 h-1.5 bg-[#FF8F3D] rounded-full mb-3" />
                  <span className="text-[#FF8F3D] text-md md:text-lg font-semibold tracking-widest uppercase block">
                    {chairTitle}
                  </span>
                </div>

                <div className="mb-12">
                  <p className="text-gray-600 leading-relaxed text-lg font-medium max-w-2xl">
                    {chairBio}
                  </p>
                </div>

                {chairLink && (
                  <div>
                    <a
                      href={chairLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-4 border border-gray-100 text-brand-dark-blue px-10 py-5 rounded-full font-bold hover:bg-[#FF8F3D] transition-all duration-300 shadow-md hover:shadow-lg group/btn"
                    >
                      Visit Official Website
                      <ArrowRight
                        size={20}
                        className="transition-transform group-hover/btn:translate-x-1"
                      />
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Executive & Departmental Leadership */}
          <div className="mt-24 space-y-24">
            {/* Slot 1: Betopia Group Management */}
            <div className="max-w-7xl mx-auto px-4">
              <h3 className="text-xl font-bold text-gray-400 mb-10 uppercase tracking-[0.2em] border-b border-gray-100 pb-4 text-center">
                Betopia Group Management
              </h3>
              {/* Row 1: Executive Management (COO & CMO) */}
              <div className="flex flex-wrap justify-center gap-x-12 gap-y-16 mb-20 max-w-4xl mx-auto">
                {[
                  { name: cooName, title: cooTitle, image: cooImage },
                  { name: cmoName, title: cmoTitle, image: cmoImage },
                ].map((member, i) => (
                  <div key={i} className="flex flex-col group cursor-pointer w-full sm:w-[calc(50%-1.5rem)]">
                    <div className="relative aspect-square w-full bg-gray-100 group-hover:bg-orange-100 rounded-3xl border border-gray-200 overflow-hidden mb-6 transition-all duration-500 group-hover:border-transparent">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover object-top transition-transform duration-1000 group-hover:scale-110"
                      />
                    </div>
                    <div className="text-left px-2">
                      <h4 className="text-2xl font-bold text-gray-900 mb-1 group-hover:text-brand-bright-orange transition-colors duration-300">
                        {member.name}
                      </h4>
                      <p
                        className="text-brand-bright-orange
                       text-sm font-bold tracking-wider"
                      >
                        {member.title}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Row 2: Executive Management (CSO & CBO) */}
              <div className="flex flex-wrap justify-center gap-x-12 gap-y-16 mb-20 max-w-4xl mx-auto">
                {[
                  { name: gm1Name, title: gm1Title, image: gm1Image },
                  { name: gm2Name, title: gm2Title, image: gm2Image },
                ].map((member, i) => (
                  <div key={i} className="flex flex-col group cursor-pointer w-full sm:w-[calc(50%-1.5rem)]">
                    <div className="relative aspect-square w-full bg-gray-100 group-hover:bg-orange-100 rounded-3xl border border-gray-200 overflow-hidden mb-6 transition-all duration-500 group-hover:border-transparent">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover object-top transition-transform duration-1000 group-hover:scale-110"
                      />
                    </div>
                    <div className="text-left px-2">
                      <h4 className="text-2xl font-bold text-gray-900 mb-1 group-hover:text-brand-bright-orange transition-colors duration-300">
                        {member.name}
                      </h4>
                      <p
                        className="text-brand-bright-orange
                       text-sm font-bold tracking-wider"
                      >
                        {member.title}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Row 3: Department Heads (3 items) */}
              <div className="flex flex-wrap justify-center gap-x-12 gap-y-16">
                {[
                  { name: fbHeadName, title: fbHeadTitle, image: fbHeadImage },
                  { name: hrHeadName, title: hrHeadTitle, image: hrHeadImage },
                  {
                    name: adminHeadName,
                    title: adminHeadTitle,
                    image: adminHeadImage,
                  },
                ].map((member, i) => (
                  <div key={i} className="flex flex-col group cursor-pointer w-full sm:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-2rem)]">
                    <div className="relative aspect-square w-full bg-gray-100 group-hover:bg-orange-100 rounded-3xl border border-gray-200 overflow-hidden mb-6 transition-all duration-500 group-hover:border-transparent">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover object-top transition-transform duration-1000 group-hover:scale-110"
                      />
                    </div>
                    <div className="text-left px-2">
                      <h4 className="text-2xl font-bold text-gray-900 mb-1 group-hover:text-brand-bright-orange transition-colors duration-300">
                        {member.name}
                      </h4>
                      <p
                        className="text-brand-bright-orange
                       text-sm font-bold tracking-wider"
                      >
                        {member.title}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career CTA Section */}
      <section className="py-24 bg-gray-50 border-t border-gray-100 relative overflow-hidden">
        {/* Abstract background shapes */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-orange-100/50 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-50/50 rounded-full blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-6 max-w-4xl relative z-10 text-center">

          <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 mb-2 tracking-tight leading-tight">
            Want to build the <span className="text-orange-500">future</span> with us?
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            We are always looking for passionate engineers, digital innovators, and tech visionaries to join our growing global team. Discover open positions and start your journey at Betopia.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <RollingButton text="Explore Open Careers" href="/career" />
          </div>
        </div>
      </section>
    </div>
  );
}
