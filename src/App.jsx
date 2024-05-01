import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useReducer } from 'react'
import './App.css'
const count = 0

const Title = () => {
  return (
    <div className="container">
    <div className="mx auto">
    <h1>
To-Do List
    </h1>
    </div>
    </div>
)}


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

function newTodo(){
  return {}
}

const checkTodoID  = () => {
  if (todoID === null){
    todoId = todos.length
  }
}

const reducer = (state, action) => {
  switch(action.type){
    case 'todoTitleInput':
      console.log('there', action)
      return checkTodoID(), {todos: [...state.todos, {todoID: count +1 ,todoTitle: action.todoTitle}]};
      // current date should also be here
    case 'todoDescirption':
      return {};
    case 'todoDue':
      return {}
  } 
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const [title, setTitle] = useState('')
  console.log(state)


  return (
<div>
    <Title />
    <input 
    type="text" 
    value={title}
    onChange={(e)=> setTitle(e.target.value)}>
    </input>
    <button onClick={() => dispatch({type:"todoTitleInput", todoTitle: title})}>Submit</button>
    <p></p>
  </div>
  )
 }

export default App
