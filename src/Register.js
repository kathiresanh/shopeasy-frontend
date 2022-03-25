import react, { useState } from "react";
import { Formik, useFormik } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Register() {
    const navigate = useNavigate();
    const [reply,setreply]=useState("");
    const [register,setRegister]=useState("");
    const formik = useFormik({
        initialValues: {
            name: "",
            phone: "",
            email: '',
            password: "",
            cart:[],
            orders:[],
        },
        onSubmit:async values => {
            setreply("")
            setRegister("")
           try {
               await axios.post("https://shopeasyend.herokuapp.com/register",values).then(function(response){
                setRegister("Sucessfully Registered you can login now")
                         })
           navigate("/")
           } catch (error) {
               if(error){
                setreply("user email already registered")
               }
               console.log(error)
           }
        },
    });

    return (
        <>
            <div className="row">
                <div className="col-lg-4">

                </div>
                <div className="col-sm-4">
                    <div className="card shadow bg-white rounded" id="register">
                        <div className="card-body text-dark">
                            <h5 class="card-title">Register here and Explore version control</h5><br></br>
                            <div className="col-sm-12">
                                <p style={{color: "red"}}><i>{reply}</i></p>
                                <p style={{color: "green"}}><i>{register}</i></p>
                                <form onSubmit={formik.handleSubmit}>
                                    <div class="form-group">
                                        <label for="name">Name</label>
                                        <input class="form-control" id="name"
                                            name="name"
                                            type="text"
                                            onChange={formik.handleChange}
                                            value={formik.values.name} required placeholder="Enter Your Name" />
                                    </div><br></br>
                                    <div class="form-group">
                                        <label for="phone">Phone Number</label>
                                        <input class="form-control" id="phone"
                                            name="phone"
                                            type="number"
                                            onChange={formik.handleChange}
                                            value={formik.values.phone} required placeholder="Enter Your Phone Number" />
                                    </div><br></br>
                                    <div class="form-group">
                                        <label for="email">Email address</label>
                                        <input class="form-control" id="email"
                                            name="email"
                                            type="email"
                                            onChange={formik.handleChange}
                                            value={formik.values.email} required placeholder="Enter email" />
                                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                                    </div><br></br>
                                    <div class="form-group">
                                        <label for="password">Password</label>
                                        <input type="password" class="form-control" id="password"
                                            name="password"
                                          
                                            onChange={formik.handleChange}
                                            value={formik.values.password} required placeholder="Password" />
                                    </div>
                                    <br></br>
                                    <button type="submit" class="btn btn-primary">Submit</button>&nbsp;
                                    <Link to="/"><small>Click here to login</small></Link>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4">

                </div>
            </div>
        </>
    )
}