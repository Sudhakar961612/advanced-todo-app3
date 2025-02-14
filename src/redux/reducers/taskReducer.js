import { FETCH_TASKS, ADD_TASK, DELETE_TASK } from "../actions/taskActions";

const initialState = {
  tasks: [],
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TASKS:
      return { ...state, tasks: action.payload };
    case ADD_TASK:
      return { ...state, tasks: [...state.tasks, action.payload] };
    case DELETE_TASK:
      return { ...state, tasks: state.tasks.filter((task) => task.id !== action.payload) };
    default:
      return state;
  }
};

export default taskReducer;
