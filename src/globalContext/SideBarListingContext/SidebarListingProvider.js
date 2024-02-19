import { createContext, useReducer } from "react";
import * as types from "./types";

const initialState = {
  count: 1,
};
const sidebarListingReducer = (state, action) => {
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

export const SidebarListingContext = createContext(initialState);

const SidebarListingProvider = ({ children }) => {
  const [sidebarListingState, sidebarListingDispatch] = useReducer(
    sidebarListingReducer,
    initialState
  );

  return (
    <SidebarListingContext.Provider
      value={[sidebarListingState, sidebarListingDispatch]}
    >
      {children}
    </SidebarListingContext.Provider>
  );
};

export default SidebarListingProvider;
