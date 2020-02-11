import React from 'react';
import TodoList from './components/TodoList'
import './App.css';
import './bootstrap/css/bootstrap.min.css'

function App() {
return (
  <div className="container">
    <div className = "row">
      <div className ="col-10 mx-auto col-md8 mt-4">
        <h3 className="text-capitalize text-center">ToDo List</h3>
        <TodoList/>
      </div>
      </div>

  </div>
  );
}

export default App;
