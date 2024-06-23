import React from "react";
import {UserProvider} from './UserContex';
import '../sass/main.scss';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from "./Home";
import Profile from "./Profile";
import AddAdventure from "./AddAdventure";
import JournalAdventures from "./JournalAdventures";
import MainLayout from "./MainLayout";
import LayoutHeader from "./LayoutHeader";
import {store} from './store'
import {Provider} from 'react-redux'
import EnvironmentDetail from "./EnvironmentDetail";

function App() {
    return (
        <Provider store={store}>
            <UserProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<MainLayout/>}>
                            <Route index element={<Home/>}/>
                            <Route element={<LayoutHeader/>}>
                                <Route path='profileUser' element={<Profile/>}/>
                                <Route path='addAdventure' element={<AddAdventure/>}/>
                                <Route path="addAdventure/:id" element={<EnvironmentDetail/>}/>
                                <Route path='journalAdventures' element={<JournalAdventures/>}/>
                            </Route>
                        </Route>
                    </Routes>
                </BrowserRouter>
            </UserProvider>
        </Provider>
    );
}

export default App;
