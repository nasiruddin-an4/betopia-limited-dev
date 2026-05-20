import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, LayoutGrid } from "lucide-react";

async function getCategoryData(category) {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BACKEND_API_URL || "https://dashboard.betopiagroup.com/api";
    
    // Fetch filtered offers using the query param as per SRS
    const res = await fetch(`${baseUrl}/corporate-offers/?category=${encodeURIComponent(category)}`, {
      next: { revalidate: 3600 },
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const contentType = res.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      throw new Error("Received non-JSON response from server");
    }

    const result = await res.json();
    return result?.success ? result : { data: [], categories: [], categoryDetails: null };
  } catch (error) {
    console.error("Error fetching category data from API:", error);
    return { data: [], categories: [], categoryDetails: null };
  }
}

async function getCategoryDetails(decodedCategory, categories) {
  const searchName = decodedCategory.trim().toLowerCase();
  return (
    categories.find(
      (cat) => (cat.name || "").trim().toLowerCase() === searchName,
    ) || null
  );
}

async function getOffersByCategory(decodedCategory, allOffers) {
  const searchName = decodedCategory.trim().toLowerCase();

  return allOffers.filter(
    (item) =>
      item.category &&
      (item.category || "").trim().toLowerCase() === searchName,
  );
}

export async function generateMetadata({ params }) {
  const { category } = await params;
  const decodedCategory = decodeURIComponent(category);
  return {
    title: `${decodedCategory} Offers - Betopia Group`,
    description: `Browse all corporate offers in the ${decodedCategory} category for Betopia Employees.`,
  };
}

export default async function CategoryOffersPage({ params }) {
  const { category } = await params;
  const decodedCategory = decodeURIComponent(category);
  const result = await getCategoryData(decodedCategory);
  const offers = result.data || [];
  const categoryDetails = result.categoryDetails;

  return (
    <main className="min-h-screen bg-white">
      {/* HEADER SECTION */}
      <section className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={categoryDetails?.image || offers[0]?.image || "https://res.cloudinary.com/dij1tdcai/image/upload/v1777531338/hero_poster_x3q9u0.png"}
            alt={decodedCategory}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="absolute top-0 left-0 w-full z-30 px-4 md:px-8 pt-6">
          <div className="container mx-auto">
            <Link
              href="/career"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors px-4 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm font-medium">Back to Careers</span>
            </Link>
          </div>
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider rounded-full border border-white/20 mb-6">
            <LayoutGrid className="w-4 h-4 text-[#EF8B42]" />
            Corporate Category
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 capitalize">
            {decodedCategory} Offers
          </h1>
          <p className="text-white/80 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            {categoryDetails?.description ||
              `Explore exclusive corporate offers and benefits applicable to Betopia employees in the ${decodedCategory} category.`}
          </p>
        </div>
      </section>

      {/* OFFERS GRID */}
      <section className="py-20 px-4 md:px-8">
        <div className="container mx-auto">
          {offers.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">
                No offers found in this category.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {offers.map((offer) => {
                const slug = (offer.title || offer.name || "offer")
                  .toLowerCase()
                  .replace(/[^a-z0-9]+/g, "-")
                  .replace(/(^-|-$)+/g, "");
                return (
                  <Link
                    key={offer._id}
                    href={`/career/offers/${slug}-${offer._id}`}
                    className="group flex flex-col bg-white border border-gray-100 rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <div className="relative h-64 w-full bg-gray-100 overflow-hidden">
                      <Image
                        src={offer.image || "https://res.cloudinary.com/dij1tdcai/image/upload/v1777531338/hero_poster_x3q9u0.png"}
                        alt={offer.title || offer.name || "Offer"}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-black shadow-sm">
                        {offer.partner || "Corporate Partner"}
                      </div>
                    </div>
                    <div className="p-8 flex flex-col grow">
                      <h3 className="text-xl font-bold text-black mb-3 line-clamp-2 group-hover:text-[#EF8B42] transition-colors">
                        {offer.title || offer.name}
                      </h3>
                      <p className="text-gray-500 text-sm line-clamp-3 mb-6 grow leading-relaxed">
                        {offer.description}
                      </p>
                      <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                        <span className="text-sm font-semibold text-black uppercase tracking-wider">
                          View Details
                        </span>
                        <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-black transition-colors">
                          <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
