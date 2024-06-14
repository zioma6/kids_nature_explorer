import React from 'react';
import '../sass/_profileSelector.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useUser } from './UserContex';

const ProfilSelector = () => {

    const { user } = useUser();

    return (
        <div>
            <section className='profilSelector'>
                <div className='addProfile'>
                    <div className='addProfile__icon'><FontAwesomeIcon icon={faPlus}/></div>
                    <div className='addProfile__name'>Dodaj profil</div>
                </div>
                <Link to="/profileUser">
                    <div className="profileUser">
                        <img src={user.avatarPath}  alt={`${user.name}'s avatar`} className="profileUser__avatar"/>
                        <div className='profileUser__name'>{user.name}</div>
                    </div>
                </Link>

            </section>
        </div>
    );
};

export default ProfilSelector;

//