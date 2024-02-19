import { createContext, useReducer } from "react";
import * as types from "./types";

const initialState = {
  count: 0,
};
const sidebarReducer = (state, action) => {
  switch (action.type) {
    case types.SET_COUNT:
      return {
        ...state,
        count: action.payload,
      };
    default:
      return state;
  }
};

export const SidebarContext = createContext(initialState);

const SidebarProvider = ({ children }) => {
  const [sidebarState, sidebarDispatch] = useReducer(
    sidebarReducer,
    initialState
  );

  console.log("sidebarDispatch===>", sidebarDispatch);

  return (
    <SidebarContext.Provider value={[sidebarState, sidebarDispatch]}>
      {children}
    </SidebarContext.Provider>
  );
};

export default SidebarProvider;
