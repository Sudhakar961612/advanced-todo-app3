import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks, deleteTask } from "../redux/actions/taskActions";
import TaskInput from "../components/TaskInput";
import LogoutButton from "../components/LogoutButton";
import "./HomePage.css";

const HomePage = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  return (
    <div className='homepage'>
      <LogoutButton />
      <h1>To-Do List</h1>
      <TaskInput />
      <ul className='task-list'>
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <li key={task.id} className='task-item'>
              <span className='task-title'>{task.title}</span>
              <button onClick={() => handleDelete(task.id)} className='task-delete-button'>
                &times;
              </button>
            </li>
          ))
        ) : (
          <p>No tasks available</p>
        )}
      </ul>
    </div>
  );
};

export default HomePage;
