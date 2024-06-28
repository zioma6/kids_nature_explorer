import React from "react";
import {UserProvider} from './UserContex';
import '../sass/main.scss';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from "./Home";
import Profile from "./Profile";
import AddAdventure from "./AddAdventure";
import MainLayout from "./MainLayout";
import LayoutHeader from "./LayoutHeader";
import {store} from './store'
import {Provider} from 'react-redux'
import EnvironmentDetail from "./EnvironmentDetail";
import Journal from "./Journal";
import AdventureDetail from "./AdventureDetail";
import ChangeName from "./ChangeName";

function App() {
    return (
        <Provider store={store}>
            <UserProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<MainLayout/>}>
                            <Route index element={<Home/>}/>
                            <Route element={<LayoutHeader/>}>
                                <Route path='changeName' element={<ChangeName/>}/>
                                <Route path='profileUser' element={<Profile/>}/>
                                <Route path='addAdventure' element={<AddAdventure/>}/>
                                <Route path="addAdventure/:id" element={<EnvironmentDetail/>}/>
                                <Route path='journal' element={<Journal/>}/>
                                <Route path="/adventure/:id" element={<AdventureDetail/>}/>
                            </Route>
                        </Route>
                    </Routes>
                </BrowserRouter>
            </UserProvider>
        </Provider>
    );
}

export default App;
