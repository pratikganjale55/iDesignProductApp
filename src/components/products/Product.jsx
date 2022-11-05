import React from 'react' ;
import "./product.css" ;
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getData } from '../productState/product.action';
import { Link } from 'react-router-dom';


const Product = () => {
 
  const data = useSelector(state => state.productData.data)
  const isLoading = useSelector(state => state.productData.loading);
  const isError = useSelector(state => state.productData.error)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getData())
  }, [])
  // console.log(data.products)
  return isLoading? <h2>Loading...</h2> : isError ? <h2>Something went wrong....</h2> : (
   
    <div>
    <div className='productContainer'>
          <div className="row">
          <div className="col-lg-3 columnDiv">
              <img src='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gh-040720-best-products-1586369359.png?crop=1.00xw:1.00xh;0,0&resize=1200:*' className='productImages'/>

              <h4 className="fw-normal">PROFESIONAL WEAR</h4>
              <b>40%-50% off</b>
              <p><a className="btn btn-secondary viewMoreButton" ><Link to="/professionalWear" className='productLinkCategory'>VIEW MORE</Link> </a></p>
          </div>
          <div className="col-lg-3 columnDiv">
          <img src='https://static.toiimg.com/thumb/msid-88584175,width-800,resizemode-4,imgsize-16704/share.jpg' className='productImages'/>

              <h4 className="fw-normal">SMARTHPHONES</h4>
              <p><b>20%-50% off</b></p>
              <p><a className="btn btn-secondary viewMoreButton" ><Link to="/smartphones" className='productLinkCategory'>VIEW MORE</Link></a></p>
          </div>
          <div className="col-lg-3 columnDiv">
              <img src='https://www.pngfind.com/pngs/m/60-604424_laptops-png-transparent-png.png' className='productImages'/>

              <h4 className="fw-normal">LAPTOPS</h4>
              <b>60%-50% off</b>
              <p><a className="btn btn-secondary viewMoreButton" ><Link to="/laptops" className='productLinkCategory'>VIEW MORE</Link></a></p>
          </div>
          <div className="col-lg-3 columnDiv">
              <img src='https://assets.gadgets360cdn.com/pricee/assets/category/202006/fragrances-1200x628_1592405911.jpg' className='productImages'/>

              <h4 className="fw-normal">FRAGRANGES</h4>
              <b>20%-50% off</b>
              <p><a className="btn btn-secondary viewMoreButton" ><Link to="/fragrances" className='productLinkCategory'>VIEW MORE</Link></a></p>
          </div>
          </div>
  </div>

<div className='productContainer'>
  <div className="row ">
    <div className="col-lg-3 columnDiv ">
      <img src='https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHNraW5jYXJlfGVufDB8fDB8fA%3D%3D&w=1000&q=80' className='productImages'/>

      <h4 className="fw-normal">SKIN CARE</h4>
      <b>10%-50% off</b>
      <p><a className="btn btn-secondary viewMoreButton" ><Link to="/skincare" className='productLinkCategory'>VIEW MORE</Link></a></p>
    </div>
    <div className="col-lg-3 columnDiv">
      <img src='https://i.ytimg.com/vi/S9DnGzgyoX8/maxresdefault.jpg' className='productImages'/>

      <h4 className="fw-normal">HOME DECORATION</h4>
      <b>40%-50% off</b>
      <p><a className="btn btn-secondary viewMoreButton" ><Link to="/decoration" className='productLinkCategory'>VIEW MORE</Link></a></p>
    </div>
    <div className="col-lg-3 columnDiv">
      <img src='https://img.freepik.com/free-vector/home-furniture-set_74855-15461.jpg?w=2000' className='productImages'/>

      <h4 className="fw-normal">FURNITURE</h4>
      <b>20%-60% off</b>
      <p><a className="btn btn-secondary viewMoreButton" ><Link to="/furniture" className='productLinkCategory'>VIEW MORE</Link></a></p>
    </div>
    <div className="col-lg-3 columnDiv">
      <img src='https://img.freepik.com/premium-photo/modern-cars-are-studio-room-3d-illustration-3d-render_37416-149.jpg?w=2000' className='productImages'/>

      <h4 className="fw-normal">AUTOMOTIVE</h4>
      <b>30%-50% off</b>
      <p><a className="btn btn-secondary viewMoreButton" ><Link to="/automotive" className='productLinkCategory'>VIEW MORE</Link></a></p>
    </div>
  </div>
</div>
</div>
)
  
}

export default Product
