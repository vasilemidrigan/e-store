import Link from "next/link";
import { v4 } from "uuid";

export default function IndexBtns({ page, pages }) {
  const indexes = (
    <div className="Indexes">
      {pages.map((pageIndex) => (
        <div
          className={`Indexes__index ${
            page == pageIndex ? "Indexes__index--active" : ""
          }`}
        >
          <Link key={v4()} href={`?page=${pageIndex}`}>
            <span>{pageIndex}</span>
          </Link>
        </div>
      ))}
    </div>
  );

  return indexes;
}
