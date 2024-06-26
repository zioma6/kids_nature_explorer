import React, {useEffect, useState} from 'react';
import supabase from './supabaseClient';
import "../sass/_journal.scss"
import {Link} from "react-router-dom";

const Journal = () => {
    const [adventures, setAdventures] = useState([]);
    const [envImg, setEnvImg] = useState([]);

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

    console.log(adventures)

    return (
        <div className="journal">
            <h1 className="journal__title">Oto Twój dziennik przygód</h1>
            <div>
                {adventures.map(adventure => (
                    <div className='journal__card' key={adventure.id}>
                        <Link to={`/adventure/${adventure.id}`}>
                            <img className="journal__img" src={`/images/journal.png`} alt="album"/>
                            <p>Twoja przygoda z dnia: {new Date(adventure.date).toLocaleDateString()}</p>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Journal;
