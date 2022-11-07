import React, { FC } from "react";
import { images } from "../../constants";
import "./SubHeading.css";

interface SubHeadingProps {
  text: string;
}

const SubHeading: FC<SubHeadingProps> = ({ text }) => (
  <div className="subheading">
    <p className="subheading__text">{text}</p>
    <img src={images.spoon} alt="icon" />
  </div>
);

export default SubHeading;
