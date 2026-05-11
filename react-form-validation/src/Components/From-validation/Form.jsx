import React, { useState } from "react";
import { useFormik } from 'formik';

const Form = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password :''
    },
    onSubmit : (values, {resetForm}) =>{
      console.log(values);
      resetForm({values: ""});
    },
  });


  return (
    <div className="container">
      <h2>Form Validation</h2>

      <div className="w-50 m-auto">
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              id="name"
              className="form-control"
              placeholder="Enter Name"
              onChange={formik.handleChange}
              value={formik.values.name}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              email="email"
              id="email"
              className="form-control"
              placeholder="Enter email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              password="password"
              id="password"
              className="form-control"  
              placeholder="Enter password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
          </div>
          <div className="">
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
