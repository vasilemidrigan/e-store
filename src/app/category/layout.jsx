import CategoryIllustration from "@/components/category/categoryIllustration/CategoryIllustration";

export default function CategoryLayout({ children }) {
  return (
    <>
      <CategoryIllustration />
      {children}
    </>
  );
}
