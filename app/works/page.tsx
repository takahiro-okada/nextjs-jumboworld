"use client";

import { useState } from "react";
import { WorkCard } from "@/app/_features/works/components/WorkCard";
import { WorkFilter } from "@/app/_features/works/components/WorkFilter";
import type { Work } from "@/app/_features/works/types/index";

export default function WorksPage() {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [visibleItems, setVisibleItems] = useState(9);

  const works: Work[] = Array(12).fill({
    id: 1,
    title: "A社様",
    description: "常滑のECサイト。",
    imageUrl: "/placeholder.svg",
    tags: ["SHOPIFY", "DESIGN", "PHOTO", "PHOTO"],
  });

  const filteredWorks = works.filter((work) => {
    if (selectedFilter === "all") return true;
    return work.tags.some((tag) => tag.toLowerCase() === selectedFilter);
  });

  const displayedWorks = filteredWorks.slice(0, visibleItems);
  const hasMore = visibleItems < filteredWorks.length;

  const handleLoadMore = () => {
    setVisibleItems((prev) => prev + 9);
  };

  return (
    <>
      <main className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-12">制作実績</h1>
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
          <WorkFilter
            selectedFilter={selectedFilter}
            onFilterChange={setSelectedFilter}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {displayedWorks.map((work, index) => (
              <WorkCard key={index} {...work} />
            ))}
          </div>

          {hasMore && (
            <div className="text-center">
              <button
                onClick={handleLoadMore}
                className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors"
              >
                もっと見る
              </button>
            </div>
          )}
        </div>
      </main>
    </>
  );
}
