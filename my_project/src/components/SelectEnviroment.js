import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import {Tooltip} from "react-tooltip";
import supabase from "./supabaseClient";
import "../sass/_selectEnviroment.scss";
import {useDispatch, useSelector} from 'react-redux';
import {setEnvironments} from "./journalSlice";

const SelectEnviroment = () => {
    const dispatch = useDispatch();
    const environments = useSelector(state => state.journal.environments);
    useEffect(() => {
        if (environments.length !== 0) {
            return
        }

        supabase
            .from('Environments')
            .select('id, name, description, img_url')
            .then(({data, error}) => {
                if (error) {
                    console.error('Error fetching environments:', error);
                }

                dispatch(setEnvironments(data));
            });
    }, [dispatch, environments]);

    return (
        <div>
            <section className='selectEnvironment'>
                <h1 className="selectEnvironment__title">W jakim środowisku naturalnym odbywa sie twoja przygoda ?</h1>
                <div className="selectEnvironment__icon">
                    {environments.map(({id, name, description, img_url}) => (
                        <Link key={id} to={`/addAdventure/${id}`} className="environment__icon"
                              data-tooltip-id={`tooltip-${id}`}>

                            <img src={`/images/environment/${img_url}`} alt={name}/>
                            <p className="environment__text">{name}</p>
                            <Tooltip id={`tooltip-${id}`} className="custom__tooltip">
                                {description}
                            </Tooltip>


                        </Link>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default SelectEnviroment;