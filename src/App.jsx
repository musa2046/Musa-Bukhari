import { Routes, Route } from 'react-router'
import './App.css'

import Home from './pages/Home'
import AboutMe from './pages/AboutMe'
import MyProjects from './pages/MyProjects'
import ContactMe from './pages/ContactMe'
function App() {


  return (
    <>
    <Routes>
      <Route index path='/' element={<Home />}></Route>
      <Route path='/AboutMe' element={<AboutMe />}></Route>
      <Route path='/MyProjects' element={<MyProjects />}></Route>
      <Route path='/ContactMe' element={<ContactMe />}></Route>
    </Routes>
    </>
  )
}

export default App
