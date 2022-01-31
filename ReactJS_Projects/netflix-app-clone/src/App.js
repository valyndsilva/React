import React from "react";
import "./App.css";
import "./index.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
// import Register from "./pages/register/Register";
// import Login from "./pages/login/Login";

// import Watch from "./pages/watch/Watch";

function App() {
  return (
    <div className="App">
      {/* <Register /> */}
      {/* <Login /> */}
      {/* <Watch /> */}
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
