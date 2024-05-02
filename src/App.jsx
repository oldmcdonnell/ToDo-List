import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useReducer } from 'react'
//import Container from 'react-bootstrap/Container'
import './App.css'
let count = 0
let tempTitle = document.getElementById('titleBox')
let tempDescription = document.getElementById('decriptionBox')


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
  console.log('storage in init',getStore)
  if (getStore) {
    return {todos: getStore}
  } else {
    return {todos: []}
  }
}

const setEditFields = () => {
  tempTitle.value= action.todoTitle
  tempDescription.value = action.todoDescription
}

const reducer = (state, action) => {
  switch(action.type){
    case 'todoTitleInput':
      console.log('there', action)
      return {todos: [...state.todos, {todoID: state.todos.length + 1, 
        todoTitle: action.todoTitle, 
        todoDescription: action.todoDescription}]};
      // current date should also be here
    case 'todoEdit':
       console.log('todoID', action.todoID, action.todoTitle, action.todoDescription);
       return {todos: [...state.todos.map(el => {
        if (action.editID === el.todoID){
          el.todoTitle = action.todoTitle 
          el.todoDescription = action.todoDescription
        }
        return el
       })]}
    case 'todoDelete':
      console.log('todoID', action.todoID, action.todoTitle, action.todoDescription);
      return {todos: [...state.todos.filter(el => el.todoID !== action.todoID)]} 
  } 
}



function App() {
  const [edit, setEdit] = useState(false);
  const [editID, setEditID] = useState(0);
  const [state, dispatch] = useReducer(reducer, initialState())
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [idForTodo, setIdForTodo] = useState('')

  //console.log(state.todos)

  
  function clearForm(){
    setTitle(''),
    setDescription('')
  }

  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(state.todos))
    clearForm()
    setEdit(false)
    setEditID(0)
  }, [state.todos])
  


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
    <button onClick={() => dispatch({type: edit ? "todoEdit" : "todoTitleInput", editID: editID, todoTitle: title, todoDescription: description})}>{edit ? "Save" : "Submit"}</button>
    <p></p>
    {state.todos.map(todo => (
      <div key={todo.todoID}>
        Todo: {todo.todoID}: {todo.todoTitle}
        <br></br>
        {todo.todoDescription}
        <br></br>
        <button key={todo.todoID} onClick={() => {setTitle(todo.todoTitle); setDescription(todo.todoDescription); setEditID(todo.todoID); setEdit(true)}}>Edit</button>
          <br></br>
        <button key={todo.todoTitle} onClick={() => dispatch({type:"todoDelete", todoID:todo.todoID, 
        todoTitle:todo.todoDescription, todoDescription:todo.todoDescription})}>Delete</button>
      </div>
    ))}
  </div>
  )
 }




export default App