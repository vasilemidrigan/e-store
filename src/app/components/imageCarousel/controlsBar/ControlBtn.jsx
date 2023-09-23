export default function ControlBtn(props) {
  return (
    <div
      className={`ControlBtn ${
        props.activeId == props.id ? "ControlBtn--active" : ""
      }`}
      onClick={() => props.setActiveId(props.id)}
    ></div>
  );
}
