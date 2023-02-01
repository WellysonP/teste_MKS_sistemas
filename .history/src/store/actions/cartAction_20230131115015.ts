// export const addToCart = product => ({
//     type: "ADD_TO_CART",
//     product
//   });

import ProductModel from "../../models/ProductModel";
import { ADD_ITEM_TO_CART } from "./actionsTypes";

export const addItemToCart = (product: ProductModel) => {
  return {
    type: ADD_ITEM_TO_CART,
    payload: product
  };
};