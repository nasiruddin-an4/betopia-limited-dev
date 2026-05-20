import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  MapPin,
  Building2,
  UsersRound,
  Briefcase,
  Clock,
  Monitor,
  Share2,
} from "lucide-react";
import "./job-detail.css";

/**
 * Process the raw description HTML from the API to ensure section titles
 * are properly wrapped in heading tags. The API returns inconsistent HTML
 * where some jobs use <h2>/<h3> for titles while others use plain <div> or <p>.
 */
function processDescriptionHtml(html) {
  if (!html) return "";

  // Known section title patterns (case-insensitive matching)
  const titlePatterns = [
    "Key Points",
    "Job Description",
    "Job Description / Responsibility",
    "Job Description/Responsibility",
    "Job Summary",
    "Key Responsibilities",
    "Experience Requirements",
    "Requirements & Qualifications",
    "Requirements and Qualifications",
    "Requirements",
    "Qualifications",
    "Education",
    "Content Flair",
    "Organizational Mastery",
    "Social Media Savvy",
    "The Ideal Candidate",
    "Job Location",
    "Preferred Qualifications",
    "Key Competencies",
    "Additional Requirements",
    "Benefits",
    "Salary",
    "Compensation",
    "About the Role",
    "About Us",
    "Responsibilities",
    "Responsibilities & Context",
    "Skills",
    "Experience",
    "What We Offer",
    "Why Join Us",
    "Job Context",
    "Work Context",
    "Workplace",
    "Skills & Expertise",
    "Compensation & Other Benefits",
    "Employment Status",
    "Job Location",
    "Additional Requirements",
    "Preferred Qualifications",
    "Responsibilities & Context",
  ];

  // Sort by length descending so longer patterns match first
  const sorted = [...titlePatterns].sort((a, b) => b.length - a.length);

  // Build a regex that matches <div>Title</div> or <p>Title</p>
  // with optional trailing colon, whitespace, <br> divs
  let processed = html;

  for (const title of sorted) {
    // Escape regex special characters in the title
    const escaped = title.replace(/[.*+?^${}()|[\]\\\/&]/g, "\\$&");

    // Match <div [attributes]>Title:</div> or <p [attributes]>Title:</p> (with optional colon and whitespace)
    const divRegex = new RegExp(
      `<div[^>]*>\\s*${escaped}\\s*:?\\s*<\\/div>`,
      "gi",
    );
    const pRegex = new RegExp(`<p[^>]*>\\s*${escaped}\\s*:?\\s*<\\/p>`, "gi");
    const strongInPRegex = new RegExp(
      `<p[^>]*>\\s*<strong>\\s*${escaped}\\s*:?\\s*<\\/strong>\\s*<\\/p>`,
      "gi",
    );

    processed = processed.replace(divRegex, (match) => {
      const text = match.replace(/<[^>]+>/g, "").trim();
      return `<h3><strong>${text}</strong></h3>`;
    });

    processed = processed.replace(pRegex, (match) => {
      const text = match.replace(/<[^>]+>/g, "").trim();
      return `<h3><strong>${text}</strong></h3>`;
    });

    processed = processed.replace(strongInPRegex, (match) => {
      const text = match.replace(/<[^>]+>/g, "").trim();
      return `<h3><strong>${text}</strong></h3>`;
    });
  }

  // Clean up empty spacer divs: <div><br></div> → nothing (CSS handles spacing)
  processed = processed.replace(/<div>\s*<br\s*\/?>\s*<\/div>/gi, "");

  return processed;
}

async function getJob(id) {
  try {
    const jobsApiUrl = "https://career.betopiagroup.com/api";
    const res = await fetch(`${jobsApiUrl}/jobs/published`, {
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const contentType = res.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      throw new Error("Received non-JSON response from server");
    }

    const result = await res.json();
    if (result?.success && result?.jobs) {
      const job = result.jobs.find((j) => String(j.id) === String(id));
      if (job) {
        // Map 'description' to 'descriptionHtml' for the component
        return {
          ...job,
          descriptionHtml: job.description,
          company: job.company_id || "Betopia Group",
        };
      }
    }
    return null;
  } catch (error) {
    console.error("Error fetching job detail:", error);
    return null;
  }
}


export async function generateMetadata({ params }) {
  const { id } = await params;
  const job = await getJob(id);
  return {
    title: job ? `${job.title} - Betopia Group Careers` : "Job Not Found",
    description: job
      ? `Apply for ${job.title} at Betopia Group. ${job.department ? `Department: ${job.department}.` : ""} ${job.location ? `Location: ${job.location}.` : ""}`
      : "The requested job posting could not be found.",
  };
}

export default async function JobDetailPage({ params }) {
  const { id } = await params;
  const job = await getJob(id);

  if (!job) {
    return (
      <div className="pt-16 md:pt-20">
        <div className="min-h-[60vh] flex flex-col items-center justify-center px-4">
          <div className="text-center max-w-md">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Briefcase className="w-10 h-10 text-gray-400" />
            </div>
            <h1 className="text-2xl font-bold text-black mb-3">
              Job Not Found
            </h1>
            <p className="text-gray-500 mb-8">
              This position may have been filled or removed. Browse our other
              open positions.
            </p>
            <Link
              href="/career#openJobs"
              className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white font-semibold rounded-full hover:bg-gray-800 transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Careers
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const applyLink = `https://career.betopiagroup.com/candidate/signup?job_id=${job.id}&redirect=${encodeURIComponent(
    job.apply_url || "",
  )}`;

  return (
    <div className="pt-16 md:pt-20 bg-white min-h-screen">
      {/* Hero / Header Section */}
      <section className="bg-gradient-to-b from-[#F8F8F8] to-white border-b border-gray-100">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 py-10 md:py-16">
          {/* Breadcrumb */}
          <Link
            href="/career#openJobs"
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-black transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to all positions
          </Link>

          {/* Job Title & Meta */}
          <div className="max-w-4xl">
            <h1 className="text-3xl md:text-[2.75rem] font-extrabold text-black leading-[1.15] tracking-tight">
              {job.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Main Content — Two Column on Desktop */}
      <section className="bg-white pb-16 md:pb-24">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-14">
            {/* Left Column — Job Description */}
            <div className="flex-1 min-w-0 max-w-4xl">
              {job.descriptionHtml ? (
                <div
                  className="job-description-content"
                  dangerouslySetInnerHTML={{
                    __html: processDescriptionHtml(job.descriptionHtml),
                  }}
                />
              ) : (
                <div className="bg-gray-50 border border-dashed border-gray-200 rounded-2xl p-8 text-center">
                  <p className="text-gray-500 italic">
                    No detailed description provided for this position.
                  </p>
                  <p className="text-gray-400 text-sm mt-2">
                    Please refer to the company website or contact HR for more
                    information.
                  </p>
                </div>
              )}
            </div>

            {/* Right Column — Sidebar */}
            <aside className="w-full lg:w-[320px] shrink-0">
              <div className="lg:sticky lg:top-28 py-10 space-y-6">
                {/* Apply Button */}
                <a
                  href={applyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-[#FF8F3D] hover:bg-[#e67d2e] text-white font-bold rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-orange-300/50 hover:-translate-y-0.5 text-base"
                >
                  Apply for this position
                  <ArrowUpRight className="w-5 h-5" />
                </a>

                {/* Job Info Card */}
                <div className="bg-[#FAFAFA] border border-gray-100 rounded-2xl p-6 space-y-4">
                  <h3 className="text-sm font-bold text-black uppercase tracking-wider mb-1">
                    Job Overview
                  </h3>

                  <div className="job-detail-sidebar-badge">
                    <div className="badge-icon">
                      <Building2 className="w-4 h-4 text-[#FF8F3D]" />
                    </div>
                    <div className="badge-info">
                      <span className="badge-label">Company</span>
                      <span className="badge-value">{job.company}</span>
                    </div>
                  </div>

                  {job.department && (
                    <div className="job-detail-sidebar-badge">
                      <div className="badge-icon">
                        <Building2 className="w-4 h-4 text-[#FF8F3D]" />
                      </div>
                      <div className="badge-info">
                        <span className="badge-label">Department</span>
                        <span className="badge-value">{job.department}</span>
                      </div>
                    </div>
                  )}

                  {job.location && (
                    <div className="job-detail-sidebar-badge">
                      <div className="badge-icon">
                        <MapPin className="w-4 h-4 text-[#FF8F3D]" />
                      </div>
                      <div className="badge-info">
                        <span className="badge-label">Location</span>
                        <span className="badge-value">{job.location}</span>
                      </div>
                    </div>
                  )}

                  {job.vacancies && (
                    <div className="job-detail-sidebar-badge">
                      <div className="badge-icon">
                        <UsersRound className="w-4 h-4 text-[#FF8F3D]" />
                      </div>
                      <div className="badge-info">
                        <span className="badge-label">Vacancies</span>
                        <span className="badge-value">
                          {job.vacancies}{" "}
                          {job.vacancies === 1 ? "Position" : "Positions"}
                        </span>
                      </div>
                    </div>
                  )}

                  <div className="job-detail-sidebar-badge">
                    <div className="badge-icon">
                      <Clock className="w-4 h-4 text-[#FF8F3D]" />
                    </div>
                    <div className="badge-info">
                      <span className="badge-label">Job Type</span>
                      <span className="badge-value">{job.employment_type}</span>
                    </div>
                  </div>

                  <div className="job-detail-sidebar-badge">
                    <div className="badge-icon">
                      <Monitor className="w-4 h-4 text-[#FF8F3D]" />
                    </div>
                    <div className="badge-info">
                      <span className="badge-label">Work Mode</span>
                      <span className="badge-value">On-site</span>
                    </div>
                  </div>
                </div>

                {/* Share Section */}
                <div className="bg-[#FAFAFA] border border-gray-100 rounded-2xl p-6">
                  <h3 className="text-sm font-bold text-black uppercase tracking-wider mb-3">
                    Share this job
                  </h3>
                  <div className="flex items-center gap-3">
                    <a
                      href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://betopiagroup.com/career/${job.id}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-gray-400 hover:text-[#0A66C2] hover:border-[#0A66C2]/30 transition-all"
                      aria-label="Share on LinkedIn"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                    <a
                      href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://betopiagroup.com/career/${job.id}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-gray-400 hover:text-[#1877F2] hover:border-[#1877F2]/30 transition-all"
                      aria-label="Share on Facebook"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    </a>
                    <button
                      className="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-gray-400 hover:text-black hover:border-gray-400 transition-all"
                      aria-label="Copy link"
                      title="Copy link"
                    >
                      <Share2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Apply Now CTA Banner */}
      {/* <section className="bg-white mt-10 pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto ">
          <div className="bg-gradient-to-r from-[#1A1A1A] to-[#2D2D2D] rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="max-w-2xl">
              <h3 className="text-white text-2xl md:text-3xl font-bold mb-2">
                Ready to join us?
              </h3>
              <p className="text-gray-400 text-sm md:text-base">
                Take the next step in your career. Apply for{" "}
                <span className="text-white font-medium">{job.title}</span>{" "}
                today.
              </p>
            </div>
            <a
              href={applyLink}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-2 px-8 py-4 bg-[#FF8F3D] hover:bg-[#e67d2e] text-white font-semibold rounded-full shadow-lg shadow-orange-500/20 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/30 hover:-translate-y-0.5 text-base"
            >
              Apply Now
              <ArrowUpRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section> */}
    </div>
  );
}
