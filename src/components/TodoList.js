import React, { useState } from 'react';
import TodoTable from './TodoTable';
import TodoInput from './TodoInput'

const Todolist = () => {
  const [todo, setTodo] = useState({desc:'', date:''});
  const [todos, setTodos] = useState([]);

  const addTodo = (event) => {
    event.preventDefault();
    setTodos([{desc: todo.desc, date: todo.date} , ...todos]);
    setTodo({desc:'', date:''});
  }

  const inputChanged = (event) => {
    setTodo({...todo, [event.target.name]:event.target.value});

  }

  const handleDelete = (row) =>{
    setTodos(todos.filter(( _, index) => row!== index))
 
  }

  return (
    <div>
 
     <TodoInput inputChanged = {inputChanged} todo ={todo} addTodo={addTodo}/>
     <TodoTable  todos ={todos} handleDelete = {handleDelete} />
    </div>
  );
};

export default Todolist;