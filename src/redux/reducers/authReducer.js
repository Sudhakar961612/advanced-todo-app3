// src/redux/reducers/authReducer.js
import { REGISTER, LOGIN, LOGOUT } from "../actions/authActions";

const initialState = {
  isAuthenticated: false,
  user: null,
  users: JSON.parse(localStorage.getItem("users")) || [],
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER:
      const { username, password } = action.payload;
      const existingUser = state.users.find((user) => user.username === username);
      if (!existingUser) {
        const newUser = { username, password };
        const updatedUsers = [...state.users, newUser];
        localStorage.setItem("users", JSON.stringify(updatedUsers));
        return { ...state, users: updatedUsers, user: newUser, isAuthenticated: true, error: null };
      }
      return { ...state, error: "Username already exists" };
    case LOGIN:
      const { username: loginUser, password: loginPass } = action.payload;
      const user = state.users.find((user) => user.username === loginUser && user.password === loginPass);
      if (user) {
        return { ...state, user, isAuthenticated: true, error: null };
      }
      return { ...state, error: "Invalid username or password" };
    case LOGOUT:
      return { ...state, isAuthenticated: false, user: null, error: null };
    default:
      return state;
  }
};

export default authReducer;
