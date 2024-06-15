import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import "../sass/_addAdventure.scss"
import Navigation from "./Navigation";
import Title from "./Title";
import ImageAvatar from "./ImageAvatar";
import Footer from "./Footer";
import supabase from './supabaseClient';
import {Link} from "react-router-dom";
import { Tooltip } from "react-tooltip";

const AddAdventure = () => {

    const [environments, setEnvironments] = useState([]);


    useEffect(() => {
        supabase
            .from('Environments')
            .select('id, name, description, img_url')
            .then(({ data, error }) => {
                if (error) {
                    console.error('Error fetching environments:', error);
                } else {
                    setEnvironments(data);
                }
            });
    }, []);

    console.log({environments})


    return (
        <div className="container">
            <Navigation/>
            <header className="header">
                <ImageAvatar/>
                <Title/>
            </header>
            <section className='selectEnvironment'>
                <h1 className="selectEnvironment__title">W jakim środowisku naturalnym odbywa sie twoja przygoda ?</h1>
                <div className="selectEnvironment__icon">
                    {environments.map(env => (
                        <Link key={env.id} to={`/environment/${env.id}`} className="environment__icon" data-tooltip-id={`tooltip-${env.id}`}>
                            <img src={env.img_url} alt={env.name}/>
                            <p className="environment__text">{env.name}</p>
                            <Tooltip id={`tooltip-${env.id}`} className="custom__tooltip">
                                {env.description}
                            </Tooltip>
                        </Link>
                    ))}
                </div>
            </section>
            <Footer/>
        </div>
    );
};

export default AddAdventure;