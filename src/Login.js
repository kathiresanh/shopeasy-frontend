import react, { useState } from "react"
import { Formik } from 'formik';
import { useFormik } from 'formik';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function  Login(){
  const navigate = useNavigate();
    const [reply,setReply] = useState("")
    const formik = useFormik({
        initialValues: {
          email: '',
          password:"",
        },
        onSubmit: async values => {
          setReply("")
          
          try {
            await axios.post("https://shopeasyend.herokuapp.com/login",values).then(function(response){
            localStorage.setItem("token",response.data.tokens)
            localStorage.setItem("name",response.data.name)
            localStorage.setItem("email",response.data.email)
            console.log(response.data.email)
             
        })
        navigate("/product")
        } catch (error) {
            if(error){
              setReply("invalid userid or password")
            }
        }
        },
      });
return(
 <div className="col-sm-12 text-dark" >
   

<div class="card shadow bg-white " id="logincard">
  <div class="card-body">
    
    <div className="col-sm-12">
<h2> LOGIN</h2>
<form onSubmit={formik.handleSubmit}>
  <div class="form-group">
    <label for="email">Email address</label>
    <input class="form-control" id="email"
         name="email"
         type="email"
         onChange={formik.handleChange}
         value={formik.values.email} required  placeholder="Enter email"/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="password">Password</label>
    <input type="password" class="form-control" id="password"
         name="password"
        
         onChange={formik.handleChange}
         value={formik.values.password} required placeholder="Password"/>
         {/* <div className=" d-flex flex-row-reverse"><Link to="/forgot"><small>forgot password</small></Link></div> */}
  </div>
  <p style={{color:"red"}}><i>{reply}</i></p>
 <br></br>
  <button type="submit" class="btn btn-primary">Login</button>&nbsp;
   <Link to="/register"><small>New User?</small></Link>
</form>
</div>
     
  </div>
</div>


 
</div>
 
)

}