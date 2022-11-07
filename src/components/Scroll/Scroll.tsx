import React, { FC } from "react";
import "./Scroll.css";

interface IScrollProps {
  title: string;
  mod?: string;
  handleClick?: () => void;
}

const Scroll: FC<IScrollProps> = ({ title, mod, handleClick }) => {
  return (
    <div className={`scroll ${mod}`} onClick={handleClick}>
      <div className="scroll__line" />
      <span className="scroll__label">{title}</span>
    </div>
  );
};

export default Scroll;
