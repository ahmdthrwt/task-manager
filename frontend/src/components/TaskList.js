import { useEffect, useState } from 'react';
import axios from 'axios';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const response = await axios.get('http://127.0.0.1:8000/api/tasks/');
    setTasks(response.data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const markCompleted = async (id) => {
    await axios.patch(`http://127.0.0.1:8000/api/tasks/${id}/`, { completed: true });
    fetchTasks();
  };

  const deleteTask = async (id) => {
    await axios.delete(`http://127.0.0.1:8000/api/tasks/${id}/delete/`);
    fetchTasks();
  };

  return (
    <div>
      {tasks.map(task => (
        <div key={task.id}>
          <h3>{task.title} {task.completed && '✅'}</h3>
          <p>{task.description}</p>
          <button onClick={() => markCompleted(task.id)}>Complete</button>
          <button onClick={() => deleteTask(task.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
