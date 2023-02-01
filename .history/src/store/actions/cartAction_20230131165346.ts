import CartModel from "../../models/CartModel";
import { ADD_ITEM_TO_CART } from "./actionsTypes";

export function addItemToCart (cart: CartModel) {
  return {
    type: ADD_ITEM_TO_CART,
    payload: cart
  };
};
