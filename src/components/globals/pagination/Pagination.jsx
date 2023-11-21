// ! Not tested on less then 5 pages

import Link from "next/link";
import { v4 } from "uuid";

export default async function Pagination({ page, metadata }) {
  const totalPages = metadata.totalPages;
  const currentPage = Math.min(Math.max(page, 1), totalPages);

  const getPagesToShow = () => {
    let startPage = currentPage - 2;
    let endPage = currentPage + 2;

    if (currentPage <= 3) {
      startPage = 1;
      endPage = 5;
    } else if (currentPage >= totalPages - 2) {
      startPage = totalPages - 4;
      endPage = totalPages;
    }

    return Array.from(
      { length: endPage - startPage + 1 },
      (_, i) => startPage + i
    );
  };

  const pages = getPagesToShow();

  const pagination = (
    <div className="Pagination">
      <div className="Pagination__back">
        <Link
          href={`?page=${currentPage - 1}`}
          className={`Pagination__link }`}
        >
          <button disabled={Number(page) == 1 ? true : false}>previous</button>
        </Link>
      </div>
      {pages.map((pageIndex) => (
        <div className="Pagination__link-wrapper">
          <Link
            key={v4()}
            href={`?page=${pageIndex}`}
            className={`Pagination__link ${
              page == pageIndex ? "Pagination__link__active" : ""
            }`}
          >
            <span>{pageIndex}</span>
          </Link>
        </div>
      ))}
      <div className="Pagination__forward">
        <Link
          href={`?page=${currentPage + 1}`}
          className={`Pagination__link ${
            Number(page) == Number(totalPages) ? "disabled" : ""
          }`}
        >
          <button disabled={Number(page) == Number(totalPages) ? true : false}>
            next
          </button>
        </Link>
      </div>
    </div>
  );

  return pagination;
}
