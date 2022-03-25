import React from "react";
import Login from "./Login";

import Topselling from "./Topselling";

export default function Home(){

    
    return(
       
          <div className="row" id="home">
              <div className="col-sm-9" >
                <div className=" d-flex justify-content-center">
                <h4  style={{position:"fixed"}}>Top Selling Products</h4>
                </div>
                 <Topselling></Topselling>
              </div>
              <div className="col-sm-3 p-3">
                  <Login></Login>
              </div>
          </div>
        
    )
}