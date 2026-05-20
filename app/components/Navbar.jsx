"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  User,
  Briefcase,
  FileText,
  PhoneCall,
  ChevronDown,
  ChevronRight,
  ArrowUpRight,
  ArrowRight,
  Sparkles,
  Search,
  Globe,
  Layers,
  Zap,
  BookOpen,
} from "lucide-react";

const navLinks = [
  {
    label: "What We Do",
    href: "#about",
    tagline: "Empowering Digital Enterprises",
    description:
      "At Betopia, we don't just build software. We architect intelligent ecosystems that help businesses scale, adapt and lead — anywhere in the world.",
    ctaHref: "#",
    megaMenu: [
      {
        label: "Industries",
        href: "#",
        items: [
          {
            label: "Banking",
            href: "/industries/banking",
          },
          {
            label: "Capital Markets",
            href: "/industries/capital-markets",
          },
          {
            label: "Consumer Packaged Goods",
            href: "/industries/cpg",
          },
          {
            label: "Communications, Media & Information",
            href: "/industries/cmi",
          },
          {
            label: "Education",
            href: "/industries/education",
          },
          {
            label: "Energy, Resources & Utilities",
            href: "/industries/energy",
          },
          {
            label: "Healthcare",
            href: "/industries/healthcare",
          },
          {
            label: "High Tech",
            href: "/industries/telecommunications",
          },
          {
            label: "Insurance",
            href: "/industries/insurance",
          },
          {
            label: "Life Sciences",
            href: "/industries/life-sciences",
          },
          {
            label: "Manufacturing",
            href: "/industries/manufacturing",
          },
          {
            label: "Public Services",
            href: "/industries/government",
          },
          {
            label: "Retail",
            href: "/industries/retail",
          },
          {
            label: "Travel & Logistics",
            href: "/industries/transportation",
          },
        ],
      },
      {
        label: "Products",
        href: "#",
        items: [
          { label: "Business Brain", href: "/products/betopia-erp" },
          {
            label: "Mail Campaign",
            href: "/products/betopia-emailing-system",
          },

          { label: "Talkora AI", href: "/products/talkora-ai" },
          { label: "Betopia CareOS", href: "/products/smart-hospital" },
          { label: "Betopia Smart Class", href: "/products/eduvas-school" },
          {
            label: "Betopia EduOS",
            href: "/products/eduvas-university",
          },
          { label: "Betopia LMS", href: "/products/Betopia LMS" },
          {
            label: "Virtual Gate",
            href: "/products/virtual-gate",
          },
        ],
      },
      {
        label: "Services",
        href: "#",
        items: [
          {
            label: "Cloud Modernization",
            href: "/services/cloud-modernization",
          },
          { label: "AI & Analytics", href: "/services/ai-analytics" },
          { label: "Cybersecurity Services", href: "/services/cybersecurity" },
          {
            label: "Software Development",
            href: "/services/software-development",
          },
          { label: "Managed Services", href: "/services/managed-services" },
          {
            label: "Resource Augmentation",
            href: "/services/team-augmentation",
          },
        ],
      },
      {
        label: "Solutions",
        href: "#",
        groups: [
          {
            heading: "Data Center & Network Security",
            items: [
              {
                label: "Datacenter & Virtualization",
                href: "/solutions/datacenter-virtualization",
              },
              {
                label: "Infrastructure Management",
                href: "/solutions/infrastructure-management",
              },
              {
                label: "Enterprise Networking",
                href: "/solutions/enterprise-networking",
              },
              {
                label: "Network Security",
                href: "/solutions/network-security",
              },
            ],
          },
          {
            heading: "Hybrid Cloud Solutions",
            items: [
              {
                label: "Cloud Infrastructure",
                href: "/solutions/cloud-infrastructure",
              },
              { label: "Hybrid Cloud", href: "/solutions/hybrid-cloud" },
              { label: "DevOps", href: "/solutions/devops" },
            ],
          },
          {
            heading: "Cyber Security",
            items: [
              {
                label: "Secure Business Productivity",
                href: "/solutions/secure-business-productivity",
              },
              {
                label: "Infrastructure Security",
                href: "/solutions/cyber-security",
              },
              { label: "Data Security", href: "/solutions/data-security" },
              {
                label: "Identity Security",
                href: "/solutions/identity-security",
              },
              {
                label: "Application Security",
                href: "/solutions/application-security",
              },
              { label: "Email Security", href: "/solutions/email-security" },
              { label: "IoT Security", href: "/solutions/iot-security" },
              { label: "AI Security", href: "/solutions/ai-security" },
              {
                label: "Cyber Security Operations",
                href: "/solutions/cyber-security-operations",
              },
            ],
          },
          {
            heading: "Digital Solutions",
            items: [
              {
                label: "Digital & APP Innovation",
                href: "/solutions/digital-app-innovation",
              },
              {
                label: "Database & Business Analytics",
                href: "/solutions/database-business-analytics",
              },
              { label: "AI Solutions", href: "/solutions/ai" },
              {
                label: "Business Application",
                href: "/solutions/business-application",
              },
            ],
          },
        ],
      },
      {
        label: "Become a Partner",
        href: "/partner",
      },
    ],
  },

  {
    label: "Who We Are",
    href: "#",
    tagline: "The People Behind the Platform",
    description:
      "We are engineers, designers and strategists who share a relentless passion for building technology that matters — backed by conviction, community and craft.",
    ctaHref: "#",
    megaMenu: [
      {
        label: "Global Reach",
        href: "#",
        items: [
          { label: "Global Offices", href: "/global-reach/offices" },
          { label: "Global Partners", href: "/partners" },
        ],
      },
      {
        label: "Brand",
        href: "/about/brand",
      },
      {
        label: "Values",
        href: "/about/values",
      },
      {
        label: "Leadership",
        href: "/about/leadership",
      },
    ],
  },
  {
    label: "Impact & Insights",
    href: "#",
    tagline: "Insights that create impact",
    description:
      "Research-driven insights and perspectives that build on our case studies and customer stories sharing knowledge, outcomes, and ideas that matter.",
    ctaHref: "#",
    megaMenu: [
      {
        label: "Case Studies",
        href: "/case-studies",
      },
      {
        label: "Client Stories",
        href: "/client-stories",
      },
    ],
  },
  {
    label: "News & Media",
    href: "#",
    tagline: "Betopia Limited News & Media – Updates",
    description:
      "Stay connected with the latest from Betopia Limited. Discover press releases, media coverage, events, and updates on our technology innovations, partnerships, and global impact.",
    ctaHref: "#",
    megaMenu: [
      {
        label: "Newsroom",
        href: "/blog",
      },
      {
        label: "Media Kit",
        href: "/media-kit",
      },
    ],
  },
  { label: "Career", href: "/career" },
];

const SUGGESTIONS = [
  "Connect me with a sales rep",
  "Show me a Betopia demo",
  "How can Betopia help my business",
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expandedMobile, setExpandedMobile] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [hoveredLink, setHoveredLink] = useState(null);
  const [searchValue, setSearchValue] = useState("");
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const [expandedMobileCategory, setExpandedMobileCategory] = useState(null);
  const searchRef = useRef(null);
  const hoverTimer = useRef(null);

  const isLinkActive = useCallback((link) => {
    if (link.href && link.href !== "#" && pathname === link.href) {
      return true;
    }
    if (link.megaMenu) {
      return link.megaMenu.some((category) => {
        if (category.href && category.href !== "#" && pathname === category.href) {
          return true;
        }
        if (category.items && category.items.some((item) => item.href && pathname === item.href)) {
          return true;
        }
        if (
          category.groups &&
          category.groups.some(
            (group) => group.items && group.items.some((item) => item.href && pathname === item.href)
          )
        ) {
          return true;
        }
        return false;
      });
    }
    return false;
  }, [pathname]);

  const isCategoryActive = useCallback((category) => {
    if (category.href && category.href !== "#" && pathname === category.href) {
      return true;
    }
    if (category.items && category.items.some((item) => item.href && pathname === item.href)) {
      return true;
    }
    if (
      category.groups &&
      category.groups.some(
        (group) => group.items && group.items.some((item) => item.href && pathname === item.href)
      )
    ) {
      return true;
    }
    return false;
  }, [pathname]);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    if (searchOpen) setTimeout(() => searchRef.current?.focus(), 60);
  }, [searchOpen]);

  useEffect(() => {
    const fn = (e) => {
      if (e.key === "Escape") {
        setSearchOpen(false);
        setActiveMenu(null);
      }
    };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, []);

  const openMenu = useCallback((label) => {
    clearTimeout(hoverTimer.current);
    setActiveMenu(label);
    setHoveredCategory(null);
  }, []);

  const closeMenu = useCallback(() => {
    hoverTimer.current = setTimeout(() => setActiveMenu(null), 150);
  }, []);

  const toggleMobile = useCallback(() => {
    setMobileOpen((p) => !p);
    setExpandedMobile(null);
  }, []);

  const currentMenuData = navLinks.find((l) => l.label === activeMenu);

  // Compute the active category for the right panel:
  // If no category is hovered, default to the first one in the current menu.
  const activeCategory =
    hoveredCategory || currentMenuData?.megaMenu?.[0]?.label;

  const activeCategoryData = currentMenuData?.megaMenu?.find(
    (c) => c.label === activeCategory,
  );

  return (
    <>
      {/* ═══════════════ NAVBAR BAR ═══════════════ */}
      <nav
        onMouseLeave={() => closeMenu()}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 backdrop-blur-md border-b border-white/[0.06] ${pathname === "/"
          ? scrolled
            ? "py-5 shadow-sm bg-slate-950/80"
            : "py-6 bg-slate-950/30"
          : scrolled
            ? "py-5 shadow-sm bg-slate-950/80"
            : "py-6 bg-slate-950/80"
          }`}
      >
        <div className="mx-auto container px-6 md:px-4 flex items-center justify-between gap-4">
          {/* LOGO */}
          <Link href="/" className="shrink-0 flex items-center group">
            <Image
              src="/logo_tm.webp"
              alt="Betopia"
              width={scrolled ? 115 : 115}
              height={scrolled ? 115 : 115}
              className="transition-all duration-500 group-hover:opacity-85"
              style={{ height: "auto" }}
              priority
            />
          </Link>

          {/* DESKTOP LINKS */}
          <div
            className="hidden md:flex items-center gap-0 flex-1 justify-center relative"
            onMouseLeave={() => {
              setHoveredLink(null);
            }}
          >
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => {
                  setHoveredLink(link.label);
                  if (link.megaMenu) {
                    openMenu(link.label);
                  } else {
                    setActiveMenu(null);
                  }
                }}
              >
                <Link
                  href={link.href}
                  className={`relative inline-flex items-center gap-1 px-2 lg:px-3 py-2 rounded-xl text-[12px] lg:text-[13.5px] 2xl:text-xl font-medium tracking-[0.01em] transition-colors duration-200 select-none z-10 ${
                    isLinkActive(link) || activeMenu === link.label || hoveredLink === link.label
                      ? "text-brand-bright-orange"
                      : "text-gray-50"
                  }`}
                >
                  {link.label}
                  {link.megaMenu && (
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-300 ${
                        isLinkActive(link) || activeMenu === link.label || hoveredLink === link.label
                          ? "rotate-180 text-brand-bright-orange"
                          : "text-gray-50"
                      }`}
                    />
                  )}
                </Link>
              </div>
            ))}
          </div>

          {/* DESKTOP RIGHT ACTIONS */}
          <div className="hidden md:flex items-center gap-2 shrink-0">
            {/* CTA */}
            <Link
              href="/book-consultation"
              className="group relative inline-flex items-center h-10 px-4 rounded-md text-md text-white overflow-hidden transition-all duration-300 bg-[#FA753D] hover:bg-[#FA753D]"
            >
              <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              <span className="relative z-10">Book a Consultation</span>
            </Link>
          </div>

          {/* MOBILE HAMBURGER */}
          <button
            onClick={toggleMobile}
            className={`md:hidden ml-auto flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-300 ${mobileOpen ? "text-white" : "text-gray-200 hover:text-white"
              }`}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className="w-8 h-8" />
            ) : (
              <Menu className="w-8 h-8" />
            )}
          </button>
        </div>
      </nav>

      {/* ═══════════════ FULL-WIDTH MEGA MENU PANEL ═══════════════ */}
      <AnimatePresence>
        {activeMenu && currentMenuData?.megaMenu && (
          <>
            {/* Backdrop overlay */}
            <motion.div
              key="mega-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40 bg-black/50"
              onClick={() => setActiveMenu(null)}
            />

            {/* Full-height drawer panel */}
            <motion.div
              key="mega-panel"
              initial={{ clipPath: "inset(0 0 100% 0)" }}
              animate={{ clipPath: "inset(0 0 0% 0)" }}
              exit={{ clipPath: "inset(0 0 100% 0)" }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="fixed left-0 right-0 z-49 hidden md:block"
              style={{ top: scrolled ? "69px" : "78px" }}
              onMouseEnter={() => openMenu(activeMenu)}
              onMouseLeave={() => closeMenu()}
            >
              <div className="bg-purple-50 border-t border-purple-200 shadow-[0_20px_60px_-10px_rgba(0,0,0,0.1)]">
                <div className="mx-auto container px-6 md:px-4">
                  <div className="flex gap-4 lg:gap-8">
                    {/* LEFT COLUMN — Info */}
                    <div className="hidden xl:block w-[220px] lg:w-[280px] shrink-0 py-6">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          delay: 0.15,
                          duration: 0.4,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                      >
                        <h3 className="text-xl lg:text-2xl font-semibold text-black mb-3 leading-snug">
                          {currentMenuData.tagline}
                        </h3>
                        <p className="text-sm lg:text-lg text-gray-600 leading-relaxed mb-10">
                          {currentMenuData.description}
                        </p>

                      </motion.div>
                    </div>

                    {/* MIDDLE COLUMN — Categories */}
                    <div className="w-full md:w-[200px] lg:w-[260px] shrink-0 py-6 max-h-[calc(100vh-100px)] overflow-y-auto hide-scrollbar">
                      <div className="flex flex-col gap-0 border-t border-purple-200/60">
                        {currentMenuData.megaMenu.map((category, idx) => {
                          const isActive = activeCategory === category.label;
                          const hasSubItems =
                            (category.items && category.items.length > 0) ||
                            (category.groups && category.groups.length > 0);
                          return (
                            <motion.div
                              key={category.label}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{
                                delay: 0.1 + idx * 0.05,
                                duration: 0.35,
                                ease: [0.22, 1, 0.36, 1],
                              }}
                              onMouseEnter={() =>
                                setHoveredCategory(category.label)
                              }
                            >
                              <Link
                                href={category.href}
                                onClick={() => setActiveMenu(null)}
                                className={`group/cat flex items-center justify-between px-5 py-4 border-b border-purple-200/60 transition-all duration-200 ${isActive
                                  ? "bg-purple-100/70"
                                  : "hover:bg-purple-100/30"
                                  }`}
                              >
                                <span
                                  className={`text-lg lg:text-xl transition-colors ${
                                    isCategoryActive(category)
                                      ? "text-brand-bright-orange font-semibold"
                                      : isActive
                                        ? "text-black font-semibold"
                                        : "text-gray-500 font-medium group-hover/cat:text-black"
                                  }`}
                                >
                                  {category.label}
                                </span>
                                {hasSubItems && (
                                  <ChevronRight
                                    size={16}
                                    className={`transition-all duration-300 ${
                                      isCategoryActive(category)
                                        ? "text-brand-bright-orange translate-x-1"
                                        : isActive
                                          ? "text-black translate-x-1"
                                          : "text-gray-400 group-hover/cat:text-gray-600"
                                    }`}
                                  />
                                )}
                              </Link>
                            </motion.div>
                          );
                        })}
                      </div>
                    </div>

                    {/* RIGHT COLUMN — Sub-items for active category */}
                    <div className="flex-1 py-10 h-full max-h-[calc(100vh-100px)] overflow-y-auto pl-4 hide-scrollbar">
                      <AnimatePresence mode="wait">
                        {activeCategoryData && (
                          <motion.div
                            key={activeCategoryData.label}
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -10 }}
                            transition={{
                              duration: 0.25,
                              ease: [0.22, 1, 0.36, 1],
                            }}
                            className={
                              activeCategoryData.groups
                                ? "grid grid-cols-1 lg:grid-cols-2 gap-y-8 lg:gap-y-12 gap-x-8 lg:gap-x-2 pr-4"
                                : "grid grid-cols-2 lg:grid-cols-2 w-full gap-y-2 lg:gap-y-4 gap-x-4 lg:gap-x-12 max-w-[900px]"
                            }
                          >
                            {activeCategoryData.groups
                              ? activeCategoryData.groups.map((group) => (
                                <div
                                  key={group.heading}
                                  className="flex flex-col gap-3"
                                >
                                  <h4 className="text-black font-semibold text-md mb-2 border-b border-purple-200 pb-2">
                                    {group.heading}
                                  </h4>
                                  <div className="flex flex-col gap-3">
                                    {group.items.map((item) => (
                                      <Link
                                        key={item.label}
                                        href={item.href}
                                        onClick={() => setActiveMenu(null)}
                                        target={
                                          item.href?.startsWith("http")
                                            ? "_blank"
                                            : undefined
                                        }
                                        rel={
                                          item.href?.startsWith("http")
                                            ? "noopener noreferrer"
                                            : undefined
                                        }
                                        className={`group flex items-center text-md transition-colors ${
                                          pathname === item.href
                                            ? "text-brand-bright-orange font-semibold"
                                            : "text-gray-500 hover:text-black hover:underline underline-offset-4"
                                        }`}
                                      >
                                        {item.label}
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                              ))
                              : activeCategoryData.items
                                ? activeCategoryData.items.map((item) => (
                                  <Link
                                    key={item.label}
                                    href={item.href}
                                    onClick={() => setActiveMenu(null)}
                                    target={
                                      item.href?.startsWith("http")
                                        ? "_blank"
                                        : undefined
                                    }
                                    rel={
                                      item.href?.startsWith("http")
                                        ? "noopener noreferrer"
                                        : undefined
                                    }
                                    className={`group flex items-start text-lg lg:text-xl leading-snug transition-colors ${
                                      pathname === item.href
                                        ? "text-brand-bright-orange font-semibold"
                                        : "text-gray-600 hover:text-black hover:underline underline-offset-4"
                                    }`}
                                  >
                                    {item.label}
                                  </Link>
                                ))
                                : (
                                  <div className="col-span-2 flex items-center justify-center py-6">
                                    <Link
                                      href={activeCategoryData.href || "#"}
                                      onClick={() => setActiveMenu(null)}
                                      className={`group flex items-center gap-2 text-2xl lg:text-3xl font-semibold transition-colors duration-200 ${
                                        pathname === activeCategoryData.href
                                          ? "text-brand-bright-orange"
                                          : "text-black hover:text-[#FA753D] hover:underline underline-offset-8"
                                      }`}
                                    >
                                      <span>{activeCategoryData.label}</span>
                                      <ArrowUpRight className={`w-7 h-7 transition-all duration-200 ${
                                        pathname === activeCategoryData.href
                                          ? "text-brand-bright-orange"
                                          : "text-gray-400 group-hover:text-[#FA753D] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                      }`} />
                                    </Link>
                                  </div>
                                )
                            }
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* ═══════════════ MOBILE DRAWER ═══════════════ */}
      <div
        onClick={toggleMobile}
        className={`fixed inset-0 z-[55] bg-black/60 backdrop-blur-sm transition-opacity duration-400 md:hidden ${mobileOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
          }`}
      />

      <div
        className={`fixed top-0 right-0 z-[56] h-full w-[80%] max-w-[360px] transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] md:hidden ${mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="relative h-full flex flex-col bg-[#0a0d16] border-l border-white/[0.07] overflow-hidden">
          <div className="pointer-events-none absolute top-0 right-0 w-56 h-56 rounded-full bg-orange-500/[0.05] blur-[90px]" />
          <div className="pointer-events-none absolute bottom-0 left-0 w-44 h-56 rounded-full bg-violet-500/[0.04] blur-[70px]" />

          {/* Header */}
          <div className="flex items-center justify-between px-5 pt-5 pb-4 border-b border-white/6 relative z-10">
            <Link href="/" onClick={() => setMobileOpen(false)}>
              <Image
                src="/logo_tm.webp"
                alt="Betopia"
                width={104}
                height={104}
                style={{ height: "auto" }}
                priority
              />
            </Link>
            <button
              onClick={toggleMobile}
              className="flex items-center justify-center w-10 h-10 text-gray-200 hover:text-white transition-all"
            >
              <X className="w-8 h-8" />
            </button>
          </div>

          {/* Links */}
          <div className="flex-1 overflow-y-auto px-3 py-4 relative z-10">
            {navLinks.map((link, i) => (
              <div key={link.label}>
                {link.megaMenu ? (
                  <>
                    <button
                      onClick={() => {
                        setExpandedMobile((p) =>
                          p === link.label ? null : link.label,
                        );
                        setExpandedMobileCategory(null);
                      }}
                      className={`flex items-center justify-between w-full px-3.5 py-3.5 text-xl font-medium transition-all duration-200 ${
                        isLinkActive(link)
                          ? "text-brand-bright-orange"
                          : expandedMobile === link.label
                            ? "text-white"
                            : "text-gray-400 hover:text-white"
                      }`}
                    >
                      {link.label}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-300 ${
                          isLinkActive(link)
                            ? "text-brand-bright-orange"
                            : expandedMobile === link.label
                              ? "rotate-180 text-orange-400"
                              : "text-gray-600"
                        }`}
                      />
                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-400 ${expandedMobile === link.label ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"}`}
                    >
                      <div className="flex flex-col">
                        {/* Tagline */}
                        {link.tagline && (
                          <div className="px-5 py-3 border-b border-white/6">
                            <span className="text-[15px] text-gray-300 font-medium">
                              {link.tagline}
                            </span>
                          </div>
                        )}

                        {/* Categories accordion */}
                        {link.megaMenu.map((category) => {
                          const hasSubItems =
                            category.items?.length > 0 ||
                            category.groups?.length > 0;
                          const isCatExpanded =
                            expandedMobileCategory === category.label;
                          return (
                            <div
                              key={category.label}
                              className="border-b border-white/6"
                            >
                              {/* Category header - toggleable or link */}
                              {hasSubItems ? (
                                <button
                                  onClick={() => {
                                    setExpandedMobileCategory((p) =>
                                      p === category.label
                                        ? null
                                        : category.label,
                                    );
                                  }}
                                  className={`flex items-center justify-between w-full px-5 py-3.5 text-[18px] font-medium transition-all duration-200 ${
                                    isCategoryActive(category)
                                      ? "text-brand-bright-orange"
                                      : isCatExpanded
                                        ? "text-white"
                                        : "text-gray-400 hover:text-white"
                                  }`}
                                >
                                  {category.label}
                                  <span
                                    className={`flex items-center justify-center w-5 h-5 transition-colors ${
                                      isCategoryActive(category)
                                        ? "text-brand-bright-orange"
                                        : isCatExpanded
                                          ? "text-orange-400"
                                          : "text-gray-500"
                                    }`}
                                  >
                                    {isCatExpanded ? (
                                      <span className="text-[18px] leading-none">
                                        −
                                      </span>
                                    ) : (
                                      <span className="text-[18px] leading-none">
                                        +
                                      </span>
                                    )}
                                  </span>
                                </button>
                              ) : (
                                <Link
                                  href={category.href || "#"}
                                  onClick={() => setMobileOpen(false)}
                                  className={`flex items-center justify-between w-full px-5 py-3.5 text-[18px] font-medium transition-all duration-200 ${
                                    pathname === category.href
                                      ? "text-brand-bright-orange"
                                      : "text-gray-400 hover:text-white"
                                  }`}
                                >
                                  {category.label}
                                </Link>
                              )}

                              {/* Category sub-items */}
                              <div
                                className={`overflow-hidden transition-all duration-300 ${isCatExpanded
                                  ? "max-h-[1200px] opacity-100"
                                  : "max-h-0 opacity-0"
                                  }`}
                              >
                                <div className="flex flex-col pb-3">
                                  {category.groups
                                    ? category.groups.map((group) => (
                                      <div
                                        key={group.heading}
                                        className="flex flex-col mb-2"
                                      >
                                        <span className="text-[14px] text-gray-500 px-10 py-1 uppercase tracking-wider font-semibold">
                                          {group.heading}
                                        </span>
                                        {group.items.map((subItem) => (
                                          <Link
                                            key={subItem.label}
                                            href={subItem.href}
                                            onClick={() =>
                                              setMobileOpen(false)
                                            }
                                            target={
                                              subItem.href?.startsWith("http")
                                                ? "_blank"
                                                : undefined
                                            }
                                            rel={
                                              subItem.href?.startsWith("http")
                                                ? "noopener noreferrer"
                                                : undefined
                                            }
                                            className={`text-[17px] py-2 px-10 transition-colors leading-snug block ${
                                              pathname === subItem.href
                                                ? "text-brand-bright-orange font-medium"
                                                : "text-gray-400 hover:text-white"
                                            }`}
                                          >
                                            {subItem.label}
                                          </Link>
                                        ))}
                                      </div>
                                    ))
                                    : category.items?.map((subItem) => (
                                      <Link
                                        key={subItem.label}
                                        href={subItem.href}
                                        onClick={() => setMobileOpen(false)}
                                        target={
                                          subItem.href?.startsWith("http")
                                            ? "_blank"
                                            : undefined
                                        }
                                        rel={
                                          subItem.href?.startsWith("http")
                                            ? "noopener noreferrer"
                                            : undefined
                                        }
                                        className={`text-[17px] py-2 px-8 transition-colors leading-snug block ${
                                          pathname === subItem.href
                                            ? "text-brand-bright-orange font-medium"
                                            : "text-gray-400 hover:text-white"
                                        }`}
                                      >
                                        {subItem.label}
                                      </Link>
                                    ))}
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`flex items-center px-3.5 py-3 rounded-xl text-xl font-medium transition-all ${
                      pathname === link.href
                        ? "text-brand-bright-orange bg-white/4"
                        : "text-gray-400 hover:text-white hover:bg-white/4"
                    }`}
                  >
                    {link.label}
                  </Link>
                )}
                {i < navLinks.length - 1 && (
                  <div className="mx-3.5 my-1 h-px bg-white/4" />
                )}
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="px-4 py-2 border-t border-white/6 relative z-10">
            <Link
              href="/book-consultation"
              onClick={() => setMobileOpen(false)}
              className="group relative flex items-center justify-center w-full py-2 rounded-md font-semibold text-white text-lg overflow-hidden bg-orange-500 hover:bg-orange-400 transition-all shadow-[0_4px_18px_-4px_rgba(249,115,22,0.5)]"
            >
              <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 bg-gradient-to-r from-transparent via-white/15 to-transparent" />
              <span className="relative z-10">Book a Consultation</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
