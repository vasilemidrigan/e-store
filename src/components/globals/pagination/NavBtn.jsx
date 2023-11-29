import Link from "next/link";

export default function NavBtn({ sense, page }) {
  let updatedPage;

  if (sense === "Back") {
    updatedPage = `?page=${page - 1}`;
  }

  if (sense === "Next") {
    updatedPage = `?page=${page + 1}`;
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
        <button className="NavBtn" disabled={Number(page) == 1 ? true : false}>
          {sense}
        </button>
      </Link>
    </>
  );
}
