import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import supabase from './supabaseClient';
import {addJournalEntry, setAnimals, setEnvironments, setPlants, setTasks} from './journalSlice';
import '../sass/_environmentDeatail.scss';

const EnvironmentDetail = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const {environments, animals, plants, tasks} = useSelector(state => state.journal);
    const [environment, setEnvironment] = useState(environments[id] || null);
    const [selectedAnimals, setSelectedAnimals] = useState([]);
    const [selectedPlants, setSelectedPlants] = useState([]);

    useEffect(() => {
        if (!environment) {
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
                        dispatch(setEnvironments([data]));
                    }
                });
        }

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
                                        console.log('Fetched animals:', animalData);
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
    }, [id, dispatch, environment]);

    const handleAddEntry = () => {
        const newEntry = {
            environment_id: id,
            animals: selectedAnimals,
            plants: selectedPlants,
            tasks,
            date: new Date().toISOString(),
        };

        supabase
            .from('JournalEntries')
            .insert(newEntry)
            .then(({data, error}) => {
                if (error) {
                    console.error('Error adding journal entry:', error);
                } else {
                    dispatch(addJournalEntry(data[0]));
                }
            });
    };

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
    console.log(environments)
    console.log(animals)
    console.log(selectedAnimals)
    return (
        <div className="environment-detail">
            <h1>{environment.name}</h1>
            <img src={environment.img_url} alt={environment.name}/>
            <section>
                <h2>Animals</h2>
                {animals.map(animal => (
                    <div key={animal.id} className={`animal ${isSelected(animal, selectedAnimals) ? 'selected' : ''}`}
                         onClick={() => toggleAnimalSelection(animal)}>
                        <img src={animal.img_url} alt={animal.name}/>
                        <div>
                            <p>{animal.description}</p>
                            <span>{animal.name}</span>
                        </div>
                    </div>
                ))}
            </section>
            <section>
                <h2>Plants</h2>
                {plants.map(plant => (
                    <div key={plant.id} className={`plant ${isSelected(plant, selectedPlants) ? 'selected' : ''}`}
                         onClick={() => togglePlantSelection(plant)}>
                        <img src={plant.img_url} alt={plant.name}/>
                        <div>
                            <p>{plant.description}</p>
                            <span>{plant.name}</span>
                        </div>
                    </div>
                ))}
            </section>
            <section>
                <h2>Task</h2>
                {tasks.length > 0 && (
                    <div key={tasks[0].id}>
                        <span>{tasks[0].description}</span>
                    </div>
                )}
            </section>
            <button onClick={handleAddEntry}>Add to Journal</button>
        </div>
    );
};

export default EnvironmentDetail;