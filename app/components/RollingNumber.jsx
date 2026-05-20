"use client";

import React, { useState, useEffect, useRef } from "react";

const TickerDigit = ({ target, isVisible, delay, isUp }) => {
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div className="h-[1.1em] overflow-hidden relative inline-block">
      <div
        className="flex flex-col transition-all duration-1500 ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{
          transform: isVisible
            ? `translateY(-${target * 10}%)`
            : `translateY(${isUp ? "100%" : "-100%"})`,
          opacity: isVisible ? 1 : 0,
          transitionDelay: `${delay}ms`,
        }}
      >
        {numbers.map((n) => (
          <span key={n} className="h-full flex items-center justify-center">
            {n}
          </span>
        ))}
      </div>
    </div>
  );
};

const RollingNumber = ({ value, suffix = "" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 },
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const chars = String(value).split("");

  return (
    <div
      ref={containerRef}
      className="flex items-center overflow-hidden h-[1.1em]"
    >
      {chars.map((char, i) => {
        const isNumeric = !isNaN(parseInt(char));
        const isUp = i % 2 === 0;

        if (!isNumeric) {
          return (
            <span
              key={i}
              className={`transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {char}
            </span>
          );
        }

        return (
          <TickerDigit
            key={i}
            target={parseInt(char)}
            isVisible={isVisible}
            delay={i * 150}
            isUp={isUp}
          />
        );
      })}
      {suffix && (
        <span
          className={`inline-block transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
          style={{ transitionDelay: `${chars.length * 150}ms` }}
        >
          {suffix}
        </span>
      )}
    </div>
  );
};

export default RollingNumber;
