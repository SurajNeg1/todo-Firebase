import React from 'react';
import "./Todo.css";
import { ListItem, List, ListItemText, Avatar, ListItemAvatar } from '@material-ui/core';

function Todo(props) {
    const dateBuilder=(d)=>{
        let months=["January","Febuary","March","April","May","June","July","August","September","October","November","December"]
        let date=d.getDate();
        let month=months[d.getMonth()];
        let year = d.getFullYear();
    
        return ` ${date} ${month} ${year}`
      }
    return (
        <List className="todo__list">
            <ListItem>
                <ListItemAvatar>
                </ListItemAvatar>
                <ListItemText primary={props.text} secondary={dateBuilder(new Date())}/>
            </ListItem>
        </List>
    )
}

export default Todo
