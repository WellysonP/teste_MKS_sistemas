import CartModel from "../../models/CartModel";
import ProductModel from "../../models/ProductModel";
import { ADD_ITEM_TO_CART } from "../actions/actionsTypes";

interface State {
  cart: CartModel[];
}

const initialState: State = {
  cart: [
  ]
};

export default function cartReducer(state = initialState, action: any) {
  switch (action.type) {
    case ADD_ITEM_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload]
      };
    default:
      return state;
  }
}
