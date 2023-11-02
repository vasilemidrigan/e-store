const url1 =
  "https://drive.google.com/file/d/1cxoiVDhWq5PJDoXb4XgJq47Y1St66g-3/view?usp=sharing";

const id = "1cxoiVDhWq5PJDoXb4XgJq47Y1St66g-3";

const url = `https://drive.google.com/uc?export=view&id=${id}`;

export default function HomepageGrid() {
  return (
    <div className="HomepageGrid">
      grid
      <img src={url} alt="" style={{ width: "300px", height: "300px" }} />
    </div>
  );
}
