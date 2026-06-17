import './App.css'

import Home from './pages/Home'
import Auth from './pages/Auth'
import AboutUs from './pages/AboutUs'
import Navbar from "./components/Navbar";

import { Routes, Route } from "react-router-dom"


function App() {

  return (
    <>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/auth" element={<Auth />} />
          <Route path="/about" element={<AboutUs />} /> */}
        </Routes>
    </>
  )
}

export default App