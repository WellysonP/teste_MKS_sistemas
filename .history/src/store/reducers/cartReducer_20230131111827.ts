const initialState = {
    cart: []
};

export default function CartReducer(state = initialState, action){
    switch (action.type) {
        case "ADD_TO_CART":
          return {
            ...state,
            cart: [...state.cart, action.product]
          };
        default:
          return state;
      }
}