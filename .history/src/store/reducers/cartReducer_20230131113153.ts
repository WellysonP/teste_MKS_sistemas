// const initialState = {
//     cart: []
// };

// export default function CartReducer(state = initialState, action){
//     switch (action.type) {
//         case "ADD_TO_CART":
//           return {
//             ...state,
//             cart: [...state.cart, action.product]
//           };
//         default:
//           return state;
//       }
// }

import { ADD_ITEM_TO_CART } from "../actions/actionsTypes";

const initialState = {
  items: []
};

export default function cartReducer(state = initialState, action: any) {
  switch (action.type) {
    case ADD_ITEM_TO_CART:
      return {
        ...state,
        items: [...state.items, action.payload]
      };
    default:
      return state;
  }
}
