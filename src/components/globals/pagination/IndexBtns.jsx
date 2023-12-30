import { v4 } from "uuid";

import PageIndex from "./PageIndex";

export default function IndexBtns({ page, pages }) {
  console.log("########################################");
  console.log("######### IndexBtns - page #############");
  console.log(page);
  console.log("########################################");
  console.log("########################################");
  console.log("");

  console.log("########################################");
  console.log("######### IndexBtns - pages ############");
  console.log(pages);
  console.log("########################################");
  console.log("########################################");
  console.log("");

  const indexes = (
    <div className="Indexes">
      {pages.map((pageIndex) => (
        <div className="Indexes__index" key={v4()}>
          <PageIndex data={{ page, pages, pageIndex }} />
        </div>
      ))}
    </div>
  );

  return indexes;
}
