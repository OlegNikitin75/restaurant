import React from "react";
import { images } from "../../constants";
import "./Chef.css";
import { SubHeading } from "../../components";

const Chef = () => (
  <div className="chef">
    <div className="container">
      <div className="chef__inner">
        <div className="chef__picture">
          <img src={images.chef} alt="chef" />
        </div>
        <div className="chef__content">
          <SubHeading text="Chef`s Word" />
          <h2 className="section__title chef__title">What we believe in</h2>
          <p className="chef__desc">
            Chef of the highest category, winner of international competitions
            in Istanbul. The key qualities of our chef at work are extensive
            experience in Mediterranean cuisine, especially with seafood, and a
            total rejection of artificial ingredients. The taste of each dish is
            brought to perfection with the help of natural spices.
          </p>
          <p className="chef__name">Kevin Luo</p>
          <p className="chef__status">Chef & Founder</p>
          <div className="chef__sign">
            <img src={images.sign} alt="sign" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Chef;
