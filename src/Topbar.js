import React, { useState,createContext } from "react";
import { Link } from "react-router-dom";
import Filter from "./Filter";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useFormik } from "formik";


export default function Topbar(){
  const UserContext = createContext()
  const [product,setproduct]=useState([])
  const [filter,setfilter] = useState(false)
  const navigate = useNavigate();

  let handlechange =async (event)=>{
    setfilter(true)
    navigate("/filter")

  }
  const formik = useFormik({
    initialValues: {
      searchitem: '',
    },
    onSubmit: async  values => {
      try {
        await axios.post("https://shopeasyend.herokuapp.com/getfilterproduct",values).then(function (response) {
            setproduct(response.data)
            console.log(response.data)
            setfilter(true)
           
        })
    } catch (error) {
        console.log(error)
        
    }
    },
  });

    return(<div>
 
      <div className="col-sm-12 p-4 fixed-top d-flex justify-content-end mb-3" id="topbar">
          <div className="col-sm-3 ">
<form class="d-flex " onSubmit={formik.handleSubmit}>
        <input class="form-control me-2" type="text" id="searchitem"
         name="searchitem"
        placeholder="Search Products" aria-label="Search"   onChange={formik.handleChange}
         value={formik.values.searchitem} />
        <button className="btn text-white bg-dark" type="submit"><i class="bi bi-search"></i></button>
      
      </form>
</div>
      </div>
    {
      filter ?   <Filter data={product}></Filter> :null
    }

    </div>
      
    )
}