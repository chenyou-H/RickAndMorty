import React from "react";
import PaginationButton from "./PaginationButton";

interface NumberOrEllipsisArray extends Array<number | "..."> {}

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  paginationRange: NumberOrEllipsisArray;
  handleClickPrev: () => void;
  handleClickPage: (page: number) => void;
  handleClickNext: () => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  paginationRange,
  handleClickPrev,
  handleClickPage,
  handleClickNext,
}: PaginationProps) {
  return (
    <div className="centerRow pagination">
      <PaginationButton
        handleClick={handleClickPrev}
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
              handleClick={() => {
                handleClickPage(page);
              }}
            >
              {page}
            </PaginationButton>
          );
        } else {
          return <span key={index}>...</span>;
        }
      })}
      <PaginationButton
        isDisabled={currentPage === totalPages}
        handleClick={handleClickNext}
      >
        &#62;
      </PaginationButton>
    </div>
  );
}
