import { useEffect, useState } from 'react'
import { useReducer } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card';
import { Panel } from 'rsuite'
import { useContext } from 'react'
import { ThemeContext } from './main'


//import Container from 'react-bootstrap/Container'
import './App.css'

let todoCount = 0
let completedCount = 0
let tempTitle = document.getElementById('titleBox')
let tempDescription = document.getElementById('decriptionBox')


const Title = () => {
  return (
    <div className="d-flex justify-content-evenly p-3">
      <div className="d-flex">
        <div className='p-3'>To Do#: {todoCount}</div>
        <h1>
        To-Do List
        </h1>
        <div className='p-3'>Completed#: {completedCount}</div>
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


const reducer = (state, action) => {
  switch(action.type){
    case 'todoTitleInput':
      console.log('there', action)
      todoCount++
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
      todoCount--
      console.log('todoID', action.todoID, action.todoTitle, action.todoDescription);
      return {todos: [...state.todos.filter(el => el.todoID !== action.todoID)]}
    case 'completed':
      completedCount++
      console.log("checkbox")
      return state
  } 
}



function App() {
  const [edit, setEdit] = useState(false);
  const [isCompleted, setCompleted] = useState(false)
  const [conpletedID, setcompletedID] = useState(0)
  const [editID, setEditID] = useState(0);
  const [state, dispatch] = useReducer(reducer, initialState())
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const { theme, toggleTheme } = useContext(ThemeContext)

  //clear items from inputs
  function clearForm(){
    setTitle(''),
    setDescription('')
  }

  const handleChange = () => {
    setCompleted(!isCompleted)
    if(isCompleted){
      completedCount--
    } else{
      completedCount++
    }
  }

  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(state.todos))
    clearForm()
    setEdit(false) //todo state changes so we set edit back to false changing the button
    setEditID(0)  //and destination. also reset editID
  }, [state.todos]) //we are just looking at the todos state for changes
  

  return (
<div>
    <Title />
    <Card className='text-center'>
      ToDo Title
    <input 
    id='titleBox'
    type="text" 
    value={title}
    onChange={(e)=> setTitle(e.target.value)}>
    </input>
    </Card>
    <Card className='text-center'>
     Todo Description
    <input 
    id='decriptionBox'
    type="text" 
    value={description}
    onChange={(e)=> setDescription(e.target.value)}>
    </input>
    </Card>
    <Panel id='todoCard' className=''>
    {/* //submit button or if edit is true this is a save button that directs to the edit  */}
    <button onClick={() => dispatch({type: edit ? "todoEdit" : "todoTitleInput", editID: editID, 
    todoTitle: title, todoDescription: description})}>{edit ? "Save" : "Submit"}</button>
    {state.todos.map(todo => (
      <div key={todo.todoID}>
        Todo: {todo.todoID}: {todo.todoTitle}
        <br></br>
        Description: {todo.todoDescription}
        <div className='justify-content-evenly'>
        {/* edit button that saves the edit ID */}
        <button key={todo.todoID} onClick={() => {setTitle(todo.todoTitle); setDescription(todo.todoDescription); 
          setEditID(todo.todoID); setEdit(true)}}>Edit</button>
          <br></br>
          {/* delete button */}
        <button key={todo.todoTitle} onClick={() => dispatch({type:"todoDelete", todoID:todo.todoID, 
        todoTitle:todo.todoDescription, todoDescription:todo.todoDescription})}>Delete</button>
         </div>
        <label>
        <input
          type="checkbox"
          checked={isCompleted}
          onChange={handleChange}
        />
        Completed
      </label>
      </div>
    ))}
    </Panel>
  </div>
  )
 }




export default App