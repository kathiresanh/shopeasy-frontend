import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


export default function Cart() {

  const [orderid, setorder] = useState("")
  const [cart, setcart] = useState([])

  const navigate = useNavigate();



  //  step1 calling razor pay
  let loadrazopay = async (values) => {
     
    await axios.post("https://shopeasyend.herokuapp.com/createorder", values).then(function (response) {
     
      setorder(response.data.id);
      if (response.data.id != null) {
        openPayModal(response.data, values)
      }
    })
      .catch(function (error) {
        console.log(error);
      });
  }


  

  let addToOrders = async (values) => {
    try {
      await axios.put(`https://shopeasyend.herokuapp.com/addToOrders/${window.localStorage.getItem("email")}`, values)
      loadcartdata()
    } catch (error) {
      console.log(error)
    }
  }

  let callSignatureVerify = async (response, values) => {

    try {
      await axios.post("https://shopeasyend.herokuapp.com/api/payment/verify", response).then(function (response) {
        if (response.data.signatureIsValid) {
          addToOrders(values)
        }
      })

    } catch (error) {
      console.log(error)
    }
  }

  const openPayModal = (data, values) => {
       
    const options = {
      "key": "rzp_test_ueXIjC2vVytCtJ", // Enter the Key ID generated from the Dashboard
      "amount": data.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      "currency": "INR",
      "name": "Shop Easy",
      "description": "Test Transaction",
      "image": "./images/companylogo.png",
      "order_id": data.id, //This is a sample Order ID. Pass the `id` obtained in the previous step
      "handler": function (response) {
        callSignatureVerify(response, values)
        // console.log(response)
        // alert(response.razorpay_payment_id);
        // alert(response.razorpay_order_id);
        // alert(response.razorpay_signature)
      },
      prefill: {
        name: 'Gaurav',
        contact: '9999999999',
        email: 'demo@demo.com'
      },
      notes: {
        address: 'some address'
      },
      theme: {
        color: 'green ',
        hide_topbar: false
      }
    };


    var rzp1 = new window.Razorpay(options);

    rzp1.open();
  };
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);


  //  load  the cart details of logged in user
  let loadcartdata = async () => {
    try {
      await axios.get(`https://shopeasyend.herokuapp.com/getcartdata/${window.localStorage.getItem("email")}`).then(function (response) {
        setcart(response.data)
      
      })
    } catch (error) {
      console.log(error)
      navigate("/")
    }
  }

  useEffect(() => {
    loadcartdata()
 
  }, [])

// remove cart

let removecart =async(values)=>{
  try {
    await axios.put(`https://shopeasyend.herokuapp.com/deletecart/${window.localStorage.getItem("email")}`,values).then(function(response){
        console.log(response)
        loadcartdata()
    })
  } catch (error) {
      console.log(error)
  }
}
   
  return (
    <div className="container-fluid" id="products">
      {

        cart.map((obj) => {
          return <div class="card  text-dark" id="cards">
            <img src={obj.productimage} class="card-img-top rounded" height="200" />
            <div class="card-body">
              <h5 class="card-title">{obj.productname}</h5>
              <h5>{obj.price} INR</h5>
              
              <div className="d-flex justify-content-end"> <button className="btn btn-danger" onClick={()=>{removecart(obj)}}>Remove </button> &nbsp;<button onClick={() => {loadrazopay(obj)}} class="btn btn-primary"> Pay  <span> <i class="bi bi-credit-card"></i></span></button></div>
            </div>
          </div>

        })

      }
    </div>
  )
}
