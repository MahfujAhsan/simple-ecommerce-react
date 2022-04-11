import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();

    const handleEmailBlur = e => {
        setEmail(e.target.value)
    }

    const handlePasswordBlur = e => {
        setPassword(e.target.value)
    }

    if (user) {
        navigate('/shop')
    }

    const handleUserSignIn = e => {
        e.preventDefault()
        signInWithEmailAndPassword(email, password)
    }
    return (
        <div className='form-container'>
            <form onSubmit={handleUserSignIn}>
                <div>
                    <h2 className='form-title'>Login</h2>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                    </div>
                    <input onBlur={handleEmailBlur} type="email" name="email" id="" required />
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                    </div>
                    <input onBlur={handlePasswordBlur} type="password" name="password" id="" required />
                    <div>
                        <input className='form-submit' type="submit" value="Log In" />
                    </div>
                    <p style={{ color: "red" }}>{error?.message}</p>
                    {
                        loading && <p>Loading...</p>
                    }
                </div>
                <p>New To Ema John? <Link className='form-link' to='/signup'>Create an Account</Link></p>
            </form>

        </div>
    );
};

export default Login;