import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {Tooltip} from "react-tooltip";
import supabase from "./supabaseClient";
import "../sass/_selectEnviroment.scss"

const SelectEnviroment = () => {

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
        <div>
            <section className='selectEnvironment'>
                <h1 className="selectEnvironment__title">W jakim środowisku naturalnym odbywa sie twoja przygoda ?</h1>
                <div className="selectEnvironment__icon">
                    {environments.map(env => (
                        <Link key={env.id} to={`/addAdventure/${env.id}`} className="environment__icon"
                              data-tooltip-id={`tooltip-${env.id}`}>
                            <img src={env.img_url} alt={env.name}/>
                            <p className="environment__text">{env.name}</p>
                            <Tooltip id={`tooltip-${env.id}`} className="custom__tooltip">
                                {env.description}
                            </Tooltip>
                        </Link>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default SelectEnviroment;