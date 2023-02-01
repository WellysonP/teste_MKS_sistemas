// import {createStore, combineReducers} from 'redux'

// const reducers = combineReducers({
    
// })

// function storeConfig(){
//     return createStore(reducers)
// }

// export default storeConfig

import { createStore, combineReducers } from "redux";


const reducers = combineReducers({
    
})

function storeConfig(){
    return createStore(reducers)
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.product]
      };
    default:
      return state;
  }
};

export const store = createStore(reducer);

