import React,{useState} from 'react';
import "./Todo.css";
import { ListItem, List, ListItemText,Button } from '@material-ui/core';
import { db } from './firebase';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import firebase from "firebase";


function getModalStyle() {
    const top = 50 ;
    const left = 50 ;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }
  
  const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

function Todo(props) {


    const[open, setOpen]= useState(false);
    const [input, setInput]= useState('');

    const dateBuilder=(d)=>{
        let months=["January","Febuary","March","April","May","June","July","August","September","October","November","December"]
        let date=d.getDate();
        let month=months[d.getMonth()];
        let year = d.getFullYear();
    
        return ` ${date} ${month} ${year}`
      }

      const classes = useStyles();
      const [modalStyle] = useState(getModalStyle);
      const updateTodo=()=>{
                db.collection('todos').doc(props.todo.id).set({
                    todo:input,
                    timestamp:firebase.firestore.FieldValue.serverTimestamp()
                },{ merge:true})
                setOpen(false);
      }

    return (
        <>
         <Modal
        open={open}
        onClose={()=>setOpen(false)}>
            <div style={modalStyle} className={classes.paper}>
                <form>
                    <h1>Update The Todo</h1>
                    <input placeholder={props.todo.todo} value={input} 
                    onChange={(e)=>setInput(e.target.value)}/>
                    <Button type="submit" onClick={updateTodo} variant="contained" color="primary" disabled={!input}>
                        Update Todo</Button>
                </form>
            </div>
        </Modal>
        <List className="todo__list">
            <ListItem>
                <ListItemText primary={props.todo.todo} secondary={dateBuilder(new Date())}/>
            </ListItem>
            <button onClick={()=>setOpen(true)}>Edit Me</button>
            <DeleteForeverIcon onClick={e=>db.collection('todos').doc(props.todo.id).delete()}/>
        </List>
        </>
    )
}

export default Todo;
