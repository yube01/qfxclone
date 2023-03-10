
import Login from "../page/login/Login"
import './App.css'
import Home from "../page/home/Home"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ComingMovie from "../page/Coming/ComingMovie"

import Register from '../page/register/Register'


function App() {
  

  return (
    <div className="App">
     
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/coming-soom'element={<ComingMovie/>}/>
          
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login/>} />
        </Routes>
      </BrowserRouter>
    
    </div>
  )
}

export default App
