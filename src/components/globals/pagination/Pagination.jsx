/* 
  ! Implement a solution for more pages where we'll probably need to  
  hide pages from start and from the end with "..."

  Test pagination for more pages. 
 */
const START_PAGE = 1;

import NavBtn from "./NavBtn";
import IndexBtns from "./IndexBtns";

export default async function Pagination({ page, metadata }) {
  const totalPages = metadata.totalPages;
  const pages = Array.from({ length: totalPages }, (_, i) => START_PAGE + i);

  const pagination = (
    <div className="Pagination">
      <NavBtn sense={"Back"} page={page} />
      <IndexBtns page={page} pages={pages} />
      <NavBtn sense={"Next"} page={page} totalPages={totalPages} />
    </div>
  );

  return pagination;
}
