import React from "react";
import DisplayColorCard from "./DisplayColorCard";

const Display = ({ anglehandler, xmarkHandler, dropDown }) => {
  return (
    <div className="Display">
      <div className="Displaywrapper">
        <DisplayColorCard />
      </div>
      <div className="Iconwrapper">
        <i className="fa-sharp fa-solid fa-xmark" onClick={xmarkHandler}></i>
        <i
          className={
            dropDown
              ? "fa-solid fa-angle-down rotate"
              : "fa-solid fa-angle-down"
          }
          onClick={anglehandler}
        ></i>
      </div>
    </div>
  );
};

export default Display;
