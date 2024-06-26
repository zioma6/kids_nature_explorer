import React, {useEffect, useRef, useState} from 'react';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"
import supabase from "./supabaseClient";
import "../sass/_carousel.scss"
import {Link} from "react-router-dom";


const Carousel = () => {
    const [adventures, setAdventures] = useState([]);
    const slider = useRef(null);

    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,

    }

    useEffect(() => {
        const fetchAdventures = async () => {
            const {data, error} = await supabase
                .from('JournalEntries')
                .select('*');

            if (error) {
                console.error('Error fetching adventures:', error);
            } else {
                setAdventures(data);
            }
        };

        fetchAdventures();
    }, []);

    return (
        <div>
            <Slider ref={slider} {...settings}>
                {adventures.map(adventure => (
                    <div key={adventure.id}>
                        <Link className="journal__card" to={`/adventure/${adventure.id}`}>
                            <img className="journal__img" src={`/images/journal.png`} alt="album"/>
                            <h3 className="journal__text">Twoja przygoda z
                                dnia: {new Date(adventure.date).toLocaleDateString()}</h3>
                        </Link>
                    </div>
                ))}
            </Slider>
            <div className="button">
                <div onClick={() => slider?.current.slickPrev()}>
                    <h2 className="buttonSlider">Wstecz</h2>
                </div>
                <div onClick={() => slider?.current.slickNext()}>
                    <h2 className="buttonSlider">Dalej</h2>
                </div>
            </div>

        </div>
    );
};

export default Carousel;