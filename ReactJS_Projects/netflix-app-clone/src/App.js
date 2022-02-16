import React from "react";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Home from "./components/Home";
import Watch from "./pages/watch/Watch";
import Movies from "./pages/movies/Movies";
import Series from "./pages/series/Series";
import Trending from "./pages/trending/Trending";
import Search from "./pages/search/Search";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { JumbotronContainer } from "./containers/jumbotron";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/jumbotron" element={<JumbotronContainer />} />
          <Route path="/watch" element={<Watch />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/series" element={<Series />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </Router>
    </div>
  );
}
