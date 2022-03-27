import { createContext, useReducer } from "react";


export const ThemeContext = createContext();

const themeReducer = (state, action) => {
  //all of our state logic
  switch (action.type) {
    case "CHANGE_COLOR":
      return { ...state, color: action.payload };
    case "CHANGE_MODE":
      return { ...state, mode: action.payload };
    default:
      return state;
  }
};

export function ThemeProvider({ children }) {
  const [state, dispatch] = useReducer(themeReducer, {
    color: "#58249c",
    mode: "dark",
  }); //(reducer function to handle the state, initial state)

  const changeColor = (color) => {
    dispatch({ type: "CHANGE_COLOR", payload: color });
  }; //dispatch takes 2 params: type (a string) and a payload (the value to update the state)
  
  const changeMode = (mode) => {
    dispatch({ type: "CHANGE_MODE", payload: mode });
  }; //dispatch takes 2 params: type (a string) and a payload (the value to update the state)

  return (
    <ThemeContext.Provider value={{ ...state, changeColor, changeMode }}>
      {children}
    </ThemeContext.Provider>
  );
}
