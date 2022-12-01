import React, { useContext } from "react";
import { dropContext } from "../Context/DropContextProvider";

const ColorCard = () => {
  const [state, dispatch] = useContext(dropContext);

  const selectColorHandler = (args) => {
    dispatch({
      type: "SELECT_COLOR",
      payload: args,
    });
  };
  return (
    <div className="ColorCard">
      {state.colors.map((item, index) => (
        <p
          className="Color"
          style={{ backgroundColor: `${item.code}`, color: "white" }}
          key={index}
          onClick={() => selectColorHandler(item)}
        >
          {item.name}
        </p>
      ))}
    </div>
  );
};

export default ColorCard;
