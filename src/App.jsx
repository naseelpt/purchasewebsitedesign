
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './pages/Navbar'
import Home from './component/Home'
import Footer from './pages/Footer'
import Allproduct from './component/Allproduct'
import Quickenguary from './component/Quickenguary'
import Signin from './component/Signin'
import Signup from './component/Signup'

function App() {

  return (
    <>

      <Routes>


        <Route path='/' element={<Home />} />
        <Route path='/allproduct' element={<Allproduct />} />
        <Route path='/quick' element={<Quickenguary />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/signup' element={<Signup />} />







      </Routes>

    </>
  )
}

export default App
