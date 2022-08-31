import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import UserNew from './UserNew'

ReactDOM.createRoot(document.getElementById('root')).render(
<BrowserRouter>
  <Routes>
    <Route path='/' element={<App/>}/>
    <Route path='/usuarios/novo' element={<UserNew/>}/>
  </Routes>
</BrowserRouter>
  
)
