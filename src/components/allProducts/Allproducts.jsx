import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux' ;
import { addToCart } from '../cartState/cart.action';
import "./allproducts.css" ;
import { getData, setFilter } from '../productState/product.action';
import { useState } from 'react';

const Allproducts = () => {
    const data = useSelector(state => state.productData.data) ;
    const [flag, setFlag] = useState(false) ;
    const [flag1, setFlag1] = useState(false) ;
    const [filterData, setFilterdata] = useState([])
    const dispatch = useDispatch()
    // console.log(data)
    const handleCartAdd = (id) => {
        dispatch(addToCart(id))
        alert("Add to cart")
      }
      const handleOptionChange = (e) => {
              let option = e.target.value
            //   console.log(option)
            //   dispatch(setFilter(option))
              if(option = "price" ) {
                let final = data.products.sort((a, b) => a.price-b.price)
                setFlag(true) ;
                setFlag1(false)
                setFilterdata(final)
                console.log(final)
              } if(option = "rating") {
                let final = data.products.sort((a, b) => a.rating-b.rating)
                setFlag1(true)
                setFlag(false)
                setFilterdata(final)
              }
      }
      useEffect(() => {
        dispatch(getData)
      }, [])

  return (
    <>
    <div className='sortinDiv'>
    <select className="form-select" aria-label="Default select example" onChange={handleOptionChange}>
        <option selected>Sort items</option>
        <option value="price">Price</option>
        <option value="rating">Rating</option>
        
   </select>
    </div> {
        flag || flag1 ? <div className='displayGrid'>
        {
        filterData && filterData.map((ele) => {
                return <div className="card childElements" key={ele.id} >
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
            })
        }
        </div> : 
        <div className='displayGrid'>
        {
        data.products && data.products.map((ele) => {
                return <div className="card childElements" key={ele.id} >
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
            })
        }
        </div>
      }
    </>
  )
}

export default Allproducts
