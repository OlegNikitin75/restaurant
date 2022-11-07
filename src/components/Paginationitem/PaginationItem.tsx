import React, { FC } from "react";

interface PaginationItemProps {
  index: number;
  status: number;
  setActive: (index: number) => void;
}

const PaginationItem: FC<PaginationItemProps> = ({
  index,
  setActive,
  status,
}) => {
  return (
    <span
      onClick={() => setActive(index)}
      className={
        status === index
          ? "pagination__item pagination__item--active"
          : "pagination__item"
      }
    >
      0{index + 1}
    </span>
  );
};

export default PaginationItem;
