import { ADD_ITEM, REMOVE_ITEM } from "../constants";
export const addItem = (product) => {
  return {
    type: ADD_ITEM,
    payload: product,
  };
};

export const removeItem = (product) => {
  return {
    type: REMOVE_ITEM,
    payload: product,
  };
};
