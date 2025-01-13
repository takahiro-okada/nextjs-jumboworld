"use client";

import { useState } from "react";

interface FilterOption {
  id: string;
  label: string;
}

interface WorkFilterProps {
  onFilterChange: (filterId: string) => void;
}

export default function WorkFilter({ onFilterChange }: WorkFilterProps) {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters: FilterOption[] = [
    { id: "all", label: "すべて" },
    { id: "Web制作", label: "Web制作" },
    { id: "Shopify", label: "Shopify" },
  ];

  const handleFilterClick = (filterId: string) => {
    setActiveFilter(filterId);
    onFilterChange(filterId);
  };

  return (
    <div className="flex flex-wrap gap-4 mb-8">
      {filters.map((filter) => (
        <button
          key={filter.id}
          className={`px-4 py-2 rounded-full text-sm transition-colors ${
            activeFilter === filter.id
              ? "bg-black text-white"
              : "bg-white text-black border border-black"
          }`}
          onClick={() => handleFilterClick(filter.id)}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
}
