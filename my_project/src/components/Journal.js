import React, {useEffect, useState} from 'react';
import supabase from './supabaseClient';
import "../sass/_journal.scss"
import Carousel from "./Carousel";


const Journal = () => {
    const [adventures, setAdventures] = useState([]);

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
        <div className="journal">
            <h1 className="journal__title">Oto Twój dziennik przygód</h1>
            <div className="carousel__section">
                <Carousel/>
            </div>
        </div>
    );
};

export default Journal;
