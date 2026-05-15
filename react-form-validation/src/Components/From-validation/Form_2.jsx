import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";

const Form_2 = () => {
  const formik = useFormik({
    initialValues: {
      fname: "",
      lname: "",
      username: "",
      address: "",
      phone: "",
      email: "",
      password: "",
    },
    validationSchema: yup.object({
      fname: yup
        .string()
        .min(2, "First name must at least 2 characters")
        .required(),
      lname: yup
        .string()
        .min(2, "Last name must at least 2 characters")
        .required(),
      username: yup
        .string()
        .min(8, "Username must at least 8 characters")
        .required(),
      address: yup.string().min(2, "Address at least 2 characters").required(),
      phone: yup
        .string()
        .matches(/^[0-9]+$/, "Only numbers allowed")
        .min(11, "Phone must be at least 11 digit")
        .required(),
      email: yup.string().email().required(),
      password: yup
        .string()
        .min(8, "Password must at least 8 characters")
        .required(),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm({ values: "" });
    },
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
            onBlur={formik.handleBlur}
          />
          {formik.touched.fname && formik.errors.fname && (
            <span className="text-danger">{formik.errors.fname}</span>
          )}
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
            onBlur={formik.handleBlur}
          />
          {formik.touched.lname && formik.errors.lname && (
            <span className="text-danger">{formik.errors.lname}</span>
          )}
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
            onBlur={formik.handleBlur}
          />
          {formik.touched.username && formik.errors.username && (
            <span className="text-danger">{formik.errors.username}</span>
          )}
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
            onBlur={formik.handleBlur}
          />
          {formik.touched.address && formik.errors.address && (
            <span className="text-danger">{formik.errors.address}</span>
          )}
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
            onBlur={formik.handleBlur}
          />
          {formik.touched.phone && formik.errors.phone && (
            <span className="text-danger">{formik.errors.phone}</span>
          )}
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
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email && (
            <span className="text-danger">{formik.errors.email}</span>
          )}
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
            onBlur={formik.handleBlur}
          />
          {formik.touched.password && formik.errors.password && (
            <span className="text-danger">{formik.errors.password}</span>
          )}
        </div>

        <div className="mb-3 d-grid">
          <button className="btn btn-primary" type="submit">
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form_2;
