import React, {createContext, useContext, useState} from 'react';

const UserContext = createContext(null);

export const UserProvider = ({children}) => {

    const [user, setUser] = useState({
        id: 1,
        name: 'Ignacy',
        avatarPath: '/images/avatars/boy_1.png'
    });

    const changeUserName = (name) => {
        setUser((prevUser) => ({...prevUser, name}));
    };

    const changeUserAvatar = (avatarPath) => {
        setUser((prevUser) => ({...prevUser, avatarPath}));
    };

    return (
        <UserContext.Provider value={{user, changeUserName, changeUserAvatar}}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => {
    return useContext(UserContext);
};