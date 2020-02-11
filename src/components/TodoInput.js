import React from 'react';

export default function TodoInput (props){


return(
<div className = "card card-body my-3">
<form>
    <div className="input-group">
    <div className = "input-group-prepend">
    <div className = "input-group-text bg-primary text-white">
    <i className="far fa-keyboard"></i>
    </div>
    </div>
        <input  className = "form-control" type="text" name = "desc" 
        placeholder = "description" value={props.todo.desc} onChange={props.inputChanged}/>
    <div className = "input-group-prepend">
    <div className = "input-group-text bg-primary text-white">
    <i className="far fa-calendar-check"></i>
    </div>
    </div>
        <input className = "form-control"  type="date" name = "date"  
        value={props.todo.date} onChange={props.inputChanged}/>
        <button className = "btn btn-success" 
        onClick = {props.addTodo}>add</button>
    </div>
</form>
</div>
   
    )

}