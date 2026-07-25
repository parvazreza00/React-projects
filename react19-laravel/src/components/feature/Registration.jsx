import { useState } from "react";

export const Registration = () => {

    // initialize the state for capturing the value
    const [formData, setFormData]= useState({
        fullName:"",
        email: "",
        password:""
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        // console.log(name, value);

        setFormData({...formData, [name]:value})
    }

    const handleSubmit = (e)=> {
        e.preventDefault();

        console.log(formData);
    }
  return (
    <div>
        <h2>Registration Form</h2>

       <form onSubmit={handleSubmit}>
         <input type="text" onChange={handleChange} value={formData.fullName} name="fullName" placeholder="Enter your Full Name"/><br />
        <input type="text" onChange={handleChange} name="email" value={formData.email} placeholder="Enter your Email"/><br />
        <input type="password" onChange={handleChange} name="password" value={formData.password} placeholder="Enter your Password"/><br />
        <button type="submit">Submit</button>
       </form>

       <br /><br />

       <div>
        <h1>Form Preview</h1>
        <h3>Full name : {formData.fullName}</h3>
        <h3>Email : {formData.email}</h3>
       </div>
      
    </div>
  )
}

// export default Registration
