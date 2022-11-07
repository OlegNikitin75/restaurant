import React, { useState } from "react";
import "./Header.css";
import { Scroll, SubHeading, Slider } from "../../components";
import Pagination from "../Pagination/Pagination";

const Header = () => {
  const [active, setActive] = useState<number>(0);

  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <div className="header__hashtag">
            <a href="#bar" className="header__hashtag-item">
              #Bar
            </a>
            <a href="#geright" className="header__hashtag-item">
              #Gericht
            </a>
          </div>
          <div className="header__content">
            <SubHeading text="Chase the new Flavour" />
            <h1 className="header__title">The key to Fine dining</h1>
            <p className="header__text">
              Geright - our answer to those who honor traditions and know how to
              enjoy life, who like to talk about food and appreciate dishes that
              are simple in execution, but with fantasy in taste.
            </p>
            <button type="button" className="btn btn__header">
              Explore Menu
            </button>
          </div>
          <Slider activeSlide={active} />
        </div>
        <div className="header__bottom">
          <div className="header__bottom-left" />
          <Pagination active={active} setActive={setActive} />

          <Scroll title="Scroll" />
        </div>
      </div>
    </header>
  );
};
export default Header;
