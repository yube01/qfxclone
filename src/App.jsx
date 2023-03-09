

import './App.css'
import Home from "../page/home/Home"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ComingMovie from "../page/Coming/ComingMovie"
import Policy from '../page/termpolicy/Policy'


function App() {
  

  return (
    <div className="App">
     
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<Home/>}/>
          <Route path='/coming-soom'element={<ComingMovie/>}/>
          <Route path='/terms-of-use' element={<Policy/>}/>
        </Routes>
      </BrowserRouter>
    
    </div>
  )
}

export default App
