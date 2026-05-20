"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function RollingButton({
  text,
  href,
  variant = "primary",
  icon: Icon = ArrowRight,
  showIcon = true,
  className = "",
  target,
}) {
  const baseStyles =
    "h-12 px-6 rounded-md transition-all duration-300 ease-out text-md inline-flex justify-center flex-nowrap items-center gap-3 group hover:-translate-y-1 cursor-pointer overflow-hidden relative w-auto max-w-full";

  const variants = {
    primary: "bg-[#FA753D] text-white shadow-[#FA753D]/30 hover:shadow-[0_0_20px_rgba(255,107,0,0.5)]",
    secondary:
      "bg-white text-black hover:bg-slate-900 hover:text-white border border-slate-200",
    outline:
      "bg-transparent border border-white/20 text-white hover:bg-white hover:text-black hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]",
  };

  const buttonContent = (
    <>
      <div className="relative overflow-hidden h-7">
        <div className="flex flex-col transition-transform duration-500 ease-[0.22,1,0.36,1] group-hover:-translate-y-1/2">
          <span className="h-7 flex items-center whitespace-nowrap">
            {text}
          </span>
          <span className="h-7 flex items-center whitespace-nowrap">
            {text}
          </span>
        </div>
      </div>
      {showIcon && Icon && (
        <Icon className="w-6 h-6 group-hover:translate-x-1.5 transition-transform duration-300 ease-out shrink-0" />
      )}
    </>
  );

  const combinedClasses = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    const isExternal = href.startsWith("http") || target === "_blank";

    if (isExternal) {
      return (
        <a
          href={href}
          target={target || "_blank"}
          rel="noopener noreferrer"
          className={combinedClasses}
        >
          {buttonContent}
        </a>
      );
    }

    return (
      <Link href={href} target={target} className={combinedClasses}>
        {buttonContent}
      </Link>
    );
  }

  return <button className={combinedClasses}>{buttonContent}</button>;
}
