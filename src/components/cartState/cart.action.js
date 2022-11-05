import axios from "axios"
import { ADD_ITEM_TO_CART_SUCCESS, REMOVE_ITEM_TO_CART_SUCCESS } from "./cart.type"


export const addToCart = (id) => (dispatch) => {

    axios.get(`https://dummyjson.com/products/${id}`)
    .then((res) => {
        // dispatch({type : ADD_ITEM_TO_CART_SUCCESS, payload : res.data}),
        // console.log(res.data)
        dispatch({type : ADD_ITEM_TO_CART_SUCCESS, payload : res.data})
        })
    .catch((e) =>  console.log(e))

}

export const removeElement = (id) => (dispatch) => {
    // console.log(id)
       dispatch({type : REMOVE_ITEM_TO_CART_SUCCESS, payload : id})
}