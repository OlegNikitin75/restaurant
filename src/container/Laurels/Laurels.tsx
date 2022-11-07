import React from "react";
import { images } from "../../constants";
import { SubHeading } from "../../components";
import "./Laurels.css";

const Laurels = () => (
  <div id="awards" className="laurels">
    <div className="laurels__logo">
      <img src={images.logo} alt="logo" />
    </div>
    <div className="container">
      <div className="laurels__inner">
        <div className="laurels__content">
          <SubHeading text="Awards & recognition" />
          <h2 className="section__title laurels__title">Our Laurels</h2>
          <ul className="laurels__list">
            <li className="laurels__list-row">
              <li className="laurels__list-item">
                <div className="laurels__icon">
                  <img src={images.award02} alt="icon" />
                </div>
                <div className="laurels__list-item__content">
                  <h5 className="laurels__list-item__title">Bib Gourmond</h5>
                  <p className="laurels__list-item__desc">
                    Second place in this category
                  </p>
                </div>
              </li>
              <li className="laurels__list-item">
                <div className="laurels__icon">
                  <img src={images.award01} alt="icon" />
                </div>
                <div className="laurels__list-item__content">
                  <h5 className="laurels__list-item__title">Rising Star</h5>
                  <p className="laurels__list-item__desc">
                    First place in the honorary category
                  </p>
                </div>
              </li>
            </li>
            <li className="laurels__list-row">
              <li className="laurels__list-item">
                <div className="laurels__icon">
                  <img src={images.award05} alt="icon" />
                </div>
                <div className="laurels__list-item__content">
                  <h5 className="laurels__list-item__title">AA Hospitality</h5>
                  <p className="laurels__list-item__desc">
                    So far only so, but we are working
                  </p>
                </div>
              </li>
              <li className="laurels__list-item">
                <div className="laurels__icon">
                  <img src={images.award03} alt="icon" />
                </div>
                <div className="laurels__list-item__content">
                  <h5 className="laurels__list-item__title">
                    Outstanding Chef
                  </h5>
                  <p className="laurels__list-item__desc">
                    There is no limit to perfection
                  </p>
                </div>
              </li>
            </li>
          </ul>
        </div>
        <div className="laurels__picture">
          <img src={images.laurels} alt="laurel" />
        </div>
      </div>
    </div>
  </div>
);

export default Laurels;
