'use client'

import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious, PaginationEllipsis } from "@/components/ui/pagination"
import { useState } from "react"

const TOTAL_PAGES = 10

export default function StyledPagination() {
  const [currentPage, setCurrentPage] = useState(1)

  const goToPage = (page: number) => {
    if (page < 1 || page > TOTAL_PAGES) return
    setCurrentPage(page)
  }

  const renderPageNumbers = () => {
    const pages = []

    if (TOTAL_PAGES <= 5) {
      for (let i = 1; i <= TOTAL_PAGES; i++) {
        pages.push(renderPageButton(i))
      }
    } else {
      pages.push(renderPageButton(1))

      if (currentPage > 3) {
        pages.push(<PaginationEllipsis key="start-ellipsis" className="text-[#D1D1D1]" />)
      }

      const start = Math.max(2, currentPage - 1)
      const end = Math.min(TOTAL_PAGES - 1, currentPage + 1)

      for (let i = start; i <= end; i++) {
        pages.push(renderPageButton(i))
      }

      if (currentPage < TOTAL_PAGES - 2) {
        pages.push(<PaginationEllipsis key="end-ellipsis" className="text-[#D1D1D1]" />)
      }

      pages.push(renderPageButton(TOTAL_PAGES))
    }

    return pages
  }

  const renderPageButton = (page: number) => (
    <PaginationItem key={page}>
      <PaginationLink
        href="#"
        onClick={() => goToPage(page)}
        className={`bg-[#212121] text-[#D1D1D1] hover:bg-[#EEC584] hover:text-black ${
          currentPage === page ? 'bg-[#EEC584] text-black' : ''
        }`}
      >
        {page}
      </PaginationLink>
    </PaginationItem>
  )

  return (
    <Pagination>
      <PaginationContent className="space-x-2">
        <PaginationItem>
          <PaginationPrevious
            href="#"
            onClick={() => goToPage(currentPage - 1)}
            className="bg-[#212121] text-[#D1D1D1] hover:bg-[#EEC584] hover:text-black"
          />
        </PaginationItem>

        {renderPageNumbers()}

        <PaginationItem>
          <PaginationNext
            href="#"
            onClick={() => goToPage(currentPage + 1)}
            className="bg-[#212121] text-[#D1D1D1] hover:bg-[#EEC584] hover:text-black"
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
