import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import './App.css'
import Home from './Home'
import Navbar from './Navbar'
// import { UserProvider } from './context/user'
import Signup from './Signup'
import Login from './Login'

function App() {

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path ="/" element={<Home />} />
          <Route exact path ="/signup" element={<Signup />} />
          <Route exact path ="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
