import "./Section5.css";
import { useRef } from "react";

export function Section5() {
  const main = useRef(null);

  function shiftLeft() {
    if (main.current) {
      main.current.scrollLeft += 100;
    }
  }

  function shiftRight() {
    if (main.current) {
      main.current.scrollLeft -= 100;
    }
  }

  return (
    <section className="desktop-2-inner">
      <div className="frame-group">
        <div className="desktop-icon-parent">
          <div className="desktop-icon"></div>
          <div className="neighborhood">Neighborhood</div>
        </div>
        <div className="lorem-text">
          <div className="image-rectangle">
            <h1 className="the-best-of">
              The Best Of City Is Right Outside Your Doors
            </h1>
            <div className="dreams-text">
              <div className="lorem-ipsum-dolor2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor
              </div>
            </div>
          </div>
          <div className="frame-image1">
            <div className="main-content" ref={main}>
              <img
                className="image-5-icon"
                loading="eager"
                alt=""
                src="./public/image-5@2x.png"
              />

              <img
                className="image-6-icon"
                loading="eager"
                alt=""
                src="./public/image-6@2x.png"
              />

              <img
                className="image-7-icon"
                loading="lazy"
                alt=""
                src="./public/image-7@2x.png"
              />
              <img
                className="image-6-icon"
                loading="lazy"
                alt=""
                src="./public/mihal2img.jpg"
              />
              <img
                className="image-5-icon"
                loading="lazy"
                alt=""
                src=".\public\mihal123.jpg"
              />
              <img
                className="image-6-icon"
                loading="lazy"
                alt=""
                src=".\public\img121.jpg"
              />
            </div>
            <div className="right-arrow">
              <div className="arrow-narrow-right-parent">
                <img
                  loading="lazy"
                  className="arrow-narrow-right-icon1"
                  alt=""
                  src="./public/arrownarrowright-2.svg"
                  onClick={shiftRight}
                />
                <img
                  loading="lazy"
                  className="arrow-narrow-right-icon2"
                  alt=""
                  src="./public/arrownarrowright-2.svg"
                  onClick={shiftLeft}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
