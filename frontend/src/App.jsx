import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [message, setMessage] = useState("");
  const [user, setUser] = useState({});
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/").then(res => setMessage(res.data.message));
    axios.get("http://localhost:8000/user").then(res => setUser(res.data));
    axios.get("http://localhost:8000/tasks").then(res => setTasks(res.data));
  }, []);

  return (
    <div>
      <h1>{message}</h1>
      <h2>User Info:</h2>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      <h2>Tasks:</h2>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            {task.title} - {task.done ? "Done" : "Pending"}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
