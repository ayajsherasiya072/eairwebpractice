import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
function Register() {
  const [data,setData]=useState({
    email:"",
    password:""
  })
  const navigate=useNavigate();
  const handleSubmit=(e)=>{
    e.preventDefault()
    fetch("http://localhost:3000/api/user/register",
      {
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(data)
      }
    )
    .then(res=>res.json())
    .then(res=>{
      if(res.success===true)
      {
        navigate("/home")
      }
      else{
        alert(res.message)
      }
  })
  }
  return (
    <>
    <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="fbg p-5">
        <div className="row mb-4">
            <div className="col-12">
              <h1 className="text-center">SignUp</h1>
            </div>
          </div>
          <div className="row mb-4">
            <div className="col-12">
              <input
                type="text"
                value={data.email}
                className="form-control"
                placeholder="Enter Your Email"
                onChange={(e)=>{
                  setData({...data,email:e.target.value})
                }}
              />
            </div>
          </div>
          <div className="row mb-4">
            <div className="col-12">
              <input
                type="password"
                value={data.password}
                className="form-control"
                placeholder="Enter Your Password"
                onChange={(e)=>{
                  setData({...data,password:e.target.value})
                }}
              />
            </div>
          </div>
          <div className="row mb-4">
            <div className="col-12">
              <button className="btn btn-primary w-100" onClick={handleSubmit}>SignUp</button>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <p className="text-center">Already have an account?<Link to="/">LogIn</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Register