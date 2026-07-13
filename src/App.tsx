
import { Routes,Route } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import Explore from './pages/AuthPage'

function App() {
  

  return (
    <>
    <Routes>

    <Route path="/" element={<HomePage/>} />
   {/* <Route path="/about" element={<AboutPage/>} />
    <Route path="/services" element={<ServicesPage/>} />
    <Route path="/properties" element={<PropertiesPage/>} />
    <Route path="/contact" element={<ContactPage/>} />*/}
    <Route path="/explore" element={<Explore/>} />
    </Routes>

      
    </>
  )
}

export default App
