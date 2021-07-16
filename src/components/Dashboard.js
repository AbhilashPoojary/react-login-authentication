import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Link, useHistory } from "react-router-dom";

export default function Dashboard() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useHistory();
  async function handleLogout() {
    setError("");

    try {
      await logout();
      history.push("/signin");
    } catch {
      setError("Failed to log out");
    }
  }
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
        <p id='profile-name' className='profile-name-card'>
          <strong>Email:</strong> {currentUser.email}
        </p>
        <Link to='/update-profile' className='btn btn-primary w-100 mt-3'>
          Update Profile
        </Link>

        <div className='w-100 text-center mt-2'>
          <button className='btn btn-link' onClick={handleLogout}>
            Log Out
          </button>
        </div>
      </div>
    </>
  );
}
