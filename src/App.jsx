import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './component/Header'
import LandingPage from './Pages/Home'
import Footer from './component/Footer'
import About from './Pages/About'
import Contactus from './Pages/Contactus'
import BookCard from './Pages/Product'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<LandingPage/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/product' element={<BookCard/>} />
        <Route path='/contactus' element={<Contactus/>} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
