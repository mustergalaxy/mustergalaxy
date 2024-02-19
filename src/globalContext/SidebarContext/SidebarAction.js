import * as types from "./types";

export const setCountValue = (value) => {
  return {
    type: types.SET_COUNT,
    payload: value,
  };
};
