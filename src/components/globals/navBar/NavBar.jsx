export default async function NavBar({ children }) {
  return (
    <>
      <div className="Navigation">
        <div className="Navigation__elements-wrapper">{children}</div>
      </div>
    </>
  );
}
