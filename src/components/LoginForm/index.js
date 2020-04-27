import React, {useState} from 'react';
import './LoginForm.scss';
import { ReactComponent as Logo } from '../../assets/greenlogo.svg';

function LoginForm() {

     const [form, setForm] = useState({
         email: '',
         remember: false
     });


    function handleChange(e) {
        e.persist();
        const {name, type, value, checked} = e.target;
        
        const val = name === 'remember' ? checked : value;
        setForm(form => ({...form, [name]: val}));
    }

    function handleSubmit(e) {
        e.preventDefault();

    }


    return <div className="loginForm__card">
            <Logo className="loginForm__card__greenlogo"/>
            <h1 className="loginForm__card__loginTitle">Example Login screen</h1>
             
             <p className="loginForm__card__subText">Getting started with Green</p>
             <form onSubmit={handleSubmit}>
                <fieldset className="loginForm__card__fieldSet">
                     <label htmlFor="emailAddress" className="loginForm__card__formLabel">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="emailAddress"
                                    name="email"
                                    placeholder=""
                                    onChange={handleChange}
                                    className="loginForm__card__formInput"
                                    value={form.email}
                                    />
                </fieldset>

                <label className="loginForm__card__rememberCheckbox">
                    Remember this device
                    <input type="checkbox" id="remember" name="remember" onChange={handleChange} checked={form.remember}/>
                     <span className="checkmark"></span>
                </label>

                <button className="loginForm__card__loginButton" type="submit">
                        Sign In
                </button>
             </form> 
    </div>
}

export default LoginForm;