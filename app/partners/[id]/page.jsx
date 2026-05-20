"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import Image from "next/image";
import {
  ChevronLeft,
  MapPin,
  Phone,
  Globe,
  Mail,
  Star,
  PlayCircle,
  Building2,
  CheckCircle2,
} from "lucide-react";
import { mockPartners } from "../../components/FindPartner";

export default function PartnerDetailsPage() {
  const params = useParams();
  const [isPlaying, setIsPlaying] = useState(false);
  const partnerId = parseInt(params.id);
  const partner = mockPartners.find((p) => p.id === partnerId);

  // If partner is not found, show error state
  if (!partner) {
    return (
      <div className="min-h-screen pt-32 pb-24 text-center bg-gray-50 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Partner Not Found
        </h1>
        <Link
          href="/partners"
          className="text-brand-bright-orange hover:underline font-bold"
        >
          Return to directory
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pb-32">
      {/* Black Hero Container */}
      <div className="bg-brand-black pt-[140px] pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Back Link */}
          <Link
            href="/partners"
            className="inline-flex items-center text-sm font-semibold text-gray-400 hover:text-brand-bright-orange mb-8 transition-colors"
          >
            <ChevronLeft size={16} className="mr-1" /> Back
          </Link>

          {/* Moved Title to Hero */}
          <div className="flex flex-wrap items-center gap-4">
            <h1 className="text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
              {partner.name}
            </h1>
            <span className="bg-white/10 border border-white/20 text-white px-3 py-1 text-sm font-bold rounded shadow-sm">
              Silver
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        {/* 2-Column Layout */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 relative">
          {/* ======================= LEFT SIDEBAR ======================= */}
          <div className="w-full lg:w-[280px] shrink-0 lg:sticky lg:top-[120px] self-start max-h-[calc(100vh-120px)] overflow-y-auto pb-12 scrollbar-hide">
            {/* Logo Box */}
            <div
              className={`border border-gray-200 rounded-lg p-8 mb-6 flex items-center justify-center aspect-square shadow-sm ${partner.logoColor}`}
            >
              <Building2 size={80} strokeWidth={1} />
            </div>

            {/* Contact Info */}
            <div className="space-y-4 text-[13px] text-gray-600 mb-8 pb-8 border-b border-gray-100">
              <div className="flex gap-3">
                <MapPin size={16} className="shrink-0 mt-0.5 text-gray-400" />
                <p className="text-gray-500 text-lg">
                  House-15, Road-06 Block-E, Banasree, Rampura, Dhaka-1219{" "}
                  {partner.country}
                </p>
              </div>
              <div className="flex gap-3 items-center">
                <Phone size={16} className="shrink-0 text-gray-400" />
                <p className="text-gray-500 text-lg">+880 1841-552900</p>
              </div>
              <div className="flex gap-3 items-center">
                <Globe size={16} className="shrink-0 text-gray-400" />
                <p className="text-blue-600 hover:underline cursor-pointer ">
                  {partner.name.toLowerCase().replace(/[^a-z0-9]/g, "")}.com
                </p>
              </div>
              <div className="flex gap-3 items-center">
                <Mail size={16} className="shrink-0 text-gray-400" />
                <p className="text-gray-500 text-lg">
                  contact@{partner.name.toLowerCase().replace(/\\s+/g, "")}.com
                </p>
              </div>
            </div>
            <div>
              <h4 className="text-xs uppercase font-bold text-gray-500 tracking-wider mb-2">
                Customer Retention
              </h4>
              <div className="flex items-center gap-2">
                <span className="text-xl font-black text-gray-900 tracking-tight leading-none">
                  89%
                </span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={
                        i < 4
                          ? "fill-brand-bright-orange text-brand-bright-orange"
                          : "fill-gray-300 text-gray-300"
                      }
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ======================= MAIN CONTENT ======================= */}
          <div className="flex-1 max-w-4xl pt-2">
            {/* Intro text */}
            <div className="text-gray-600 text-lg leading-relaxed space-y-6">
              <p>
                We are a Premier{" "}
                <strong className="text-gray-900">
                  Delivery & Implementation
                </strong>{" "}
                partner in our region,
                <strong className="text-gray-900">
                  {" "}
                  specializing in advanced technology ecosystems. Where
                </strong>{" "}
                Innovation Meets Excellence!
              </p>

              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  About Us
                </h3>
                <p>
                  Since our inception in 2015, {partner.name} has been at the
                  forefront of the software industry, redefining excellence with
                  every line of code. We are not just a company; we are a
                  passionate team of innovators, dreamers and creators who
                  thrive on turning your software visions into reality.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Our Expertise
                </h3>
                <p>
                  At {partner.name.split(" ")[0]}, we boast a wealth of
                  experience and a track record that speaks volumes. From
                  intricate coding challenges to ground-breaking software
                  solutions, we have the know-how and the knack for turning your
                  ideas into seamless, efficient and cutting-edge software. No
                  challenge is too big, no detail too small – we excel in
                  exceeding expectations.
                </p>
              </div>
            </div>

            {/* Partner Key Metrics (Moved from Sidebar) */}
            <div className="mt-10 mb-16 p-8 bg-white shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-200/80 rounded-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-bright-orange to-orange-300"></div>

              <div className="flex flex-wrap items-center justify-between gap-6 mb-8 pb-6 border-b border-gray-100">
                <div>
                  <h4 className="text-xs uppercase font-extrabold text-gray-400 tracking-widest mb-3">
                    Industry Focus
                  </h4>
                </div>
                <div>
                  <span className="inline-block px-4 py-1.5 border border-brand-bright-orange/30 text-brand-bright-orange bg-brand-bright-orange/5 text-[12px] font-bold rounded-full">
                    {partner.industry || "IT / Communication / Marketing"}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Certified Experts */}
                <div>
                  <h4 className="font-bold font-serif italic text-lg text-brand-black mb-3 border-b border-gray-200 pb-2">
                    Certified Experts
                  </h4>
                  <ul className="text-sm font-medium text-gray-700 space-y-2">
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2
                        size={16}
                        className="text-brand-bright-orange"
                      />{" "}
                      1 Certified v18
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2
                        size={16}
                        className="text-brand-bright-orange"
                      />{" "}
                      5 Certified v17
                    </li>
                  </ul>
                </div>

                {/* References Sizes */}
                <div>
                  <h4 className="font-bold font-serif italic text-lg text-brand-black mb-3 border-b border-gray-200 pb-2">
                    References Sizes
                  </h4>
                  <ul className="text-sm font-medium text-gray-700 space-y-2">
                    <li className="flex items-center justify-between">
                      <span className="text-gray-500">Largest:</span>{" "}
                      <span className="font-bold">80 users</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-gray-500">Average:</span>{" "}
                      <span className="font-bold">8 users</span>
                    </li>
                  </ul>
                </div>

                {/* References List */}
                <div>
                  <h4 className="font-bold font-serif italic text-lg text-brand-black mb-3 border-b border-gray-200 pb-2">
                    References{" "}
                    <span className="text-brand-bright-orange font-sans not-italic text-sm ml-1">
                      - 31
                    </span>
                  </h4>
                  <ul className="text-sm font-medium text-gray-700 space-y-2">
                    <li className="flex items-center justify-between">
                      <span className="text-gray-500">Wholesale / Retail</span>{" "}
                      <span className="font-bold">7</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-gray-500">Manufacturing</span>{" "}
                      <span className="font-bold">12</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-gray-500">Education</span>{" "}
                      <span className="font-bold">17</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-gray-500">Education</span>{" "}
                      <span className="font-bold">4</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-gray-500">IT / Communication</span>{" "}
                      <span className="font-bold">3</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-gray-500">Agriculture</span>{" "}
                      <span className="font-bold">2</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Video Section */}
            <div className="mt-16 mb-16">
              <h2 className="text-2xl font-black text-gray-900 mb-6 tracking-tight">
                Building a Business with Outsourced Innovation. Success Partner
                Story.
              </h2>
              {/* Video Box */}
              <div className="w-full aspect-video bg-gray-900 rounded-2xl overflow-hidden relative group border border-gray-200 shadow-sm">
                {!isPlaying ? (
                  <div
                    className="w-full h-full relative cursor-pointer"
                    onClick={() => setIsPlaying(true)}
                  >
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-300 z-10"></div>
                    {/* Automatically pulled YouTube Thumbnail */}
                    <img
                      src="https://img.youtube.com/vi/LXb3EKWsInQ/maxresdefault.jpg"
                      alt="YouTube Video Thumbnail"
                      className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 flex items-center justify-center z-20">
                      {/* Classic YouTube Red Play Button */}
                      <div className="w-[68px] h-[48px] bg-[#FF0000] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-xl shadow-red-500/20">
                        <svg
                          className="w-8 h-8 text-white fill-current ml-1"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                    <div className="absolute bottom-6 left-8 right-8 flex items-center justify-between text-white z-20">
                      <span className="font-bold text-[15px] drop-shadow-md">
                        {partner.name}: Driving Strategic Growth...
                      </span>
                      <span className="text-xs font-bold bg-white/20 px-4 py-1.5 rounded-full backdrop-blur-md border border-white/30 tracking-wide text-white">
                        Watch on YouTube
                      </span>
                    </div>
                  </div>
                ) : (
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/LXb3EKWsInQ?autoplay=1"
                    title="Success Partner Story"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                )}
              </div>
            </div>

            {/* End to end section */}
            <div className="mb-14">
              <h3 className="text-lg font-bold text-gray-900 mb-3 tracking-wide">
                End-to-end Implementation
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-5">
                {partner.name} has devised a comprehensive approach to
                implementation, commencing with a thorough Business Analysis. We
                stand as your collaborative partners throughout the entire
                process, offering support in implementation, training, roll-out,
                and data migration. Our resources are available onsite, near
                shore and offshore to cater to diverse client demands.
              </p>
              <ul className="text-lg font-medium text-gray-700 space-y-2.5 list-disc list-inside ml-2">
                <li>Digital transformation consulting & strategy</li>
                <li>Enterprise system implementation</li>
                <li>API & Custom App integration</li>
                <li>Workflow customization & automation mapping</li>
                <li>24/7 Managed support and operational scaling</li>
              </ul>
            </div>

            {/* Table Matrix */}
            <div className="mb-12">
              <p className="text-md text-gray-600 mb-6">
                We have assisted numerous clients spanning various industries,
                including:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-gray-200 text-[13px]">
                {/* Cell 1 */}
                <div className="border-r border-b border-gray-200 p-5 bg-white">
                  <h4 className="font-bold text-gray-900 underline underline-offset-4 mb-4">
                    eCommerce
                  </h4>
                  <ul className="space-y-1.5 text-gray-600 list-disc list-inside">
                    <li>Webstore integration</li>
                    <li>Marketplace integration</li>
                    <li>Financial & account management</li>
                    <li>POS</li>
                    <li>Sale order processing</li>
                  </ul>
                </div>

                {/* Cell 2 */}
                <div className="border-r border-b border-gray-200 p-5 bg-white">
                  <h4 className="font-bold text-gray-900 underline underline-offset-4 mb-4">
                    Manufacturing
                  </h4>
                  <ul className="space-y-1.5 text-gray-600 list-disc list-inside">
                    <li>CAD integration</li>
                    <li>MRP</li>
                    <li>Routings and work orders</li>
                    <li>Quality Management</li>
                    <li>Job/production costing</li>
                  </ul>
                </div>

                {/* Cell 3 */}
                <div className="border-r border-b border-gray-200 p-5 bg-white">
                  <h4 className="font-bold text-gray-900 underline underline-offset-4 mb-4">
                    Retail and food processing
                  </h4>
                  <ul className="space-y-1.5 text-gray-600 list-disc list-inside">
                    <li>Tender processes</li>
                    <li>Request for quotes</li>
                    <li>Best vendor selection</li>
                    <li>Meat processing</li>
                    <li>Tracking waste products</li>
                    <li>Quality control</li>
                  </ul>
                </div>

                {/* Cell 4 */}
                <div className="border-r border-b border-gray-200 p-5 bg-white">
                  <h4 className="font-bold text-gray-900 mb-4">
                    Wholesale Distribution
                  </h4>
                  <ul className="space-y-1.5 text-gray-600 list-disc list-inside">
                    <li>Customer enrollment and app...</li>
                    <li>Price segregation</li>
                    <li>Concessions and offers</li>
                    <li>EDI Communication</li>
                  </ul>
                </div>

                {/* Cell 5 */}
                <div className="border-r border-b border-gray-200 p-5 bg-white">
                  <h4 className="font-bold text-gray-900 underline underline-offset-4 mb-4">
                    Auto parts
                  </h4>
                  <ul className="space-y-1.5 text-gray-600 list-disc list-inside">
                    <li>Catalog integration</li>
                    <li>Forecast management</li>
                    <li>Millions of product management</li>
                    <li>3PL integration</li>
                    <li>EDI Communication</li>
                  </ul>
                </div>

                {/* Cell 6 */}
                <div className="border-r border-b border-gray-200 p-5 bg-white">
                  <h4 className="font-bold text-gray-900 mb-4">Trading</h4>
                  <ul className="space-y-1.5 text-gray-600 list-disc list-inside">
                    <li>Sales</li>
                    <li>Purchase</li>
                    <li>Inventory</li>
                    <li>Workflow</li>
                    <li>Customized HR</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="space-y-4 text-lg text-gray-600">
              <h3 className="font-bold text-gray-900 mb-4 mt-2 ">
                Why Choose {partner.name.split(" ")[0]}?
              </h3>

              <p>
                <strong className="text-gray-900">Innovation Unleashed:</strong>{" "}
                We don't just follow trends; we set them. Our team is a
                powerhouse of creativity, constantly pushing boundaries to
                deliver solutions that stand out in the digital landscape.
              </p>
              <p>
                <strong className="text-gray-900">
                  Client-Centric Approach:
                </strong>{" "}
                Your success is our success. We take pride in our ever-growing
                list of happy clients who have experienced firsthand our
                commitment to delivering top-notch software solutions tailored
                to their unique needs.
              </p>
              <p>
                <strong className="text-gray-900">Efficiency Redefined:</strong>{" "}
                Time is of the essence and we understand that. Our streamlined
                processes and agile methodologies ensure timely delivery without
                compromising on quality.
              </p>
              <p>
                <strong className="text-gray-900">
                  Passion for Perfection:
                </strong>{" "}
                We don't settle for anything less than perfection. Our team is
                driven by a passion for crafting software that not only
                functions flawlessly but also delights users with highly
                engaging experiences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
