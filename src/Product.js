import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


export default function Product() {


    
    const [product, setproduct] = useState([])
    const navigate = useNavigate();



   let addtocart = async (values)=>{
      try {
        await axios.put(`https://shopeasyend.herokuapp.com/addtocart/${window.localStorage.getItem("email")}`,values)
      } catch (error) {
          console.log(error)
      }
   }
     
      // get product after login
    let loadproduct = async () => {
        try {
            await axios.get("https://shopeasyend.herokuapp.com/getproduct/login",{
                headers:{
                    Authorization : window.localStorage.getItem("token")
                }
            }).then(function (response) {
                setproduct(response.data)
            })
        } catch (error) {
            console.log(error)
            alert("Login to continue...")
            navigate("/")
        }
    }

    useEffect(() => {
        loadproduct()
      
    }, [])

    console.log(product)

    return (
        <div className="container-fluid" id="products">

            {
                product.map((obj) => {
                    return <div class="card  text-dark" id="cards">
                    <img src={obj.productimage} class="card-img-top rounded" height="200"/>
                    <div class="card-body">
                      <h5 class="card-title">{obj.productname}</h5>
                      <h5>{obj.price} INR</h5>
                     <div className="d-flex justify-content-end"> <a onClick={()=>{addtocart(obj)}} class="btn btn-primary">Add cart  <span><i class="bi bi-cart"></i></span></a></div>
                    </div>
                  </div>

                })
            }

        </div>
    )
}