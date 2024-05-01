import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const Title = () => {
  return (
    <div className="container">
    <div className="">
    <h1>
To-Do List
    </h1>
    </div>
    </div>
  )
}

function App() {
  const [count, setCount] = useState(0)

  return (
<div>
<Title />
</div>
  )
}

export default App
