import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage'
import QuestionRegister from './components/QuestionRegister';
import Game from './components/Game';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' exact element={<Homepage/>} />
        <Route path='/config' exact element={<QuestionRegister/>}/>
        <Route path='/game' exact element={<Game/>}/>
      </Routes>
    </Router>

  );
}

export default App;
