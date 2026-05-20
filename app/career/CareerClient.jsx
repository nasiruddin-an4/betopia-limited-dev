"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  MapPin,
  Users,
  Gamepad2,
  Plane,
  Clock,
  Dumbbell,
  Award,
  Hourglass,
  Target,
  ClipboardCheck,
  Sparkles,
  Building2,
  Briefcase,
  Gift,
  Heart,
  Rocket,
  Search,
  ChevronDown,
  Globe,
  GraduationCap,
  TrendingUp,
  Quote,
  Cpu,
  Database,
  Code2,
  Cloud,
} from "lucide-react";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Social Icons (not available in lucide-react)
const FacebookIcon = ({ size = 32 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);
const TwitterIcon = ({ size = 32 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);
const LinkedinIcon = ({ size = 32 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);
const InstagramIcon = ({ size = 32 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const YoutubeIcon = ({ size = 32 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.14 1 12 1 12s0 3.86.42 5.58a2.78 2.78 0 0 0 1.94 2c1.71.42 8.6.42 8.6.42s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.86 23 12 23 12s0-3.86-.42-5.58z" />
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
  </svg>
);

const CAREER_ICON_MAP = {
  Users,
  Gamepad2,
  Plane,
  Clock,
  Dumbbell,
  Award,
  Hourglass,
  Target,
  ClipboardCheck,
  Sparkles,
  Building2,
  Briefcase,
  Gift,
  Heart,
  Rocket,
};

const DEFAULT_LIFE_IMAGES = [
  { id: 1, imageUrl: "" },
  { id: 2, imageUrl: "" },
  { id: 3, imageUrl: "" },
  { id: 4, imageUrl: "" },
];

const DEFAULT_BENEFITS = [
  {
    id: 1,
    title: "Collaborative Ecosystem (Culture)",
    description:
      "Zero politics, 100% impact. We operate on a flat hierarchy where the best idea wins—whether it comes from an intern or the CEO.",
    image: "",
  },
  {
    id: 2,
    title: "Decompression Zone (Relax & Sports)",
    description:
      "From intense table tennis matches to quiet zones. We believe that to code hard, you need to disconnect harder.",
    image: "",
  },
  {
    id: 3,
    title: "Annual Pleasure Tour",
    description:
      "We shut down the servers to recharge the humans. A fully sponsored, luxury offsite retreat to bond, breathe, and reset.",
    image: "",
  },
  {
    id: 4,
    title: "Time-Value Liquidity (Leave Encashment)",
    description:
      "Your time is currency. At Betopia, unused leave days don't expire—they convert directly into cash at the end of the year.",
    image: "",
  },
  {
    id: 5,
    title: "Gym Facilities",
    description:
      "Keep the hardware (body) as sharp as the software. A fully equipped fitness center right inside the HQ.",
    image: "",
  },
  {
    id: 6,
    title: "Loyalty Bonus",
    description:
      "Commitment pays compound interest. We unlock special financial milestones and rewards for our 3, 5, and 10-year veterans.",
    image: "",
  },
];

const DEFAULT_CULTURE_CODES = [
  {
    id: 1,
    icon: "Hourglass",
    title: "INTEGRITY",
    description:
      "Instant analysis offers valuable insights for swift decision-making. Companies track metrics.",
  },
  {
    id: 2,
    icon: "Target",
    title: "GRIT",
    description:
      "Predictive analytics uses historical data and algorithms to forecast outcomes.",
  },
  {
    id: 3,
    icon: "ClipboardCheck",
    title: "COLLABORATION",
    description:
      "Real-time reporting provides insights for quick decisions. Organizations monitor key metrics.",
  },
  {
    id: 4,
    icon: "Sparkles",
    title: "INTELLIGENCE",
    description:
      "Integrations enhance collaboration. Teams access insights and streamline workflows.",
  },
];

const techProfData = [
  {
    title: "AI & Data Engineering",
    icon: "AI",
    isText: true,
    items: [
      { num: "600+", label: "AI / ML Engineers" },
      { num: "350+", label: "Data Engineers & Data" },
      { num: "150+", label: "Scientists Generative AI & LLM Specialists" },
    ],
  },
  {
    title: "Software Engineering",
    icon: Code2,
    items: [
      { num: "1,000+", label: "Python Full-Stack Developers" },
      { num: "900+", label: "JavaScript / MERN / Next.js Engineers" },
      { num: "450+", label: "Java, .NET & Enterprise Engineers" },
      { num: "300+", label: "Mobile App Devs (iOS android, Flutter)" },
    ],
  },
  {
    title: "Advanced & Emerging Tech",
    icon: Cpu,
    items: [
      { num: "200+", label: "Automation & RPA Engineers" },
      { num: "150+", label: "QA & Quality Engineering Experts" },
      { num: "120+", label: "UI / UX & Product Designers" },
      { num: "100+", label: "AR / VR, IoT & Emerging Tech Engineers" },
    ],
  },
  {
    title: "Cloud, DevOps & Infra",
    icon: Cloud,
    items: [
      { num: "220+", label: "DevOps & Cloud Engineers" },
      { num: "180+", label: "Cybersecurity Specialists" },
      { num: "120+", label: "Cloud Architects (AWS, Azure, GCP)" },
    ],
  },
];

const teamTestimonials = [
  {
    name: "Yead Mosharof",
    role: "Manager, Digital Marketing",
    quote:
      "What excites me most is seeing a campaign strategy come to life — from ideation to real engagement. At Betopia, I'm not just managing ads; I'm shaping how the brand connects with people across the globe. The creative freedom here is unmatched.",
    image: "/teamImg/YM_Shezan.jpg",
  },
  {
    name: "Rufaida Jaman Rayta",
    role: "Technical Head, ERP",
    quote:
      "Leading the ERP team means solving complex puzzles every day — aligning business processes with technology that actually works. What I appreciate most is the trust placed in me to architect solutions that impact every department across the organization.",
    image: "/rufaida_photo.png",
  },
  {
    name: "Tawsif Jawwad",
    role: "Management Coordinator",
    quote:
      "At Betopia, every day is a learning experience. Working closely with leadership gives me the opportunity to understand real business decisions, contribute to important projects, and grow through responsibility, ownership, and execution.",
    image: "/teamImg/JawwadbhaiImg.png",
  },
  {
    name: "Hasnain Muhammad Kabir",
    role: "Partner Success Manager",
    quote:
      "Building lasting relationships with our partners is more than a job — it's a commitment. I get to understand their goals, anticipate their needs, and ensure they see real value in working with us. The best part is watching those partnerships grow into genuine success stories.",
    image: "/hasnain_photo.png",
  },
  {
    name: "Walid Al Sabah",
    role: "Manager, Corporate Affairs",
    quote:
      "Corporate affairs is about protecting and elevating the company's reputation every single day. From stakeholder communications to regulatory alignment, I ensure Betopia's voice is clear, credible, and trusted in every room we enter.",
    image: "/teamImg/Walid.png",
  },
];

const chooseReasons = [
  {
    title: "Visionary Culture",
    desc: "Be part of a forward thinking team shaping the future of cloud technology and AI.",
    icon: Sparkles,
  },
  {
    title: "Global Exposure",
    desc: "Collaborate with clients and teams across multiple continents and timezones.",
    icon: Globe,
  },
  {
    title: "High Ownership",
    desc: "Take initiative, solve complex problems and create real business impact.",
    icon: Target,
  },
  {
    title: "Continuous Learning",
    desc: "Access to learning resources, certifications and expert mentorship.",
    icon: GraduationCap,
  },
  {
    title: "Fast Career Growth",
    desc: "Clear growth paths and performance-driven advancement opportunities.",
    icon: TrendingUp,
  },
  {
    title: "People First",
    desc: "A supportive, inclusive environment that brings out the very best in everyone.",
    icon: Heart,
  },
];

// ------- Main Career Client Component -------
export default function CareerClient({ jobs = [], cmsContent = {} }) {
  const scrollContainerRef = useRef(null);
  const [activeTab, setActiveTab] = useState("facility");

  const categories = [
    "All",
    ...new Set(jobs.map((job) => job.department).filter(Boolean)),
  ];
  const [activeCategory, setActiveCategory] = useState(categories[0] || "All");
  const [searchQuery, setSearchQuery] = useState("");
  const [offers, setOffers] = useState([]);
  const [corporateCategories, setCorporateCategories] = useState([]);

  // Helper to strip HTML and create a summary
  const getSummary = (job) => {
    if (job.summary) return job.summary;
    if (!job.description) return "";
    // Remove HTML tags and take first 150 chars
    const plainText = job.description.replace(/<[^>]*>/g, " ");
    return plainText.substring(0, 150).trim() + "...";
  };

  // CMS Content State
  const [heroLabel, setHeroLabel] = useState("Career at Betopia");
  const [heroTitle, setHeroTitle] = useState(
    "We don't fill positions.\nWe fuel ambitions.",
  );
  const [heroDescription, setHeroDescription] = useState(
    "Connect your intelligence to a network of 5,000+ pioneers. From optimizing national food chains to engineering smart cities, build what matters.",
  );
  const [lifeTitle, setLifeTitle] = useState("Life at Betopia");
  const [lifeDescription, setLifeDescription] = useState(
    "We don't believe in 'work-life balance' we believe in work-life integration. We work with intensity because we are building the future, but we celebrate with equal passion. Whether it's 48-hour hackathons that birth new subsidiaries or luxury retreats that refresh our perspective, every moment at Betopia is engineered to elevate your potential.",
  );
  const [benefitsTitle, setBenefitsTitle] = useState("Benefits");
  const [benefitsDescription, setBenefitsDescription] = useState(
    "Optimizing your life so you can optimize the world. A 360° support system for the high-performance mind.",
  );
  const [offersTitle, setOffersTitle] = useState(
    "Offers designed to cater to your lifestyle needs",
  );
  const [offersDescription, setOffersDescription] = useState(
    "We don't just hold memberships; we hold leadership positions. Driving the narrative for Tech, Agro, and Infrastructure in Bangladesh.",
  );
  const [cultureTitle, setCultureTitle] = useState("Our Cultural Code");
  const [cultureDescription, setCultureDescription] = useState(
    "5,000+ Minds. 28 Enterprises. One Mission: Engineering the future of Bangladesh for the World.",
  );
  const [easyTitle, setEasyTitle] = useState("Easy Ways to Launch Your Career");
  const [easyDescription, setEasyDescription] = useState(
    "Kickstart your career with just a few easy steps and apply seamlessly",
  );
  const [easyImage, setEasyImage] = useState("");
  const [heroMedia, setHeroMedia] = useState("");
  const [heroMediaType, setHeroMediaType] = useState("image");
  const [lifeImages, setLifeImages] = useState(DEFAULT_LIFE_IMAGES);
  const [benefitsCards, setBenefitsCards] = useState(DEFAULT_BENEFITS);
  const [cultureCodes, setCultureCodes] = useState(DEFAULT_CULTURE_CODES);
  const [cultureMedia, setCultureMedia] = useState("");
  const [cultureMediaType, setCultureMediaType] = useState("image");
  const [easySteps, setEasySteps] = useState([
    {
      id: 1,
      number: "01",
      title: "Create your profile",
      description:
        "Upload your resume or build your professional profile in minutes.",
    },
    {
      id: 2,
      number: "02",
      title: "Browse opportunities",
      description: "Explore thousands of jobs from various industries.",
    },
    {
      id: 3,
      number: "03",
      title: "Apply with one click",
      description:
        "Send your application for your dream job quickly and easily.",
    },
  ]);

  // Sync CMS Content
  useEffect(() => {
    if (
      cmsContent &&
      typeof cmsContent === "object" &&
      !Array.isArray(cmsContent)
    ) {
      if (cmsContent.hero_label) setHeroLabel(cmsContent.hero_label);
      if (cmsContent.hero_title) setHeroTitle(cmsContent.hero_title);
      if (cmsContent.hero_description)
        setHeroDescription(cmsContent.hero_description);
      if (cmsContent.life_title) setLifeTitle(cmsContent.life_title);
      if (cmsContent.life_description)
        setLifeDescription(cmsContent.life_description);
      if (cmsContent.benefits_title)
        setBenefitsTitle(cmsContent.benefits_title);
      if (cmsContent.benefits_description)
        setBenefitsDescription(cmsContent.benefits_description);
      if (cmsContent.offers_title) setOffersTitle(cmsContent.offers_title);
      if (cmsContent.offers_description)
        setOffersDescription(cmsContent.offers_description);
      if (cmsContent.culture_title) setCultureTitle(cmsContent.culture_title);
      if (cmsContent.culture_description)
        setCultureDescription(cmsContent.culture_description);
      if (cmsContent.easy_title) setEasyTitle(cmsContent.easy_title);
      if (cmsContent.easy_description)
        setEasyDescription(cmsContent.easy_description);
      if (cmsContent.easy_image) setEasyImage(cmsContent.easy_image);
      if (cmsContent.hero_media) setHeroMedia(cmsContent.hero_media);
      if (cmsContent.hero_media_type)
        setHeroMediaType(cmsContent.hero_media_type);
      if (cmsContent.life_images) setLifeImages(cmsContent.life_images);
      if (cmsContent.benefits_cards)
        setBenefitsCards(cmsContent.benefits_cards);
      if (cmsContent.culture_codes) setCultureCodes(cmsContent.culture_codes);
      if (cmsContent.culture_media) setCultureMedia(cmsContent.culture_media);
      if (cmsContent.culture_media_type)
        setCultureMediaType(cmsContent.culture_media_type);
      if (cmsContent.easy_steps) setEasySteps(cmsContent.easy_steps);
    }
  }, [cmsContent]);

  useEffect(() => {
    const fetchOffersData = async () => {
      try {
        const baseUrl =
          process.env.NEXT_PUBLIC_PAGE_DATA_API ||
          "https://betopiagroup-dashboard.vercel.app/api";

        // Ensure we have an absolute URL for client-side fetch reliability
        const normalizedBaseUrl = baseUrl.startsWith("/")
          ? window.location.origin + baseUrl
          : baseUrl;

        // 1. Fetch Categories separately as per SRS
        const catRes = await fetch(
          `${normalizedBaseUrl}/corporate-offers/categories/`,
        );
        if (catRes.ok) {
          const catResult = await catRes.json();
          if (catResult?.success && catResult?.data) {
            setCorporateCategories(catResult.data);
          }
        }

        // 2. Fetch all offers (default behavior for main page)
        const res = await fetch(`${normalizedBaseUrl}/corporate-offers/`);
        if (!res.ok) {
          console.warn(
            `Corporate offers API failed with status: ${res.status}`,
          );
          return;
        }

        const contentType = res.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
          console.warn("Corporate offers API returned non-JSON response");
          return;
        }

        const result = await res.json();
        if (result?.success) {
          setOffers(result.data || []);
          // Fallback categories if dedicated endpoint failed or if already provided
          if (result?.categories) {
            setCorporateCategories((prev) =>
              prev && prev.length > 0 ? prev : result.categories,
            );
          }
        }
      } catch (error) {
        console.error("Error fetching corporate offers:", error);
      }
    };
    fetchOffersData();
  }, []);

  const filteredJobs = jobs.filter((job) => {
    const matchCategory =
      activeCategory === "All" || job.department === activeCategory;
    const searchLower = searchQuery.toLowerCase();
    const matchSearch =
      !searchQuery ||
      (job.title && job.title.toLowerCase().includes(searchLower)) ||
      (job.department && job.department.toLowerCase().includes(searchLower)) ||
      (job.location && job.location.toLowerCase().includes(searchLower)) ||
      (job.summary && job.summary.toLowerCase().includes(searchLower));

    return matchCategory && matchSearch;
  });

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="pt-16 md:pt-20" suppressHydrationWarning>
      {/* ══════════ DESKTOP HERO ══════════ */}
      <main className="hidden md:flex relative w-full min-h-[60vh] lg:min-h-[90vh] flex-col justify-center overflow-hidden py-0">
        <div className="absolute inset-0 z-0 bg-gray-100">
          {heroMediaType === "video" && heroMedia ? (
            <video
              src={heroMedia}
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
          ) : heroMedia ? (
            <Image
              src={heroMedia}
              alt="Career Hero Background"
              fill
              className="object-cover object-center"
              priority
              sizes="100vw"
            />
          ) : (
            <div className="w-full h-full bg-[#f0f0f0]" />
          )}
          {/* White Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
        </div>
        <div className="container mx-auto px-8 lg:px-0 relative z-20 text-gray-700">
          <div className="w-full text-left max-w-3xl">
            <h1 className="text-4xl lg:text-6xl font-semibold mb-4 leading-[1.1] text-[#0B1B32]">
              {heroTitle}
            </h1>
            <p className="text-gray-600 text-lg mb-10 leading-relaxed">
              {heroDescription}
            </p>
            <a
              href="#openJobs"
              className="inline-flex items-center w-fit justify-between px-8 py-4 bg-white text-black border border-black hover:border-brand-bright-orange rounded-full font-medium hover:bg-brand-bright-orange hover:text-white transition-all group"
            >
              View Open Positions
              <ArrowRight className="ml-4 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </main>

      {/* ══════════ MOBILE HERO ══════════ */}
      <main className="md:hidden flex flex-col w-full bg-white relative">
        {/* Text Section (Top) */}
        <div className="px-4 pt-20 pb-8 flex flex-col items-start text-gray-700 bg-white relative z-20">
          <h1 className="text-3xl sm:text-4xl font-semibold mb-4 leading-[1.1] text-[#0B1B32]">
            {heroTitle}
          </h1>
          <p className="text-gray-600 text-sm sm:text-base mb-8 leading-relaxed">
            {heroDescription}
          </p>
          <a
            href="#openJobs"
            className="inline-flex items-center justify-between px-6 py-4 bg-white text-black border border-black hover:border-brand-bright-orange rounded-full font-medium hover:bg-brand-bright-orange hover:text-white transition-all group"
          >
            View Open Positions
            <ArrowRight className="ml-4 w-5 h-5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {/* Image Section (Bottom) */}
        <div className="relative w-full h-[25vh] min-h-[350px]">
          {heroMediaType === "video" && heroMedia ? (
            <video
              src={heroMedia}
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover object-right"
            />
          ) : heroMedia ? (
            <Image
              src={heroMedia}
              alt="Career Hero Background"
              fill
              className="object-cover object-right"
              priority
              sizes="100vw"
            />
          ) : (
            <div className="w-full h-full bg-[#f0f0f0]" />
          )}
          {/* Subtle top fade to blend smoothly with the white text section above */}
          <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-white to-transparent z-10" />
        </div>
      </main>

      {/* LIFE AT BETOPIA */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16 max-w-5xl mx-auto">
            <h2 className="text-[1.5rem] md:text-[2.5rem] font-semibold text-gray-700 mb-2">
              {lifeTitle}
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed font-medium">
              {lifeDescription}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {lifeImages.map((img, idx) => {
              const isBig = idx % 3 !== 1;
              const colSpan =
                idx === 0 || idx === 3 ? "md:col-span-8" : "md:col-span-4";
              return (
                <div
                  key={img.id || idx}
                  className={`relative h-[300px] md:h-[400px] rounded-[40px] overflow-hidden bg-gray-200 ${colSpan}`}
                >
                  {img.imageUrl ? (
                    <Image
                      src={img.imageUrl}
                      alt={`Life at Betopia ${idx + 1}`}
                      fill
                      className="object-cover transition-transform hover:scale-105 duration-500"
                      sizes="(max-width: 768px) 100vw, 66vw"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                      Life at Betopia
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY PROFESSIONALS CHOOSE BETOPIA */}
      <section className="bg-white py-24 px-6 md:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#0B1B32]">
              Why Professionals Choose Betopia
            </h2>
          </div>

          {/* Desktop Version: Grid (hidden on mobile, grid on md+) */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {chooseReasons.map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#F8FAFC] p-10 rounded-[32px] hover:shadow-xl transition-all group border border-slate-100"
              >
                <div className="w-16 h-16 bg-[#FFF3EA] rounded-2xl flex items-center justify-center mb-8 group-hover:bg-brand-bright-orange transition-colors">
                  <card.icon className="w-8 h-8 text-brand-bright-orange group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-bold text-[#0B1B32] mb-4">
                  {card.title}
                </h3>
                <p className="text-slate-500 leading-relaxed text-lg">
                  {card.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Mobile Version: Swiper Carousel (block on mobile, hidden on md+) */}
          <div className="block md:hidden career-choose-swiper mt-4">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={20}
              slidesPerView={1.15}
              centeredSlides={false}
              loop={true}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
              }}
              className="pb-4"
            >
              {chooseReasons.map((card, idx) => (
                <SwiperSlide key={idx} className="!h-auto flex">
                  <div className="bg-[#F8FAFC] p-8 rounded-[24px] border border-slate-100 h-full flex flex-col min-h-[250px] w-full">
                    <div className="w-14 h-14 bg-[#FFF3EA] rounded-xl flex items-center justify-center mb-6">
                      <card.icon className="w-7 h-7 text-brand-bright-orange" />
                    </div>
                    <h3 className="text-xl font-bold text-[#0B1B32] mb-3">
                      {card.title}
                    </h3>
                    <p className="text-slate-500 leading-relaxed text-md">
                      {card.desc}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* TECH PROFESSIONALS DASHBOARD */}
      <section className="bg-white py-24 px-6 md:px-8">
        <div className="container mx-auto">
          {/* Section Header */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-10 gap-8">
            <div className="max-w-2xl">
              <span className="text-[#FF8F3D] font-medium text-sm mb-2 block  tracking-wider">
                Where Our Strength Meets Your Ambition
              </span>
              <h2 className="text-3xl md:text-5xl font-semibold text-[#0B1B32] leading-tight">
                Experienced global{" "}
                <span className="text-[#FF8F3D]">tech professionals</span>
              </h2>
            </div>
            <div className="flex flex-col items-start lg:items-end">
              <span className="text-4xl md:text-6xl font-bold text-[#FF8F3D]">
                5,000+
              </span>
              <span className="text-sm font-semibold text-gray-700  tracking-widest mt-1">
                Professionals On Tap
              </span>
            </div>
          </div>

          {/* Professionals Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {techProfData.map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-6 rounded-2xl border border-transparent hover:border-brand-bright-orange/30 hover:bg-white hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-[#FF8F3D] rounded-lg flex items-center justify-center text-white font-bold text-[10px]">
                    {card.isText ? card.icon : <card.icon size={20} />}
                  </div>
                  <h3 className="text-lg font-bold text-[#0B1B32] leading-tight">
                    {card.title}
                  </h3>
                </div>
                <div className="space-y-2">
                  {card.items.map((item, i) => (
                    <div key={i} className="flex items-baseline gap-4">
                      <span className="text-lg font-bold text-[#FF8F3D] shrink-0">
                        {item.num}
                      </span>
                      <span className="text-slate-600 font-medium text-sm leading-tight">
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════ VOICES FROM THE TEAM ═══════════════════════ */}
      <section className="py-20 md:py-28 bg-gray-100">
        <div className="container mx-auto px-4 md:px-4 lg:px-0">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-4xl font-semibold text-gray-700 mb-4 tracking-tight">
              Voices from the Team
            </h2>
          </div>

          <div className="relative">
            <Swiper
              modules={[Autoplay, Pagination, Navigation]}
              spaceBetween={30}
              slidesPerView={1}
              loop={true}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              pagination={false}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 4 },
              }}
              className="team-swiper"
            >
              {teamTestimonials.map((t, idx) => (
                <SwiperSlide key={idx} className="!h-auto flex">
                  <div className="bg-white p-8 rounded-3xl transition-all duration-500 h-full flex flex-col relative group w-full">
                    <div className="absolute top-6 right-8 text-brand-bright-orange/10 group-hover:text-brand-bright-orange/20 transition-colors">
                      <Quote size={48} />
                    </div>

                    <p className="text-gray-600 italic mb-8 relative z-10 leading-relaxed text-[16px]">
                      "{t.quote}"
                    </p>

                    <div className="mt-auto flex items-center gap-4 border-t border-gray-50 pt-6">
                      <div className="w-14 h-14 rounded-2xl overflow-hidden shrink-0 border-2 border-white shadow-md group-hover:scale-105 transition-transform duration-500">
                        <img
                          src={t.image}
                          alt={t.name}
                          className="w-full h-full object-cover object-top"
                          onError={(e) => {
                            e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(t.name)}&background=ff6b00&color=fff&size=128`;
                          }}
                        />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-base mb-0.5">
                          {t.name}
                        </h4>
                        <p className="text-brand-bright-orange font-medium text-xs tracking-wider uppercase">
                          {t.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* BENEFITS & OFFERS TABBED SECTION */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 md:px-8">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-6 gap-8">
            <div>
              <h2 className="text-[1.5rem] md:text-[2.5rem] font-semibold text-black mb-2">
                {benefitsTitle}
              </h2>
              <p className="text-black/70 text-base md:text-lg leading-relaxed font-medium max-w-xl">
                {benefitsDescription}
              </p>
            </div>

            {/* Show Navigation Arrows when Corporate Tab is active */}
            {activeTab === "corporate" && (
              <div className="flex items-center gap-4 shrink-0">
                <button
                  onClick={() => scroll("left")}
                  className="w-12 h-12 rounded-full border border-gray-200 bg-white flex items-center justify-center hover:bg-gray-100 transition-colors"
                >
                  <ArrowLeft className="w-5 h-5 text-gray-400" />
                </button>
                <button
                  onClick={() => scroll("right")}
                  className="w-12 h-12 rounded-full bg-black flex items-center justify-center hover:bg-gray-800 transition-colors"
                >
                  <ArrowRight className="w-5 h-5 text-white" />
                </button>
              </div>
            )}
          </div>

          {/* Tab Navigation */}
          <div className="flex items-center gap-2 mb-8">
            <button
              onClick={() => setActiveTab("facility")}
              className={`relative px-6 md:px-8 py-3 rounded-full text-sm md:text-base font-semibold transition-all duration-400 ${activeTab === "facility"
                ? "bg-black text-white shadow-lg shadow-black/20"
                : "bg-white text-gray-600 border border-gray-200 hover:border-gray-400 hover:text-black"
                }`}
            >
              Facility Benefits
            </button>
            <button
              onClick={() => setActiveTab("corporate")}
              className={`relative px-6 md:px-8 py-3 rounded-full text-sm md:text-base font-semibold transition-all duration-400 ${activeTab === "corporate"
                ? "bg-black text-white shadow-lg shadow-black/20"
                : "bg-white text-gray-600 border border-gray-200 hover:border-gray-400 hover:text-black"
                }`}
            >
              Corporate Benefits
            </button>
          </div>

          {/* Tab Content */}
          <div className="relative min-h-[300px]">
            {/* Facility Benefits Tab */}
            <div
              className={`transition-all duration-500 ${activeTab === "facility"
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4 absolute inset-0 pointer-events-none"
                }`}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {benefitsCards.map((benefit, index) => {
                  return (
                    <div
                      key={index}
                      className="group flex flex-col w-full bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-500 border border-gray-100 h-full"
                    >
                      <div className="relative h-[250px] w-full overflow-hidden bg-gray-100">
                        {benefit.image ? (
                          <Image
                            src={benefit.image}
                            alt={benefit.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-gray-400">
                            Benefit
                          </div>
                        )}
                      </div>
                      <div className="p-6 md:p-8 flex flex-col grow bg-white">
                        <h3 className="text-xl md:text-2xl font-semibold mb-3 text-black hover:text-orange-600 transition-colors duration-300">
                          {benefit.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Corporate Benefits Tab */}
            <div
              className={`transition-all duration-500 ${activeTab === "corporate"
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4 absolute inset-0 pointer-events-none"
                }`}
            >
              <div
                ref={scrollContainerRef}
                className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-8 pb-4"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              >
                {(() => {
                  const displayCats =
                    corporateCategories.length > 0
                      ? corporateCategories
                      : [
                        ...new Set(
                          offers.map((o) => o.category).filter(Boolean),
                        ),
                      ].map((cat) => ({ name: cat }));

                  return displayCats.map((catObj, index) => {
                    const catName = catObj.name || catObj;
                    const catOffers = offers.filter(
                      (o) => o.category === catName,
                    );

                    const representativeImage =
                      catObj.image || catOffers[0]?.image || "";

                    return (
                      <Link
                        key={catName || index}
                        href={`/career/offers/category/${encodeURIComponent(catName)}`}
                        className="group cursor-pointer min-w-[300px] md:min-w-[400px] snap-start"
                      >
                        <div className="relative h-[300px] mb-6 overflow-hidden rounded-2xl bg-gray-100">
                          {representativeImage ? (
                            <Image
                              src={representativeImage}
                              alt={catName}
                              fill
                              className="object-cover transition-transform duration-700 group-hover:scale-105"
                              sizes="(max-width: 768px) 300px, 400px"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-gray-400">
                              Offers
                            </div>
                          )}
                        </div>
                        <h3 className="text-lg font-medium text-black group-hover:underline decoration-1 underline-offset-4 mb-2 group-hover:text-orange-600 transition-colors duration-300">
                          {catName}
                        </h3>
                        <p className="text-sm text-gray-500 line-clamp-2">
                          {catOffers.length}{" "}
                          {catOffers.length === 1 ? "Offer" : "Offers"}{" "}
                          Available
                        </p>
                      </Link>
                    );
                  });
                })()}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CULTURAL CODE */}
      <section className="bg-gradient-to-b from-[#CCFBF1] to-white py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16">
            <h2 className="text-[1.5rem] md:text-[2.5rem] font-semibold text-black mb-4 md:mb-0 text-center md:text-left">
              {cultureTitle}
            </h2>
            <p className="text-black/70 max-w-xl text-lg font-medium text-center md:text-right">
              {cultureDescription}
            </p>
          </div>
          {(() => {
            const leftCodes = cultureCodes.slice(0, 2);
            const rightCodes = cultureCodes.slice(2, 4);
            return (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                <div className="space-y-8">
                  {leftCodes.map((code) => {
                    const IconComp = CAREER_ICON_MAP[code.icon] || Hourglass;
                    return (
                      <div
                        key={code.id}
                        className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                      >
                        <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mb-6">
                          <IconComp className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-xl font-semibold text-black mb-3">
                          {code.title}
                        </h3>
                        <p className="text-gray-500 text-sm leading-relaxed">
                          {code.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
                <div className="flex justify-center h-full">
                  <div className="relative w-full h-[500px] md:h-full rounded-xl overflow-hidden shadow-2xl">
                    {cultureMediaType === "video" && cultureMedia ? (
                      <video
                        src={cultureMedia}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    ) : cultureMedia ? (
                      <Image
                        src={cultureMedia}
                        alt="Cultural Code"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-teal-100 to-teal-200 flex items-center justify-center text-teal-400">
                        Culture
                      </div>
                    )}
                  </div>
                </div>
                <div className="space-y-8">
                  {rightCodes.map((code) => {
                    const IconComp =
                      CAREER_ICON_MAP[code.icon] || ClipboardCheck;
                    return (
                      <div
                        key={code.id}
                        className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                      >
                        <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mb-6">
                          <IconComp className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-xl font-semibold text-black mb-3">
                          {code.title}
                        </h3>
                        <p className="text-gray-500 text-sm leading-relaxed">
                          {code.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })()}
        </div>
      </section>

      {/* APPLICATION PROCESS */}
      <section className="bg-white pb-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="relative rounded-2xl overflow-hidden min-h-[600px] flex items-center">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              {(easyImage || "/career_app_process.png") && (
                <Image
                  src={easyImage || "/career_app_process.png"}
                  alt="Working at Betopia"
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
              )}
              {/* Gradient Overlay: Left to Right Transparent */}
              <div className="absolute inset-0 bg-gradient-to-r from-slate-800 via-slate-800 md:via-slate-700 to-transparent" />
            </div>

            <div className="relative z-10 w-full lg:w-3/5 p-6 md:p-12 lg:p-20 flex flex-col justify-center">
              <h2 className="text-[1.5rem] md:text-[2.5rem] font-semibold text-white mb-2 leading-tight">
                {easyTitle}
              </h2>
              <p className="text-gray-300 text-base md:text-lg mb-12 max-w-md">
                {easyDescription}
              </p>
              <div className="space-y-8 md:space-y-10">
                {easySteps.map((step, idx) => (
                  <div
                    key={step.id || step.number}
                    className="flex gap-4 md:gap-6 items-start"
                  >
                    <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full border border-gray-600 flex items-center justify-center text-white font-medium text-sm bg-white/5 backdrop-blur-sm">
                      {step.number || String(idx + 1).padStart(2, "0")}
                    </div>
                    <div>
                      <h3 className="text-white text-lg md:text-xl font-semibold mb-2">
                        {step.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed text-sm md:text-base max-w-sm">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* JOB OPPORTUNITIES */}
      <section id="openJobs" className="bg-white py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col items-center text-center mb-16">
            <span className="inline-block px-4 py-2 bg-[#FF8F3D] text-white rounded-full text-sm font-medium mb-6">
              Explore Jobs
            </span>
            <h2 className="text-[1.5rem] md:text-[2.5rem] font-semibold text-black mb-6">
              Discover Job Opportunities
            </h2>
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 w-full max-w-3xl mx-auto">
              {/* Search Box */}
              <div className="relative w-full md:w-1/2">
                <input
                  type="text"
                  placeholder="Search for jobs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:border-black transition-all bg-white text-black"
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              </div>

              {/* Category Dropdown */}
              {categories.length > 0 && (
                <div className="relative w-full md:w-1/2">
                  <select
                    value={activeCategory}
                    onChange={(e) => setActiveCategory(e.target.value)}
                    className="w-full pl-6 pr-12 py-3 rounded-full border border-gray-300 focus:outline-none focus:border-black transition-all bg-white text-black appearance-none cursor-pointer"
                  >
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                </div>
              )}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredJobs.length > 0 ? (
              filteredJobs.slice(0, 6).map((job, index) => {
                const softColors = [
                  "bg-blue-50/50 border-blue-100",
                  "bg-purple-50/50 border-purple-100",
                  "bg-emerald-50/50 border-emerald-100",
                  "bg-rose-50/50 border-rose-100",
                  "bg-amber-50/50 border-amber-100",
                  "bg-indigo-50/50 border-indigo-100",
                ];
                const cardColor = softColors[index % softColors.length];

                return (
                  <motion.div
                    key={job.id || index}
                    whileHover={{ y: -8, scale: 1.01 }}
                    className={`relative ${cardColor} group p-8 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 h-full flex flex-col border hover:border-transparent`}
                  >
                    {/* Content Container */}
                    <div className="relative z-10 flex flex-col h-full">
                      <h3 className="text-xl font-bold text-gray-800 mb-3 transition-colors duration-300">
                        {job.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-4 text-gray-400 text-xs mb-4 transition-colors duration-300">
                        {job.location && (
                          <span className="inline-flex items-center">
                            <MapPin className="w-3.5 h-3.5 mr-1.5" />
                            {job.location}
                          </span>
                        )}
                        {job.department && (
                          <span className="inline-flex items-center">
                            <Building2 className="w-3.5 h-3.5 mr-1.5" />
                            {job.department}
                          </span>
                        )}
                        {job.vacancies && (
                          <span className="inline-flex items-center">
                            <Users className="w-3.5 h-3.5 mr-1.5" />
                            {job.vacancies}{" "}
                            {job.vacancies === 1 ? "Vacancy" : "Vacancies"}
                          </span>
                        )}
                      </div>
                      <p className="text-gray-500 text-sm mb-8 line-clamp-3 leading-relaxed transition-colors duration-300">
                        {getSummary(job)}
                      </p>
                      <div className="mt-auto flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
                        <div className="flex flex-wrap gap-2">
                          {job.tags &&
                            job.tags.map((tag, i) => (
                              <span
                                key={i}
                                className="px-3 py-1.5 bg-gray-100 text-gray-600 text-[11px] font-bold uppercase tracking-wider rounded-lg transition-all duration-300"
                              >
                                {tag}
                              </span>
                            ))}
                        </div>
                        <motion.div
                          animate={{ scale: [1, 1.02, 1] }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        >
                          <Link
                            href={`/career/${job.id}`}
                            className="relative overflow-hidden inline-flex items-center px-6 py-2.5 bg-white text-gray-800 group-hover:bg-brand-bright-orange group-hover:text-white text-sm rounded-xl border border-gray-100 group-hover:shadow-[0_0_20px_rgba(239,139,66,0.4)] transition-all duration-500"
                          >
                            {/* Shiny Shine Effect */}
                            <div className="absolute inset-0 w-full h-full bg-linear-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-shimmer" />

                            <span className="relative z-10 font-bold">
                              View Details
                            </span>
                            <ArrowRight className="relative z-10 w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-2" />
                          </Link>
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                );
              })
            ) : (
              <div className="col-span-full flex flex-col items-center justify-center py-10">
                <p className="text-gray-500 text-lg font-medium">
                  No jobs available in this category.
                </p>
                <p className="text-gray-400 text-sm mt-2">
                  Please check back later for new opportunities.
                </p>
              </div>
            )}
          </div>
          {filteredJobs.length > 0 && (
            <div className="flex justify-center mt-12">
              <Link
                href="https://career.betopiagroup.com/candidate/jobs"
                target="_blank"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-black text-white text-sm font-semibold rounded-full hover:bg-gray-800 transition-all duration-300 hover:shadow-lg"
              >
                View All Jobs
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
