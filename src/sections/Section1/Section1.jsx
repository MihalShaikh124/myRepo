import { Header } from "./Header/Header";
import "./Section1.css";
import image_1_2x from "../../../public/image-1@2x.png";

import { Slidebar } from "./SlidebarCompo1.jsx/Slidebar";

export function Section1() {
  return (
    <section className="image-frame">
      <img className="image-1-icon" alt="" src={image_1_2x} loading="eager" />

      <Header />
      <div className="image-frame-inner">
        <div className="apartments-parent">
          <div className="apartments">
            <div className="beyond-borders-realty">Beyond Borders Realty</div>
            <h1 className="where-every-corner">Where Every Corner</h1>
            <h1 className="tells-a-story">Tells a Story</h1>
          </div>
          <div className="lorem-ipsum-is">
            Lorem ipsum is placeholder text commonly used in the graphic, print,
          </div>
        </div>
      </div>
      <div className="frame-parent">
        <Slidebar />
      </div>
    </section>
  );
}
