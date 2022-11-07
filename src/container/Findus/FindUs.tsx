import React from "react";
import "./FindUs.css";
import { SubHeading } from "../../components";
import { images } from "../../constants";

const FindUs = () => (
  <div className="find" id="contact">
    <div className="container">
      <div className="find__inner">
        <div className="find__content">
          <SubHeading text="Contact" />
          <h2 className="section__title find__title">Find Us</h2>
          <p className="find__desc">
            Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG
          </p>
          <p className="find__hours-title">Opening Hours</p>
          <p className="find__hours-item">Mon - Fri: 10:00 am - 02:00 am</p>
          <p className="find__hours-item">Mon - Fri: 10:00 am - 02:00 am</p>
          <button onClick={() => {}} className="btn">
            Visit Us
          </button>
        </div>
        <div className="find__image">
          <img src={images.findus} alt="findus" />
        </div>
      </div>
    </div>
  </div>
);

export default FindUs;
