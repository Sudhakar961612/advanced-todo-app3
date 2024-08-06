import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/actions/taskActions";
import "./TaskInput.css";

const TaskInput = () => {
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("Medium");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      dispatch(addTask({ id: Date.now(), title: task, priority }));
      setTask("");
      setPriority("Medium");
    }
  };

  return (
    <form onSubmit={handleSubmit} className='task-input-form'>
      <input type='text' value={task} onChange={(e) => setTask(e.target.value)} placeholder='Enter a new task' className='task-input' />
      <select value={priority} onChange={(e) => setPriority(e.target.value)} className='task-select'>
        <option value='High'>High</option>
        <option value='Medium'>Medium</option>
        <option value='Low'>Low</option>
      </select>
      <button type='submit' className='task-button'>
        Add Task
      </button>
    </form>
  );
};

export default TaskInput;
