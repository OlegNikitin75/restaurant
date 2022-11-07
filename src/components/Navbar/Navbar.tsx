import React, { FC, useState } from "react";
import { images } from "../../constants";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";

import "./Navbar.css";

interface INavbar {
  href?: string | undefined;
}

const Navbar: FC<INavbar> = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  return (
    <div id="home" className="navbar">
      <div className="container">
        <div className="navbar__inner">
          <div className="navbar__logo">
            <img src={images.gericht} alt="logo" />
          </div>
          <nav className="navbar__navigate">
            <ul className="navbar__navigate-list">
              <li className="navbar__navigate-item">
                <a href="#home" className="navbar__navigate-link">
                  Home
                </a>
              </li>
              <li className="navbar__navigate-item">
                <a href="#about" className="navbar__navigate-link">
                  About
                </a>
              </li>
              <li className="navbar__navigate-item">
                <a href="#menu" className="navbar__navigate-link">
                  Menu
                </a>
              </li>
              <li className="navbar__navigate-item">
                <a href="#awards" className="navbar__navigate-link">
                  Awards
                </a>
              </li>
              <li className="navbar__navigate-item">
                <a href="#contact" className="navbar__navigate-link">
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          {mobileMenu && (
            <nav className="navbar__navigate--mobile">
              <ul className="navbar__navigate-list">
                <li
                  onClick={() => setMobileMenu(false)}
                  className="navbar__navigate-item"
                >
                  <a href="#home" className="navbar__navigate-link">
                    Home
                  </a>
                </li>
                <li
                  onClick={() => setMobileMenu(false)}
                  className="navbar__navigate-item"
                >
                  <a href="#about" className="navbar__navigate-link">
                    About
                  </a>
                </li>
                <li
                  onClick={() => setMobileMenu(false)}
                  className="navbar__navigate-item"
                >
                  <a href="#menu" className="navbar__navigate-link">
                    Menu
                  </a>
                </li>
                <li
                  onClick={() => setMobileMenu(false)}
                  className="navbar__navigate-item"
                >
                  <a href="#awards" className="navbar__navigate-link">
                    Awards
                  </a>
                </li>
                <li
                  onClick={() => setMobileMenu(false)}
                  className="navbar__navigate-item"
                >
                  <a href="#contact" className="navbar__navigate-link">
                    Contact
                  </a>
                </li>
              </ul>
              <MdOutlineRestaurantMenu
                className="navbar__mobileMenu-trigger navbar__mobileMenu-close"
                color="#ffffff"
                fontSize={27}
                onClick={() => setMobileMenu(false)}
              />
            </nav>
          )}

          <div className="navbar__login">
            <a href="#login" className="navbar__login-link">
              Log In / Register
            </a>
            <div className="navbar__login-line" />
            <a href="/" className="navbar__login-link">
              Book Table
            </a>
          </div>
          <GiHamburgerMenu
            className="navbar__mobileMenu-trigger navbar__mobileMenu-open"
            color="#ffffff"
            fontSize={27}
            onClick={() => setMobileMenu(true)}
          />
        </div>
      </div>
    </div>
  );
};
export default Navbar;
