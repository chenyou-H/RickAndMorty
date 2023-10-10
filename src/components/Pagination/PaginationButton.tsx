// import React from "react";

// interface PaginationButtonProps {
//   children: React.ReactNode;
//   handleClick: () => void;
//   isDisabled?: boolean;
//   selected?: boolean;
// }

// export default function PaginationButton({
//   handleClick,
//   isDisabled = false,
//   selected = false,
//   children,
// }: PaginationButtonProps) {
//   const isSelected = selected ? "pagination__btn--selected" : "";
//   const styles = isSelected + " " + "pagination__btn";
//   return (
//     <button className={styles} disabled={isDisabled} onClick={handleClick}>
//       {children}
//     </button>
//   );
// }

import React from "react";
import Link from "next/link";

interface PaginationButtonProps {
  children: React.ReactNode;
  url: string;
  isDisabled?: boolean;
  selected?: boolean;
}

export default function PaginationButton({
  isDisabled = false,
  selected = false,
  url,
  children,
}: PaginationButtonProps) {
  const isSelected = selected ? "pagination__btn--selected" : "";
  const styles = isSelected + " " + "pagination__btn";
  if (isDisabled) {
    return (
      <button className={styles} disabled>
        {children}
      </button>
    );
  }
  return (
    <Link href={url}>
      <button className={styles}>{children}</button>
    </Link>
  );
}
