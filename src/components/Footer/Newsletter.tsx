import React from "react";

import "./Newsletter.css";
import { Scroll, SubHeading } from "../index";

const Newsletter = () => {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="newsletter">
      <div className="container">
        <div className="newsletter__inner">
          <div className="newsletter__hidden" />
          <div className="newsletter__content">
            <SubHeading text="Newsletter" />
            <h2 className="section__title newsletter__title">
              Subscribe to Our Newsletter
            </h2>
            <p className="newsletter__subtitle">
              And never miss latest Updates!
            </p>
            <form className="newsletter__form">
              <input type="email" placeholder="Email Address" required />
              <button onClick={() => {}} className="btn">
                Subscribe
              </button>
            </form>
          </div>
          <Scroll title="top" handleClick={handleClick} mod="scroll-footer" />
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
