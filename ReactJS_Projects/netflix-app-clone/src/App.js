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
import { IsUserExistsRedirect, ProtectedRoute } from "./helpers/routes";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* if user does not exist redirect to sign in page else open browse page
          {!user ? (
            <Route exact path={ROUTES.SIGN_IN} element={<Signin />} />
          ) : (
            <Route exact path={ROUTES.BROWSE} element={<Browse />} />
          )} */}

          {/* <Route exact path={ROUTES.SIGN_IN} element={<Signin />} /> */}

          <Route
            exact
            path={ROUTES.SIGN_IN}
            element={
              <IsUserExistsRedirect>
                <Signin />
              </IsUserExistsRedirect>
            }
          />

          {/* <Route exact path={ROUTES.SIGN_UP} element={<Signup />} /> */}

          <Route
            exact
            path={ROUTES.SIGN_UP}
            element={
              <IsUserExistsRedirect>
                <Signup />
              </IsUserExistsRedirect>
            }
          />

          {/* <Route exact path={ROUTES.BROWSE} element={<Browse />} /> */}

          <Route
            exact
            path={ROUTES.BROWSE}
            element={
              <ProtectedRoute>
                <Browse />
              </ProtectedRoute>
            }
          />

          {/* <Route exact path={ROUTES.HOME} element={<Home />} /> */}

          <Route
            exact
            path={ROUTES.HOME}
            element={
              <IsUserExistsRedirect>
                <Home />
              </IsUserExistsRedirect>
            }
          />

          <Route exact path={ROUTES.SEARCH} element={<Search />} />
          <Route exact path={ROUTES.WATCH} element={<Watch />} />
          <Route exact path={ROUTES.TRENDING} element={<Trending />} />
          <Route exact path={ROUTES.MOVIES} element={<Movies />} />
          <Route exact path={ROUTES.SERIES} element={<Series />} />
          {/* <Route path="/search" element={<Search />} /> */}
        </Routes>
      </Router>
    </div>
  );
}
