import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../redux/actions/authActions";
import "./LogoutButton.css"; // Optional for styling

const LogoutButton = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <button onClick={handleLogout} className='button'>
      Logout
    </button>
  );
};

export default LogoutButton;
