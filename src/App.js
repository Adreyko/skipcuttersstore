import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import About from './pages/Home/About';
import Home from './pages/Home/Home';
import Login from './pages/Home/components/Login/Login';
import Registration from './pages/Home/components/Registration/Registration';


function App() {

  return (
    <div className='font-mono'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/logIn' element={<Login />} />
        <Route path='/registration' element={<Registration />} />
        
      </Routes>

    </div>
  );
}

export default App;
