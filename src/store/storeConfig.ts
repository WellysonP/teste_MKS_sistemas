import CartReducer from "./reducers/cartReducer";

const { combineReducers, createStore } = require("redux");


const reducers = combineReducers({
  cart: CartReducer
})

function storeConfig(){
    return createStore(reducers)
}

export default storeConfig;

