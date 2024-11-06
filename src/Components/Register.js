import React from 'react';

const Register = () => {
    
  return (
    <div className="form-container">
      
      <form>
        
          <label>First Name</label>
          <input type="text" placeholder="Enter first name" />


          <label>Last Name</label>
          <input type="text" placeholder="Enter last name" />


          <label for="gender">Gender:</label>
        <br/>
        <select name="gender" id="gender">
            <option value="">Select your gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
        </select>
        <br/>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Register;
