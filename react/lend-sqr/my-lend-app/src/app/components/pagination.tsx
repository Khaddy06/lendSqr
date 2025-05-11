import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface PaginationProps {
  currentPage: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
  onLimitChange: (limit: number) => void;
}

const Pagination = ({
  currentPage,
  itemsPerPage,
  onPageChange,
  onLimitChange,
}: PaginationProps) => {
  const handlePageChange = (newPage: number) => {
    if (newPage !== currentPage) {
      onPageChange(newPage);
    }
  };

  return (
    <div className="flex justify-between mt-5">
      {/* Page Limit */}
      <div className="">
        <label>
          Show:
          <select
            onChange={(e) => onLimitChange(Number(e.target.value))}
            value={itemsPerPage}
          >
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
          </select>
          items per page
        </label>
      </div>

      {/* Pagination Controls */}
      <div>
        <button
          className="px-2 py-1 rounded bg-[#213F7D1A] hover:bg-gray-200"
          title="icon"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <FaChevronLeft color="#213F7D" />
        </button>

        <span>Page {currentPage}</span>
       
        <button
          className="px-2 py-1 rounded bg-[#213F7D1A] hover:bg-gray-200"
          title="icon"
          onClick={() => handlePageChange(currentPage + 1)}
        >
          <FaChevronRight color="#213F7D" />
      
        </button>
      </div>
    </div>
  );
};

export default Pagination;
