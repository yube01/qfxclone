import { useState } from 'react'

import './App.css'
import ScrollTicker from '../components/scrollticker/ScrollTicker'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <ScrollTicker/>
    </div>
  )
}

export default App
