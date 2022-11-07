import React, {FC} from "react";
import PaginationItem from "../../components/Paginationitem/PaginationItem";
import "./Pagination.css"
import images from "../../constants/images";
interface IPaginationProps{
  active:number
  setActive:(index:number)=>void
}
const Pagination:FC<IPaginationProps> = ({active, setActive}) => {

  return (
    <div className="pagination">
      {[...new Array(images.headerGalImages.length)].map((item, index) => (
        <PaginationItem
          key={index}
          setActive={setActive}
          index={index}
          status={active}
        />
      ))}
    </div>
  );
};

export default Pagination;
