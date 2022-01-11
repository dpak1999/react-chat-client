/** @format */

import { useState } from 'react';
import SignupImage from '../assets/signup.jpg';

const Auth = () => {
  const [isSignup, setIsSignup] = useState(true);
  const [form, setForm] = useState({
    fullName: '',
    username: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',
    avatarURL: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div className="auth__form-container">
      <div className="auth__form-container_fields">
        <div className="auth__form-container_fields-content">
          <p>{isSignup ? 'Sign Up' : 'Sign In'}</p>
          <form onSubmit={handleSubmit}>
            {isSignup && (
              <>
                <div className="auth__form-container_fields-content_input">
                  <label htmlFor="fullName">Full Name</label>
                  <input
                    required
                    type="text"
                    name="fullName"
                    placeholder="Enter full name"
                    onChange={handleChange}
                  />
                </div>
                <div className="auth__form-container_fields-content_input">
                  <label htmlFor="phoneNumber">Phone number</label>
                  <input
                    required
                    type="text"
                    name="phoneNumber"
                    placeholder="Enter phone number"
                    onChange={handleChange}
                  />
                </div>
                <div className="auth__form-container_fields-content_input">
                  <label htmlFor="avatarURL">Avatar URL</label>
                  <input
                    required
                    type="text"
                    name="avatarURL"
                    placeholder="Enter avatar url"
                    onChange={handleChange}
                  />
                </div>
              </>
            )}

            <div className="auth__form-container_fields-content_input">
              <label htmlFor="username">Username</label>
              <input
                required
                type="text"
                name="username"
                placeholder="Enter username"
                onChange={handleChange}
              />
            </div>
            <div className="auth__form-container_fields-content_input">
              <label htmlFor="password">Password</label>
              <input
                required
                type="password"
                name="password"
                placeholder="Enter password"
                onChange={handleChange}
              />
            </div>
            {isSignup && (
              <div className="auth__form-container_fields-content_input">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  required
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm password"
                  onChange={handleChange}
                />
              </div>
            )}
            <div className="auth__form-container_fields-content_button">
              <button>{isSignup ? 'Sign Up' : 'Sign In'}</button>
            </div>
          </form>
          <div className="auth__form-container_fields-account">
            <p>
              {isSignup ? 'Already have an account?' : "Don't have an account?"}
              <span onClick={() => setIsSignup(!isSignup)}>
                &nbsp;{isSignup ? 'Sign In' : 'Sign Up'}
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="auth__form-container_image">
        <img src={SignupImage} alt="" />
      </div>
    </div>
  );
};

export default Auth;
