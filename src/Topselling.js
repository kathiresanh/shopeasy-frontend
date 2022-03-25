import axios from "axios";
import React, { useEffect, useState } from "react";



export default function Topselling() {
    const [product, setproduct] = useState([])
    let loadproduct = async () => {
        try {
            await axios.get("https://shopeasyend.herokuapp.com/getproduct").then(function (response) {
                setproduct(response.data)
            })
        } catch (error) {
            console.log(error)
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
                    
                    </div>
                  </div>

                })
            }

        </div>
    )
}