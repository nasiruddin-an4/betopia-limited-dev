"use client";

import React from "react";
import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

const offices = [
  {
    country: "Bangladesh",
    address:
      "Lotus Kamal Tower-2, Level 6, 59 & 61 Gulshan South Avenue, Gulshan-1, Dhaka-1212",
    email: "sales@betopialimited.com",
    phone: "+880 1321-231828",
    image: "/officeImg/Dhaka.jpg",
  },
  {
    country: "United Arab Emirates",
    address: "Meydan Grandstand, 6th Floor, Meydan Road, UAE",
    email: "sales@betopialimited.com",
    phone: "+971 42420223",
    image: "/officeImg/dubai.avif",
  },
  {
    country: "United States",
    address:
      "3651 Peachtree Pkwy Ste. E 116, Suwanee, GA 30024, USA",
    email: "sales@betopialimited.com",
    phone: "+1 606 773 7443",
    image: "/officeImg/new-york.avif",
  },
  {
    country: "Philippines",
    address: "Pulo Amsic Dr., Blk 1 Lot 13 Pulo Amsic Subd., Amsic, Angeles City, Pampanga, 2009",
    email: "sales@betopialimited.com",
    phone: "+63 917 123 4567",
    image: "/officeImg/3.jpeg",
  },
];

export default function OfficeLocations() {
  return (
    <section className="bg-[#050505] py-24 md:py-32 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-0">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 tracking-tight">
            Global Offices
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-16">
          {offices.map((office, idx) => (
            <ScrollReveal key={idx} delay={0.2 + idx * 0.1}>
              <div className="flex flex-col gap-6 items-start group cursor-pointer">
                {/* Office Image */}
                <div className="relative w-full h-44 rounded-2xl overflow-hidden shrink-0 transition-all duration-500 transform shadow-md border border-white/10">
                  <Image
                    src={office.image}
                    alt={office.country}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Office Info */}
                <div className="flex flex-col">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-bright-orange transition-colors duration-300">
                    {office.country}
                  </h3>
                  <div className="space-y-4">
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {office.address}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
