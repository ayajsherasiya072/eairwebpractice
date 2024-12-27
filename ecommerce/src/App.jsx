
import './App.css'
import Cart from './Components/Cart'
import Home from './Components/Home'
import LogIn from './Components/LogIn'
import Register from './Components/Register'
import Layout from './Layout'
import Navbar from './parts/Navbar'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/login" element={<LogIn/>}/>
        <Route path="/register" element={<Register/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
