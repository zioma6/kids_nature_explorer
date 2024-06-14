import React, { Component } from "react";
import { UserProvider } from './UserContex';
import '../sass/main.scss';
import {
    BrowserRouter,
    Route,
    Routes,
    useLocation,
    Link,
    NavLink,
    Outlet
} from 'react-router-dom';
import Home from "./Home";
import Profile from "./Profile";

function App() {
  return (
      <UserProvider>
         <BrowserRouter>
             <Routes>
                <Route path='/' element={<Home />} />
                <Route path='profileUser' element={<Profile/>}/>
             </Routes>
          </BrowserRouter>
      </UserProvider>
  );
}
export default App;
