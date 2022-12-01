import React, { useContext, useState } from "react";
import { dropContext } from "../Context/DropContextProvider";
import Display from "./Display";
import Dropdown from "./Dropdown";

const Container = () => {
  const [dropDown, setDropDown] = useState(false);
  const [state, dispatch] = useContext(dropContext);

  const xmarkHandler = () => {
    dispatch({
      type: "CLEAR_ALL",
    });
  };
  const anglehandler = () => {
    setDropDown(!dropDown);
  };
  return (
    <div className="Container">
      <Display
        anglehandler={anglehandler}
        xmarkHandler={xmarkHandler}
        dropDown={dropDown}
      />
      <Dropdown dropDown={dropDown} />
    </div>
  );
};

export default Container;
