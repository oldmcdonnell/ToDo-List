{/* <div>
<Title />
<a href="https://vitejs.dev" target="_blank">
  <img src={viteLogo} className="logo" alt="Vite logo" />
</a>
<a href="https://react.dev" target="_blank">
  <img src={reactLogo} className="logo react" alt="React logo" />
</a>
</div>
<h1>Vite + React</h1>
<div className="card">
<button onClick={() => setCount((count) => count + 1)}>
  count is {count}
</button>
<p>
  Edit <code>src/App.jsx</code> and save to test HMR
</p>
</div>
<p className="read-the-docs">
Click on the Vite and React logos to learn more
</p> */}


export const initialState = () => 
{ 
  let getStore = JSON.parse(localStorage.getItem('todoList'))
  console.log('storeage test',getStore)
  if (getStore) {
    return getStore
  } else {
    return {todos: []}
  }
}

export const initialState = {
  todos: [
  //   {
  //   todoID: 0,
  //   todoTitle: "",
  //   todoDescription: "",
  //   todoDate: 0,
  //   todoDue: 0
  // }
]
}


{if state.todos.map(todo => (
  <div key={todo.todoID}>
    Todo: {todo.todoID}: {todo.todoTitle}
    <br></br>
    {todo.todoDescription}
  </div>
))}