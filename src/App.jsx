import { Routes, Route } from 'react-router'
import './App.css'

import Home from './pages/Home'
import AboutMe from './pages/AboutMe'
import MyProjects from './pages/MyProjects'
function App() {


  return (
    <>
    <Routes>
      <Route index path='Home' element={<Home />}></Route>
      <Route path='AboutMe' element={<AboutMe />}></Route>
      <Route path='MyProjects' element={<MyProjects />}></Route>
    </Routes>
    </>
  )
}

export default App
