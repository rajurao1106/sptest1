import { useState } from 'react'
import './App.css'
import Home from './components/Home/Home'
import ScrollEffect from './components/ScrollEffect/ScrollEffect'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ScrollEffect/>
    </>
  )
}

export default App
