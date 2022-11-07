import React, { useRef } from "react";
import { SubHeading } from "../../components";
import { images } from "../../constants";

import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from "react-icons/bs";
import "./Gallery.css";

const img = [
  images.gallery01,
  images.gallery02,
  images.gallery03,
  images.gallery04,
  images.gallery05,
  images.gallery06,
  images.gallery07,
];
const Gallery = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const handleScroll = (direction: string) => {
    const { current } = scrollRef;
    const windowInnerWidth = window.innerWidth;
    let width: number | null;
    if (windowInnerWidth <= 425) {
      width = windowInnerWidth - 20;
    } else width = 332;

    if (current) {
      direction === 'left'
          ? (current.scrollLeft += width)
          : (current.scrollLeft -= width);
    }
  };
  return (
    <div className="gallery">
      <div className="gallery__content">
        <SubHeading text="Instagram" />
        <h2 className="section__title gallery__title">Photo Gallery</h2>
        <p className="gallery__desc">
          Check out our food gallery. More images on Instagram
        </p>
        <button onClick={() => {}} className="btn">
          View More
        </button>
      </div>
      <div className="gallery__images">
        <div ref={scrollRef} className="gallery__images-container">
          {img.map((image, index) => (
            <div className="gallery__images-item" key={index + 1}>
              <img src={image} alt="gallery"/>
              <BsInstagram className="gallery__image-icon" />
            </div>
          ))}
        </div>
        <div className="gallery__buttons">
          <BsArrowLeftShort
            className="gallery__btn-icon"
            onClick={() => handleScroll("left")}
          />
          <BsArrowRightShort
            className="gallery__btn-icon"
            onClick={() => handleScroll("right")}
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
