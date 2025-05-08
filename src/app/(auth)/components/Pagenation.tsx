'use client';

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationEllipsis,
} from "@/components/ui/pagination";

interface StyledPaginationProps {
  currentPage: number;
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
}

export default function StyledPagination({
  currentPage,
  totalItems,
  itemsPerPage,
  onPageChange,
}: StyledPaginationProps) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const goToPage = (page: number) => {
    if (page < 1 || page > totalPages) return;
    onPageChange(page);
  };

  const renderPageButton = (page: number) => (
    <PaginationItem key={page}>
      <PaginationLink
        href="#"
        onClick={(e) => {
          e.preventDefault();
          goToPage(page);
        }}
        className={`bg-[#212121] text-[#D1D1D1] hover:bg-[#EEC584] hover:text-black ${
          currentPage === page ? 'bg-[#EEC584] text-black' : ''
        }`}
      >
        {page}
      </PaginationLink>
    </PaginationItem>
  );

  const renderPageNumbers = () => {
    const pages = [];

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(renderPageButton(i));
      }
    } else {
      pages.push(renderPageButton(1));

      if (currentPage > 3) {
        pages.push(
          <PaginationEllipsis key="start-ellipsis" className="text-[#D1D1D1]" />
        );
      }

      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);

      for (let i = start; i <= end; i++) {
        pages.push(renderPageButton(i));
      }

      if (currentPage < totalPages - 2) {
        pages.push(
          <PaginationEllipsis key="end-ellipsis" className="text-[#D1D1D1]" />
        );
      }

      pages.push(renderPageButton(totalPages));
    }

    return pages;
  };

  if (totalPages <= 1) return null;

  return (
    <Pagination>
      <PaginationContent className="space-x-2">
        <PaginationItem>
          <PaginationPrevious
            href="#"
            onClick={(e) => {
              e.preventDefault();
              goToPage(currentPage - 1);
            }}
            className="bg-[#212121] text-[#D1D1D1] hover:bg-[#EEC584] hover:text-black"
          />
        </PaginationItem>

        {renderPageNumbers()}

        <PaginationItem>
          <PaginationNext
            href="#"
            onClick={(e) => {
              e.preventDefault();
              goToPage(currentPage + 1);
            }}
            className="bg-[#212121] text-[#D1D1D1] hover:bg-[#EEC584] hover:text-black"
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
