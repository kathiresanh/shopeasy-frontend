import React, { useState } from "react";

export default function Filter(props){

    const [product,setproduct] = useState([])
    console.log("this is props") 
    console.log(props.data)
 
    return(
        <div className="container-fluid d-flex p-4" id="filterproducts">
            {
                props.data.map((obj)=>{
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