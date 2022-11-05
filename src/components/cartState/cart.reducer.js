import { ADD_ITEM_TO_CART_SUCCESS, REMOVE_ITEM_TO_CART_SUCCESS } from "./cart.type";

const cartState = {
      data : []
}

export const cartReducer = (state = cartState, action) => {
    switch (action.type) {
        case ADD_ITEM_TO_CART_SUCCESS: 
        return {...state, data: [...state.data, action.payload]} ;
            
        case REMOVE_ITEM_TO_CART_SUCCESS :   
        return {...state, data : state.data.filter((ele) => ele.id !== action.payload)}
    
        default:
            return state;
    }
}

