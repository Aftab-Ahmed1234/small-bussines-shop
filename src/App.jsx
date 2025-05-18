import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Products from './components/Products'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar/>    
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/products' element={<Products/>} />
        <Route path='/Contact' element={<Contact/>} />
      </Routes>
      </BrowserRouter>
      <Footer/>
    </>

  )
}

export default App
