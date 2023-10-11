import React from "react";
import Link from "next/link";

interface PaginationButtonProps {
  children: React.ReactNode;
  isDisabled?: boolean;
  selected?: boolean;
  handleClickButton: () => void;
}

export default function PaginationButton({
  isDisabled = false,
  selected = false,
  handleClickButton,
  children,
}: PaginationButtonProps) {
  const isSelected = selected ? "pagination__btn--selected" : "";
  const styles = `${isSelected} pagination__btn`;

  return (
    <button
      className={styles}
      disabled={isDisabled}
      onClick={handleClickButton}
    >
      {children}
    </button>
  );
}
