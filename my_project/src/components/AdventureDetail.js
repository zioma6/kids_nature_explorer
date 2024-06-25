import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import supabase from './supabaseClient';
import "../sass/_adventureDetail.scss"

const AdventureDetail = () => {
    const {id} = useParams();
    const [adventure, setAdventure] = useState(null);
    const [environment, setEnvironment] = useState([])
    const [animals, setAnimals] = useState([]);
    const [plants, setPlants] = useState([]);
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const fetchAdventure = async () => {
            const {data: adventureData, error: adventureError} = await supabase
                .from('JournalEntries')
                .select('*')
                .eq('id', id)
                .single(); // Ensure you're fetching a single entry

            if (adventureError) {
                console.error('Error fetching adventure:', adventureError);
                return;
            }

            setAdventure(adventureData);

            console.log(adventureData)

            // Fetch environment data
            const {data: environmentData, error: environmentError} = await supabase
                .from('Environments')
                .select('*')
                .eq('id', adventureData.environment_id)
                .single();

            if (environmentError) {
                console.error('Error fetching environment:', environmentError);
                return;
            }

            setEnvironment(environmentData);

            // Fetch related animals
            if (adventureData.animals.length > 0) {
                const {data: animalData, error: animalError} = await supabase
                    .from('Animals')
                    .select('*')
                    .in('id', adventureData.animals);

                if (animalError) {
                    console.error('Error fetching animals:', animalError);
                    return;
                }

                setAnimals(animalData);
            }

            // Fetch related plants
            if (adventureData.plants.length > 0) {
                const {data: plantData, error: plantError} = await supabase
                    .from('Plants')
                    .select('*')
                    .in('id', adventureData.plants);

                if (plantError) {
                    console.error('Error fetching plants:', plantError);
                    return;
                }

                setPlants(plantData);
            }

            // Fetch related tasks
            if (adventureData.tasks.length > 0) {
                const {data: taskData, error: taskError} = await supabase
                    .from('Task')
                    .select('*')
                    .in('id', adventureData.tasks);

                if (taskError) {
                    console.error('Error fetching tasks:', taskError);
                    return;
                }

                setTasks(taskData);
            }
        };

        fetchAdventure();
    }, [id]);


    if (!adventure) {
        return <p>Loading...</p>;
    }

    const renderEnvironmentTitle = (environmentId) => {
        switch (environmentId) {
            case 1:
                return <h2 className="environment__title title__adventure">Twoja przygoda odbyła się w lesie</h2>;
            case 2:
                return <h2 className="environment__title title__adventure">Twoja przygoda odbyła się na łące</h2>;
            case 3:
                return <h2 className="environment__title title__adventure">Twoja przygoda odbyła się nad morzem</h2>;
            default:
                return <h2 className="environment__title title__adventure">Twoja przygoda odbyła się nad jeziorem</h2>;
        }
    };

    const {weather} = adventure;

    return (
        <div className="adventure__detail">
            <h1 className="adventure__detail--title title__adventure">Oto Twoja przygoda z
                dnia {new Date(adventure.date).toLocaleDateString()}</h1>
            <section className="weather">
                <h2 className="weather__title title__adventure">Tego dnia była taka pogoda:</h2>
                {weather ? (
                    <div className="weather__details">
                        {weather.name && (
                            <div className="weather__details--place">
                                <p>Miejsce:</p>
                                <p>{weather.name}</p>
                            </div>
                        )}
                        {weather.main && (
                            <div className="weather__details--temperature">
                                <p>Temperatura:</p>
                                <p>{weather.main.temp} °C</p>
                            </div>
                        )}
                        {weather.weather && weather.weather[0] && (
                            <div className="weather__details--description">
                                <p>Opis:</p>
                                <p>{weather.weather[0].description}</p>
                            </div>
                        )}
                    </div>
                ) : (
                    <p>Brak danych o pogodzie.</p>
                )}
            </section>
            <section className="adventure__enviromental">
                {renderEnvironmentTitle(environment.id)}
                <div className='environment'>
                    <img className="environment__img adventure__image"
                         src={`/images/environment/${environment.img_url}`}
                         alt={environment.name}/>
                    <div className="environment__text">{environment.description}</div>
                </div>
            </section>
            <section className="adventure__task">
                <h2 className="task__title title__adventure">Wykonałeś zadanie: </h2>
                <div className="task__text">
                    {tasks.map(task => (
                        <div key={task.id}>
                            <p>{task.description}</p>
                        </div>
                    ))}
                </div>
            </section>
            <section className="adventure__animal">
                <h2 className="title__adventure">Takie spotkałeś zwierzeta:</h2>
                {animals.map(animal => (
                    <div className="animal__detail" key={animal.id}>
                        <img className="animal__detail--image adventure__image"
                             src={`/images/animals/${animal.img_url}`}
                             alt={animal.name}/>
                        <div>
                            <p className="animal__detail--title">{animal.name}</p>
                            <p className="animal__detail--text">{animal.description}</p>
                        </div>

                    </div>
                ))}

            </section>
            <section>
                <h2 className="title__adventure">Takie znalazłeś rośliny::</h2>
                <ul>
                    {plants.map(plant => (
                        <div className="plant__detail" key={plant.id}>
                            <img className="adventure__image" src={`/images/plants/${plant.img_url}`} alt={plant.name}/>
                            <div>
                                <p className="plant__detail--title">{plant.name}</p>
                                <p className="plant__detail--text">{plant.description}</p>
                            </div>
                        </div>
                    ))}
                </ul>
            </section>

        </div>
    );
};

export default AdventureDetail;
