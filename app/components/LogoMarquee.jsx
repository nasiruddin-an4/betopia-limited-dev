"use client";

import React, { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const partners = [
  {
    "id": 1,
    "name": "Matt Garman",
    "title": "Chief Executive Officer, Amazon Web Services",
    "companyLogo": "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
    "image": "https://assets.betopiagroup.com/betopia-group-web/partners/1777538325548-Matt-Garman.jpeg"
  },
  {
    "id": 2,
    "name": "Satya Nadella",
    "title": "CEO of Microsoft",
    "companyLogo": "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    "image": "https://assets.betopiagroup.com/betopia-group-web/partners/1777538582293-Satya-Microsoft.jpeg"
  },
  {
    "id": 3,
    "name": "Shantanu Narayen",
    "title": "Chairman and CEO of Adobe",
    "companyLogo": "https://upload.wikimedia.org/wikipedia/commons/6/6e/Adobe_Corporate_logo.svg",
    "image": "https://assets.betopiagroup.com/betopia-group-web/partners/1777881357147-0x0.webp"
  },
  {
    "id": 4,
    "name": "Fabien Pinckaers",
    "title": "Founder & CEO, Odoo",
    "companyLogo": "https://upload.wikimedia.org/wikipedia/commons/5/50/Odoo_logo.svg",
    "image": "https://assets.betopiagroup.com/betopia-group-web/partners/1777538616424-Fabien.jpeg"
  },
  {
    "id": 6,
    "name": "Eddie Wu Yongming",
    "title": "Chairman & CEO, Alibaba Cloud Intelligence",
    "companyLogo": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/AlibabaCloudLogo.svg/960px-AlibabaCloudLogo.svg.png?20210618010512",
    "image": "https://assets.betopiagroup.com/betopia-group-web/partners/1777538644346-Eddie-Wu.jpeg"
  },
  {
    "id": 7,
    "name": "Thomas Kurian",
    "title": "CEO, Google Cloud",
    "companyLogo": "https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg",
    "image": "https://assets.betopiagroup.com/betopia-group-web/partners/1777538656955-Thomas-Kurian-.jpeg"
  },
  {
    "id": 8,
    "name": "Dowson Tong",
    "title": "CEO, Tencent Cloud & Smart Industries Group",
    "companyLogo": "/tncent-banner.webp",
    "image": "https://assets.betopiagroup.com/betopia-group-web/partners/1777538676002-DowsonTong.jpeg"
  },
  {
    "id": 9,
    "name": "Jensen Huang",
    "title": "President and CEO of NVIDIA",
    "companyLogo": "https://upload.wikimedia.org/wikipedia/commons/2/21/Nvidia_logo.svg",
    "image": "https://assets.betopiagroup.com/betopia-group-web/partners/1777538692101-Jensen-Huang.jpeg"
  },
  {
    "id": 11,
    "name": "Arvind Krishna",
    "title": "Chairman and CEO of IBM",
    "companyLogo": "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
    "image": "https://assets.betopiagroup.com/betopia-group-web/partners/1777538711811-Arvind-Krishna.jpeg"
  },
  {
    "id": 12,
    "name": "Matt Mullenweg",
    "title": "CEO of Automattic",
    "companyLogo": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Automattic_logo.svg/960px-Automattic_logo.svg.png?20230625075757",
    "image": "https://assets.betopiagroup.com/betopia-group-web/partners/1777538724428-Matt-Mullenweg.jpeg"
  },
  {
    "id": 13,
    "name": "Dr. Lisa Su",
    "title": "Chair and CEO of AMD",
    "companyLogo": "https://upload.wikimedia.org/wikipedia/commons/7/7c/AMD_Logo.svg",
    "image": "https://assets.betopiagroup.com/betopia-group-web/partners/1777538733552-Dr.-Lisa-Su.jpeg"
  }
];

export default function LogoMarquee({
  title = "Trusted By Enterprises",
  description = "We don't just sign contracts we forge strategic synergies. From Silicon Valley giants to European tech innovators, we integrate our intelligence with their reach to solve planetary-scale problems.",
  partnerCards = partners,
}) {
  const partnerItems = Array.isArray(partnerCards) ? partnerCards : [];
  const [itemsToShow, setItemsToShow] = useState(4);

  // Clone the list 3 times: [Set1 (Pre), Set2 (Main), Set3 (Post)]
  // This allows scrolling seamlessly in both directions.
  const extendedPartners = [...partnerItems, ...partnerItems, ...partnerItems];
  const totalRealSlides = partnerItems.length;

  // Start at the beginning of the middle set (Set2)
  const [currentIndex, setCurrentIndex] = useState(totalRealSlides);
  const [isTransitioning, setIsTransitioning] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsToShow(1);
      } else if (window.innerWidth < 1280) {
        setItemsToShow(3);
      } else {
        setItemsToShow(4);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Handle the seamless loop reset when transition ends
  const handleTransitionEnd = () => {
    if (currentIndex >= totalRealSlides * 2) {
      setIsTransitioning(false);
      setCurrentIndex(currentIndex - totalRealSlides);
    } else if (currentIndex < totalRealSlides) {
      setIsTransitioning(false);
      setCurrentIndex(currentIndex + totalRealSlides);
    }
  };

  // Re-enable transition after an instant jump
  useEffect(() => {
    if (!isTransitioning) {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsTransitioning(true);
        });
      });
    }
  }, [isTransitioning]);

  const nextSlide = () => {
    if (!isTransitioning) return;
    setCurrentIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    if (!isTransitioning) return;
    setCurrentIndex((prev) => prev - 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (isTransitioning && !document.hidden) {
        setCurrentIndex((prev) => {
          if (prev >= extendedPartners.length - 1) {
            return totalRealSlides;
          }
          return prev + 1;
        });
      }
    }, 6000);
    return () => clearInterval(interval);
  }, [isTransitioning, totalRealSlides, extendedPartners.length]);

  return (
    <section className="bg-white py-10 md:py-20 overflow-hidden flex flex-col justify-center">
      {/* Title Header */}
      <div className="container mx-auto text-center px-6 md:px-4 mb-4">
        <ScrollReveal duration={0.6} delay={0.1}>
          <h2 className="text-2xl md:text-5xl font-semibold text-gray-700 mb-2 tracking-tight leading-tight">
            {title}
          </h2>
        </ScrollReveal>
        <ScrollReveal duration={0.7} delay={0.2}>
          <p className="max-w-4xl mx-auto text-base md:text-xl text-gray-500 leading-relaxed">
            {description}
          </p>
        </ScrollReveal>
      </div>

      {/* Slider Area */}
      <div className="container mx-auto px-6 md:px-12 relative">
        {/* Navigation Buttons (Tightly placed on top right or top of container) */}
        <ScrollReveal duration={0.6} delay={0.3}>
          <div className="flex items-center justify-end mb-6 space-x-3">
            <button
              onClick={prevSlide}
              aria-label="Previous Partner"
              className="w-11 h-11 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:text-black hover:border-black hover:bg-slate-50 transition-all cursor-pointer group"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next Partner"
              className="w-11 h-11 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:text-black hover:border-black hover:bg-slate-50 transition-all cursor-pointer group"
            >
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>
        </ScrollReveal>

        {/* Carousel Container */}
        <ScrollReveal duration={0.8} delay={0.4}>
          <div className="relative overflow-hidden w-full">
            <div
              className={`flex ${isTransitioning
                ? "transition-transform duration-700 ease-in-out"
                : "duration-0"
                }`}
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)`,
              }}
              onTransitionEnd={handleTransitionEnd}
            >
              {extendedPartners.map((partner, index) => (
                <div
                  key={`${partner.id}-${index}`}
                  className="shrink-0 px-3 md:px-4"
                  style={{ width: `${100 / itemsToShow}%` }}
                >
                  <div className="bg-white rounded-2xl overflow-hidden h-full flex flex-col group/card cursor-default hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                    {/* Image Portrait */}
                    <div className="h-64 md:h-72 overflow-hidden bg-slate-50 relative">
                      {partner.image ? (
                        <img
                          src={partner.image}
                          alt={partner.name || "Partner"}
                          loading="lazy"
                          onError={(e) => { e.target.style.display = 'none'; }}
                          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover/card:scale-105"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-slate-400 text-sm">No Image</div>
                      )}
                    </div>
                    {/* Content */}
                    <div className="p-5 md:p-6 flex-1 flex flex-col items-start bg-white relative z-10">
                      {/* Logo Container */}
                      <div className="h-7 w-32 mb-4 relative flex justify-start items-center">
                        {partner.companyLogo ? (
                          <img
                            src={partner.companyLogo}
                            alt={`${partner.name || "Partner"} company logo`}
                            loading="lazy"
                            onError={(e) => { e.target.style.display = 'none'; }}
                            className="h-full object-contain object-left"
                          />
                        ) : (
                          <div className="h-full flex items-center text-slate-300 text-xs">Partner</div>
                        )}
                      </div>

                      <h3 className="text-base md:text-lg font-bold text-gray-900 leading-snug">
                        {partner.name}
                      </h3>
                      <p className="text-gray-500 font-medium text-xs md:text-sm leading-relaxed line-clamp-2">
                        {partner.title}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
