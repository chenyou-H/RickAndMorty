import React, { useMemo } from "react";
var _ = require("lodash");

interface usePaginationProps {
  totalPages: number;
  currentPage: number;
  siblingCount?: number;
}

export default function usePagination({
  currentPage,
  totalPages,
  siblingCount = 1,
}: usePaginationProps) {
  const paginationRange = useMemo(() => {
    // Pages count is determined as 2 siblingCount + firstPage + lastPage + currentPage + 2*DOTS
    const totalVisiblePageNumbers = 5 + siblingCount * 2;

    if (totalPages < totalVisiblePageNumbers) {
      return _.range(1, totalPages);
    }

    /*
    	Calculate left and right sibling index and make sure they are within range 1 and totalPageCount
    */
    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages);

    /*
      We do not show dots just when there is just one page number to be inserted between the extremes of sibling and the page limits i.e 1 and totalPageCount. Hence we are using leftSiblingIndex > 2 and rightSiblingIndex < totalPageCount - 2
    */
    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex < totalPages - 2;

    const firstPageIndex = 1;
    const lastPageIndex = totalPages;

    /*
    	Case 2: No left dots to show, but rights dots to be shown
    */
    if (!shouldShowLeftDots && shouldShowRightDots) {
      let leftItemCount = 3 + 2 * 1;
      let leftRange = _.range(1, leftItemCount + 1);

      return [...leftRange, "...", totalPages];
    }

    /*
    	Case 3: No right dots to show, but left dots to be shown
    */
    if (shouldShowLeftDots && !shouldShowRightDots) {
      let rightItemCount = 3 + 2 * 1;
      let rightRange = _.range(totalPages - rightItemCount + 1, totalPages + 1);
      return [firstPageIndex, "...", ...rightRange];
    }

    /*
    	Case 4: Both left and right dots to be shown
    */
    if (shouldShowLeftDots && shouldShowRightDots) {
      let middleRange = _.range(leftSiblingIndex, rightSiblingIndex + 1);
      return [firstPageIndex, "...", ...middleRange, "...", lastPageIndex];
    }
  }, [currentPage, totalPages, siblingCount]);

  return paginationRange;
}
