import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Link, useHistory } from "react-router-dom";

export default function SignIn() {
  const { signin } = useAuth();
  const [formData, setFormdata] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      await signin(formData.email, formData.password);
      history.push("/");
    } catch {
      setError("Failed to login");
    }
    setLoading(false);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormdata({
      ...formData,
      [name]: value,
    });
  };
  return (
    <>
      {error && (
        <div className='alert alert-danger'>
          <h4 className='alert-heading'>{error}</h4>
        </div>
      )}

      <div className='card card-container'>
        <img
          id='profile-img'
          className='profile-img-card'
          src='//ssl.gstatic.com/accounts/ui/avatar_2x.png'
          alt='profileimage'
        />
        <p id='profile-name' className='profile-name-card'></p>
        <form className='form-signin' onSubmit={handleSubmit}>
          <span id='reauth-email' className='reauth-email'></span>
          <input
            type='email'
            id='inputEmail'
            value={formData.email}
            name='email'
            className='form-control'
            placeholder='Email address'
            onChange={handleChange}
            autoFocus
          />
          <input
            type='password'
            id='confirmPassword'
            value={formData.password}
            name='password'
            className='form-control'
            placeholder='Password'
            onChange={handleChange}
          />
          <div id='remember' className='checkbox'></div>
          <button
            className='btn btn-lg btn-primary btn-block btn-signin'
            type='submit'
            disabled={loading}
          >
            Sign in
          </button>
        </form>
        <div className='w-100 text-center mt-3'>
          <Link to='/forgot-password'>Forgot Password?</Link>
        </div>
        <div className='w-100 text-center mt-2'>
          Need an account? <Link to='/signup'>Sign Up</Link>
        </div>
      </div>
    </>
  );
}
