
import { Route, Routes } from 'react-router';
import './App.css';
import Laptops from './components/category/Laptops';
import Profesional from './components/category/Profesional';
import Smartphone from './components/category/Smartphone';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import Frangrances from "./components/category/Frangrances" ;
import Skincare from './components/category/Skincare';
import Automobile from "./components/category/Automobile" ;
import Homedecoration from "./components/category/Homedecoration" ;
import Furniture from "./components/category/Furniture.jsx" ;
import Cart from './components/cartPage/Cart';
import Allproducts from './components/allProducts/Allproducts';



function App() {
  return (
  <>
  <div className='App'>
      <Navbar/>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/professionalWear' element={<Profesional/>}/>
          <Route path='/smartphones' element={<Smartphone/>}/>
          <Route path='/laptops' element={<Laptops/>}/>
          <Route path='/fragrances' element={<Frangrances/>}/>
          <Route path='/skincare' element={<Skincare/>}/>
          <Route path='/automotive' element={<Automobile/>}/>
          <Route path='/decoration' element={<Homedecoration/>}/>
          <Route path='/furniture' element={<Furniture/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/allproducts' element={<Allproducts/>}/>
      </Routes>
  </div>

    
  
  </>

  );
}

export default App;

