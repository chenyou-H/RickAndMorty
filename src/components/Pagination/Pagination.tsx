import React from "react";
import PaginationButton from "./PaginationButton";

interface NumberOrEllipsisArray extends Array<number | "..."> {}

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  paginationRange: NumberOrEllipsisArray;
  targetUrl: string;
}

export default function Pagination({
  currentPage,
  totalPages,
  paginationRange,
  targetUrl,
}: PaginationProps) {
  return (
    <div className="center">
      <div className="pagination">
        <PaginationButton
          url={`${targetUrl}${currentPage - 1}`}
          isDisabled={currentPage === 1}
        >
          &#60;
        </PaginationButton>
        {paginationRange?.map((page: number | string, index: number) => {
          if (typeof page !== "string") {
            return (
              <PaginationButton
                key={index}
                selected={currentPage === page}
                url={targetUrl + page}
              >
                {page}
              </PaginationButton>
            );
          } else {
            return (
              <span key={index} className="pagination__dots">
                ...
              </span>
            );
          }
        })}
        <PaginationButton
          isDisabled={currentPage === totalPages}
          url={`${targetUrl}${currentPage + 1}`}
        >
          &#62;
        </PaginationButton>
      </div>
    </div>
  );
}
