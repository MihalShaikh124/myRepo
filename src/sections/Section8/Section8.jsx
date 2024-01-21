import "./Section8.css";

export function Section8() {
  return (
    <>
      <div className="title-area">
        <div className="subheading-frame">
          <div className="apartments-wrapper">
            <h1 className="apartments1">Apartments</h1>
          </div>
          <div className="subheading-frame-inner">
            <div className="line-div"></div>
          </div>
          <h1 className="our-apartments">Our Apartments</h1>
        </div>
      </div>
      <section className="frame-container">
        <div className="frame-div">
          <div className="image-11-parent">
            <img
              className="image-11-icon"
              loading="lazy"
              alt=""
              src="./public/image-11@2x.png"
            />

            <div className="bhk-parent">
              <div className="bhk">1 BHK</div>
              <div className="logo-frame"></div>
            </div>
          </div>
          <div className="image-frame2">
            <div className="text-block-area">
              <img
                className="image-12-icon"
                loading="lazy"
                alt=""
                src="./public/image-12@2x.png"
              />

              <div className="form-control">
                <div className="bhk1">3 BHK</div>
              </div>
            </div>
            <div className="text-block-area1">
              <img
                className="image-13-icon"
                loading="lazy"
                alt=""
                src="./public/image-13@2x.png"
              />

              <div className="bhk-wrapper">
                <div className="bhk2">1 BHK</div>
              </div>
            </div>
          </div>
        </div>
        <div className="checkbox-frame">
          <div className="radio-button-group">
            <div className="dropdown-menu-area"></div>
            <img
              className="toggle-switch-icon"
              loading="lazy"
              alt=""
              src="./public/vector.svg"
            />

            <div className="bathrooms">3 Bathrooms</div>
            <div className="toggle-switch"></div>
            <img
              className="group-icon"
              loading="lazy"
              alt=""
              src="./public/group.svg"
            />

            <div className="sf">1500 Sf</div>
            <div className="toggle-switch1"></div>
            <img
              className="toggle-switch-icon1"
              alt=""
              src="./public/vector-1.svg"
              loading="lazy"
            />

            <div className="badroom">2 Badroom</div>
          </div>
          <div className="radio-button-group1">
            <div className="radio-button-group-child"></div>
            <div className="desktop-frame-group-parent">
              <div className="desktop-frame-group"></div>
              <img
                className="image-frame-rectangle"
                alt=""
                src="./public/vector.svg"
                loading="lazy"
              />

              <div className="bathrooms1">3 Bathrooms</div>
              <div className="image-frame-rectangle1"></div>
              <img
                loading="lazy"
                className="group-icon1"
                alt=""
                src="./public/group.svg"
              />

              <div className="sf1">1500 Sf</div>
              <div className="sf-line-vector-group"></div>
              <img
                loading="lazy"
                className="image-frame-rectangle2"
                alt=""
                src="./public/vector-3.svg"
              />

              <div className="badroom1">2 Badroom</div>
            </div>
          </div>
          <div className="radio-button-group2">
            <div className="radio-button-group-item"></div>
            <div className="line-parent">
              <div className="frame-child1"></div>
              <img
                loading="lazy"
                className="vector-icon"
                alt=""
                src="./public/vector.svg"
              />

              <div className="bathrooms2">3 Bathrooms</div>
              <div className="frame-child2"></div>
              <img
                loading="lazy"
                className="group-icon2"
                alt=""
                src="./public/group.svg"
              />

              <div className="sf2">1500 Sf</div>
              <div className="frame-child3"></div>
              <img
                loading="lazy"
                className="vector-icon1"
                alt=""
                src="./public/vector-3.svg"
              />

              <div className="badroom2">2 Badroom</div>
            </div>
          </div>
        </div>
        <img
          className="frame-child4"
          loading="lazy"
          alt=""
          src="./public/group-4.svg"
        />
      </section>
    </>
  );
}
