import { useState, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from "../Components/Auth"; 
import { useHistory } from 'react-router-dom';

const Login = () => {
    const { login, error, loading } = useContext(AuthContext); // Get login function and error from context
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useHistory();

    const handleEmail = (e) => setEmail(e.target.value);
    const handlePassword = (e) => setPassword(e.target.value);

    const loginUser = async (e) => {
        e.preventDefault();
        await login(email, password, () => navigate.push("/Allstudents"));
    };

    return ( 
        <div className='col-md-6 offset-md-3 addStudent'>
            <div className='form-content'>
                <h4 align="center">Login</h4>
                <Form onSubmit={loginUser}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control 
                            type="email" 
                            required 
                            onChange={handleEmail} 
                            placeholder="Enter email" 
                            name="email" 
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control 
                            type="password" 
                            required 
                            onChange={handlePassword} 
                            placeholder="Password" 
                            name="password" 
                        />
                    </Form.Group>
                    {error && <p className="text-danger">{error}</p>}
                    <Button variant="primary" type="submit" disabled={loading}>
                        {loading ? "Logging in..." : "Login"}
                    </Button>
                </Form>
            </div>
        </div>
    );
}

export default Login;















// import React from "react";
// import { Link } from "react-router-dom/cjs/react-router-dom.min";
// const Login = () => {




//   return (
//     <div className="form-container">
     
//       <form>

//           <label>Email</label>
//           <input type="email" placeholder="Enter email" />

        

//           <label>Password</label>
//           <input type="password" placeholder="Enter password" />

        
//         <p>Don't have an account <Link to="/Register" className="register-link">Register?</Link></p>


//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default Login;
