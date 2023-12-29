import { v4 } from "uuid";

import PageIndex from "./PageIndex";

export default function IndexBtns({ page, pages }) {
  const indexes = (
    <div className="Indexes">
      {pages.map((pageIndex) => (
        <div className="Indexes__index" key={v4()}>
          <PageIndex data={{ pages, pageIndex }} />
        </div>
      ))}
    </div>
  );

  return indexes;
}
