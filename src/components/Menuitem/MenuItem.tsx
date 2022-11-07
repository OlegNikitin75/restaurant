import React, { FC } from "react";

import "./MenuItem.css";
interface IMenuItem {
   title: string;
   price: string;
   tags: string ;
}
const MenuItem: FC<IMenuItem> = ({title,price,tags}) => {
  return (
    <div className="menu__list-item">
      <div className="menu__list-product">
        <h5 className="menu__list-product_title">{title}</h5>
        <div className="menu__list-product_line" />
        <div className="menu__list-product_price">{price}</div>
      </div>
      <p className="menu__list-product_tag">{tags}</p>
    </div>
  );
};
export default MenuItem;
