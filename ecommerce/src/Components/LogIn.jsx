import React, { useState } from "react";
import '../index.css';
import { Link } from "react-router-dom";

function LogIn() {
  const[data,setData]=useState({
    email: "",
    password: ""
  })
  return (
    <>
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="fbg p-5">
        <div className="row mb-4">
            <div className="col-12">
              <h1 className="text-center">LogIn</h1>
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
              <button className="btn btn-primary w-100">Log In</button>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <p>Don't have an account? <Link to='/register'>Sign Up</Link></p>
            </div>
          </div>
        </div>
      </div>
      <h4>
        your email:{data.email}
      </h4>
      <h4>
        your password:{data.password}
      </h4>
    </>
  );
}

export default LogIn;
