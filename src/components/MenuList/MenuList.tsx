import React, { FC } from "react";
import "./MenuList.css";
import { MenuItem } from "../index";

interface IMenuListProps {
  name: string;
  data: { title: string; price: string; tags: string }[];
}

const MenuList: FC<IMenuListProps> = ({ name, data }) => {
  return (
    <div className="menu__list">
      <h3 className="menu__list-title">{name}</h3>
      {data.map((item, index) => (
        <MenuItem
          key={index}
          title={data[index].title}
          price={data[index].price}
          tags={data[index].tags}
        />
      ))}
    </div>
  );
};

export default MenuList;
