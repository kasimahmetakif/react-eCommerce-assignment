import React, { useState, useEffect } from 'react';
import LoginBanner from "../components/LoginBanner";
import { useNavigate } from 'react-router-dom';

function LoginRegister() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [users, setUsers] = useState([]);
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://localhost:3000/Users') // JSON Server URL'iniz
            .then(response => response.json())
            .then(data => setUsers(data))
            .catch(error => console.error('Error:', error));
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        const user = users.find(u => u.email === email && u.password === password);
        if (user) {
            setMessage('Login Successfully');
            navigate('/Home');

        } else {
            setMessage('Please Try Again');
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        if (name === 'email') {
            setEmail(value);
        } else if (name === 'password') {
            setPassword(value);
        }
    };

    return (
        <>
            <LoginBanner/>
            <div className="login_register_area">
                <div className="container">
                    <div className="row gx-5">
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 offset-xl-1">
                            <h3 className="title-7">Login</h3>
                            <div className="login_wrapper">
                                <form onSubmit={handleSubmit}>
                                    <div className="input_wrap">
                                        <label>Email address <span>*</span></label>
                                        <input type="text" name="email" value={email} onChange={handleChange}/>
                                    </div>
                                    <div className="input_wrap">
                                        <label>Password<span>*</span></label>
                                        <input type="password" name="password" value={password} onChange={handleChange}/>
                                        <span className="show-pass"><i className="far fa-eye-slash"></i></span>
                                    </div>
                                    {message && <div className="message">{message}</div>}
                                    <div className="input_wrapp-2">
                                        <input type="checkbox" name="check"/>
                                        <span>Remember me </span>
                                    </div>
                                    <div className="input_wrap">
                                        <button type="submit">log in</button>
                                    </div>
                                    <div className="input_wrap">
                                        <a href="#">Lost your password?</a>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LoginRegister;
