"use client";

import React from "react";
import { notFound } from "next/navigation";
import IndustryPageLayout from "../../components/IndustryPageLayout";
import industriesData from "../../data/industries.json";

export default function IndustryDynamicPage({ params }) {
  const unwrappedParams = React.use(params);
  const { slug } = unwrappedParams;
  const data = industriesData[slug];

  if (!data) {
    return notFound();
  }

  return <IndustryPageLayout data={data} />;
}
