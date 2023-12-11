import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Recharge from './Recharge';
import Videoplayer from './Videoplayer';
import Home from './Home.js';
import Audioplayer from './Audioplayer.js';
import { BrowserRouter, Routes, Route } from "react-router-dom"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
  <BrowserRouter>
    <Routes>
      <Route path='/home' element={<App/>}/>
      <Route path='/recharge' element={<Recharge />}/>
      <Route path='/videoplayer' element={<Videoplayer/>}/>
      <Route path='/' element={<Home/>}/>
      <Route path='/audioplayer' element={<Audioplayer/>}/>
    </Routes>
  </BrowserRouter>
  </div>
)
