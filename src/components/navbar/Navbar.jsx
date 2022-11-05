import React from 'react'
import { Link } from 'react-router-dom' ;
import "./navbar.css" ;

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark" aria-label="Ninth navbar example" >
    <div className="container-xl">
      <a className="navbar-brand" href="#">iDesign</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample07XL" aria-controls="navbarsExample07XL" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarsExample07XL">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
          <li className="nav-item">
            <a className="nav-link active " aria-current="page"><Link to="/" className='navbarLink' >Home</Link></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" ><Link to="/allproducts" className='navbarLink' >All Products</Link></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" ><Link to="/cart" className='navbarLink' >Card</Link></a>
          </li>
          
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle"  id="dropdown07XL" data-bs-toggle="dropdown" aria-expanded="false">Category Filter</a>
            <ul className="dropdown-menu" aria-labelledby="dropdown07XL">
              <li><a className="dropdown-item" ><Link to="/smartphones" className='navbarLinkCategory' >Smartphones</Link></a></li>
              <li><a className="dropdown-item" ><Link to="/laptops" className='navbarLinkCategory' >Laptops</Link></a></li>
              <li><a className="dropdown-item" ><Link to="/fragrances" className='navbarLinkCategory' >Fragrances</Link></a></li>
              <li><a className="dropdown-item" ><Link to="/skincare" className='navbarLinkCategory' >Skincare</Link></a></li>
              <li><a className="dropdown-item" ><Link to="/automotive" className='navbarLinkCategory' >Automotive</Link></a></li>
              <li><a className="dropdown-item" ><Link to="/decoration" className='navbarLinkCategory' >Home-decoration</Link></a></li>
              <li><a className="dropdown-item" ><Link to="/furniture" className='navbarLinkCategory' >Furniture</Link></a></li>
              <li><a className="dropdown-item" ><Link to="/professionalWear" className='navbarLinkCategory' >Professional Wear</Link></a></li>
              
            </ul>
          </li>
        </ul>
        
      </div>
    </div>
  </nav>
    </div>
  )
}

export default Navbar
