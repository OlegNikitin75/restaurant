import React, { FC } from "react";
import { images } from "../../constants";

interface ISliderProps {
  activeSlide: number;
}

const Slider: FC<ISliderProps> = ({ activeSlide }) => {
  return (
    <div className="header__slider">
      <div className="header__picture">
        <img src={images.headerGalImages[activeSlide]} alt="menu" />
      </div>
    </div>
  );
};

export default Slider;
