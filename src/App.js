import React ,{useState, useEffect} from 'react';
import './App.css';

function App() {

  const [todos, setTodos] = useState([]);

  return (
    <div className="app">
     <input/>
     <button>Add Todo</button>
     
    </div>
  );
}

export default App;
