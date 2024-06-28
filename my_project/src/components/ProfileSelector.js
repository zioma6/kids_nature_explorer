import React from 'react';
import '../sass/_profileSelector.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowsRotate} from "@fortawesome/free-solid-svg-icons";
import {Link} from 'react-router-dom';
import {useUser} from './UserContex';


const ProfilSelector = () => {

    const {user} = useUser();

    return (
        <div>
            <section className='profilSelector'>
                <Link to="/profileUser">
                    <div className="profilSelector__profileUser">
                        <img src={user.avatarPath} alt={`${user.name}'s avatar`}
                             className="profilSelector__profileUser--avatar"/>
                        <div className='profilSelector__profileUser--name'>{user.name}</div>
                    </div>
                </Link>
                <Link to="/changeName">
                    <div className='profilSelector__changeName'>
                        <div className='profilSelector__changeName--icon'><FontAwesomeIcon icon={faArrowsRotate}/></div>
                        <div className='profilSelector__changeName--name'>Zmień imię użytkownika</div>
                    </div>
                </Link>

            </section>
        </div>
    );
};

export default ProfilSelector;

//