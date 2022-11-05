import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getData } from '../productState/product.action';
import { addToCart } from '../cartState/cart.action';
import "./category.css" ;

const Laptops = () => {
    const data = useSelector(state => state.productData.data) ;
    const dispatch = useDispatch()

    let final = data.products ;

    console.log(final)
    const handleCartAdd = (id) => {
        dispatch(addToCart(id))
        alert("Add to cart")
      }

    useEffect(() => {
    dispatch(getData)
    }, [])
  return (
    <div className='displayGrid' >
    {
     final.map((ele) => {
        return ele.category == "laptops" ? <div className="card childElements" >
        <img src={ele.thumbnail} className="card-img-top" alt="..."/>
        <div className="card-body cartBodyEach">
          <h5 className="card-title" >{ele.title}</h5>
          <p className="card-text" style={{color : "grey"}}>{ele.description}</p>
          <p className="card-text" ><b>Price :</b> {ele.price}</p>
          <p className="card-text"><b>Rating :</b> {ele.rating}</p>
          <p className="card-text"><b>Category :</b> {ele.category}</p>
          { 
           ele.stock < 50 ? <p style={{color : "red"}}>hurry! only a few items left</p> : "" 
           }
          <button  className="btn btn-primary" onClick={() => handleCartAdd(ele.id)}>Add to Cart</button>
        </div>
      </div>
        
        : ""
     })
    }
     
   </div>
  )
}

export default Laptops
