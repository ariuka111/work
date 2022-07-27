
import './App.css';
import React from 'react';
import Home from './component/home';
import About from './component/about';
import Advice from './component/advice';
import Profile from './component/Profile';
import { Routes, Route } from "react-router-dom";
import Header from './Header';

function App() {

  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/advice" element={<Advice/>} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}
export default App;
