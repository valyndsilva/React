import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Header from './components/Header'
import Home from  './components/Home'
import SearchResults from './components/SearchResults'

function App() {
  return (
    <div className="App">
   
    <Router>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="searchresults" element={<SearchResults/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
