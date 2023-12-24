import PageIndex from "./PageIndex";

export default function IndexBtns({ page, pages }) {
  const indexes = (
    <div className="Indexes">
      {pages.map((pageIndex) => (
        <div className="Indexes__index">
          <PageIndex data={{ page, pages, pageIndex }} />
        </div>
      ))}
    </div>
  );

  return indexes;
}
