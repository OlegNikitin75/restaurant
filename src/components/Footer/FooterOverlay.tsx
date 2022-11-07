import React from "react";
import { images } from "../../constants";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import "./FooterOverlay.css";

const FooterOverlay = () => (
  <div className="overlay">
    <div className="container">
      <div className="overlay__inner">
        <div className="overlay__item">
          <h4 className="overlay__item-title">Contact Us</h4>
          <p className="overlay__item-text overlay__item-address">
            9 W 53rd St, New York, NY 10019, USA
          </p>
          <p className="overlay__item-text overlay__item-phone">
            +1 212-344-1230
          </p>
          <p className="overlay__item-text overlay__item-phone">
            +1 212-555-1230
          </p>
        </div>
        <div className="overlay__item">
          <div className="overlay__logo">
            <img src={images.gericht} alt="gericht-logo" />
          </div>

          <p className="overlay__item-slogan">
            "The best way to find yourself is to lose yourself in the service of
            others.”
          </p>
          <img src={images.spoon} alt="icon" />
          <div className="social__icons">
            <a href="https://ru-ru.facebook.com/">
              <FiFacebook className="social__icon" />
            </a>
            <a href="https://twitter.com/?lang=ru">
              <FiTwitter className="social__icon" />
            </a>
            <a href="https://www.instagram.com/">
              <FiInstagram className="social__icon" />
            </a>
          </div>
        </div>
        <div className="overlay__item">
          <h4 className="overlay__item-title">Working Hours</h4>
          <div className="overlay__item-hours">
            <p className="overlay__item-text overlay__item-hours_info">
              Monday-Friday:
            </p>
            <p className="overlay__item-text overlay__item-hours_info">
              08:00 am -12:00 am
            </p>
          </div>
          <div className="overlay__item-hours">
            <p className="overlay__item-text overlay__item-hours_info">
              Saturday-Sunday:
            </p>
            <p className="overlay__item-text overlay__item-hours_info">
              07:00am -11:00 pm
            </p>
          </div>
        </div>
      </div>
      <div className="overlay__bottom">
        <p>2021 Gerícht. All Rights reserved.</p>
      </div>
    </div>
  </div>
);

export default FooterOverlay;
