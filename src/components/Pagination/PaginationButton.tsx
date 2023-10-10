import React from "react";

interface PaginationButtonProps {
  handleClick: () => void;
  isDisabled?: boolean;
  children: React.ReactNode;
}

export default function PaginationButton({
  handleClick,
  isDisabled = false,
  children,
}: PaginationButtonProps) {
  return (
    <button
      className="pagination__button"
      disabled={isDisabled}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}
