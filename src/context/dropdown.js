import { createContext } from "react";



const DropdownState = createContext({
  dropdownContext: false,
  setdropdownContext: (auth) => {}
});

export default DropdownState;