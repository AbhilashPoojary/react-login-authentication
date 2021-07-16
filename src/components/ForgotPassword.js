import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

export default function ForgotPassword() {
  const { resetPassword } = useAuth();
  const [formData, setFormdata] = useState({
    email: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setMessage("");
      setError("");
      setLoading(true);
      await resetPassword(formData.email);
      setMessage("Check your inbox for further instructions");
    } catch {
      setError("Failed to reset password");
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
      {message && (
        <div className='alert alert-success'>
          <h4 className='alert-heading'>{message}</h4>
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
          <div id='remember' className='checkbox'></div>
          <button
            className='btn btn-lg btn-primary btn-block btn-signin'
            type='submit'
            disabled={loading}
          >
            Reset Password
          </button>
        </form>
        <div className='w-100 text-center mt-2'>
          <Link to='/signin'>Login</Link>
        </div>
        <div className='w-100 text-center mt-2'>
          Need an account? <Link to='/signup'>Sign Up</Link>
        </div>
      </div>
    </>
  );
}
