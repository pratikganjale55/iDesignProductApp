import axios from "axios"
import { GET_PRODUCTS_ERROR, PRODUCT_FILTER } from "./product.type"
import {GET_PRODUCTS_SUCCESS, GET_PRODUCTS_LOADING} from "./product.type"



export const getData = () => (dispatch) => {
    dispatch({type : GET_PRODUCTS_LOADING})

    axios.get("https://dummyjson.com/products?limit=100")
    .then((res) =>
        dispatch({type : GET_PRODUCTS_SUCCESS , payload: res.data }) ,
      )
     .catch((e) => { dispatch({type:GET_PRODUCTS_ERROR}) })
}

