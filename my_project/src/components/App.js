import React, { Component } from "react";
import './App.css';
import {
    BrowserRouter,
    Route,
    Routes,
    Link,
    NavLink,
    Outlet
} from 'react-router-dom';
import Main from "./Main/Main";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<Main />} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;
