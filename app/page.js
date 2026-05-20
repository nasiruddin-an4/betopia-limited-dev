"use client";

import React, { useState, useEffect, useRef } from "react";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import LogoMarquee from "./components/LogoMarquee";
import FactsAndFigures from "./components/FactsAndFigures";
import TestimonialsMetrics from "./components/TestimonialsMetrics";
import ProductsSection from "./components/ProductsSection";
import FeaturesSection from "./components/FeaturesSection";
import BentoSection from "./components/BentoSection";
import TestimonialsCarousel from "./components/TestimonialsCarousel";
import WhyChooseBetopia from "./components/WhyChooseBetopia";
import BlogSection from "./components/BlogSection";
import FaqSection from "./components/FaqSection";
import CtaSection from "./components/CtaSection";
import TechStackMarquee from "./components/TechStackMarquee";
import OfficeLocations from "./components/OfficeLocations";
import WorkWithUs from "./components/WorkWithUs";
import EcosystemSection from "./components/EcosystemSection";
import HowWeWork from "./components/HowWeWork";
import IndustriesWeServe from "./components/IndustriesWeServe";
import AITransformation from "./components/AITransformation";
import SuccessStories from "./components/SuccessStories";

export default function Home() {
  const wrapperRef = useRef(null);
  const [homeContent, setHomeContent] = useState({});

  useEffect(() => {
    const fetchHomeData = async () => {
      try {
        const baseUrl = process.env.NEXT_PUBLIC_PAGE_DATA_API?.includes("http")
          ? process.env.NEXT_PUBLIC_PAGE_DATA_API
          : "https://betopiagroup-dashboard.vercel.app/api";
        const res = await fetch(`${baseUrl}/pages/home/`, {
          cache: "no-store",
        });

        if (!res.ok) {
          console.warn(`Home API failed with status: ${res.status}`);
          return;
        }

        const contentType = res.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
          console.warn("Home API returned non-JSON response");
          return;
        }

        const data = await res.json();
        if (data?.success && data?.data) {
          setHomeContent(data.data);
        }
      } catch (error) {
        console.error("Error fetching home page data:", error.message);
      }
    };
    fetchHomeData();
  }, []);

  return (
    <main>
      <Hero />
      <HowWeWork />
      <AITransformation />
      <div id="products" className="smooth-section">
        <ProductsSection
          title={homeContent?.products_title}
          description={homeContent?.products_description}
          productsCards={homeContent?.products_cards}
          bgImage={homeContent?.products_bg_image}
        />
      </div>
      {/* <IndustriesWeServe /> */}
      <AboutSection />
      <FactsAndFigures />
      <WhyChooseBetopia />
      {/* <EcosystemSection /> */}
      {/* <TestimonialsMetrics /> */}
      {/* <FeaturesSection /> */}
      {/* <WorkWithUs /> */}
      <SuccessStories />
      <TechStackMarquee />
      <LogoMarquee
        title={homeContent?.coarch_title}
        description={homeContent?.coarch_description}
        partnerCards={homeContent?.coarch_partners}
      />
      {/* <TestimonialsCarousel /> */}
      {/* <BentoSection /> */}
      {/* <FaqSection /> */}
      <BlogSection />
      <CtaSection />
      {/* <OfficeLocations /> */}
    </main>
  );
}
