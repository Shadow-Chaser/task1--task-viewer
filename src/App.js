import { createContext, useState } from 'react';
import './App.css';
import Home from './pages/Home/Home';
export const TaskContext = createContext();

function App() {
  const [taskList, setTaskList] = useState(localStorage.getItem('taskList') ? JSON.parse(localStorage.getItem('taskList')) : [])

  return (
    <TaskContext.Provider value={[taskList, setTaskList]}>
      <div className="App">
        <Home />
      </div>
    </TaskContext.Provider>
  );
}

export default App;
