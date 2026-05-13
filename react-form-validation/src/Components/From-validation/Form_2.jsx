import React, { useState } from "react";
import { useFormik } from "formik";

const Form_2 = () => {
    const formik = useFormik({
        initialValues:{
           fname:'',
           lname:'',
           username:'',
           address:'',
           phone:'',
           email:'',
           password:''  
        },
        onSubmit: (values, {resetForm}) => {
            console.log(values);
            resetForm({values:""});
        }
    });
    

  

  return (
    <div className="w-50 m-auto">
      <h1 className="bg-success py-2 text-center text-white">
        Registration Form
      </h1>
      <form action="" onSubmit={formik.handleSubmit}>
        <div className="mb-3">
          <label htmlFor="fname">First Name</label>
          <input
            type="text"
            className="form-control"
            name="fname"
            id="fname"
            placeholder="Enter first name"
            value={formik.values.fname}
            onChange={formik.handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="lname">Last Name</label>
          <input
            type="text"
            className="form-control"
            name="lname"
            id="lname"
            placeholder="Enter last name"
            value={formik.values.lname}
            onChange={formik.handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="username">User Name</label>
          <input
            type="text"
            className="form-control"
            name="username"
            id="username"
            placeholder="Enter user name"
            value={formik.values.username}
            onChange={formik.handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            className="form-control"
            name="address"
            id="address"
            placeholder="Enter Address"
            value={formik.values.address}
            onChange={formik.handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phone">Phone</label>
          <input
            type="number"
            className="form-control"
            name="phone"
            id="phone"
            placeholder="Enter phone"
            value={formik.values.phone}
            onChange={formik.handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            id="email"
            placeholder="Enter email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            id="password"
            placeholder="Enter password"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
        </div>
        <div className="mb-3 d-grid">
          <button className="btn btn-primary" type="submit">Register</button>
        </div>
      </form>
    </div>
  );
};

export default Form_2;
