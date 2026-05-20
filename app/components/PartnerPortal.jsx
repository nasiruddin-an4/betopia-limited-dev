"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import ScrollReveal from "./ScrollReveal";
import Heading from "./Heading";
import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  animate,
  AnimatePresence,
} from "framer-motion";

const TABS = [
  "Dashboard",
  "Projects",
  "Revenue",
  "Pipeline",
  "Team",
  "Messages",
  "Reports",
];

function AnimatedNumber({ valueStr }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const numericMatch = valueStr.match(/[\d.]+/);
  const numericValue = numericMatch ? parseFloat(numericMatch[0]) : 0;
  const prefix = valueStr.substring(0, valueStr.indexOf(numericMatch[0]));
  const suffix = valueStr.substring(
    valueStr.indexOf(numericMatch[0]) + numericMatch[0].length,
  );
  const hasDecimals = valueStr.includes(".");

  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => {
    return prefix + latest.toFixed(hasDecimals ? 2 : 0) + suffix;
  });

  useEffect(() => {
    if (inView) {
      animate(count, numericValue, { duration: 2, ease: [0.22, 1, 0.36, 1] });
    }
  }, [inView, count, numericValue]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

function DashboardTab() {
  const [tooltip, setTooltip] = useState(null);
  const [lineX, setLineX] = useState(420);
  const [lineOpacity, setLineOpacity] = useState(0);

  const chartData = [
    { month: "JAN", x: 20, value: "$160K", desc: "January revenue" },
    { month: "MAR", x: 140, value: "$118K", desc: "March revenue" },
    { month: "MAY", x: 260, value: "$85K", desc: "May revenue" },
    { month: "JUL", x: 380, value: "$58K", desc: "July revenue" },
    { month: "SEP", x: 500, value: "$30K", desc: "September revenue" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className="flex-1 p-5 md:p-8 flex flex-col gap-6 md:gap-8 overflow-x-auto h-full"
    >
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h4 className="text-white font-semibold text-lg md:text-xl tracking-tight">
            Hello, Meridian. Here's your Q2 at a glance
          </h4>
          <div className="text-white/50 text-xs md:text-sm mt-1">
            April 18, 2026 &bull; 7 active projects &bull; $1.24M YTD partner
            revenue
          </div>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <button className="px-4 py-2 bg-brand-bright-orange/10 text-brand-bright-orange text-xs font-semibold tracking-widest uppercase rounded hover:bg-brand-bright-orange/20 transition-colors">
            Export
          </button>
          <button className="px-4 py-2 bg-brand-bright-orange text-[#0A0F1A] text-xs font-bold tracking-widest uppercase rounded hover:bg-orange-400 transition-colors">
            + New project
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          {
            l: "ACTIVE PROJECTS",
            v: "7",
            d: "▲ 2 vs. last quarter",
            dt: "text-[#4ADE80]",
          },
          {
            l: "YTD PARTNER REVENUE",
            v: "$1.24M",
            d: "▲ 38% YoY",
            dt: "text-[#4ADE80]",
          },
          {
            l: "AVG DELIVERY HEALTH",
            v: "96%",
            d: "On-time across 7 projects",
            dt: "text-white/40",
          },
          {
            l: "CLIENT NPS",
            v: "72",
            d: "▲ 8 pts this quarter",
            dt: "text-[#4ADE80]",
          },
        ].map((kpi, i) => (
          <div
            key={i}
            className="bg-white/5 border border-white/5 rounded-lg p-4 md:p-5 flex flex-col"
          >
            <div className="text-white/40 text-[10px] md:text-xs font-bold uppercase tracking-wider mb-2">
              {kpi.l}
            </div>
            <div className="text-white text-2xl md:text-3xl font-bold mb-2 tracking-tight">
              {kpi.v.includes("%") ? (
                <>
                  <AnimatedNumber valueStr={kpi.v.replace("%", "")} />{" "}
                  <span className="text-white/30 text-xl">%</span>
                </>
              ) : (
                <AnimatedNumber valueStr={kpi.v} />
              )}
            </div>
            <div className={`text-[10px] md:text-xs font-medium ${kpi.dt}`}>
              {kpi.d}
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col xl:flex-row gap-6">
        <div className="flex-1 bg-white/5 border border-white/5 rounded-lg p-5 flex flex-col relative min-h-[250px]">
          <div className="flex justify-between items-center mb-6">
            <span className="text-white/80 text-xs font-bold uppercase tracking-wider">
              Revenue trajectory
            </span>
            <span className="bg-brand-bright-orange/10 text-brand-bright-orange text-[10px] px-2 py-1 rounded font-bold uppercase tracking-wider border border-brand-bright-orange/20">
              Forecast live
            </span>
          </div>
          <div className="w-full flex-1 mt-auto relative min-h-[150px]">
            <svg
              viewBox="0 0 600 200"
              preserveAspectRatio="none"
              className="w-full h-full absolute inset-0"
            >
              <defs>
                <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#FF6B35" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#FF6B35" stopOpacity="0" />
                </linearGradient>
              </defs>
              <g stroke="rgba(245,241,235,0.08)" strokeWidth="1">
                <line x1="0" y1="40" x2="600" y2="40" />
                <line x1="0" y1="100" x2="600" y2="100" />
                <line x1="0" y1="160" x2="600" y2="160" />
              </g>
              <motion.path
                d="M 0 160 L 60 145 L 120 138 L 180 118 L 240 110 L 300 85 L 360 80 L 420 58 L 480 52 L 540 30 L 600 20 L 600 200 L 0 200 Z"
                fill="url(#g1)"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
              />
              <motion.path
                d="M 0 160 L 60 145 L 120 138 L 180 118 L 240 110 L 300 85 L 360 80 L 420 58 L 480 52 L 540 30 L 600 20"
                fill="none"
                stroke="#FF6B35"
                strokeWidth="3"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
              <line
                x1="420"
                y1="200"
                x2="420"
                y2="0"
                stroke="rgba(245,241,235,0.2)"
                strokeDasharray="3 4"
              />
              <line
                x1={lineX}
                y1="200"
                x2={lineX}
                y2="0"
                stroke="rgba(249,115,22,0.8)"
                strokeWidth="2"
                opacity={lineOpacity}
                style={{ transition: "all 0.2s" }}
              />
              <g fill="#FF6B35">
                {[
                  { cx: 60, cy: 145, r: 4 },
                  { cx: 180, cy: 118, r: 4 },
                  { cx: 300, cy: 85, r: 4 },
                  { cx: 420, cy: 58, r: 4 },
                  { cx: 540, cy: 30, r: 5, stroke: "#0B111D", strokeWidth: 2 },
                ].map((c, i) => (
                  <motion.circle
                    key={i}
                    cx={c.cx}
                    cy={c.cy}
                    r={c.r}
                    stroke={c.stroke}
                    strokeWidth={c.strokeWidth}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1.5 + i * 0.1, duration: 0.4 }}
                  />
                ))}
              </g>
              {chartData.map((d, i) => (
                <motion.text
                  key={i}
                  x={d.x}
                  y="190"
                  fontFamily="Inter, sans-serif"
                  fontSize="11"
                  fill="rgba(245,241,235,0.5)"
                  onMouseEnter={() => {
                    setLineX(d.x);
                    setLineOpacity(1);
                    setTooltip(d);
                  }}
                  onMouseLeave={() => {
                    setLineOpacity(0);
                    setTooltip(null);
                  }}
                  style={{ cursor: "pointer" }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 + i * 0.1, duration: 0.5 }}
                >
                  {d.month}
                </motion.text>
              ))}
            </svg>
            {tooltip && (
              <div
                className="absolute bg-black/90 text-white p-3 rounded-lg text-sm pointer-events-none shadow-lg border border-white/10 z-10"
                style={{
                  left: `${tooltip.x}px`,
                  top: "20px",
                  transform: "translateX(-50%)",
                }}
              >
                <div className="font-bold text-brand-bright-orange">
                  {tooltip.value}
                </div>
                <div className="text-white/70 text-xs">{tooltip.desc}</div>
              </div>
            )}
          </div>
        </div>

        <div className="flex-1 bg-white/5 border border-white/5 rounded-lg p-5 min-h-[250px]">
          <div className="flex justify-between items-center mb-6">
            <span className="text-white/80 text-xs font-bold uppercase tracking-wider">
              Active projects
            </span>
            <span className="bg-[#2E8B6E]/20 text-[#4ADE80] text-[10px] px-2 py-1 rounded font-bold uppercase tracking-wider border border-[#2E8B6E]/30">
              All on track
            </span>
          </div>
          <div className="flex flex-col space-y-4">
            {[
              {
                n: "Atlas Retail · data warehouse",
                t: "ZenCore · 8 weeks remaining",
                s: "In progress",
                sc: "bg-white/10 text-white/70 border-white/10",
                a: "$240K",
              },
              {
                n: "Hollow & Co · mobile app",
                t: "Bdcalling · QA phase",
                s: "QA review",
                sc: "bg-orange-500/10 text-brand-bright-orange border-orange-500/20",
                a: "$180K",
              },
              {
                n: "Lumen Apparel · digital OS",
                t: "Hamim Group · week 2",
                s: "In progress",
                sc: "bg-white/10 text-white/70 border-white/10",
                a: "$420K",
              },
              {
                n: "Pinecrest · AI ops agent",
                t: "Kicking off next Monday",
                s: "Planning",
                sc: "bg-white/5 text-white/40 border-white/5",
                a: "$95K",
              },
            ].map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.15, duration: 0.5 }}
                className="flex justify-between items-center pb-4 border-b border-white/5 last:border-0 last:pb-0"
              >
                <div className="flex-1 min-w-0 pr-4">
                  <div className="text-white text-sm font-semibold truncate">
                    {p.n}
                  </div>
                  <div className="text-white/40 text-xs truncate mt-1">
                    {p.t}
                  </div>
                </div>
                <div
                  className={`px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider border ${p.sc} hidden sm:block whitespace-nowrap`}
                >
                  {p.s}
                </div>
                <div className="text-white font-bold text-sm sm:w-20 text-right">
                  {p.a}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function ProjectsTab() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className="flex-1 p-5 md:p-8 flex flex-col gap-6 md:gap-8 overflow-x-auto h-full"
    >
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h4 className="text-white font-semibold text-lg md:text-xl tracking-tight">
            Active Projects
          </h4>
          <div className="text-white/50 text-xs md:text-sm mt-1">
            7 ongoing engagements
          </div>
        </div>
        <button className="px-4 py-2 bg-brand-bright-orange text-[#0A0F1A] text-xs font-bold tracking-widest uppercase rounded hover:bg-orange-400 transition-colors">
          + New project
        </button>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {[1, 2, 3, 4].map((i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white/5 border border-white/5 rounded-lg p-5 flex flex-col"
          >
            <div className="flex justify-between items-center mb-4">
              <div className="w-10 h-10 rounded bg-white/10 flex items-center justify-center text-xl">
                📁
              </div>
              <div className="text-[#4ADE80] text-[10px] font-bold uppercase tracking-wider border border-[#4ADE80]/20 bg-[#4ADE80]/10 px-2 py-1 rounded">
                On Track
              </div>
            </div>
            <h5 className="text-white font-bold mb-1">Project Alpha {i}</h5>
            <div className="text-white/50 text-xs mb-4">
              Milestone 3 of 5 &bull; Ends Dec 2026
            </div>
            <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden mt-auto">
              <motion.div
                className="bg-brand-bright-orange h-full"
                initial={{ width: 0 }}
                animate={{ width: `${60 + i * 10}%` }}
                transition={{ duration: 1, delay: 0.2 }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

function RevenueTab() {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
  const data = [45, 62, 58, 85, 72, 94];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className="flex-1 p-5 md:p-8 flex flex-col gap-6 md:gap-8 h-full"
    >
      <div className="flex justify-between items-center">
        <div>
          <h4 className="text-white font-semibold text-lg md:text-xl tracking-tight">
            Revenue Performance
          </h4>
          <div className="text-white/50 text-xs md:text-sm mt-1">
            YTD and projected earnings
          </div>
        </div>
        <button className="hidden sm:block px-3 py-1.5 bg-white/5 hover:bg-white/10 text-white/70 text-[10px] font-bold tracking-widest rounded border border-white/10 uppercase transition-all">
          Export Report
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white/5 border border-white/5 rounded-lg p-5">
          <div className="text-white/40 text-xs font-bold uppercase tracking-wider mb-2">
            Total YTD
          </div>
          <div className="text-white text-3xl font-bold">
            <AnimatedNumber valueStr="$1.24M" />
          </div>
        </div>
        <div className="bg-white/5 border border-white/5 rounded-lg p-5">
          <div className="text-white/40 text-xs font-bold uppercase tracking-wider mb-2">
            Pending
          </div>
          <div className="text-white text-3xl font-bold">
            <AnimatedNumber valueStr="$420K" />
          </div>
        </div>
        <div className="bg-white/5 border border-white/5 rounded-lg p-5">
          <div className="text-white/40 text-xs font-bold uppercase tracking-wider mb-2">
            Projected Q4
          </div>
          <div className="text-brand-bright-orange text-3xl font-bold">
            <AnimatedNumber valueStr="$890K" />
          </div>
        </div>
      </div>

      <div className="flex-1 bg-[#0D1525] border border-white/5 rounded-xl p-6 md:p-8 min-h-[300px] flex flex-col">
        <div className="flex items-center justify-between mb-8">
          <span className="text-white/70 text-sm font-medium tracking-tight">
            Monthly Growth
          </span>
          <div className="flex gap-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-brand-bright-orange" />
              <span className="text-white/40 text-[10px] uppercase font-bold tracking-widest">
                Net Revenue
              </span>
            </div>
          </div>
        </div>

        <div className="flex-1 flex items-end justify-between gap-2 md:gap-4 px-2">
          {months.map((month, i) => (
            <div
              key={month}
              className="flex-1 flex flex-col items-center gap-4 group cursor-pointer"
            >
              <div className="relative w-full flex justify-center items-end h-[180px]">
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: `${data[i]}%` }}
                  transition={{ duration: 1, delay: i * 0.1, ease: "easeOut" }}
                  className="w-full max-w-[32px] bg-gradient-to-t from-brand-bright-orange/20 to-brand-bright-orange rounded-t-sm relative group-hover:to-orange-400 transition-all duration-300 shadow-[0_-10px_20px_rgba(249,115,22,0.1)]"
                >
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white text-brand-black px-2 py-1 rounded-sm text-[10px] font-bold opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap shadow-xl">
                    ${data[i] * 10}K
                  </div>
                </motion.div>
              </div>
              <span className="text-white/30 text-[10px] font-bold tracking-widest uppercase">
                {month}
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function PipelineTab() {
  const stages = [
    { name: "Discovery", count: 6 },
    { name: "Proposal", count: 4 },
    { name: "Negotiation", count: 2 },
  ];

  const leads = {
    Discovery: [
      {
        id: 1,
        name: "Global Logistics Inc.",
        value: "$120K",
        date: "2 days ago",
        priority: "Medium",
      },
      {
        id: 2,
        name: "BioTech Solutions",
        value: "$85K",
        date: "5 days ago",
        priority: "Low",
      },
      {
        id: 3,
        name: "SmartRetail Group",
        value: "$210K",
        date: "1 week ago",
        priority: "High",
      },
    ],
    Proposal: [
      {
        id: 4,
        name: "EduTech Systems",
        value: "$150K",
        date: "Yesterday",
        priority: "High",
      },
      {
        id: 5,
        name: "Urban Mobility Corp",
        value: "$320K",
        date: "3 days ago",
        priority: "High",
      },
      {
        id: 7,
        name: "FinLease SaaS",
        value: "$90K",
        date: "4 days ago",
        priority: "Medium",
      },
      {
        id: 8,
        name: "HealthLink Platform",
        value: "$210K",
        date: "1 week ago",
        priority: "High",
      },
    ],
    Negotiation: [
      {
        id: 6,
        name: "CloudNexus AI",
        value: "$480K",
        date: "Today",
        priority: "Urgent",
      },
      {
        id: 9,
        name: "OmniRetail CRM",
        value: "$1.2M",
        date: "2 days ago",
        priority: "Urgent",
      },
      {
        id: 10,
        name: "SecurePay Gateway",
        value: "$350K",
        date: "3 days ago",
        priority: "High",
      },
    ],
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className="flex-1 p-5 md:p-8 flex flex-col gap-6 md:gap-8 overflow-hidden h-full"
    >
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h4 className="text-white font-semibold text-lg md:text-xl tracking-tight">
            Sales Pipeline
          </h4>
          <div className="text-white/50 text-xs md:text-sm mt-1">
            Track and manage your active opportunities
          </div>
        </div>
        <div className="flex gap-2">
          <div className="bg-white/5 border border-white/10 px-3 py-2 rounded-lg">
            <div className="text-white/40 text-[10px] font-bold uppercase tracking-widest mb-0.5">
              Win Rate
            </div>
            <div className="text-white text-sm font-bold">68%</div>
          </div>
          <div className="bg-white/5 border border-white/10 px-3 py-2 rounded-lg">
            <div className="text-white/40 text-[10px] font-bold uppercase tracking-widest mb-0.5">
              Velocity
            </div>
            <div className="text-white text-sm font-bold">14 Days</div>
          </div>
        </div>
      </div>

      <div className="flex gap-4 overflow-x-auto pb-4 h-full min-h-[400px]">
        {stages.map((stage, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.15 }}
            className="min-w-[280px] md:min-w-[320px] flex-1 bg-white/[0.02] border border-white/5 rounded-xl p-4 flex flex-col"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <div
                  className={`w-2 h-2 rounded-full ${stage.name === "Negotiation" ? "bg-brand-bright-orange" : "bg-white/40"}`}
                />
                <span className="text-white font-bold text-sm tracking-wide uppercase">
                  {stage.name}
                </span>
              </div>
              <span className="text-white/20 text-xs font-bold">
                {leads[stage.name]?.length || 0}
              </span>
            </div>

            <div className="flex flex-col gap-3 overflow-y-auto pr-1">
              {leads[stage.name]?.map((lead) => (
                <div
                  key={lead.id}
                  className="bg-[#0B111D] border border-white/5 rounded-xl p-4 hover:border-brand-bright-orange/30 transition-all cursor-pointer group"
                >
                  <div className="flex justify-between items-start mb-2">
                    <div className="text-white text-sm font-bold group-hover:text-brand-bright-orange transition-colors">
                      {lead.name}
                    </div>
                    <div
                      className={`text-[9px] font-bold px-1.5 py-0.5 rounded uppercase tracking-tighter ${
                        lead.priority === "Urgent"
                          ? "bg-red-500/20 text-red-400"
                          : lead.priority === "High"
                            ? "bg-orange-500/20 text-orange-400"
                            : "bg-white/10 text-white/40"
                      }`}
                    >
                      {lead.priority}
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/[0.03]">
                    <div className="text-brand-bright-orange font-bold text-sm">
                      {lead.value}
                    </div>
                    <div className="text-white/30 text-[10px] font-medium">
                      {lead.date}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

function TeamTab() {
  const team = [
    {
      name: "Michael Chen",
      email: "michael@meridian.com",
      role: "Admin",
      initials: "MC",
      status: "Active",
    },
    {
      name: "Jessica Williams",
      email: "jessica@meridian.com",
      role: "Editor",
      initials: "JW",
      status: "Active",
    },
    {
      name: "David Rodriguez",
      email: "david@meridian.com",
      role: "Viewer",
      initials: "DR",
      status: "Offline",
    },
    {
      name: "Elena Kostas",
      email: "elena@meridian.com",
      role: "Strategy",
      initials: "EK",
      status: "Active",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className="flex-1 p-5 md:p-8 flex flex-col gap-8 h-full"
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h4 className="text-white font-semibold text-lg md:text-xl tracking-tight">
            Your Team
          </h4>
          <div className="text-white/50 text-xs md:text-sm mt-1">
            Manage partner access and specialized support
          </div>
        </div>
        <button className="w-fit px-4 py-2 bg-brand-bright-orange text-black text-xs font-bold tracking-widest rounded-lg uppercase hover:bg-orange-400 transition-colors">
          Invite Member
        </button>
      </div>

      {/* Dedicated Support Section */}
      <div className="bg-linear-to-br from-brand-bright-orange/10 to-transparent border border-brand-bright-orange/20 rounded-xl p-5 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="w-14 h-14 rounded-full bg-brand-bright-orange flex items-center justify-center text-black font-bold text-xl">
              SJ
            </div>
            <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 border-2 border-[#0B111D] rounded-full" />
          </div>
          <div>
            <div className="text-white font-bold">Sarah Jenkins</div>
            <div className="text-brand-bright-orange text-xs font-medium">
              Your Dedicated Success Manager
            </div>
          </div>
        </div>
        <div className="flex gap-2">
          <button className="p-2 bg-white/5 hover:bg-white/10 rounded-lg text-white transition-colors">
            💬
          </button>
          <button className="p-2 bg-white/5 hover:bg-white/10 rounded-lg text-white transition-colors">
            📞
          </button>
        </div>
      </div>

      <div className="flex-1">
        <div className="text-white/30 text-[10px] font-bold tracking-widest uppercase mb-4 px-1">
          Internal Members
        </div>
        <div className="bg-white/[0.03] border border-white/5 rounded-xl overflow-hidden">
          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center justify-between p-4 border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 text-white/80 flex items-center justify-center font-bold text-sm">
                  {member.initials}
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">
                    {member.name}
                  </div>
                  <div className="text-white/40 text-xs">{member.email}</div>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div
                  className={`hidden sm:flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider ${member.status === "Active" ? "text-green-500" : "text-white/20"}`}
                >
                  <div
                    className={`w-1 h-1 rounded-full ${member.status === "Active" ? "bg-green-500" : "bg-white/20"}`}
                  />
                  {member.status}
                </div>
                <div className="text-white/30 text-[10px] font-bold px-2 py-1 border border-white/10 rounded uppercase tracking-widest min-w-[80px] text-center">
                  {member.role}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function MessagesTab() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "You",
      text: "Hey, could we get an update on the Atlas Retail scope?",
      time: "10:15 AM",
      type: "sent",
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const typingTimer = setTimeout(() => setIsTyping(true), 1500);
    const replyTimer = setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        {
          id: 2,
          sender: "Sarah Jenkins",
          text: "Hi! Just finalized the resource allocation. The updated scope document is ready for your review in the Projects tab.",
          time: "10:17 AM",
          type: "received",
        },
      ]);
    }, 4000);

    const autoReplyTimer = setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: 3,
          sender: "You",
          text: "Perfect, thanks Sarah. I'll take a look right now!",
          time: "10:18 AM",
          type: "sent",
        },
      ]);
    }, 7000);

    return () => {
      clearTimeout(typingTimer);
      clearTimeout(replyTimer);
      clearTimeout(autoReplyTimer);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className="flex-1 p-5 md:p-8 flex flex-col h-full overflow-hidden"
    >
      <div className="flex justify-between items-center mb-6">
        <div>
          <h4 className="text-white font-semibold text-lg md:text-xl tracking-tight">
            Team Chat
          </h4>
          <div className="text-white/50 text-xs md:text-sm mt-1">
            Direct channel with your Success Manager
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex -space-x-2">
            <div className="w-8 h-8 rounded-full bg-brand-bright-orange border-2 border-[#0B111D] flex items-center justify-center text-[10px] font-bold text-black">
              SJ
            </div>
            <div className="w-8 h-8 rounded-full bg-gray-700 border-2 border-[#0B111D] flex items-center justify-center text-[10px] font-bold text-white">
              MK
            </div>
          </div>
          <div className="text-white/40 text-[10px] font-bold uppercase tracking-widest bg-white/5 px-2 py-1 rounded">
            2 Online
          </div>
        </div>
      </div>

      <div className="flex-1 bg-white/[0.02] border border-white/5 rounded-2xl flex flex-col overflow-hidden">
        <div className="flex-1 p-5 flex flex-col gap-6 overflow-y-auto">
          <AnimatePresence initial={false}>
            {messages.map((msg) => (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.4 }}
                className={`flex flex-col ${msg.type === "sent" ? "items-end" : "items-start"}`}
              >
                <div
                  className={`flex items-center gap-2 mb-1 ${msg.type === "sent" ? "flex-row-reverse" : "flex-row"}`}
                >
                  <span className="text-white/30 text-[9px] font-bold uppercase tracking-widest">
                    {msg.sender}
                  </span>
                  <span className="text-white/20 text-[9px]">{msg.time}</span>
                </div>
                <div
                  className={`max-w-[85%] md:max-w-[70%] p-4 rounded-2xl text-sm leading-relaxed ${
                    msg.type === "sent"
                      ? "bg-brand-bright-orange text-black font-medium rounded-tr-none"
                      : "bg-white/5 text-white border border-white/5 rounded-tl-none"
                  }`}
                >
                  {msg.text}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {isTyping && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col items-start"
            >
              <span className="text-white/30 text-[9px] font-bold uppercase tracking-widest mb-1">
                Sarah Jenkins
              </span>
              <div className="bg-white/5 border border-white/5 p-3 rounded-2xl rounded-tl-none flex gap-1">
                <span className="w-1.5 h-1.5 bg-white/20 rounded-full animate-bounce" />
                <span className="w-1.5 h-1.5 bg-white/20 rounded-full animate-bounce [animation-delay:0.2s]" />
                <span className="w-1.5 h-1.5 bg-white/20 rounded-full animate-bounce [animation-delay:0.4s]" />
              </div>
            </motion.div>
          )}
        </div>

        {/* Input Area */}
        <div className="p-4 bg-white/[0.02] border-t border-white/5 flex gap-3">
          <input
            type="text"
            placeholder="Type a message..."
            className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-brand-bright-orange/50 transition-colors"
          />
          <button className="bg-brand-bright-orange text-black w-12 h-12 rounded-xl flex items-center justify-center font-bold hover:bg-orange-400 transition-colors">
            ➔
          </button>
        </div>
      </div>
    </motion.div>
  );
}

function ReportsTab() {
  const categories = [
    {
      title: "Financial Insights",
      reports: [
        {
          name: "Revenue Breakdown Q1 2026",
          size: "2.4 MB",
          date: "Apr 12, 2026",
        },
        {
          name: "Margin Analysis & Projections",
          size: "1.8 MB",
          date: "Apr 05, 2026",
        },
        {
          name: "Partner Payout History",
          size: "0.9 MB",
          date: "Mar 30, 2026",
        },
      ],
    },
    {
      title: "Operational Excellence",
      reports: [
        {
          name: "Project Velocity & Deadlines",
          size: "3.1 MB",
          date: "Apr 10, 2026",
        },
        {
          name: "Resource Utilization (YTD)",
          size: "4.2 MB",
          date: "Apr 02, 2026",
        },
        {
          name: "Quality Assurance Audit",
          size: "1.5 MB",
          date: "Mar 25, 2026",
        },
      ],
    },
    {
      title: "Strategic Growth",
      reports: [
        {
          name: "Market Expansion Roadmap",
          size: "5.6 MB",
          date: "Mar 15, 2026",
        },
        {
          name: "Competency Mapping Audit",
          size: "2.2 MB",
          date: "Mar 10, 2026",
        },
        {
          name: "Scalability Index Report",
          size: "1.1 MB",
          date: "Mar 01, 2026",
        },
      ],
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className="flex-1 p-5 md:p-8 flex flex-col gap-8 h-full overflow-y-auto"
    >
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h4 className="text-white font-semibold text-lg md:text-xl tracking-tight">
            Knowledge Center
          </h4>
          <div className="text-white/50 text-xs md:text-sm mt-1">
            Performance insights and strategic documentation
          </div>
        </div>
        <div className="flex bg-white/5 border border-white/10 rounded-lg p-1">
          <button className="px-3 py-1.5 bg-white/10 text-white text-[10px] font-bold uppercase tracking-widest rounded shadow-lg">
            PDF
          </button>
          <button className="px-3 py-1.5 text-white/40 text-[10px] font-bold uppercase tracking-widest hover:text-white/60 transition-colors">
            CSV
          </button>
        </div>
      </div>

      <div className="space-y-8 pb-8">
        {categories.map((cat, idx) => (
          <div key={idx} className="space-y-4">
            <div className="flex items-center gap-4">
              <h5 className="text-white/40 text-[10px] font-bold uppercase tracking-widest">
                {cat.title}
              </h5>
              <div className="flex-1 h-px bg-white/5" />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-3">
              {cat.reports.map((report, i) => (
                <motion.div
                  key={i}
                  className="group bg-[#0B111D] border border-white/5 rounded-xl p-3 hover:border-brand-bright-orange/30 hover:bg-white/[0.03] transition-all duration-300 cursor-pointer flex items-center justify-between gap-4"
                >
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="w-8 h-8 shrink-0 rounded bg-white/5 flex items-center justify-center text-sm group-hover:bg-brand-bright-orange/10 group-hover:text-brand-bright-orange transition-all duration-300">
                      📄
                    </div>
                    <div className="overflow-hidden">
                      <h6 className="text-white font-medium text-xs truncate group-hover:text-brand-bright-orange transition-colors">
                        {report.name}
                      </h6>
                      <div className="text-white/20 text-[9px] font-bold uppercase tracking-tighter">
                        {report.size} &bull; {report.date}
                      </div>
                    </div>
                  </div>
                  <div className="text-brand-bright-orange text-lg opacity-0 group-hover:opacity-100 transition-opacity shrink-0">
                    <div className="w-6 h-6 rounded-full border border-brand-bright-orange/30 flex items-center justify-center text-xs">
                      ↓
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default function PartnerPortal() {
  const [activeTab, setActiveTab] = useState("Dashboard");
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay) return;
    const timer = setInterval(() => {
      setActiveTab((curr) => {
        const idx = TABS.indexOf(curr);
        return TABS[(idx + 1) % TABS.length];
      });
    }, 4000);
    return () => clearInterval(timer);
  }, [isAutoPlay]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setIsAutoPlay(false); // Stop autoplay when user interacts
  };

  return (
    <section className="bg-brand-black py-10 lg:py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end gap-6 mb-10 lg:mb-16">
          <ScrollReveal>
            <span className="text-brand-bright-orange text-lg md:text-md tracking-widest mb-2 block">
              The Partner Portal
            </span>
            <Heading level={2} className="text-white">
              Your command center for all things partnership
            </Heading>
          </ScrollReveal>

          <ScrollReveal delay={0.2} className="w-full lg:w-auto">
            <div className="flex flex-wrap justify-start lg:justify-end items-center gap-3">
              <div className="flex animate-pulse items-center gap-2 px-2 py-1 rounded-full border border-white/10 bg-white/5 text-white/80 text-xs md:text-sm  tracking-widest uppercase hover:bg-white/10 transition-colors">
                <span className="w-2 h-2 rounded-full bg-brand-bright-orange shadow-[0_0_8px_rgba(249,115,22,0.8)] animate-[pulse_2s_ease-in-out_infinite]" />
                LIVE
              </div>
              <div className="px-2 py-1 rounded-full border border-white/10 bg-white/5 text-white/80 text-xs md:text-sm tracking-widest uppercase hover:bg-white/10 transition-colors">
                24 / 7 ACCESS
              </div>
              <div className="px-2 py-1 rounded-full border border-white/10 bg-white/5 text-white/80 text-xs md:text-sm tracking-widest uppercase hover:bg-white/10 transition-colors">
                MOBILE READY
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Dashboard Code */}
        <ScrollReveal delay={0.3}>
          <div className="relative w-full rounded-xl md:rounded-2xl overflow-hidden border border-white/10 bg-[#0B111D] shadow-2xl mb-8 md:mb-12 flex flex-col md:flex-row font-sans min-h-[600px]">
            {/* Sidebar */}
            <div className="hidden md:flex flex-col w-64 bg-[#080D16] border-r border-white/5 p-4 shrink-0">
              <div className="py-2 px-3 pb-6">
                <Image
                  src="/logo.svg"
                  alt="Betopia"
                  width={100}
                  height={24}
                  className="h-6 w-auto brightness-0 invert opacity-90"
                />
              </div>

              <div className="flex flex-col space-y-1 relative">
                {TABS.map((item) => {
                  const isActive = activeTab === item;
                  return (
                    <button
                      key={item}
                      onClick={() => handleTabClick(item)}
                      className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all w-full text-left relative z-10 ${
                        isActive
                          ? "text-brand-bright-orange"
                          : "text-white/50 hover:text-white"
                      }`}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="activeTabBg"
                          className="absolute inset-0 bg-brand-bright-orange/10 rounded-lg -z-10"
                          transition={{
                            type: "spring",
                            bounce: 0.2,
                            duration: 0.6,
                          }}
                        />
                      )}
                      <div
                        className={`w-2.5 h-2.5 rounded-sm transition-colors ${
                          isActive ? "bg-brand-bright-orange" : "bg-white/20"
                        }`}
                      />
                      {item}
                    </button>
                  );
                })}
              </div>

              <div className="mt-auto text-[11px] text-white/35 p-3">
                Logged in as
                <br />
                <span className="text-white/70 font-semibold text-xs">
                  Meridian Advisory
                </span>
              </div>
            </div>

            {/* Mobile Tab Scroller */}
            <div className="flex md:hidden overflow-x-auto p-4 border-b border-white/5 gap-2 hide-scrollbar shrink-0 bg-[#080D16]">
              {TABS.map((item) => {
                const isActive = activeTab === item;
                return (
                  <button
                    key={item}
                    onClick={() => handleTabClick(item)}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors ${
                      isActive
                        ? "bg-brand-bright-orange/10 text-brand-bright-orange border border-brand-bright-orange/20"
                        : "bg-white/5 text-white/50 border border-white/5"
                    }`}
                  >
                    {item}
                  </button>
                );
              })}
            </div>

            {/* Main Content Area */}
            <div className="flex-1 bg-[#0B111D] relative overflow-hidden flex flex-col min-h-[500px]">
              <AnimatePresence mode="wait">
                {activeTab === "Dashboard" && <DashboardTab key="dashboard" />}
                {activeTab === "Projects" && <ProjectsTab key="projects" />}
                {activeTab === "Revenue" && <RevenueTab key="revenue" />}
                {activeTab === "Pipeline" && <PipelineTab key="pipeline" />}
                {activeTab === "Team" && <TeamTab key="team" />}
                {activeTab === "Messages" && <MessagesTab key="messages" />}
                {activeTab === "Reports" && <ReportsTab key="reports" />}
              </AnimatePresence>
            </div>
          </div>
        </ScrollReveal>

        {/* Footer Text */}
        <ScrollReveal delay={0.4}>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 border-t border-white/10 pt-8">
            <div className="flex flex-col gap-1">
              <h3 className="text-xl md:text-2xl font-semibold text-white tracking-tight">
                You're never in the dark
              </h3>
            </div>
            <p className="text-sm md:text-base text-white/60 max-w-md md:text-right leading-relaxed">
              You always know what's happening, what you're making and what's
              coming next.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
