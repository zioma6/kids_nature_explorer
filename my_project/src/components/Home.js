import React from 'react';
import Navigation from "./Navigation";
import Title from "./Title";
import ProfilSelector from "./ProfileSelector";

const Home = () => {
    return (
        <div>
            <Navigation/>
            <Title/>
            <ProfilSelector/>
        </div>
    );
};

export default Home;