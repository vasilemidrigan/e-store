"use client";

import Link from "next/link";

export default function NavBtn({ sense, page, totalPages }) {
  let updatedPage;
  const isFirstPage = Number(page) === 1 && sense === "Back" ? true : false;
  const isLastPage =
    Number(page) === totalPages && sense === "Next" ? true : false;

  if (sense === "Back") {
    updatedPage = `?page=${Number(page) - 1}`;
  }

  if (sense === "Next") {
    updatedPage = `?page=${Number(page) + 1}`;
  }

  if (sense !== "Next" && sense !== "Back") {
    updatedPage = `?page=1`;
    console.log(
      "Invalid argument in NavBtn component. Valid arguments are case sensitive. Acceptable values are: Back, Next."
    );
  }

  return (
    <>
      <Link href={updatedPage}>
        <button className="NavBtn" disabled={isFirstPage || isLastPage}>
          {sense}
        </button>
      </Link>
    </>
  );
}
