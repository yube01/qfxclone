import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import ScrollTicker from '../components/ScrollTicker'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <ScrollTicker/>
    </div>
  )
}

export default App
