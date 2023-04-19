import './App.css'
import Aboutme from './components/Aboutme'
import AppNavbar from './components/AppNavbar'
import Home from './components/Home'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contactme from './components/Contactme'


function App() {



  return (
    <HashRouter>
      {/* <Navbar /> */}
      {/* <WaveComponents/> */}
      <AppNavbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/About' element={<Aboutme/>}/>
        <Route path='/skill' element={<Skills/>} />
        <Route path='/project' element={<Projects/>} />
        <Route path='/contact' element={<Contactme/>} />
      </Routes>
    </HashRouter>
  )
}

export default App
