import "./Header.css";
import React, { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import ScrollTrigger from "react-scroll-trigger";

export function Header() {
  const [enter, setEnter] = useState(true);
  return (
    // <header className="frame-frame sticky">
    <ScrollTrigger
      className={`frame-frame ${enter ? "" : "sticky"}`}
      onExit={() => setEnter(false)}
      onEnter={() => setEnter(true)}
    >
      <div className="line-line-line">
        <img
          className="mahalaxmi-homemakers-logo-fina-icon"
          loading="eager"
          alt=""
          src="./public/mahalaxmi-homemakers-logo-final--1-dremovebgpreview-3@2x.png"
        />

        <div className="rectangle-rectangle">
          <Link
            to="mahalaxmi-home-maker-all-right"
            smooth={true}
            duration={500}
            className="home"
          >
            Home
          </Link>
          <Link
            to="ellipse-frame"
            smooth={true}
            duration={500}
            className="projects"
          >
            Projects
          </Link>
          <div className="about-us">About Us</div>
          <div className="portfolio">Portfolio</div>
          <div className="blogs">Blogs</div>
          <div className="news">News</div>
          <div className="career">Career</div>
        </div>
        <button className="contact-us-wrapper">
          <Link
            to="desktop-6"
            smooth={true}
            duration={500}
            className="contact-us"
          >
            Contact Us
          </Link>
        </button>
      </div>
      {/* </header> */}
    </ScrollTrigger>
  );
}
