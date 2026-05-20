import CareerClient from "./CareerClient";

async function getJobs() {
  try {
    const jobsApiUrl = "https://career.betopiagroup.com/api";
    const res = await fetch(
      `${jobsApiUrl}/jobs/published`,
      {
        next: { revalidate: 60 },
      },
    );

    if (!res.ok) {
      console.warn(`Jobs API failed with status: ${res.status}`);
      return [];
    }

    const contentType = res.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      console.warn("Jobs API returned non-JSON response");
      return [];
    }

    const result = await res.json();
    if (result?.success) {
      return result.jobs || [];
    }
    return [];
  } catch (error) {
    console.error("Error fetching jobs:", error);
    return [];
  }
}

async function getCareerPageContent() {
  try {
    let baseUrl =
      process.env.NEXT_PUBLIC_PAGE_DATA_API ||
      process.env.NEXT_PUBLIC_BACKEND_API_URL ||
      "https://dashboard.betopiagroup.com/api";

    // If baseUrl is relative (like /api), we must use the absolute backend URL for server-side fetch
    if (baseUrl.startsWith("/")) {
      baseUrl =
        process.env.NEXT_PUBLIC_BACKEND_API_URL ||
        "https://dashboard.betopiagroup.com/api";
    }

    const res = await fetch(`${baseUrl}/pages/career/`, {
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      console.warn(`Career CMS API failed with status: ${res.status}`);
      return {};
    }

    const contentType = res.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      console.warn("Career CMS API returned non-JSON response");
      return {};
    }

    const result = await res.json();
    return result?.success ? result.data : {};
  } catch (error) {
    console.error("Error fetching career page content:", error);
    return {};
  }
}

export default async function CareerPage() {
  const jobs = await getJobs();
  const cmsContent = await getCareerPageContent();

  return <CareerClient jobs={jobs} cmsContent={cmsContent} />;
}
