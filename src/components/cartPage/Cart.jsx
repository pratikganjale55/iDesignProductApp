import React from 'react'
import { useDispatch, useSelector } from 'react-redux' ;
import { removeElement } from '../cartState/cart.action';
import "./cart.css" ;


const Cart = () => {

  let data = useSelector(state => state.cartData.data)  ;
  const dispatch = useDispatch() ;


  const handleCartRemove = (id) => {
    dispatch(removeElement(id))
    

  }
  console.log(data)
  
  return ( 
  <>  
  {
    data.length <= 0 ? <h3>No Any Cart Items Yet</h3> :
    <div className='displayGrid' >
    {
     data.map((ele) => {
        return <>
        <div className="card childElements" >
        <img src={ele.thumbnail} className="card-img-top" alt="..."/>
        <div className="card-body cartBodyEach">
          <h5 className="card-title" >{ele.title}</h5>
          <p className="card-text" style={{color : "grey"}}>{ele.description}</p>
          <p className="card-text" ><b>Price :</b> {ele.price}</p>
          <p className="card-text"><b>Rating :</b> {ele.rating}</p>
          <p className="card-text"><b>Category :</b> {ele.category}</p>
         
           
          <button  className="btn btn-primary" onClick={() => handleCartRemove(ele.id)}>Remove from card</button>
        </div>
      </div>
        
      </>
     })
    }
     
   </div>
}
   </>
  )
}

export default Cart
