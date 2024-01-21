import React, { useState } from "react";
import "./Section4.css";
import ScrollTrigger from "react-scroll-trigger";

import CountUp from "react-countup";

export function Counter() {
  const [counter, setCounter] = useState(false);
  return (
    <ScrollTrigger
      onEnter={() => setCounter(true)}
      onExit={() => setCounter(false)}
    >
      <section className="phone-number-frame-wrapper">
        <div className="phone-number-frame">
          <div className="email-frame">
            <b className="k">
              {counter && (
                <CountUp start={0} end={125} duration={3} delay={0} />
              )}
              k+
            </b>
            <div className="happy-family">Happy Family</div>
          </div>
          <div className="email-frame1">
            <b class="b">
              {counter && <CountUp start={0} end={50} duration={3} delay={0} />}
              +
            </b>
            <div className="projects2">Projects</div>
          </div>
          <div className="infomahalaxmihomakercom-frame">
            <b className="about-us-frame">
              {counter && <CountUp start={0} end={9} duration={4} delay={0} />}+
            </b>
            <div className="cities-wrapper">
              <div className="cities">Cities</div>
            </div>
          </div>
        </div>
      </section>
    </ScrollTrigger>
  );
}
