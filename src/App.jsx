// import React, { useState } from 'react'

// const App = () => {
//   const [dark, setdark] = useState(true)
//   if(dark){
//     console.log('showdata');
    
//   }
//   return (
//     <div
//     style={{
//       background:dark ? 'white' : 'black',
//       color:dark ?'white' : 'black'
//     }}>
//      <h1 style={{color:"red"}}>Yoggle button</h1>
//       <button onClick={()=>setdark(!dark)}>click me!</button>
//       {dark ? 'lightmode' : "darkmode"}
//     </div>
//   )
// }

// export default App

import React, { useState } from "react";

const App = () => {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState([]);

  const addTodo = () => {
    if (input.trim() === "") return;

    setTodo([
      ...todo,
      {
        text: input,
        completed: false,
      },
    ]);

    setInput("");
  };

  const deleteTodo = (index) => {
    setTodo(todo.filter((_, i) => i !== index));
  };

  const toggleTodo = (index) => {
    setTodo(
      todo.map((item, i) =>
        i === index
          ? { ...item, completed: !item.completed }
          : item
      )
    );
  };

  return (
    <div className="todo-container">
      <h1>📝 Todo App</h1>

      <div className="input-box">
        <input
  type="text"
  value={input}
  placeholder="Enter your todo"
  onChange={(e) => setInput(e.target.value)}
  onKeyDown={(e) => {
    if (e.key === "Enter") {
      addTodo();
    }
  }}
/>

        <button className="add-btn" onClick={addTodo}>
          Add
        </button>
      </div>

      <div className="todo-list">
  {todo.map((item, index) => (
    <div className="todo-item" key={index}>
      <span
        onClick={() => toggleTodo(index)}
        className={item.completed ? "completed" : ""}
      >
        {item.text}
      </span>

      <button
        className="delete-btn"
        onClick={() => deleteTodo(index)}
      >
        Delete
      </button>
    </div>
  ))}
</div>

<button onClick={() => setTodo([])}>
  Clear All
</button>
          </div>
       
      
  );
};

export default App;

