import "./Section3.css";
import { useState } from "react";
import { Button } from "../Section1/SlidebarCompo1.jsx/Button";

const arr = [
  "./public/frame-no6.jpg",
  "./public/image-4@2x.png",
  "./public/frame-no5.webp",
  "./public/frame-no3.jpg",
  "./public/frame-no4.jpg",
];

export function Section3() {
  const [frame, setFrame] = useState(0);

  const plus = () => (frame == 4 ? setFrame(0) : setFrame(frame + 1));
  const minu = () => (frame == 0 ? setFrame(4) : setFrame(frame - 1));

  return (
    <section className="ellipse-frame" id="ellipse-frame">
      <div className="desktop-3">
        <img loading="lazy" className="image-4-icon" alt="" src={arr[frame]} />

        <div className="desktop-3-child"></div>
        <div className="image-frame1">
          <div className="frame-line">
            <div className="projects1">Projects</div>
            <div className="vector-frame">
              <h2
                onClick={() => setFrame(0)}
                className={`ecohaven-residences ${frame === 0 ? "active-frame" : ""}`}
              >
                EcoHaven Residences
              </h2>
              <div className="b-h-k-frame"></div>
              <h2
                onClick={() => setFrame(1)}
                className={`skyvista-heights ${frame === 1 ? "active-frame" : ""}`}
              >
                SkyVista Heights
              </h2>
              <div className="b-h-k-frame1"></div>
              <h2
                onClick={() => setFrame(2)}
                className={`harmony-homes ${frame === 2 ? "active-frame" : ""}`}
              >
                Harmony Homes
              </h2>
              <div className="b-h-k-frame2"></div>
              <h2
                onClick={() => setFrame(3)}
                className={`urbane-oasis ${frame === 3 ? "active-frame" : ""}`}
              >
                Urbane Oasis
              </h2>
              <div className="b-h-k-frame3"></div>
              <h2
                onClick={() => setFrame(4)}
                className={`cityscape-living ${frame === 4 ? "active-frame" : ""}`}
              >
                CityScape Living
              </h2>
            </div>
          </div>
        </div>
        <div className="frame-image">
          <Button
            btn_class={"rectangle-parent"}
            div_class={"frame-child"}
            img_class={"chevron-right-icon2"}
            img_src={"./public/chevronright-1.svg"}
            onClick={plus}
          ></Button>
          <Button
            btn_class={"dreams-frame"}
            div_class={"frame-text"}
            img_class={"chevron-right-icon2"}
            img_src={"./public/chevronright-1.svg"}
            onClick={minu}
          ></Button>
        </div>
      </div>
    </section>
  );
}
