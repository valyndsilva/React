import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Home,
  Signin,
  Signup,
  Search,
  Watch,
  Trending,
  Movies,
  Series,
} from "./pages/";
import * as ROUTES from "./routes/routes";
import Main from "./components/Main";
import { IsUserExistsRedirect, ProtectedRoute } from "./helpers/routes";
import { useAuthListener } from "./hooks";

export default function App() {
  const { user } = useAuthListener();
  // console.log(user);
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* <Route exact path={ROUTES.SIGN_IN} element={<Signin />} /> */}

          <Route
            exact
            path={ROUTES.SIGN_IN}
            element={
              <IsUserExistsRedirect user={user}>
                <Signin />
              </IsUserExistsRedirect>
            }
          />

          {/* <Route exact path={ROUTES.SIGN_UP} element={<Signup />} /> */}

          <Route
            exact
            path={ROUTES.SIGN_UP}
            element={
              <IsUserExistsRedirect user={user}>
                <Signup />
              </IsUserExistsRedirect>
            }
          />

          <Route exact path={ROUTES.HOME} element={<Home />} />

          {/* <Route
            exact
            path={ROUTES.HOME}
            element={
              <ProtectedRoute user={user}>
                <Home />
              </ProtectedRoute>
            }
          /> */}

          <Route exact path={ROUTES.MAIN} element={<Main />} />

          {/* <Route
            exact
            path={ROUTES.MAIN}
            element={
              <ProtectedRoute user={user}>
                <Main />
              </ProtectedRoute>
            }
          /> */}

          <Route exact path={ROUTES.TRENDING} element={<Trending />} />

          {/* <Route
            exact
            path={ROUTES.TRENDING}
            element={
              <ProtectedRoute user={user}>
                <Trending />
              </ProtectedRoute>
            }
          /> */}

          <Route exact path={ROUTES.MOVIES} element={<Movies />} />
          {/* <Route
            exact
            path={ROUTES.MOVIES}
            element={
              <ProtectedRoute user={user}>
                <Movies />
              </ProtectedRoute>
            }
          /> */}

          <Route exact path={ROUTES.SERIES} element={<Series />} />
          {/* <Route
            exact
            path={ROUTES.SERIES}
            element={
              <ProtectedRoute user={user}>
                <Series />
              </ProtectedRoute>
            }
          />
         */}

          <Route exact path={ROUTES.SEARCH} element={<Search />} />

          <Route exact path={ROUTES.WATCH} element={<Watch />} />
          {/* <Route
            exact
            path={ROUTES.WATCH}
            element={
              <ProtectedRoute user={user}>
                <Watch />
              </ProtectedRoute>
            }
          /> */}
        </Routes>
      </Router>
    </div>
  );
}
