// src/redux/actions/authActions.js
export const REGISTER = "auth/REGISTER";
export const LOGIN = "auth/LOGIN";
export const LOGOUT = "auth/LOGOUT";

export const register = (username, password) => ({
  type: REGISTER,
  payload: { username, password },
});

export const login = (username, password) => ({
  type: LOGIN,
  payload: { username, password },
});

export const logout = () => ({
  type: LOGOUT,
});
