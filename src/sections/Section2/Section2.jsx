import "./Section2.css";
import React from "react";

export function Section2() {
  return (
    <>
      <div className="desktop-2-child"></div>
      <section
        className="mahalaxmi-home-maker-all-right"
        id="mahalaxmi-home-maker-all-right"
      >
        <img
          className="mahalaxmi-home-maker-all-right-child"
          alt=""
          loading="lazy"
          src="./public/line-4.svg"
        />

        <div className="the-building-you-never-need-to-parent">
          <h1 className="the-building-you">
            The Building You Never Need To Leave
          </h1>
          <div className="welcome-home">Welcome Home</div>
          <div className="lorem-ipsum-dolor">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor
          </div>
          <h2 className="lorem-ipsum-dolor1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud
          </h2>
          <div className="image-holder">
            <img
              className="line-frame-icon"
              alt=""
              src="./public/line-frame@2x.png"
              loading="lazy"
            />

            <img
              className="image-2-icon"
              loading="lazy"
              alt=""
              src="./public/image-2@2x.png"
            />

            <img
              className="image-3-icon"
              alt=""
              src="./public/image-3@2x.png"
            />

            <img
              className="image-holder-child"
              loading="lazy"
              alt=""
              src="./public/line-5.svg"
            />
          </div>
        </div>
      </section>
    </>
  );
}
