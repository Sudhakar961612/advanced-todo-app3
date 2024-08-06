import axios from "axios";

// Action Types
export const FETCH_TASKS = "FETCH_TASKS";
export const ADD_TASK = "ADD_TASK";
export const DELETE_TASK = "DELETE_TASK";

// Replace with your actual task list ID and access token
const TASK_LIST_ID = "YOUR_TASK_LIST_ID";
const ACCESS_TOKEN = "YOUR_ACCESS_TOKEN";

// Action Creators
export const fetchTasks = () => async (dispatch) => {
  try {
    const response = await axios.get(`https://www.googleapis.com/tasks/v1/lists/${TASK_LIST_ID}/tasks`, {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    });
    console.log("API response:", response.data); // Log the response data
    dispatch({ type: FETCH_TASKS, payload: response.data.items });
  } catch (error) {
    console.error("Failed to fetch tasks", error);
    if (error.response) {
      console.error("Response data:", error.response.data);
      console.error("Response status:", error.response.status);
      console.error("Response headers:", error.response.headers);
    } else if (error.request) {
      console.error("Request data:", error.request);
    } else {
      console.error("Error message:", error.message);
    }
  }
};

export const addTask = (task) => async (dispatch) => {
  try {
    const response = await axios.post(` https://tasks.googleapis.com/tasks/v1/users/@me/lists`, task, {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
        "Content-Type": "application/json",
      },
    });
    dispatch({ type: ADD_TASK, payload: response.data });
  } catch (error) {
    console.error("Failed to add task", error);
    if (error.response) {
      console.error("Response data:", error.response.data);
      console.error("Response status:", error.response.status);
      console.error("Response headers:", error.response.headers);
    } else if (error.request) {
      console.error("Request data:", error.request);
    } else {
      console.error("Error message:", error.message);
    }
  }
};

export const deleteTask = (taskId) => async (dispatch) => {
  try {
    await axios.delete(`https://www.googleapis.com/tasks/v1/lists/${TASK_LIST_ID}/tasks/${taskId}`, {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    });
    dispatch({ type: DELETE_TASK, payload: taskId });
  } catch (error) {
    console.error("Failed to delete task", error);
    if (error.response) {
      console.error("Response data:", error.response.data);
      console.error("Response status:", error.response.status);
      console.error("Response headers:", error.response.headers);
    } else if (error.request) {
      console.error("Request data:", error.request);
    } else {
      console.error("Error message:", error.message);
    }
  }
};
