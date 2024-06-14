import React from 'react';
import "../sass/_profile.scss"
import Navigation from "./Navigation";
import Title from "./Title";
import Footer from "./Footer";
import {useUser} from "./UserContex";



const Profile = () => {

    const { user } = useUser();

    return (
        <div>
            <Navigation/>
            <header className="header">
                <Title/>
                <img src={user.avatarPath} alt={`${user.name}'s avatar`} className="header__avatar"/>
            </header>
            <Footer/>
        </div>
    );
};

export default Profile;