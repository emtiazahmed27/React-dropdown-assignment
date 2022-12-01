import React from "react";
import ColorCard from "./ColorCard";

const Dropdown = ({ dropDown }) => {
  return <div className="Dropdown">{dropDown ? <ColorCard /> : <></>}</div>;
};

export default Dropdown;
