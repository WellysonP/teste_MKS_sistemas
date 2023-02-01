// import { createStore, combineReducers } from "redux";
import CartReducer from "./reducers/cartReducer";

const { combineReducers, createStore } = require("redux");


const reducers = combineReducers({
  cart: CartReducer
})

function storeConfig(){
    return createStore(reducers)
}


// import { createStore } from "redux";
// import cartReducer from "./reducers/cartReducer";

// const store = createStore(cartReducer);

export default storeConfig;

