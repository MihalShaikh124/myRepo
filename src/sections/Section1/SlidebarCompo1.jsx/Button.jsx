import "./Button.css";

export function Button({ btn_class, div_class, img_class, img_src, onClick }) {
  return (
    <button onClick={onClick} className={`${btn_class}`}>
      <div className={div_class}></div>
      <img className={img_class} alt="" src={img_src} />
    </button>
  );
}
