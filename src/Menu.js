import { AnimatePresence } from "framer-motion";
import React from "react";
import { motion } from "framer-motion";
import { useState } from 'react';
import { AnimateSharedLayout } from "framer-motion"


const items = [{
    name: "Home",
    icon: "bi bi-house"
}, {
    name: "Dash board",
    icon: "bi bi-card-list"
}, {
    name: "Wishlist",
    icon: "bi bi-heart"
}, {
    name: "Orders",
    icon: "bi bi-truck"
}, {
    name: "Cart",
    icon: "bi bi-cart",
}]


function Content() {
    return (
      <motion.div
        layout
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        
      >
      
      <h1 id="grandchildern">hello im gayathri</h1>
      <h1 id="grandchildern">hello im gayathri</h1>
     
      </motion.div>
    );
  }

function Item() {

    const [isOpen, setIsOpen] = useState(false);
  
const toggleOpen = () => setIsOpen(true);


 
    return (
    <div>
          <motion.div layout initial={{ borderRadius: 10 }} whileHover={toggleOpen} onHoverEnd={e=>{setIsOpen(false)}}  id="child">
        <h6>hello gyus im kathiresan</h6>
         
          
      </motion.div>
      <AnimatePresence>{isOpen && <Content />}</AnimatePresence>
 
    </div>
    );
  }
export default function Menu() {
 
    return (
        <AnimateSharedLayout >
        <motion.div layout initial={{ borderRadius: 25 }}    id="parent">
         <Item></Item>
        </motion.div>
      </AnimateSharedLayout>
    )
}



 