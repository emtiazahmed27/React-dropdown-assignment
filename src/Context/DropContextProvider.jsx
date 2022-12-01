import React, { createContext, useReducer } from "react";
import { reduce } from "../Reducers/reduce";

export const dropContext = createContext();

export const initState = {
  colors: [
    { id: 1, name: "Ocean", code: "#45aaf2" },
    { id: 2, name: "Purple", code: "#a55eea" },
    { id: 3, name: "Red", code: "#fc5c65" },
    { id: 4, name: "Orange", code: "#fa8231" },
    { id: 5, name: "Yello", code: "#fed330" },
    { id: 7, name: "Green", code: "#26de81" },
    { id: 8, name: "Forest", code: "#20bf6b" },
    { id: 9, name: "Slate", code: "#a5b1c2" },
    { id: 10, name: "Silver", code: "#d1d8e0" },
  ],
  selectedColors: [],
};

const DropContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reduce, initState);

  return (
    <dropContext.Provider value={[state, dispatch]}>
      {children}
    </dropContext.Provider>
  );
};

export default DropContextProvider;
