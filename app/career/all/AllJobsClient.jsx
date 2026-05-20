"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  MapPin,
  Building2,
  Briefcase,
  Search,
  X,
} from "lucide-react";

export default function AllJobsClient({ jobs }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  // Extract unique departments for filter
  const categories = useMemo(() => {
    const depts = jobs
      .map((j) => j.department)
      .filter(Boolean)
      .filter((v, i, a) => a.indexOf(v) === i);
    return ["All", ...depts];
  }, [jobs]);

  // Filter and search
  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      const matchesCategory =
        activeCategory === "All" || job.department === activeCategory;

      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        job.title.toLowerCase().includes(query) ||
        (job.department && job.department.toLowerCase().includes(query)) ||
        (job.location && job.location.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [jobs, searchQuery, activeCategory]);

  return (
    <div className="pt-16 md:pt-20 bg-[#F8F8FA] min-h-screen">
      {/* Hero Header */}
      <section className="bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 py-10 md:py-14">
          <Link
            href="/career#openJobs"
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-black transition-colors mb-6 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to career page
          </Link>

          <h1 className="text-3xl md:text-4xl font-extrabold text-black tracking-tight">
            All Open Positions
          </h1>
          <p className="text-gray-500 mt-3 text-base md:text-lg max-w-2xl">
            Explore all available opportunities and find the role that&apos;s
            right for you.
          </p>
        </div>
      </section>

      {/* Search & Filter Bar */}
      <section className="bg-white border-b border-gray-100 sticky top-16 md:top-20 z-30">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 py-4">
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by title, department..."
                className="w-full pl-10 pr-10 py-2.5 bg-[#F5F5F5] border border-gray-200 rounded-full text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-[#FF8F3D] focus:ring-1 focus:ring-[#FF8F3D]/30 transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Category Filters */}
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar flex-1">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap border transition-all duration-200 ${
                    activeCategory === cat
                      ? "bg-[#3D3D3D] text-white border-[#3D3D3D]"
                      : "bg-white text-gray-500 border-gray-200 hover:border-gray-400"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Result count */}
            <div className="hidden md:inline-flex items-center gap-2 px-4 py-2 bg-[#F0F0F0] rounded-full shrink-0">
              <Briefcase className="w-3.5 h-3.5 text-gray-500" />
              <span className="text-xs font-semibold text-gray-600">
                {filteredJobs.length}{" "}
                {filteredJobs.length === 1 ? "Position" : "Positions"}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Jobs List */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          {/* Mobile result count */}
          <div className="md:hidden mb-4 inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-100 rounded-full">
            <Briefcase className="w-3.5 h-3.5 text-gray-500" />
            <span className="text-xs font-semibold text-gray-600">
              {filteredJobs.length}{" "}
              {filteredJobs.length === 1 ? "Position" : "Positions"} found
            </span>
          </div>

          {filteredJobs.length > 0 ? (
            <div className="flex flex-col gap-4">
              {filteredJobs.map((job) => (
                <div
                  key={job.id}
                  className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-300 group"
                >
                  <div className="flex items-stretch">
                    {/* Left Accent Bar */}
                    <div className="w-1.5 bg-[#FF8F3D] shrink-0 rounded-l-xl" />

                    {/* Content */}
                    <div className="flex-1 flex flex-col md:flex-row md:items-center justify-between p-5 md:p-6 gap-4 md:gap-6">
                      {/* Left — Info */}
                      <div className="flex-1 min-w-0">
                        <h2 className="text-lg font-bold text-[#FF8F3D] group-hover:text-[#e67d2e] transition-colors truncate">
                          {job.title}
                        </h2>
                        <p className="text-sm text-gray-700 font-medium mt-1">
                          Betopia Group
                        </p>

                        <div className="flex flex-wrap items-center gap-3 mt-2 text-xs text-gray-400">
                          {job.department && (
                            <span className="inline-flex items-center gap-1">
                              <Building2 className="w-3 h-3" />
                              {job.department}
                            </span>
                          )}
                          {job.location && (
                            <span className="inline-flex items-center gap-1">
                              <MapPin className="w-3 h-3" />
                              {job.location}
                            </span>
                          )}
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mt-3">
                          {job.tags.map((tag, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 bg-[#F0F0F5] text-gray-600 text-xs font-semibold rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                          {job.vacancies && (
                            <span className="px-3 py-1 bg-[#FFF3E8] text-[#D97730] text-xs font-semibold rounded-full">
                              {job.vacancies}{" "}
                              {job.vacancies === 1 ? "Vacancy" : "Vacancies"}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Right — Action */}
                      <div className="shrink-0 flex items-center">
                        <Link
                          href={`/career/${job.id}`}
                          className="inline-flex items-center gap-2 px-5 py-2.5 border border-gray-300 text-gray-600 text-sm rounded-full font-medium hover:bg-black hover:text-white hover:border-black transition-all duration-300"
                        >
                          View Details
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-2xl flex flex-col items-center justify-center py-20 px-4">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-5">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <p className="text-gray-600 text-lg font-semibold">
                No positions match your search
              </p>
              <p className="text-gray-400 text-sm mt-2 mb-5">
                Try adjusting your search or filter to find what you&apos;re
                looking for.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("All");
                }}
                className="px-6 py-2.5 bg-black text-white text-sm font-semibold rounded-full hover:bg-gray-800 transition-all"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
