import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Home,
  Browse,
  Signin,
  Signup,
  Search,
  Watch,
  Trending,
  Movies,
  Series,
} from "./pages/";
import * as ROUTES from "./constants/routes";
// import Register from "./pages/register/Register";
// import Login from "./pages/login/Login";
// import Home from "./components/Home";
// import Watch from "./pages/watch/Watch";
// import Movies from "./pages/movies/Movies";
// import Series from "./pages/series/Series";
// import Trending from "./pages/trending/Trending";
// import Search from "./pages/search/Search";
// import { JumbotronContainer } from "./containers/jumbotron";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path={ROUTES.HOME} element={<Home />} />

          <Route exact path={ROUTES.BROWSE} element={<Browse />} />
          <Route exact path={ROUTES.SIGN_IN} element={<Signin />} />
          <Route exact path={ROUTES.SIGN_UP} element={<Signup />} />
          <Route exact path={ROUTES.SEARCH} element={<Search />} />
          <Route exact path={ROUTES.WATCH} element={<Watch />} />
          <Route exact path={ROUTES.TRENDING} element={<Trending />} />
          <Route exact path={ROUTES.MOVIES} element={<Movies />} />
          <Route exact path={ROUTES.SERIES} element={<Series />} />
          {/* <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/jumbotron" element={<JumbotronContainer />} />
          <Route path="/watch" element={<Watch />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/series" element={<Series />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/search" element={<Search />} /> */}
        </Routes>
      </Router>
    </div>
  );
}
