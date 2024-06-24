import React from 'react';
import "../sass/_profile.scss"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
import album from "../assets/images/Album.png"


const Profile = () => {

    return (
        <>
            <section className='selector'>
                <Link to={"/journalAdventures"}>
                    <div className='toAdventures'>
                        <img src={album} alt='album photo' className='toAdventures__icon'></img>
                        <div className='toAdventures__name'>Dziennik przygód</div>
                    </div>
                </Link>
                <Link to={"/addAdventure"}>
                    <div className='addAdventure'>
                        <div className='addAdventure__icon'><FontAwesomeIcon icon={faPlus}/></div>
                        <div className='addAdventure__name'>Dodaj przygodę</div>
                    </div>
                </Link>

            </section>
        </>
    );
};

export default Profile;