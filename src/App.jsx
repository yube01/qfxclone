

import './App.css'
import Home from "../page/home/Home"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ComingMovie from "../page/Coming/ComingMovie"

function App() {
  

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/coming-soom'element={<ComingMovie/>}/>
        </Routes>
      </BrowserRouter>
    
    </div>
  )
}

export default App
