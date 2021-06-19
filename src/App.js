import './App.css';
import {useState} from 'react'
import Header from './components/Header'
import AddTodo from './components/AddTodo';


function App() {
  const [tasks, setTasks] = useState([]); 

  const addTodoTasks = (newTodo) => {
    setTasks(tasks.concat(newTodo));  
  }

  const deleteTodoTask = (id) => {
    setTasks(tasks.filter((task) => {
      return task.id !== id;
    }))
  }

  return (
    <div className="App bg-gray-200 min-h-screen flex flex-col pb-8">
      <Header />
      <AddTodo  
      addTodoTasks={addTodoTasks}
      tasks={tasks}
      deleteTodoTask={deleteTodoTask}/>
    </div>
  );
}

export default App;