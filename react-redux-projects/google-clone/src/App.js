import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import SearchResults from "./components/SearchResults";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="searchresults" element={<SearchResults />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
