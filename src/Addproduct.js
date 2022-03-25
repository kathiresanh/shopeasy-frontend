import React from "react";
import { useFormik } from 'formik'
import axios from "axios";


export default function Addproduct() {

    const formik = useFormik({
        initialValues: {
            productname: '',
            productimage: "",
            price: "",
            category: "",
        },
        onSubmit: async values => {
            try {
              let data =  await axios.post("https://shopeasyend.herokuapp.com/addproduct",values)
              console.log(data)
            } catch (error) {
                console.log(error)
            }
        },
    });


    return (
        <div className="container-fluid" id="addproduct">
            <div className="col-sm-6">
                <div className="card border-rounded bg-dark">
                    <div className="card-title">Add Products</div>
                    <div className="card-body">
                        <form onSubmit={formik.handleSubmit}>
                            <label>Product Name</label><br></br>
                            <input
                                className="form-control"
                                id="productname"
                                name="productname"
                                type="text"
                                placeholder="Product Name"
                                onChange={formik.handleChange}
                                value={formik.values.productname}
                            /><br></br>


                            <label>Product category</label><br></br>
                            <select id="category" name="category" className="form-control"
                                onChange={formik.handleChange}
                                value={formik.values.category}>
                                <option value="" selected disabled hidden>Choose category</option>
                                <option value="mobile" className="form-control">Mobile</option>
                                <option value="Laptop" className="form-control">Laptop</option>
                                <option value="watch" className="form-control">Watch</option>
                                <option value="tv" className="form-control">Smart Tv</option>
                            </select><br></br>

                            <label>Product Price</label><br></br>
                            <input
                                className="form-control"
                                id="price"
                                name="price"
                                type="number"
                                placeholder="Product Price"
                                onChange={formik.handleChange}
                                value={formik.values.price}
                            /><br></br>

                            <label>Product Image</label><br></br>
                            <input
                                className="form-control"
                                id="productimage"
                                name="productimage"
                                type="text"
                                placeholder="Product image Link"
                                onChange={formik.handleChange}
                                value={formik.values.productimage}
                            /><br></br>


                            <button className="btn btn-primary" type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}