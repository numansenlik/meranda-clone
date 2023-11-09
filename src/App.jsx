import { Route, Routes } from 'react-router-dom';
import Navbar from './compoments/Navbar';
import Home from './compoments/pages/Home';
import './style/style.css';
import React from 'react';
import Footer from './compoments/Footer';
import About from './compoments/pages/about/About';

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<About />}/>
      </Routes>
      <Footer />
    </>
  )
}

export default App
