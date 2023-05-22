import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import MySidenav from "./MySidenav";
import { InputGroup } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import axios from "axios";

const LoginForm = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const PasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Send login data to the server here
        const body = {
            email: email,
            password: password
        }
        await axios.post("http://localhost:2001/signupAdmin/loginAdmin", body)
            .then((response) => {
                console.log(response.data.message);
                alert('login succesfull')
                localStorage.setItem('adminEmail', JSON.stringify(email));
                localStorage.setItem('isLoggedIn', true)
                navigate('/');

            })
            .catch((error) => {
                console.log(error);
                console.log("Login Failed")
                alert('login failed')
            });
        // console.log("Email:", email);
        // console.log("Password:", password);
        // Redirect to home page after successful login
    };
    return (
        <>
            <div className="trukapp">
                <div className="img">
                    <img src="https://static1.squarespace.com/static/55d64111e4b0a862eed6a419/55d80b75e4b0c9ab9657c9c8/62186795c1b2863807ba81d8/1645808539405/unsplash-image-3jG-UM8IZ40.jpg?format=1500w" width="900px" height="870px" />
                </div>

                <div className="container">
                    <div style={{ paddingLeft: '30%', fontSize: '100px' }}>
                        <img src="http://trukapp.com/wp-content/uploads/2021/11/1599843225043_truckapp-5.svg" />
                    </div>
                    <div className="login" >
                        <div style={{ textAlign: 'center', fontSize: '20px' }}>
                            <h3>Login to your account</h3>
                            <form style={{ textAlign: 'center', fontSize: '30px' }}>
                                <div className="field">
                                    <div>
                                        <label>Email</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        <input
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div><br />
                                    <div style={{ display: 'flex' }}>

                                        {/* <InputGroup>
                                        <input
                                            type={showPassword ? 'text' : 'password'}
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            
                                        />
                                        <span onClick={PasswordVisibility}>
                                            {showPassword ? <FaEye /> : <FaEyeSlash />}
                                        </span>
                                        </InputGroup> */}
                                        <InputGroup className="mb-3" style={{ width: '30rem', margin: 'auto' }}>
                                            <label>Password</label>&nbsp;
                                            <Form.Control

                                                type={showPassword ? 'text' : 'password'}
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                            />
                                            <InputGroup.Text onClick={PasswordVisibility}>
                                                {showPassword ? <FaEye /> : <FaEyeSlash />}</InputGroup.Text>
                                        </InputGroup>
                                    </div>
                                </div>
                                <div className="select" style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                                    <div className="radi">
                                        <input type="radio" />&nbsp;
                                        <a href="">Remember me</a>
                                    </div>
                                    <div>
                                        <a href="">Forget password?</a>
                                    </div>

                                </div>
                                <div >
                                    <Button className="button" style={{ backgroundColor: '#F58E26' }} onClick={(e) => handleSubmit(e)}>Login now</Button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginForm;