import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../redux/actions/authActions";
import "./RegisterPage.css";

const RegisterPage = ({ toggleForm }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const dispatch = useDispatch();

  const handleRegister = (e) => {
    e.preventDefault();
    if (!username || !password || !confirmPassword) {
      setErrorMessage("All fields are required");
      return;
    }
    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match");
      return;
    }
    dispatch(register(username, password));
    setSuccessMessage("Registration successful! Redirecting to login...");
    setTimeout(() => {
      toggleForm();
    }, 2000);
  };

  return (
    <div className='auth-container'>
      <div className='auth-form'>
        <h1>Register</h1>
        <form onSubmit={handleRegister} className='form'>
          <label htmlFor='username' className='form-label'>
            Username
          </label>
          <input type='text' id='username' value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Enter your username' className='input' required />
          <label htmlFor='password' className='form-label'>
            Password
          </label>
          <input type='password' id='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter your password' className='input' required />
          <label htmlFor='confirmPassword' className='form-label'>
            Confirm Password
          </label>
          <input type='password' id='confirmPassword' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder='Confirm your password' className='input' required />
          {errorMessage && <p className='error-message'>{errorMessage}</p>}
          {successMessage && <p className='success-message'>{successMessage}</p>}
          <button type='submit' className='button'>
            Register
          </button>
          <p className='form-footer'>
            Already have an account?{" "}
            <button onClick={toggleForm} className='toggle-button'>
              Login
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
