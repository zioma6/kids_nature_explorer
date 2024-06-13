import React, { Component } from "react";
import '../sass/main.scss';
import {
    BrowserRouter,
    Route,
    Routes,
    Link,
    NavLink,
    Outlet
} from 'react-router-dom';
import Home from "./Home";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<Home />} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;
