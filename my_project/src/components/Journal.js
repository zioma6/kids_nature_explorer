import React from 'react';
import "../sass/_journal.scss"
import Carousel from "./Carousel";


const Journal = () => {

    return (
        <div className="journal">
            <h1 className="journal__title">Oto Twój dziennik przygód</h1>
            <div className="carousel__section">
                <Carousel/>
            </div>
        </div>
    );
};

export default Journal;
