import React from 'react';

const Login = () => {
  return (
    <>
<div className="container">
<form>
<h2 className="heading-account">CREATE YOUR ACCOUNT</h2>    
<div className="container-account">
<div className="mb-3">
    <label  className="form-label">Name</label>
    <input type="text" placeholder="Enter Your Name" className="form-control" id="name" name="name" required/>
</div>
  
<div className="mb-3">
    <label  className="form-label">Email</label>
    <input type="email" placeholder="Enter Your Email" className="form-control" id="name" name="name" required/>
</div>

<div className="mb-3">
    <label  className="form-label">Password</label>
    <input type="password" placeholder="Enter Your Password" className="form-control" id="password" name="password" required/>
</div>
  
<button type="submit" className="btun">Submit</button>
</div>
</form>
</div>
<br/>
    </>
  )
}

export default Login