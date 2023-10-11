import React from "react";
import PaginationButton from "./PaginationButton";
import Dots from "./Dots";

interface NumberOrEllipsisArray extends Array<number | "..."> {}

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  paginationRange: NumberOrEllipsisArray;
  handleClickButton: (page: number) => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  paginationRange,
  handleClickButton,
}: PaginationProps) {
  const handleClickPrev = () => {
    if (currentPage > 1) {
      handleClickButton(currentPage - 1);
    }
  };

  const handleClickNext = () => {
    if (currentPage < totalPages) {
      handleClickButton(currentPage + 1);
    }
  };

  return (
    <div className="center">
      <div className="pagination">
        <PaginationButton
          handleClickButton={handleClickPrev}
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
                handleClickButton={() => handleClickButton(page)}
              >
                {page}
              </PaginationButton>
            );
          } else {
            return <Dots key={index} />;
          }
        })}
        <PaginationButton
          handleClickButton={handleClickNext}
          isDisabled={currentPage === totalPages}
        >
          &#62;
        </PaginationButton>
      </div>
    </div>
  );
}
