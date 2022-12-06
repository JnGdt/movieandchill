import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Routes, } from 'react-router-dom';
import Homepage from './components/Homepage';
import Action from './pages/Action';
function App() {
  return (
   <Router>
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
            <Link to="/hero">Hero</Link>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>
    </div>
    <Routes>
    <Route exact path='/' components={<Homepage/>}/>
    <Route path='/hero' element={<Action/>}/>
    <Route path='/' element={<Homepage/>}/>
    </Routes>

    </Router>

  );
  
}

export default App;
