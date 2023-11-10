export default async function Nav({children}) {
  return (
    <>
      <div className="Navigation">
        <div className="Navigation__elements-wrapper">
          {children}
        </div>
      </div>
    </>
  );
}
