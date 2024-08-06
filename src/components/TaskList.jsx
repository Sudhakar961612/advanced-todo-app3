import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask } from "../redux/actions/taskActions";
import "./TaskList.css";

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();

  return (
    <ul className='task-list'>
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <li key={task.id} className='task-item'>
            {task.title} - <span className={`task-priority ${task.priority.toLowerCase()}`}>{task.priority}</span>
            <button onClick={() => dispatch(deleteTask(task.id))} className='task-delete-button'>
              Delete
            </button>
          </li>
        ))
      ) : (
        <p>No tasks available</p>
      )}
    </ul>
  );
};

export default TaskList;
