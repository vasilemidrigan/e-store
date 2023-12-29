"use client";

export default function PageIndex({ data }) {
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
        ${Number(data.pages[0]) == 1 ? "PageIndex--inactive" : ""}`}
    >
      {LinkWrapper("#", data.pageIndex)}
    </div>
  );
}
