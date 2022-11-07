import React from "react";
import images from "../../constants/images";
import { wines, cocktails } from "../../constants/data";
import "./SpecialMenu.css";
import { SubHeading } from "../../components";
import MenuList from "../../components/MenuList/MenuList";

const SpecialMenu = () => (
  <section id="menu" className="menu">
    <div className="container">
      <div className="menu__header">
        <SubHeading text="Menu that fits you palatte" />
        <h2 className="section__title menu__title">Today’s Special</h2>
      </div>
      <div className="menu__inner">
        <MenuList name="Wine & Beer" data={wines} />
        <div className="menu__picture">
          <img src={images.menu} alt="menu" />
        </div>
        <MenuList name="Cocktails" data={cocktails} />
      </div>
      <div className="menu__btn">
        <button className="button btn btn__menu">View More</button>
      </div>
    </div>
  </section>
);

export default SpecialMenu;
