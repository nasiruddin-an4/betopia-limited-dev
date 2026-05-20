"use client";

import React, { useState, useEffect } from "react";
import {
  Search,
  MapPin,
  Star,
  Settings,
  CheckCircle2,
  Building2,
  Users,
  Briefcase,
  Award,
  ChevronDown,
  User,
  Mail,
  Globe,
  Phone,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import RollingButton from "./RollingButton";

// Extended Mock Data matching the new card structure requirements
export const mockPartners = [
  {
    id: 1,
    name: "Beyond AI",
    logo: "/beyondAiLogo.webp",
    subtitle: "Platinum Partner • 99% Rating",
    description:
      "Transforming Businesses with Intelligent Solutions. Specializing in White-Label & Co-branded software.",
    status: "Platinum",
    country: "Philippines",
    industry: "Science & Technology",
    category: "Platinum",
    logoColor: "text-purple-600",
    rating: 99,
    averageProject: "12",
    largeProject: "150",
    tags: [
      "White-Label & Co-branded",
      "Custom Software",
      "Science & Technology",
    ],
    contactName: "Ronald Vergara",
    email: "ron@beyondai.ph",
    phone: "+1 3128773570",
    address: "Manila, Metropolitan City, Philippines",
    website: "Beyond AI",
    partnership: "White-label & Co-branded",
    references: {
      total: 50000,
      lifeTime: "75",
      breakdown: [{ name: "Science & Technology" }, { name: "Manufacturing" }],
    },
  },
  {
    id: 2,
    name: "ZHB Solutions",
    logo: "/zhbsultion.webp",
    subtitle: "Silver Partner • 95% Rating",
    description:
      "Robust custom software engineering to help agencies scale their technical delivery efficiently under their own brand or co-branded partnerships.",
    status: "Silver",
    country: "United States",
    industry: "Wholesale / Retail",
    category: "Silver",
    logoColor: "text-blue-500",
    rating: 95,
    averageProject: "5",
    largeProject: "0",
    tags: ["White-Label & Co-branded", "Custom Software", "Wholesale / Retail"],
    contactName: "Zahir Haque Bhuiyan",
    email: "zhbsolutionsllc@gmail.com",
    phone: "+1 (404) 936-3567",
    address: "3651 Peachtree PKWY STE.E 116, Suwanee, GA 30024, USA",
    website: "",
    partnership: "White-label & Co-branded",
    references: {
      total: 7000,
      lifeTime: "5",
      breakdown: [{ name: "Wholesale / Retail" }, { name: "Education" }],
    },
  },
  {
    id: 3,
    name: "Shahidul Islam",
    subtitle: "Ready Partner • 94% Rating",
    description:
      "Specialized in delivering high-fidelity White-Label Custom Software architectures. We build scalable backend systems seamlessly integrated under your brand identity.",
    status: "Ready",
    country: "Australia",
    industry: "Education",
    category: "Ready",
    logoColor: "text-emerald-500",
    rating: 94,
    averageProject: "8",
    largeProject: "2",
    tags: ["Co-branded", "Custom Software", "Education"],
    contactName: "Shahidul Islam",
    email: "Shahidul@bdcallingenterprise.com",
    phone: "+61406964454",
    address: "Australia",
    website: "",
    partnership: "White-label",
    references: {
      total: 15000,
      lifeTime: "12",
      breakdown: [{ name: "Education" }, { name: "Finance" }],
    },
  },
  {
    id: 4,
    name: "Mohammad Didar E Rasul",
    subtitle: "Ready Partner • 92% Rating",
    description:
      "Extensive expertise in Co-branded Custom Software, IT Resource Augmentation and providing dedicated Managed Services.",
    status: "Ready",
    country: "Saudi Arabia",
    industry: "Real Estate",
    category: "Ready",
    logoColor: "text-orange-500",
    rating: 92,
    averageProject: "14",
    largeProject: "3",
    tags: ["Co-branded", "Resource Augmentation", "Real Estate"],
    contactName: "Mohammad Didar E Rasul",
    email: "drasul98@gmail.com",
    phone: "+966537620879",
    address: "Saudi Arabia",
    website: "",
    partnership: "Co-branded",
    references: {
      total: 28000,
      lifeTime: "24",
      breakdown: [{ name: "Real Estate" }, { name: "Manufacturing" }],
    },
  },
  {
    id: 5,
    name: "Emdadul Haque",
    subtitle: "Ready Partner • 91% Rating",
    description:
      "Delivering exceptional co-branded custom software and educational technology solutions.",
    status: "Ready",
    country: "United Kingdom",
    industry: "Education",
    category: "Ready",
    logoColor: "text-cyan-500",
    rating: 91,
    averageProject: "6",
    largeProject: "1",
    tags: ["Co-branded", "Custom Software", "Education"],
    contactName: "Emdadul Haque",
    email: "engr.emoncse@yahoo.com",
    phone: "+44 7533 109468",
    address: "United Kingdom",
    website: "",
    partnership: "Co-branded",
    references: {
      total: 9500,
      lifeTime: "8",
      breakdown: [{ name: "Education" }, { name: "Non-Profit" }],
    },
  },
  {
    id: 6,
    name: "Ceaser Walters",
    subtitle: "Ready Partner • 96% Rating",
    description:
      "Specialized in immersive digital solutions and custom software development for modern applications.",
    status: "Ready",
    country: "United States",
    industry: "Science & Technology",
    category: "Ready",
    logoColor: "text-emerald-500",
    rating: 96,
    averageProject: "11",
    largeProject: "2",
    tags: ["Custom Software", "Science & Technology"],
    contactName: "Ceaser Walters",
    email: "aamobassharul@gmail.com",
    phone: "+16314528523",
    address: "499, Grenadol Lane, North Baby Lon, New York, 11703, United States",
    website: "",
    partnership: "White-label",
    references: {
      total: 18500,
      lifeTime: "15",
      breakdown: [{ name: "Science & Technology" }, { name: "Finance" }],
    },
  }
];

export default function FindPartner() {
  const [industry, setIndustry] = useState("All Industries");
  const [category, setCategory] = useState("All Categories");
  const [country, setCountry] = useState("All Countries");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  // Reset to page 1 when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [industry, category, country, searchQuery]);

  // Automatically detect user's country - REMOVED for default 'All Countries' view

  const filteredPartners = mockPartners.filter((partner) => {
    const matchIndustry =
      industry === "All Industries" ||
      partner.industry === industry ||
      (partner.references?.breakdown || []).some((r) =>
        r.name.includes(industry),
      );
    const matchCategory =
      category === "All Categories" || partner.category === category;
    const matchCountry =
      country === "All Countries" || partner.country === country;
    const matchSearch = partner.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    return matchIndustry && matchCategory && matchCountry && matchSearch;
  });

  // Pagination Logic
  const totalPages = Math.ceil(filteredPartners.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedPartners = filteredPartners.slice(
    startIndex,
    startIndex + itemsPerPage,
  );

  return (
    <div className="min-h-screen bg-[#eff3f8] pb-32 relative">
      {/* Hero Header - Modern Betopia UI */}
      <div className="relative pt-36 pb-28 flex flex-col items-center justify-center text-center overflow-hidden bg-[#0A0A0A]">
        {/* Futuristic Grid & Glows */}
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-30 pointer-events-none" />
        <div className="absolute -top-[100px] right-[10%] w-[500px] h-[500px] bg-brand-bright-orange/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[0] left-[20%] w-[300px] h-[300px] bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 pt-10">
          <h1 className="text-5xl md:text-7xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-brand-bright-orange to-orange-300 mb-6 leading-[1.1]">
            Partner with Proven Excellence
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto font-medium leading-relaxed">
            Connect with proven Betopia partners who combine strategic insight
            with execution excellence—so you grow limitless, together.
          </p>
        </div>
      </div>

      {/* Floating Glassmorphism Filter Bar */}
      <div className="container mx-auto px-4 md:px-2 lg:px-0 relative z-30 -mt-10 mb-8">
        <div className="bg-white/90 backdrop-blur-xl border border-gray-200/80 rounded-2xl p-4 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col md:flex-row items-center gap-4">
          <div className="relative w-full md:w-auto md:flex-1">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              type="text"
              placeholder="Search by name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-gray-50/50 hover:bg-gray-50 border border-gray-200 text-sm font-semibold text-brand-black py-3.5 pl-11 pr-4 rounded-xl outline-none focus:ring-2 focus:ring-brand-bright-orange/40 transition-all placeholder:text-gray-400"
            />
          </div>

          <div className="h-10 w-px bg-gray-200 hidden md:block"></div>

          <div className="flex flex-wrap w-full md:w-auto gap-3">
            <div className="relative flex-1 sm:w-[150px]">
              <select
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
                className="appearance-none w-full bg-gray-50/50 hover:bg-gray-50 border border-gray-200 text-sm font-semibold text-brand-black py-3.5 pl-4 pr-10 rounded-xl outline-none focus:ring-2 focus:ring-brand-bright-orange/40 transition-all cursor-pointer"
              >
                <option>All Industries</option>
                <option>Wholesale / Retail</option>
                <option>Manufacturing</option>
                <option>Science & Technology</option>
                <option>Real Estate</option>
                <option>Finance</option>
                <option>Non-Profit</option>
                <option>Education</option>
              </select>
              <ChevronDown
                size={16}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"
              />
            </div>

            <div className="relative flex-1 sm:w-[150px]">
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="appearance-none w-full bg-gray-50/50 hover:bg-gray-50 border border-gray-200 text-sm font-semibold text-brand-black py-3.5 pl-4 pr-10 rounded-xl outline-none focus:ring-2 focus:ring-brand-bright-orange/40 transition-all cursor-pointer"
              >
                <option>All Categories</option>
                <option>Silver</option>
                <option>Ready</option>
              </select>
              <ChevronDown
                size={16}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"
              />
            </div>

            <div className="relative flex-1 sm:w-[150px]">
              <select
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="appearance-none w-full bg-gray-50/50 hover:bg-gray-50 border border-gray-200 text-sm font-semibold text-brand-black py-3.5 pl-4 pr-10 rounded-xl outline-none focus:ring-2 focus:ring-brand-bright-orange/40 transition-all cursor-pointer"
              >
                <option>All Countries</option>
                <option>Bangladesh</option>
                <option>United States</option>
                <option>Australia</option>
                <option>United Kingdom</option>
                <option>Canada</option>
                <option>Singapore</option>
                <option>Germany</option>
                <option>Ghana</option>
                <option>Austria</option>
                <option>India</option>
                <option>Philippines</option>
              </select>
              <ChevronDown
                size={16}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Partner Grid Area (Light Blue background behind cards) */}
      <div className="container mx-auto px-4 md:px-2 lg:px-0">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-brand-black">
            Find a partner
            {category !== "All Categories" ? ` - ${category}` : ""}
            {country !== "All Countries" ? ` in ${country}` : ""}
          </h2>
          <span className="bg-white border border-gray-200 text-gray-600 px-3 py-1 rounded-md text-xs font-bold tracking-wider shadow-sm">
            {filteredPartners.length} RESULT
            {filteredPartners.length !== 1 && "S"}
          </span>
        </div>

        {filteredPartners.length === 0 ? (
          <div className="text-center py-32 bg-white rounded-3xl border border-dashed border-gray-300">
            <Search size={48} className="mx-auto text-gray-300 mb-4" />
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              No partners found
            </h3>
            <p className="text-gray-500 mb-6">
              Try adjusting your filters to see more results.
            </p>
            <button
              onClick={() => {
                setIndustry("All Industries");
                setCategory("All Categories");
                setCountry("All Countries");
                setSearchQuery("");
              }}
              className="bg-brand-black hover:bg-black text-white px-6 py-2.5 rounded-lg font-bold text-sm transition-all"
            >
              Clear All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 gap-6">
            {paginatedPartners.map((partner) => (
              <div
                key={partner.id}
                className="bg-white rounded-xl border border-gray-200 p-6 flex flex-col"
              >
                {/* Header: Logo + Title/Subtitle (Side-by-side flex) */}
                <div className="flex items-center gap-4 mb-5">
                  <div
                    className={`w-[60px] h-[60px] rounded-full border border-gray-100 flex items-center justify-center shrink-0 overflow-hidden shadow-sm relative ${partner.logo ? 'bg-[#04060e]' : 'bg-white'}`}
                  >
                    <img
                      src={
                        partner.logo ||
                        `https://ui-avatars.com/api/?name=${encodeURIComponent(
                          partner.name
                        )}&background=random&color=fff&size=128&bold=true`
                      }
                      alt={partner.name}
                      className={partner.logo ? "w-[80%] h-[80%] object-contain" : "w-full h-full object-cover"}
                    />
                  </div>
                  <div>
                    <h3 className="text-[17px] font-bold text-gray-900 leading-tight">
                      {partner.name}
                    </h3>
                    <p className="text-[13px] text-gray-500 font-medium mt-1">
                      {partner.subtitle}
                    </p>
                  </div>
                </div>

                {/* Description Paragraph */}
                {/* <div className="mb-4 flex-1 text-[13.5px] text-gray-600 leading-relaxed font-medium">
                  {partner.description.split("\n").map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      {i < partner.description.split("\n").length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </div> */}

                {/* Embedded Stats Banner */}
                <div className="grid grid-cols-2 gap-3 mb-6 bg-gray-50/70 border border-gray-100 rounded-lg p-3">
                  <div className="flex flex-col justify-center">
                    <span className="text-sm font-bold text-gray-900 leading-none mb-1.5">
                      {partner.averageProject} +
                    </span>
                    <span className="text-[10px] uppercase text-gray-500 font-semibold tracking-wide">
                      Total Projects
                    </span>
                  </div>
                  <div className="flex flex-col justify-center">
                    <span className="text-sm font-bold text-gray-900 leading-none mb-1.5">
                      ${partner.references.total}k+
                    </span>
                    <span className="text-[10px] uppercase text-gray-500 font-semibold tracking-wide">
                      Approx. Amount
                    </span>
                  </div>
                  <div className="flex flex-col justify-center">
                    <span className="text-sm font-bold text-gray-900 leading-none mb-1.5">
                      ${partner.references.lifeTime}M+
                    </span>
                    <span className="text-[10px] uppercase text-gray-500 font-semibold tracking-wide">
                      Lifetime Amount
                    </span>
                  </div>
                  <div className="flex flex-col justify-center">
                    <div className="flex items-center gap-1 mb-1">
                      <MapPin size={13} className="text-gray-500 shrink-0" />
                      <span className="text-sm font-bold text-gray-900 leading-none truncate">
                        {partner.country}
                      </span>
                    </div>
                  </div>
                </div>



                {/* Contact & Service Info */}
                <div className="mb-6 border-t border-gray-100 pt-4 space-y-2.5">
                  <div className="flex items-center gap-2 text-[13px] text-gray-600 font-medium">
                    <User size={15} className="text-gray-400 shrink-0" />
                    <span className="truncate">{partner.contactName}</span>
                  </div>
                  {partner.email && (
                    <div className="flex items-center gap-2 text-[13px] text-gray-600 font-medium">
                      <Mail size={15} className="text-gray-400 shrink-0" />
                      <a href={`mailto:${partner.email}`} className="text-brand-bright-orange hover:underline truncate">
                        {partner.email}
                      </a>
                    </div>
                  )}
                  {partner.phone && (
                    <div className="flex items-center gap-2 text-[13px] text-gray-600 font-medium">
                      <Phone size={15} className="text-gray-400 shrink-0" />
                      <a href={`tel:${partner.phone}`} className="hover:underline truncate">
                        {partner.phone}
                      </a>
                    </div>
                  )}
                  {partner.address && (
                    <div className="flex items-start gap-2 text-[13px] text-gray-600 font-medium">
                      <MapPin size={15} className="text-gray-400 shrink-0 mt-0.5" />
                      <span className="leading-snug">{partner.address}</span>
                    </div>
                  )}
                  <div className="flex items-start gap-2 text-[13px] text-gray-600 font-medium mt-1">
                    <Briefcase
                      size={15}
                      className="text-gray-400 shrink-0 mt-0.5"
                    />
                    <span className="leading-snug">{partner.partnership}</span>
                  </div>
                </div>

                {/* Footer Button Action */}
                <Link
                  href="/contact"
                  className="w-full block text-center mt-auto py-2.5 rounded-lg border border-gray-300 font-bold text-[14px] text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Contact
                </Link>
              </div>
            ))}
          </div>
        )}

        {/* Pagination Controls */}
        {filteredPartners.length > itemsPerPage && (
          <div className="mt-16 flex items-center justify-center gap-2">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className={`px-4 py-2 rounded-lg font-bold text-sm transition-all border ${currentPage === 1
                ? "bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed"
                : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50"
                }`}
            >
              Previous
            </button>

            {[...Array(totalPages)].map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentPage(idx + 1)}
                className={`w-10 h-10 rounded-lg font-bold text-sm transition-all ${currentPage === idx + 1
                  ? "bg-brand-bright-orange text-white"
                  : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50"
                  }`}
              >
                {idx + 1}
              </button>
            ))}

            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 rounded-lg font-bold text-sm transition-all border ${currentPage === totalPages
                ? "bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed"
                : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50"
                }`}
            >
              Next
            </button>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-24 mb-10 bg-brand-black rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-bright-orange/20 rounded-full blur-[80px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-500/20 rounded-full blur-[80px] pointer-events-none" />
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 relative z-10">
            Want to become a Betopia Partner?
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto relative z-10">
            Join our global ecosystem of certified partners and start delivering world-class AI, cloud, and digital solutions to enterprises worldwide.
          </p>
          <RollingButton text="Become a Partner" link="/partner" btnClass="rounded-lg text-base font-semibold px-8 py-3" />
        </div>
      </div>
    </div>
  );
}
