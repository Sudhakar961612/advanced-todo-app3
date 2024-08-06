import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/actions/authActions";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";

const LoginPage = ({ toggleForm }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const authError = useSelector((state) => state.auth.error);

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login(username, password));
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/home");
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className='auth-form'>
      <div className='login-container'>
        <h1>Login</h1>
        <form onSubmit={handleLogin} className='form'>
          <label htmlFor='username' className='form-label'>
            Username
          </label>
          <input type='text' id='username' value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Enter your username' className='input' required />
          <label htmlFor='password' className='form-label'>
            Password
          </label>
          <input type='password' id='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter your password' className='input' required />
          {authError && <p className='error-message'>Invalid username or password</p>}
          <button type='submit' className='button'>
            Login
          </button>
          <p className='form-footer'>
            Don't have an account?{" "}
            <button onClick={toggleForm} className='toggle-button'>
              Register
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
