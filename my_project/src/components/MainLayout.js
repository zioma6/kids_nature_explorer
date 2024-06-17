import Navigation from "./Navigation";
import {Outlet} from "react-router-dom";
import Footer from "./Footer";
import React from "react";

const MainLayout = () => {
    return (
        <div className="container">
            <Navigation/>
            <Outlet/>
            <Footer/>
        </div>
    )
}

export default MainLayout;