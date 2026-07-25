import { useRef } from "react";

export const Uncontrolled = () => {
    const fullNameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();



    const handleSubmit = (e)=> {
        e.preventDefault();

        const data = {
            fullName: fullNameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
        };
        console.log(data);

        
    }
  return (
    <div>
        <h2>Uncontrolled - Registration Form</h2>

       <form onSubmit={handleSubmit}>
         <input type="text" ref={fullNameRef} name="fullName" placeholder="Enter your Full Name"/><br />
        <input type="text" ref={emailRef} name="email" placeholder="Enter your Email"/><br />
        <input type="password" ref={passwordRef} name="password"  placeholder="Enter your Password"/><br />
        <button type="submit">Submit</button>
       </form>

       <br /><br />

       {/* <div>
        <h1>Form Preview</h1>
        <h3>Full name : {formData.fullName}</h3>
        <h3>Email : {formData.email}</h3>
       </div> */}
      
    </div>
  )
}

// export default Registration
