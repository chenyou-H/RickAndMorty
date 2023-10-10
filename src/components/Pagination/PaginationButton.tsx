import React from "react";

interface PaginationButtonProps {
  children: React.ReactNode;
  handleClick: () => void;
  isDisabled?: boolean;
  selected?: boolean;
}

export default function PaginationButton({
  handleClick,
  isDisabled = false,
  selected = false,
  children,
}: PaginationButtonProps) {
  const isSelected = selected ? "pagination__btn--selected" : "";
  const styles = isSelected + " " + "pagination__btn";
  return (
    <button className={styles} disabled={isDisabled} onClick={handleClick}>
      {children}
    </button>
  );
}
