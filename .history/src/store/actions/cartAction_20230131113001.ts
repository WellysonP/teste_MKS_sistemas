// export const addToCart = product => ({
//     type: "ADD_TO_CART",
//     product
//   });

import { ADD_ITEM_TO_CART } from "./actionsTypes";

export const addItemToCart = (item: any) => {
  return {
    type: ADD_ITEM_TO_CART,
    payload: item
  };
};