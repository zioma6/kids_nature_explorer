import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import supabase from './supabaseClient';
import {addJournalEntry, setAnimals, setPlants, setTasks} from './journalSlice';
import '../sass/_environmentDeatail.scss';
import {Tooltip} from "react-tooltip";
import CurrentWeather from "./CurrentWeather";

const EnvironmentDetail = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {animals, plants, tasks} = useSelector(state => state.journal);


    const [environment, setEnvironment] = useState(null);
    const [selectedAnimals, setSelectedAnimals] = useState([]);
    const [selectedPlants, setSelectedPlants] = useState([]);
    const [newAdventureId, setNewAdventureId] = useState(null);
    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {
        supabase
            .from('Environments')
            .select('id, name, description, img_url')
            .eq('id', id)
            .single()
            .then(({data, error}) => {
                if (error) {
                    console.error('Error fetching environment:', error);
                } else {
                    setEnvironment(data);
                }
            });
    }, [id]);

    useEffect(() => {
        const fetchAnimals = () => {
            supabase
                .from('AnimalEnvironments')
                .select('animal_id')
                .eq('environment_id', id)
                .then(({data: animalEnvData, error}) => {
                    if (error) {
                        console.error('Error fetching animal-environment relationships:', error);
                    } else {
                        const animalIds = animalEnvData.map(ae => ae.animal_id);
                        if (animalIds.length > 0) {
                            supabase
                                .from('Animals')
                                .select('id, name, description, img_url')
                                .in('id', animalIds)
                                .then(({data: animalData, error}) => {
                                    if (error) {
                                        console.error('Error fetching animals:', error);
                                    } else {
                                        // console.log('Fetched animals:', animalData);
                                        dispatch(setAnimals(animalData));
                                    }
                                });
                        } else {
                            dispatch(setAnimals([])); // Reset animals if no related animals found
                        }
                    }
                });
        };

        const fetchPlants = () => {
            supabase
                .from('Plants')
                .select('*')
                .eq('environment_id', id)
                .then(({data, error}) => {
                    if (error) {
                        console.error('Error fetching plants:', error);
                    } else {
                        dispatch(setPlants(data));
                    }
                });
        };

        const fetchTask = () => {
            supabase
                .from('Task')
                .select('*')
                .eq('environment_id', id)
                .then(({data, error}) => {
                    if (error) {
                        console.error('Error fetching task:', error);
                    } else {
                        const randomTask = data[Math.floor(Math.random() * data.length)];
                        dispatch(setTasks([randomTask]));
                    }
                });
        };

        fetchAnimals();
        fetchPlants();
        fetchTask();
    }, [id, dispatch]);

    const handleAddEntry = () => {
        const newEntry = {
            environment_id: id,
            animals: selectedAnimals.map(animal => animal.id),
            plants: selectedPlants.map(plant => plant.id),
            tasks: tasks.map(task => task.id),
            date: new Date().toISOString(),
            weather: weatherData,
        };

        supabase
            .from('JournalEntries')
            .insert([newEntry])
            .select()
            .then(({data, error}) => {
                if (error) {
                    console.error('Error adding journal entry:', error);
                } else {
                    dispatch(addJournalEntry(data[0]));
                    setNewAdventureId(data[0].id);
                }
            });
    };

    useEffect(() => {
        if (newAdventureId) {
            navigate(`/adventure/${newAdventureId}`);
        }
    }, [newAdventureId, navigate]);

    const toggleAnimalSelection = (animal) => {
        if (selectedAnimals.some(selected => selected.id === animal.id)) {
            setSelectedAnimals(selectedAnimals.filter(selected => selected.id !== animal.id));
        } else {
            setSelectedAnimals([...selectedAnimals, animal]);
        }
    };

    const togglePlantSelection = (plant) => {
        if (selectedPlants.some(selected => selected.id === plant.id)) {
            setSelectedPlants(selectedPlants.filter(selected => selected.id !== plant.id));
        } else {
            setSelectedPlants([...selectedPlants, plant]);
        }
    };

    const isSelected = (item, selectedItems) => selectedItems.some(selected => selected.id === item.id);


    if (!environment) {
        return <p>Loading...</p>;
    }

    return (
        <div className="environment__detail">
            <section className="environmentSection">
                <h1 className="environmentSection__title">{environment.name}</h1>
                <img src={`/images/environment/${environment.img_url}`} alt={environment.name}/>
            </section>
            <section className="weatherSection">
                <CurrentWeather setWeatherData={setWeatherData}/>
            </section>

            <section className="task">
                <h2 className="task__title">ZADANIE dla ciebie podczas tego spaceru:</h2>
                {tasks.length > 0 && (
                    <div className="task__space" key={tasks[0].id}>
                        <span className="task__text">{tasks[0].description}</span>
                    </div>
                )}
            </section>
            <section className="animalsSection">
                <h2 className="animals__title">Zwierzęta</h2>
                <div className="animalsSelector">
                    {animals.map(animal => (
                        <div key={animal.id}
                             className={`animal ${isSelected(animal, selectedAnimals) ? 'selected' : ''}`}
                             onClick={() => toggleAnimalSelection(animal)}
                             data-tooltip-id={`tooltip-animal-${animal.id}`}>
                            <img className="animal__img" src={`/images/animals/${animal.img_url}`} alt={animal.name}/>
                            <p className="animal__text">{animal.name}</p>
                            <Tooltip id={`tooltip-animal-${animal.id}`} className="custom__tooltip">
                                {animal.description}
                            </Tooltip>
                        </div>
                    ))}
                </div>
            </section>
            <section className="plantsSection">
                <h2 className="plants__title">Rośliny</h2>
                <div className="plantsSelector">
                    {plants.map(plant => (
                        <div key={plant.id} className={`plant ${isSelected(plant, selectedPlants) ? 'selected' : ''}`}
                             onClick={() => togglePlantSelection(plant)} data-tooltip-id={`tooltip-plant-${plant.id}`}>
                            <img className="plant__img" src={`/images/plants/${plant.img_url}`} alt={plant.name}/>
                            <p className="plant__text">{plant.name}</p>
                            <Tooltip id={`tooltip-plant-${plant.id}`} className="custom__tooltip">
                                {plant.description}
                            </Tooltip>
                        </div>
                    ))}
                </div>
            </section>

            <button className="buttonAddAdventure" onClick={handleAddEntry}>Dodaj swoją przygodę</button>

        </div>
    );
};

export default EnvironmentDetail;