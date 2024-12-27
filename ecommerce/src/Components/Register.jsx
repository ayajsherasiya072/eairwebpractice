import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Register() {
  const [data,setData]=useState({
    email:"",
    password:""
  })
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
              <button className="btn btn-primary w-100">SignUp</button>
            </div>
          </div>
          <div className="row mb-4">
            <div className="col-12">
              <p className="text-center">Already have an account?<Link to="/login">LogIn</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register
