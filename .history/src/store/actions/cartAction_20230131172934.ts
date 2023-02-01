import CartModel from "../../models/CartModel";
import ProductModel from "../../models/ProductModel";
import { ADD_ITEM_TO_CART } from "./actionsTypes";

export function addItemToCart (cart: ProductModel) {
  return {
    type: ADD_ITEM_TO_CART,
    payload: cart
  };
};
