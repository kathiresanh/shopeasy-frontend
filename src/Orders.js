import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export default function Orders() {



    const [orders, setorders] = useState([])
    const navigate = useNavigate();


    // delete order 

    let deleteorder = async(values)=>{
          try {
            await axios.put(`https://shopeasyend.herokuapp.com/deleteorder/${window.localStorage.getItem("email")}`,values).then(function(response){
                console.log(response)
                loadorders()
            })
          } catch (error) {
              console.log(error)
          }
    }


    let loadorders = async () => {
        try {
            await axios.get(`https://shopeasyend.herokuapp.com/getordersdata/${window.localStorage.getItem("email")}`).then(function (response) {
                setorders(response.data)
            })
        } catch (error) {
            console.log(error)
            navigate("/")
        }
    }

    useEffect(() => {
        loadorders()
       
    
    }, [])
    return (
        <div className="container-fluid" id="products">
         
            {
                orders.map((obj) => {
                    return <div class="card p-3 text-dark" id="orders">

                        <div class="card-body d-flex">
                            <img src={obj.productimage} class="card-img-top rounded" id="image" />
                            <div>
                                <h5 class="card-title">Name : {obj.productname}</h5>
                                <h5> price : {obj.price} INR</h5>
                            </div>
                            
                        </div>
                        <div className="d-flex justify-content-end"><button onClick={()=>{deleteorder(obj)}} className="btn btn-danger p-1">cancel order</button></div>
                    </div>

                })
            }

        </div>
    )
}