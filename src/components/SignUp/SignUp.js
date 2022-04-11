import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
import { createUserWithEmailAndPassword } from 'firebase/auth';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const [CreateUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth)

    const handleEmailBlur = e => {
        setEmail(e.target.value);
    }

    const handlePasswordBlur = e => {
        setPassword(e.target.value);
    }

    const handleConfirmPasswordBlur = e => {
        setConfirmPassword(e.target.value);
    }

    if(user) {
        navigate('/shop');
    }

    const handleCreateUser = e => {
        e.preventDefault();
        if(password !== confirmPassword) {
            setError("Your Password didn't match")
            return;
        }
        if(password.length <6) {
            setError("Your Password must be 6 character or longer")
            return;
        }
        CreateUserWithEmailAndPassword(email, password)
    }

    return (
        <div>
            <div className='form-container'>
            <form onSubmit={handleCreateUser}>
                <div>
                    <h2 className='form-title'>Login</h2>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                    </div>
                    <input onBlur={handleEmailBlur} type="email" name="email" id="" required/>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                    </div>
                    <input onBlur={handlePasswordBlur} type="password" name="password" id="" required/>
                    <div className="input-group">
                        <label htmlFor="confirm-password">Confirm Password</label>
                    </div>
                    <input onBlur={handleConfirmPasswordBlur} type="password" name="confirm-password" id="" required/>
                    <p style={{color: 'red'}}>{error}</p>
                    <div>
                        <input className='form-submit' type="submit" value="Sign Up" />
                    </div>
                </div>
                <p>Already Have an Account? <Link className='form-link' to='/login'>Log In</Link></p>
            </form>
            
        </div>
        </div>
    );
};

export default SignUp;