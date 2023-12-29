/*
 * Find a solution to disable the link so it will not react when clicking on it,
 * we need it for current page index button in pagingation component
 */

import Link from "next/link";

export default function PageIndex({ data }) {
  console.log(data);
  function LinkWrapper(href, pageIndex) {
    if (href == "#") {
      return <button>{pageIndex}</button>;
    }
    return (
      <Link href={href}>
        <button>{pageIndex}</button>
      </Link>
    );
  }

  return (
    <div
      className={`PageIndex 
        ${
          data.pages.length == 1 || data.page == data.pageIndex
            ? "PageIndex--inactive"
            : ""
        }`}
    >
      {LinkWrapper(`?page=${data.pageIndex}`, data.pageIndex)}
    </div>
  );
}
