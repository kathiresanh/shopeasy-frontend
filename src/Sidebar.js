import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Sidebar() {

  const navigate = useNavigate();
  let hanlelogout = ()=>{
    localStorage.clear();
    navigate("/")
  }
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 1
      }
    }
  }
  
  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 }
  }

  const items = [{
    name: "Home",
    icon: "bi bi-house",
    link:"/"
  },{
    name: "Products",
    icon: "bi bi-pc-display-horizontal",
    link: "/product"
  },
  {
    name: "Dashboard",
    icon: "bi bi-person",
    link: "/dashboard"
  },
  {
    name: "Cart",
    icon: "bi bi-cart",
    link: "/cart"
  },  {
    name: "Orders",
    icon: "bi bi-truck",
    link: "/orders"
  }]

  return (

   
        <motion.ul className="text-white bg-dark p-3  position-fixed " id="sidebar"  variants={container}
      initial="hidden"
      animate="show">
        <div className="mt-2"><span> <img src="./images/companylogo.png" alt="" width="37" height="40" /></span><span id="sidemenu" class="h3">Shop Easy</span></div>
       
           {
          items.map((obj)=>{
            return <Link to={obj.link} style={{textDecoration: 'none',color:"white"}}>
            <motion.li   variants={item} whileHover={{scale:1.1}}  animate={{ x: [100,10], opacity: [0,1] }}
            transition={{ delay: 0 }}>
              <span>{<i class={obj.icon}></i>}</span><span id="sidemenu">{obj.name}</span>
            </motion.li>
            </Link>
          })
        
        }
        <li>
        <span><i class="bi bi-power"></i></span><span onClick={hanlelogout} id="sidemenu">Logout</span>
        </li>
      </motion.ul>
     
     



  )
}