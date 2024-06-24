import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    animals: [],
    plants: [],
    tasks: [],
    journalEntries: [],
    environments: [],
};

const journalSlice = createSlice({
    name: 'journal',
    initialState,
    reducers: {
        setEnvironments: (state, action) => {
            state.environments = action.payload
        },
        addAnimal: (state, action) => {
            state.animals.push(action.payload);
        },
        removeAnimal: (state, action) => {
            state.animals = state.animals.filter(animal => animal.id !== action.payload.id);
        },
        setAnimals: (state, action) => {
            state.animals = action.payload;
        },
        addPlant: (state, action) => {
            state.plants.push(action.payload);
        },
        removePlant: (state, action) => {
            state.plants = state.plants.filter(plant => plant.id !== action.payload.id);
        },
        setPlants: (state, action) => {
            state.plants = action.payload;
        },
        setTasks: (state, action) => {
            state.tasks = action.payload;
        },
        addJournalEntry: (state, action) => {
            state.journalEntries.push(action.payload);
        },
    },
});

export const {
    setEnvironments,
    addAnimal,
    removeAnimal,
    setAnimals,
    addPlant,
    removePlant,
    setPlants,
    setTasks,
    addJournalEntry,
} = journalSlice.actions;
export default journalSlice.reducer;