import React from 'react';

export default function TodoTable (props){


return(
<div>
  <table className = "table">
    <thead>
      <tr>
        <th scope="col">Date</th> 
        <th scope="col">Description</th>
        <th scope="col"></th>
      </tr>
    </thead>
    <tbody>
      {props.todos.map((todo, index) =>
       <tr key = {index}>
       <td>{todo.date}</td>
       <td>{todo.desc}</td>
       <td>
       <button className="btn btn-danger"  onClick = {() => props.handleDelete(index)}>Delete</button>
       </td>
       </tr>)}
    </tbody>
  </table>    
</div>

    )


}