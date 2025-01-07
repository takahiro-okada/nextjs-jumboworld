"use client";

interface FilterOption {
  id: string;
  label: string;
}

interface WorkFilterProps {
  selectedFilter: string;
  onFilterChange: (filter: string) => void;
}

export default function WorkFilter({
  selectedFilter,
  onFilterChange,
}: WorkFilterProps) {
  const filters: FilterOption[] = [
    { id: "all", label: "すべて" },
    { id: "website", label: "WEBサイト" },
    { id: "design", label: "デザイン" },
    { id: "shopify", label: "SHOPIFY" },
    { id: "photo", label: "撮影" },
  ];

  return (
    <div className="flex flex-wrap gap-4 mb-8">
      {filters.map((filter) => (
        <button
          key={filter.id}
          onClick={() => onFilterChange(filter.id)}
          className={`px-4 py-2 rounded-full text-sm transition-colors
            ${
              selectedFilter === filter.id
                ? "bg-black text-white"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
}
