import { initState } from "../Context/DropContextProvider";

export const reduce = (state, action) => {
  switch (action.type) {
    case "SELECT_COLOR": {
      const colorTobeSelected = action.payload;
      const selectedColor = [...state.selectedColors, colorTobeSelected];
      const newColors = state.colors.filter(
        (item) => item.id !== colorTobeSelected.id
      );

      return {
        ...state,
        colors: newColors,
        selectedColors: selectedColor,
      };
    }
    case "REMOVE_COLOR": {
      const colorTobeRemoved = action.payload;
      const newSelectedColor = state.selectedColors.filter(
        (item) => item.id !== colorTobeRemoved.id
      );
      const newColorsSet = [...state.colors, colorTobeRemoved];

      return {
        ...state,
        colors: newColorsSet,
        selectedColors: newSelectedColor,
      };
    }
    case "CLEAR_ALL": {
      return initState;
    }
  }
};
