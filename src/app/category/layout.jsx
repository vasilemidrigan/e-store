import CategoryIllustration from "@/components/CategoryIllustration/CategoryIllustration";

export default function CategoryLayout({ children }) {
  console.log('!!!!!!!!!!!!!!! CATEGORYLAYOUT!!!!!!!!!!!!!!!!');
  return (
    <>
      <CategoryIllustration />
      {children}
    </>
  );
}
