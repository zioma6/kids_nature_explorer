import React from 'react';
import "../sass/_addAdventure.scss"
import Navigation from "./Navigation";
import Title from "./Title";
import ImageAvatar from "./ImageAvatar";
import Footer from "./Footer";
import SelectEnviroment from "./SelectEnviroment";

const AddAdventure = () => {

    return (
        <div className="container">
            <Navigation/>
            <header className="header">
                <ImageAvatar/>
                <Title/>
            </header>
            <SelectEnviroment/>
            <Footer/>
        </div>
    );
};

export default AddAdventure;