import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css'
function Login() {
  return (
    <div className='login'>
        <Link to='/'>
          <img className='login__logo' src='https://logo-logos.com/wp-content/uploads/2016/12/Amazon_logo.png'/>
        </Link>
        <div className='login__container'>
            <h1>Sign in</h1>
            <form>
                <h5>E-mail</h5>
                <input type='text'/>
                <h5>Password</h5>
                <input type='password'/>
            </form>
            <button className='login__signInButton'>Sign In</button>
            <p>
                By signing-in you agree to Amazon's Conditions of Use and Privacy Notice.
            </p>
            <button className='login__registerButton'>Create your Amazon Account</button>
        </div>
    </div>
  )
}

export default Login