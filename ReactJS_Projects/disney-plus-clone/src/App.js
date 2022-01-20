import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Detail from './components/Detail';
// import Details from './components/Details';
import Login from './components/Login';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/detail/:id" element={ <Detail />} />
          <Route exact path="/login" element={<Login />}/>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer/>
      </Router>
      
    </div>
  );
}

export default App;
