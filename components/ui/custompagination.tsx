import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

export default function CustomPagination({
  currentPage,
  totalPages,
  baseUrl = "/",
}: {
  currentPage: number
  totalPages: number
  baseUrl?: string
}) {
  const getVisiblePages = () => {
    const delta = 2
    const range = []
    for (
      let i = Math.max(2, currentPage - delta);
      i <= Math.min(totalPages - 1, currentPage + delta);
      i++
    ) {
      range.push(i)
    }

    if (currentPage - delta > 2) {
      range.unshift("...")
    }
    if (currentPage + delta < totalPages - 1) {
      range.push("...")
    }

    range.unshift(1)
    if (totalPages !== 1) range.push(totalPages)

    return range
  }

  const visiblePages = getVisiblePages()

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href={`${baseUrl}?page=${Math.max(currentPage - 1, 1)}`}
            className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
          />
        </PaginationItem>

        {visiblePages.map((page, i) => (
          <PaginationItem key={i}>
            {page === "..." ? (
              <span className="px-2">...</span>
            ) : (
              <PaginationLink
                href={`${baseUrl}?page=${page}`}
                isActive={currentPage === page}
              >
                {page}
              </PaginationLink>
            )}
          </PaginationItem>
        ))}

        <PaginationItem>
          <PaginationNext
            href={`${baseUrl}?page=${Math.min(currentPage + 1, totalPages)}`}
            className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}