import React ,{useState, useEffect} from 'react';
import { Button ,FormControl , Input, InputLabel} from '@material-ui/core';
import './App.css';
import Todo from './Todo';
import { db } from './firebase';
import firebase from "firebase";

function App() {

  const [todos, setTodos] = useState([]);
  const [input, setInput]= useState('');

  const addTodo= (event)=>{
       event.preventDefault();
       
       db.collection('todos').add({
         todo:input,
         timestamp:firebase.firestore.FieldValue.serverTimestamp()
       })

       setTodos([...todos, input]);
       setInput('');

  }

  useEffect(()=>{
        db.collection('todos').orderBy('timestamp','desc').onSnapshot((snapshot)=>{
            setTodos(snapshot.docs.map(doc=>({
              id:doc.id,
              todo:doc.data().todo
            })));
        });
  },[]);


  return (
    <div className="app">
        <h1>ToDO List</h1>
        <form>
          <FormControl>
            <InputLabel >Write Here...</InputLabel>
            <Input  type="text" value={input} 
                  onChange={(e)=>setInput(e.target.value)} />
          </FormControl> 
          <Button type="submit" onClick={addTodo} variant="contained" color="primary" disabled={!input}>
                Add Todo
          </Button>
        </form>

      <ul>
       {
         todos.map((todo)=>(
              <Todo todo={todo}/>
         ))
       }
     </ul>


    </div>
  );
}

export default App;
