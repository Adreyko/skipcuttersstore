import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import About from './pages/About/About';
import Home from './pages/Home/Home';
import Registration from './pages/Registration/Registration';
import Login from './pages/Login/Login';
import HomeRentProducts from './pages/Home/components/HomeRentProducts/HomeRentProducts';

function App() {

  return (
    <div className='font-sourse'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/logIn' element={<Login />} />
        <Route path='/registration' element={<Registration />} />
      </Routes>
<HomeRentProducts/>
    </div>
  );
}

export default App;
