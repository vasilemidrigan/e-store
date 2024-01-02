"use client";

import { useSearchParams, useRouter, usePathname } from "next/navigation";

export default function SearchBar() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  function handleSearch(keyword) {
    const params = new URLSearchParams(searchParams);
    if (keyword) {
      params.set("query", keyword);
    } else {
      params.delete("query");
    }

    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <div className="SearchBar">
      <label className="SearchBar__label">
        <input
          type="text"
          className="SearchBar__label__input"
          onChange={(e) => handleSearch(e.target.value)}
          defaultValue={searchParams.get("query")?.toString()}
        />
      </label>
    </div>
  );
}
