import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import supabase from './supabaseClient';

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
            <h1>Journal</h1>
            <ul>
                {adventures.map(adventure => (
                    <li key={adventure.id}>
                        <Link to={`/adventure/${adventure.id}`}>
                            Adventure on {new Date(adventure.date).toLocaleDateString()}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Journal;
