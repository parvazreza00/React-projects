import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import cardImage from "./../../../public/card-image.jpg";

const ReactBootstrap = () => {

  const [user, setUser] = useState({name:'', email:'', phone:'', address:''});
  const { name, email, phone, address } = user;

  const handleChange = (e) => {
    setUser({...user, [e.target.name]: e.target.value});

    
  }

  const handleFormData  = (e) => {
    e.preventDefault();
    
    console.log(user);
  }



  return (
    <div>

      <form action="" onSubmit={handleFormData}>
        <div className="mb-4">
          <label htmlFor="name">Name</label>
          <input type="text" className="form-control" name="name" id="name" placeholder="Enter Name" onChange={handleChange} value={name}/>
        </div>
        <div className="mb-4">
          <label htmlFor="email">Email</label>
          <input type="email" className="form-control" name="email" id="email" placeholder="Enter Email" onChange={handleChange} value={email}/>
        </div>
        <div className="mb-4">
          <label htmlFor="phone">Phone</label>
          <input type="text" className="form-control" name="phone" id="phone" placeholder="Enter Phone" onChange={handleChange} value={phone}/>
        </div>
        <div className="mb-4">
          <label htmlFor="address">Address</label>
          <input type="text" className="form-control" name="address" id="address" placeholder="Enter Address" onChange={handleChange} value={address}/>
        </div>

        <div className="mb-4">          
        <Button variant="primary" type="sumbit" >Register</Button>
        </div>
        
      </form>
    


     
    </div>
  );
};

export default ReactBootstrap;
