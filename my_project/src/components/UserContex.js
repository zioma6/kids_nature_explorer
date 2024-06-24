// src/context/UserContext.js
import React, {createContext, useContext} from 'react';

const UserContext = createContext(null);

export const UserProvider = ({children}) => {
    // Przykładowe dane użytkownika
    const user = {
        id: 1,
        name: 'Ignacy',
        avatarPath: '/images/boy_1.png'
    };

    return (
        <UserContext.Provider value={{user}}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => {
    return useContext(UserContext);
};