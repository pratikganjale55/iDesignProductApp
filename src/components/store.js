import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { cartReducer } from "./cartState/cart.reducer";

import { productReducer } from "./productState/product.reducer";





let rootReducer = combineReducers ({
     productData : productReducer  ,
     cartData : cartReducer
     
})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))