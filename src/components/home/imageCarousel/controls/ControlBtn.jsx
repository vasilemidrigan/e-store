export default function ControlBtn({
  activeStates: { id, activeId, setActiveId },
}) {
  return (
    <div
      className={`ControlBtn ${activeId == id ? "ControlBtn--active" : ""}`}
      onClick={() => setActiveId(id)}
    ></div>
  );
}
