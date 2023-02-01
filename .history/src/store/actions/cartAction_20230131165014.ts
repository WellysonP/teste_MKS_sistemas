// export const addToCart = product => ({
//     type: "ADD_TO_CART",
//     product
//   });

import CartModel from "../../models/CartModel";
import { ADD_ITEM_TO_CART } from "./actionsTypes";

export const addItemToCart = (cart: CartModel) => {
  return {
    type: ADD_ITEM_TO_CART,
    payload: cart
  };
};