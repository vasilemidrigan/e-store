"use client";

export default function MenuBtn(props) {
  return (
    <div className="MenuBtn" onClick={props.handleMenu.handleMenu}>
      <span className="MenuBtn__text">Products</span>
    </div>
  );
}
