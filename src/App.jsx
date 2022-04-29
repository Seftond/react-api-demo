import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/home';
import Nba from './routes/Nba';
import './App.css';
import Nfl from './routes/Nfl';
import Mlb from './routes/Mlb';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}>
          <Route path="nba" element={<Nba/>}/>
          <Route path="nfl" element={<Nfl/>}/>
          <Route path="mlb" element={<Mlb/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
