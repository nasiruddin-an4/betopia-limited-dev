import { notFound } from "next/navigation";
import SolutionPageLayout from "../../components/SolutionPageLayout";
import solutionsData from "../../data/solutions.json";
import React from "react";

export default function SolutionDynamicPage({ params }) {
  const unwrappedParams = React.use(params);
  const { slug } = unwrappedParams;

  const data = solutionsData[slug];

  if (!data || slug === "overview") {
    return notFound();
  }

  return <SolutionPageLayout data={data} />;
}
