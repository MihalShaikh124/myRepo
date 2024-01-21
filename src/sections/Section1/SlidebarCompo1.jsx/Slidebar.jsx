import "./slidebar.css";
import arrownarrowright from "../../../../public/arrownarrowright.svg";
import subtract from "../../../../public/subtract.svg";
import { Button } from "./Button";
import chevronright from "../../../../public/chevronright.svg";
import chevronright_1 from "../../../../public/chevronright-1.svg";
import { useState } from "react";

export function Slidebar() {
  const [isOpen, setIsOpen] = useState(false);

  function open() {
    setIsOpen(true);
  }
  function close() {
    setIsOpen(false);
  }

  const toggle = !isOpen ? "rectangle-container-wrapper" : "";
  const toggleClose = `${!isOpen ? "rectangle-container-wrapper" : ""}`;
  return (
    <>
      <Button
        onClick={open}
        btn_class={`rectangle-parent ${toggle}`}
        div_class="frame-child"
        img_class="chevron-right-icon"
        img_src={chevronright}
      />
      <Button
        onClick={close}
        btn_class={`rectangle-group ${toggleClose}`}
        div_class="frame-item"
        img_class="chevron-right-icon1"
        img_src={chevronright_1}
      />
      <div className={`rectangle-container ${toggle}`}>
        <div className="frame-inner"></div>
        <div className="enquiry">
          <img
            className="subtract-icon"
            loading="eager"
            alt=""
            src={subtract}
          />

          <div className="watch-view">WATCH VIEW</div>
        </div>
        <div className="address-text-text"></div>
        <div className="frame-phone-number">
          <div className="schedule-a-tour">SCHEDULE A TOUR</div>
          <img
            className="arrow-narrow-right-icon"
            loading="eager"
            alt=""
            src={arrownarrowright}
          />
        </div>
      </div>
    </>
  );
}
