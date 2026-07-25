import { useState } from "react";

export const Registration = () => {

    // initialize the state for capturing the value
    const [formData, setFormData]= useState({
        fullName:"",
        email: "",
        profession: "",
        degree: "",
        phone: "",
        address: "",
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
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-xl-6 col-lg-8">
          <div className="card shadow-sm">
            <div className="card-body">
              <h2 className="card-title mb-4 text-center">Registration Form</h2>

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="fullName" className="form-label">Full Name</label>
                  <input
                    id="fullName"
                    type="text"
                    className="form-control"
                    onChange={handleChange}
                    value={formData.fullName}
                    name="fullName"
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    id="email"
                    type="email"
                    className="form-control"
                    onChange={handleChange}
                    name="email"
                    value={formData.email}
                    placeholder="Enter your email"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="profession" className="form-label">Profession</label>
                  <input
                    id="profession"
                    type="text"
                    className="form-control"
                    onChange={handleChange}
                    name="profession"
                    value={formData.profession}
                    placeholder="Enter your profession"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="degree" className="form-label">Degree</label>
                  <input
                    id="degree"
                    type="text"
                    className="form-control"
                    onChange={handleChange}
                    name="degree"
                    value={formData.degree}
                    placeholder="Enter your degree"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">Phone Number</label>
                  <input
                    id="phone"
                    type="tel"
                    className="form-control"
                    onChange={handleChange}
                    name="phone"
                    value={formData.phone}
                    placeholder="Enter your phone number"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="address" className="form-label">Address</label>
                  <input
                    id="address"
                    type="text"
                    className="form-control"
                    onChange={handleChange}
                    name="address"
                    value={formData.address}
                    placeholder="Enter your address"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input
                    id="password"
                    type="password"
                    className="form-control"
                    onChange={handleChange}
                    name="password"
                    value={formData.password}
                    placeholder="Enter your password"
                  />
                </div>

                <button type="submit" className="btn btn-primary w-100">Submit</button>
              </form>
            </div>
          </div>

          <div className="card mt-4">
            <div className="card-body">
              <h3 className="card-title mb-3">Form Preview</h3>
              <p className="mb-1"><strong>Full name:</strong> {formData.fullName}</p>
              <p className="mb-1"><strong>Email:</strong> {formData.email}</p>
              <p className="mb-1"><strong>Profession:</strong> {formData.profession}</p>
              <p className="mb-1"><strong>Degree:</strong> {formData.degree}</p>
              <p className="mb-1"><strong>Phone:</strong> {formData.phone}</p>
              <p className="mb-0"><strong>Address:</strong> {formData.address}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// export default Registration
