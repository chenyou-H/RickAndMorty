// import React from "react";
// import PaginationButton from "./PaginationButton";

// interface NumberOrEllipsisArray extends Array<number | "..."> {}

// interface PaginationProps {
//   currentPage: number;
//   totalPages: number;
//   paginationRange: NumberOrEllipsisArray;
//   handleClickPrev: () => void;
//   handleClickPage: (page: number) => void;
//   handleClickNext: () => void;
// }

// export default function Pagination({
//   currentPage,
//   totalPages,
//   paginationRange,
//   handleClickPrev,
//   handleClickPage,
//   handleClickNext,
// }: PaginationProps) {
//   return (
//     <div className="center">
//       <div className="pagination">
//         <PaginationButton
//           handleClick={handleClickPrev}
//           isDisabled={currentPage === 1}
//         >
//           &#60;
//         </PaginationButton>
//         {paginationRange?.map((page: number | string, index: number) => {
//           if (typeof page !== "string") {
//             return (
//               <PaginationButton
//                 key={index}
//                 selected={currentPage === page}
//                 handleClick={() => {
//                   handleClickPage(page);
//                 }}
//               >
//                 {page}
//               </PaginationButton>
//             );
//           } else {
//             return (
//               <span key={index} className="pagination__dots">
//                 ...
//               </span>
//             );
//           }
//         })}
//         <PaginationButton
//           isDisabled={currentPage === totalPages}
//           handleClick={handleClickNext}
//         >
//           &#62;
//         </PaginationButton>
//       </div>
//     </div>
//   );
// }

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
  const targetUrl = "/characters/?page=";

  return (
    <div className="center">
      <div className="pagination">
        <PaginationButton
          url={targetUrl + String(currentPage - 1)}
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
          url={targetUrl + String(currentPage + 1)}
          handleClick={handleClickNext}
        >
          &#62;
        </PaginationButton>
      </div>
    </div>
  );
}
