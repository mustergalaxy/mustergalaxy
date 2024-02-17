import * as types from "./types";

export const setListingCountValue = (value) => {
  return {
    type: types.SET_COUNT,
    payload: value,
  };
};
