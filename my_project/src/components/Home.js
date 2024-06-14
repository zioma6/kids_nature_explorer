import React from 'react';
import Navigation from "./Navigation";
import Title from "./Title";
import ProfilSelector from "./ProfileSelector";
import Footer from "./Footer";

const Home = () => {
    return (
        <div className="container">
            <Navigation/>
            <Title/>
            <ProfilSelector/>
            <Footer/>
        </div>
    );
};

export default Home;