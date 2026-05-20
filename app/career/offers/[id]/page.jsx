import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ExternalLink,
  LayoutGrid,
  MapPin,
  Building2,
  Users,
  Phone,
  Globe,
  Info,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
// Using API instead of direct DB connection

async function getOfferItem(id) {
  try {
    const apiUrl =
      process.env.NEXT_PUBLIC_BACKEND_API_URL ||
      "https://dashboard.betopiagroup.com/api";
    const res = await fetch(`${apiUrl}/corporate-offers/`, {
      next: { revalidate: 0 },
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const contentType = res.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      throw new Error("Received non-JSON response from server");
    }

    const result = await res.json();
    if (!result?.success || !Array.isArray(result.data)) return null;

    // Extract real ID if it's a slugified URL
    const realId = id.split("-").pop();

    return result.data.find((item) => item._id === realId) || null;
  } catch (error) {
    console.error("Error fetching offer details from API:", error);
    return null;
  }
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const offer = await getOfferItem(id);
  return {
    title: offer
      ? `${offer.title || offer.name} - Betopia Offers`
      : "Offer Not Found",
    description: offer ? offer.description : "Offer details not found.",
  };
}

export default async function OfferDetailsPage({ params }) {
  const { id } = await params;
  const offer = await getOfferItem(id);

  if (!offer) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#F4f5f7] selection:bg-[#EF8B42] selection:text-white pb-0">
      {/* Simple Header */}
      <section className="bg-white border-b border-gray-100 pt-32 pb-8">
        <div className="container mx-auto max-w-6xl px-4 md:px-8">
          <Link
            href="/career"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-black transition-colors px-4 py-2 rounded-full border border-gray-200 bg-white shadow-sm font-semibold text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Careers</span>
          </Link>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-12 px-4 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-6 md:gap-10">
            {/* Left Column: Details */}
            <div className="w-full lg:w-2/3 flex flex-col gap-6 md:gap-8">
              {/* Full Image View */}
              <div className="w-full rounded-2xl overflow-hidden shadow-sm border border-gray-100 bg-white">
                <Image
                  src={
                    offer.image ||
                    "https://res.cloudinary.com/dij1tdcai/image/upload/v1777531338/hero_poster_x3q9u0.png"
                  }
                  alt={offer.title || offer.name || "Offer"}
                  width={1200}
                  height={800}
                  priority
                  className="w-full h-auto object-contain"
                />
              </div>

              {/* Header Card */}
              <div className="bg-white rounded-2xl p-6 md:p-10 border border-gray-100">
                <div className="flex flex-col md:flex-row gap-6 items-start md:items-center mb-8">
                  {offer.logo ? (
                    <div className="w-20 h-20 md:w-28 md:h-28 rounded-xl bg-white border border-gray-100 p-2 shrink-0 flex items-center justify-center overflow-hidden shadow-sm">
                      <Image
                        src={offer.logo}
                        alt={`${offer.partner} logo`}
                        width={120}
                        height={120}
                        className="object-contain w-full h-full"
                      />
                    </div>
                  ) : (
                    <div className="w-20 h-20 md:w-28 md:h-28 rounded-lg bg-gradient-to-br from-[#EF8B42]/10 to-[#EF8B42]/5 border border-[#EF8B42]/20 text-[#EF8B42] flex items-center justify-center shrink-0 shadow-sm">
                      <Building2 className="w-8 h-8 md:w-10 md:h-10 opacity-70" />
                    </div>
                  )}

                  <div className="flex-1">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#EF8B42]/10 text-[#EF8B42] text-[11px] font-bold uppercase tracking-wider rounded-md mb-2">
                      <LayoutGrid className="w-3.5 h-3.5" />
                      {offer.category || "Corporate Offer"}
                    </div>
                    <h1 className="text-2xl md:text-3xl font-semibold text-[#111827] leading-[1.15] mb-1">
                      {offer.title || offer.name}
                    </h1>
                    {offer.partner && (
                      <p className="text-md text-gray-600 font-medium flex items-center gap-1">
                        by{" "}
                        <span className="text-gray-600 ">{offer.partner}</span>
                      </p>
                    )}
                  </div>
                </div>

                <div className="w-full h-px bg-gradient-to-r from-gray-200 via-gray-100 to-transparent mb-8" />

                {offer?.description?.trim() && (
                  <div className="prose prose-lg max-w-none text-gray-600">
                    <p className="md:text-lg leading-relaxed whitespace-pre-line font-medium text-gray-700">
                      {offer.description}
                    </p>
                  </div>
                )}
              </div>

              {/* T&C Card */}
              {offer.tnc &&
                offer.tnc.length > 0 &&
                offer.tnc.some((t) => t.trim() !== "") && (
                  <div className="bg-white rounded-[2rem] p-6 md:p-10 border border-gray-100">
                    <div className="flex items-center gap-3 mb-8">
                      <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center border border-amber-100">
                        <AlertCircle className="w-6 h-6 text-amber-500" />
                      </div>
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 leading-tight">
                          Offers
                        </h3>
                        <p className="text-sm text-gray-500 font-medium">
                          Please review before availing
                        </p>
                      </div>
                    </div>
                    <ul className="space-y-4">
                      {offer.tnc
                        .filter((t) => t.trim() !== "")
                        .map((item, index) => (
                          <li
                            key={index}
                            className="flex items-start gap-4 group"
                          >
                            <CheckCircle2 className="w-6 h-6 text-[#EF8B42] shrink-0 mt-0.5 opacity-80 group-hover:opacity-100 transition-opacity" />
                            <span className="text-gray-600 md:text-lg leading-relaxed font-medium">
                              {item}
                            </span>
                          </li>
                        ))}
                    </ul>
                  </div>
                )}
            </div>

            {/* Right Column: Sidebar */}
            <div className="w-full lg:w-1/3">
              <div className="sticky top-36 flex flex-col gap-6 md:gap-8">
                {/* Info Card */}
                <div className="bg-white rounded-[2rem] p-8 border border-gray-100">
                  <h4 className="text-gray-900 font-bold text-xl mb-6 flex items-center gap-2">
                    <Info className="w-5 h-5 text-[#EF8B42]" />
                    Offer Details
                  </h4>

                  <div className="flex flex-col gap-6">
                    {offer.partner && (
                      <div className="flex items-start gap-4 outline outline-1 outline-gray-100 bg-gray-50/50 p-4 rounded-2xl">
                        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 border border-gray-100">
                          <Building2 className="w-4 h-4 text-gray-600" />
                        </div>
                        <div>
                          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">
                            Partner
                          </p>
                          <p className="text-gray-900 font-semibold">
                            {offer.partner}
                          </p>
                        </div>
                      </div>
                    )}

                    {offer.location && (
                      <div className="flex items-start gap-4 outline outline-1 outline-gray-100 bg-gray-50/50 p-4 rounded-2xl">
                        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 border border-gray-100">
                          <MapPin className="w-4 h-4 text-gray-600" />
                        </div>
                        <div>
                          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">
                            Location
                          </p>
                          <p className="text-gray-900 font-semibold">
                            {offer.location}
                          </p>
                        </div>
                      </div>
                    )}

                    {offer.applicability && (
                      <div className="flex items-start gap-4 outline outline-1 outline-gray-100 bg-gray-50/50 p-4 rounded-2xl">
                        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 border border-gray-100">
                          <Users className="w-4 h-4 text-gray-600" />
                        </div>
                        <div>
                          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">
                            Applicability
                          </p>
                          <p className="text-gray-900 font-semibold">
                            {offer.applicability}
                          </p>
                        </div>
                      </div>
                    )}

                    {offer.hotline && (
                      <div className="flex items-start gap-4 outline outline-1 outline-gray-100 bg-[#EF8B42]/5 p-4 rounded-2xl">
                        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 border border-[#EF8B42]/20">
                          <Phone className="w-4 h-4 text-[#EF8B42]" />
                        </div>
                        <div>
                          <p className="text-[10px] font-bold text-[#EF8B42]/70 uppercase tracking-widest mb-1">
                            Hotline
                          </p>
                          <p className="text-gray-900 font-semibold">
                            {offer.hotline}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Actions Card */}
                {offer.website && (
                  <div className="bg-gradient-to-br from-gray-900 to-[#1a1a1a] rounded-[2rem] p-8 shadow-2xl shadow-gray-900/20 border border-gray-800 text-center relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-8 opacity-5">
                      <Globe className="w-32 h-32" />
                    </div>
                    <div className="relative z-10 w-16 h-16 mx-auto bg-gray-800 rounded-2xl border border-gray-700 flex items-center justify-center mb-6 shadow-inner">
                      <Globe className="w-8 h-8 text-white/80" />
                    </div>
                    <h4 className="text-white font-bold text-xl mb-3">
                      Visit Partner
                    </h4>
                    <p className="text-gray-400 text-sm mb-8 leading-relaxed">
                      Head over to the official website for redemptions or more
                      details.
                    </p>
                    <a
                      href={offer.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-full gap-2 px-6 py-4 bg-white text-black rounded-xl font-bold hover:bg-[#EF8B42] hover:text-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                    >
                      Explore Website
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                )}

                {!offer.website && (
                  <div className="bg-gradient-to-br from-gray-100 to-gray-50 rounded-[2rem] p-8 text-center border border-gray-200/60 shadow-inner">
                    <div className="w-12 h-12 mx-auto bg-white rounded-full flex items-center justify-center mb-4 shadow-sm text-gray-400">
                      <Info className="w-5 h-5" />
                    </div>
                    <p className="text-gray-500 text-sm font-medium leading-relaxed">
                      For redemption or more details, please contact HR or refer
                      to your internal portal.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
