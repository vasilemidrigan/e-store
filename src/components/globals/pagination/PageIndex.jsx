import Link from "next/link";

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
        ${data.pages.length == 1 ? "PageIndex--inactive" : ""}`}
    >
      {LinkWrapper(`?page=${data.pageIndex}`, data.pageIndex)}
    </div>
  );
}
