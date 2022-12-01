import React, { useContext } from "react";
import { dropContext } from "../Context/DropContextProvider";

const DisplayColorCard = () => {
  const [state, dispatch] = useContext(dropContext);

  const removeHandler = (args) => {
    dispatch({
      type: "REMOVE_COLOR",
      payload: args,
    });
  };
  return (
    <>
      {state.selectedColors.map((item, index) => (
        <div
          className=" DisplayColorCard"
          style={{ backgroundColor: `${item.code}` }}
          key={index}
        >
          <p style={{ color: "white" }}>{item.name}</p>
          <i
            className="fa-sharp fa-solid fa-xmark"
            onClick={() => removeHandler(item)}
          ></i>
        </div>
      ))}
    </>
  );
};

export default DisplayColorCard;
