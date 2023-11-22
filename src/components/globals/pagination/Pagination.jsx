// ! Not tested on less then 5 pages

import Link from "next/link";
import { v4 } from "uuid";

const START_PAGE = 1;

export default async function Pagination({ page, metadata }) {
  const totalPages = metadata.totalPages;

  const pages = Array.from({ length: totalPages }, (_, i) => START_PAGE + i);

  const pagination = (
    <div className="Pagination">
      <div className="Pagination__back">
        <Link href={`?page=${page - 1}`} className={`Pagination__link }`}>
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
          href={`?page=${page + 1}`}
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
