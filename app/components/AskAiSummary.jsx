"use client";

import Image from "next/image";
import { useState } from "react";
import { X } from "lucide-react";

const PROMPT = `I am considering Betopia Limited summarize the key points from this page. https://www.dev.betopialimited.com/`;

const providers = [
  {
    name: "ChatGPT",
    url: "https://chat.openai.com/search?q=${encodeURIComponent(PROMPT)}",
    icon: "/aiIcon/ChatGPT-Logo.png",
    supportsDirectPrompt: false,
  },
  {
    name: "Perplexity",
    url: `https://www.perplexity.ai/search?q=${encodeURIComponent(PROMPT)}`,
    icon: "/aiIcon/perplexity-color.png",
    supportsDirectPrompt: true,
  },
  {
    name: "Google Gemini",
    url: "https://gemini.google.com/search?q=${encodeURIComponent(PROMPT)}",
    icon: "/aiIcon/Google_Gemini_icon_2025.svg.png",
    supportsDirectPrompt: false,
  },
  {
    name: "Claude",
    url: "https://claude.ai/search?q=${encodeURIComponent(PROMPT)}",
    icon: "/aiIcon/claude-ai-icon.webp",
    supportsDirectPrompt: false,
  },
  {
    name: "Grok",
    url: "https://x.com/grok/search?q=${encodeURIComponent(PROMPT)}",
    icon: "/aiIcon/grok-icon.webp",
    supportsDirectPrompt: false,
  },
];

export default function AskAiSummary() {
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState("");

  const handleAskAi = async (provider) => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(PROMPT);
        setStatus(`Prompt copied! Opening ${provider.name}...`);
      } else {
        setStatus(
          `Copy the prompt manually and paste it into ${provider.name}.`,
        );
      }
    } catch (error) {
      console.error("Clipboard copy failed", error);
      setStatus(
        `Please manually copy and paste the prompt into ${provider.name}.`,
      );
    }

    window.open(provider.url, "_blank", "noopener,noreferrer");

    window.setTimeout(() => {
      setStatus("");
    }, 4000);
  };

  return (
    <div
      className="fixed left-4 bottom-4 z-50 flex flex-col items-start md:items-start"
      onMouseEnter={() => window.innerWidth >= 768 && setIsOpen(true)}
      onMouseLeave={() => window.innerWidth >= 768 && setIsOpen(false)}
    >
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center gap-2 md:gap-3 rounded-full bg-brand-bright-orange px-4 md:px-5 py-2.5 md:py-3 text-xs md:text-sm font-semibold text-[#0a0f1a] shadow-[0_25px_60px_rgba(254,197,63,0.35)] transition-all duration-300 hover:shadow-[0_30px_90px_rgba(254,197,63,0.4)]"
      >
        <span className="inline-flex h-8 md:h-9 w-8 md:w-9 items-center justify-center rounded-full bg-white/90 text-brand-bright-orange text-sm md:text-lg font-bold">
          AI
        </span>
        <span className="whitespace-nowrap hidden md:inline">
          Ask AI summary
        </span>
      </button>

      <div
        className={`mt-3 w-80 md:w-96 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_30px_100px_rgba(15,23,42,0.2)] transition-all duration-500 ease-[cubic-bezier(0.25,0.8,0.25,1)] ${
          isOpen
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 -translate-y-4 scale-95 pointer-events-none"
        }`}
        style={{
          maxHeight: isOpen ? "600px" : "0px",
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-100 bg-linear-to-r from-brand-bright-orange/5 to-transparent px-6 py-4">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] font-bold text-brand-bright-orange">
              Ask AI
            </p>
            <p className="text-sm font-semibold text-slate-900 mt-1">
              Choose an AI Model
            </p>
          </div>
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="md:hidden inline-flex h-8 w-8 items-center justify-center rounded-full text-slate-500 hover:bg-slate-100 hover:text-slate-900 transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Content */}
        <div
          className="p-4 space-y-3 overflow-y-auto"
          style={{ maxHeight: isOpen ? "450px" : "0px" }}
        >
          {providers.map((provider) => (
            <button
              key={provider.name}
              type="button"
              onClick={() => handleAskAi(provider)}
              className="w-full flex items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-left text-sm text-slate-900 transition-all duration-300 hover:border-brand-bright-orange hover:bg-brand-bright-orange/5 group"
            >
              <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white group-hover:bg-brand-bright-orange/10 transition-colors">
                <Image
                  src={provider.icon}
                  alt={`${provider.name} icon`}
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </span>
              <div className="flex-1">
                <p className="font-semibold text-slate-900">{provider.name}</p>
                <p className="text-xs text-slate-500 mt-0.5">
                  {provider.supportsDirectPrompt
                    ? "Direct search"
                    : "Paste prompt to chat"}
                </p>
              </div>
              <span className="inline-flex h-6 px-2.5 items-center rounded-full bg-brand-bright-orange text-[10px] font-bold text-white group-hover:scale-105 transition-transform">
                Open
              </span>
            </button>
          ))}

          {/* Prompt Display */}
          <div className="mt-4 p-4 rounded-2xl bg-slate-900 border border-slate-700">
            <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400 mb-2">
              Prompt to paste:
            </p>
            <p
              className="text-xs text-slate-200 leading-relaxed font-mono"
              style={{ wordBreak: "break-word" }}
            >
              {PROMPT}
            </p>
          </div>
        </div>
      </div>

      {/* Status Message */}
      {status ? (
        <div className="mt-3 px-4 py-2.5 rounded-2xl border border-brand-bright-orange/30 bg-brand-bright-orange/10 text-xs text-brand-bright-orange shadow-[0_3px_20px_rgba(254,197,63,0.15)] max-w-xs">
          {status}
        </div>
      ) : null}
    </div>
  );
}
