import logo from './logo.svg';
import './App.css';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import { motion } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { AnimateSharedLayout } from "framer-motion"
import Menu from './Menu';
import "bootstrap-icons/font/bootstrap-icons.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
  Routes
} from "react-router-dom";
import Home from './Home';
import Product from './Product';
import Addproduct from './Addproduct';
import Cart from './Cart';
import Orders from './Orders';
import Wishlist from "./Wishlist";
import Dashboard from "./Dashboard"
import Register from './Register';
import Filter from './Filter';



export default function App() {

  const [menu, setmenu] = useState(false)
  

  return (
    <BrowserRouter>
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-2 p-0' >
          <Sidebar></Sidebar>
        </div>

        <div className='col-10  text-white p-2' >
          <Topbar></Topbar>
         
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/product' element={<Product></Product>}></Route>
          <Route path='/addproduct' element={<Addproduct></Addproduct>}></Route>
          <Route path='/cart' element={<Cart></Cart>}></Route>
          <Route path='/orders' element={<Orders></Orders>}></Route>
          <Route path='/wishlist' element={<Wishlist></Wishlist>}></Route>
          <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
          <Route path='/register' element={<Register></Register>}></Route>
          <Route path='/filter' element={<Filter></Filter>}></Route>
        </Routes> 
       
        </div>
      </div>
    </div>
    </BrowserRouter>
  );
}

{/* <motion.div onClick={()=>{setmenu(true)}}> <Sidebar></Sidebar></motion.div>
            <AnimatePresence>{menu && <Sidemenu />}</AnimatePresence>
          */}


