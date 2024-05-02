import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useReducer } from 'react'
//import Container from 'react-bootstrap/Container'
import './App.css'
let count = 0

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

// let getStore = JSON.parse(localStorage.getItem('todo'))
// console.log('storeage test',getStore)

export const initialState = () => 
{ 
  let getStore = JSON.parse(localStorage.getItem('todoList'))
  console.log('storeage in init',getStore)
  if (getStore) {
    return {todos: getStore}
  } else {
    return {todos: []}
  }
}



const reducer = (state, action) => {
  switch(action.type){
    case 'todoTitleInput':
      console.log('there', action)
      return {todos: [...state.todos, {todoID: state.todos.length + 1, 
        todoTitle: action.todoTitle, 
        todoDescription: action.todoDescription}]};
      // current date should also be here
    case 'todoDescirption':
      return {};
    case 'todoDue':
      return {}
  } 
}



function App() {
  //let temp = initialState()
  const [state, dispatch] = useReducer(reducer, initialState())
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  console.log(state.todos)

  
  function clearForm(){
    setTitle(''),
    setDescription('')
  }

  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(state.todos))
  }, [state.todos.length])
  
  // let getStore = JSON.parse(localStorage.getItem('todoList'))
  // console.log('storeage test',getStore)

  return (
<div>
    <Title />
    <input 
    id='titleBox'
    type="text" 
    value={title}
    onChange={(e)=> setTitle(e.target.value)}>
    </input>
    <input 
    id='decriptionBox'
    type="text" 
    value={description}
    onChange={(e)=> setDescription(e.target.value)}>
    </input>
    <button onClick={() => dispatch({type:"todoTitleInput", todoTitle: title, todoDescription: description})}>Submit</button>
    <p></p>
    {state.todos.map(todo => (
      <div key={todo.todoID}>
        Todo: {todo.todoID}: {todo.todoTitle}
        <br></br>
        {todo.todoDescription}
      </div>
    ))}
  </div>
  )
 }

export default App