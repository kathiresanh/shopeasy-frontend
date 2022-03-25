import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cart from "./Cart";




export default function Dashboard(){

    const [data,setdata] = useState([])
    const [name,setname] = useState([])
    const navigate = useNavigate();
  
    let loaduserdata = async()=>{

        try {
            await axios.get(`https://shopeasyend.herokuapp.com/dashboard/${window.localStorage.getItem("email")}`).then(function(response){
         
                setdata(response.data.cart)
                setname(response.data.name)
            })
          } catch (error) {
              console.log(error)
              navigate("/")
          }
       
    }
    useEffect(()=>{
        loaduserdata()
        if(window.localStorage.getItem("email")==null){
            navigate("/")
        }
    },[])

    console.log(data)
    return (
        <div className="p-5" >
     <div className="card  text-dark" id="adminname" >
            <div className="card-body" >
                <h5>Hiii {name}</h5>
                </div>
        </div>
     
                {
              
                }
          
        </div>
   
    )
}