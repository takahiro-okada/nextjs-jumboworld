"use client";

import { useState } from "react";
import WorkCard from "@/app/_features/works/components/WorkCard";
import WorkModal from "@/app/_features/works/components/WorkModal";
import WorkFilter from "@/app/_features/works/components/WorkFilter";
import type { Work } from "@/app/_libs/microcms";

type WorksGridProps = {
  works: Work[];
  className?: string;
  showFilter?: boolean;
};

export default function WorksGrid({
  works,
  className = "",
  showFilter = false,
}: WorksGridProps) {
  const [selectedWork, setSelectedWork] = useState<Work | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filteredWorks, setFilteredWorks] = useState(works);

  const handleWorkClick = (work: Work) => {
    setSelectedWork(work);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedWork(null);
  };

  const handleFilterChange = (filterId: string) => {
    if (filterId === "all") {
      setFilteredWorks(works);
    } else {
      const filtered = works.filter((work) => work.category.includes(filterId));
      setFilteredWorks(filtered);
    }
  };

  return (
    <>
      {showFilter && <WorkFilter onFilterChange={handleFilterChange} />}
      <div
        className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 ${className}`}
      >
        {filteredWorks.map((work) => (
          <WorkCard
            key={work.id}
            work={work}
            onClick={() => handleWorkClick(work)}
          />
        ))}
      </div>
      <WorkModal
        work={selectedWork}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
}
