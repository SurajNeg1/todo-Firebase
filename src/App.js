import React ,{useState, useEffect} from 'react';
import { Button ,FormControl , Input, InputLabel} from '@material-ui/core';
import './App.css';
import Todo from './Todo';

function App() {

  const [todos, setTodos] = useState([]);
  const [input, setInput]= useState('');

  const addTodo= (event)=>{
       event.preventDefault();
       setTodos([...todos, input]);
       setInput('');
  }
  return (
    <div className="app">
        <h1>ToDO List</h1>
        <form>
          <FormControl>
            <InputLabel >Write a Todo</InputLabel>
            <Input type="text" value={input} 
                  onChange={(e)=>setInput(e.target.value)} />
          </FormControl>
          <Button type="submit" onClick={addTodo} variant="contained" color="primary" disabled={!input}>
                Add Todo
          </Button>
        </form>

      <ul>
       {
         todos.map((todo)=>(
              <Todo text={todo}/>
         ))
       }
     </ul>


    </div>
  );
}

export default App;
