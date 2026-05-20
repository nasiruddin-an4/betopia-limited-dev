import React from "react";

const headingStyles = {
  1: "text-4xl md:text-5xl lg:text-6xl",
  2: "text-3xl md:text-4xl lg:text-5xl",
  3: "text-2xl md:text-3xl lg:text-4xl",
  4: "text-xl md:text-2xl lg:text-3xl",
  5: "text-lg md:text-xl lg:text-2xl",
  6: "text-base md:text-lg lg:text-xl",
};

const Heading = ({ level = 1, children, className = "", ...props }) => {
  const Tag = `h${level}`;
  const sizeClass = headingStyles[level] || headingStyles[1];
  const baseClass =
    "font-semibold text-brand-black tracking-tight leading-[1.1] mb-2";

  return (
    <Tag className={`${baseClass} ${sizeClass} ${className}`} {...props}>
      {children}
    </Tag>
  );
};

export default Heading;
