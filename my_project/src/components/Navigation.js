import React from 'react';
import '../sass/_navigation.scss'
import logo from '../assets/images/logo_kne.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { useUser } from './UserContex';
import {Link} from "react-router-dom";
import {useLocation} from "react-router-dom";

const Navigation = () => {

    const { user } = useUser();

    const location = useLocation();

    let homeLink;
    if (location.pathname === '/') {
        homeLink = '/'; //
    } else if (location.pathname === '/profileUser') {
        homeLink = '/';
    } else if (location.pathname === '/addAdventure') {
        homeLink = '/profileUser';
    } else if (location.pathname === '/journalAdventures') {
        homeLink = '/profileUser';
    }

    return (
        <div>
            <nav className='navbar'>
                <div className='navbar__logo'>
                    <img src={logo} alt='logo'/>
                </div>
                <Link  className="navbar__links" to={homeLink}>
                    <div  className="navbar__link--house">
                        <FontAwesomeIcon icon={faHouse} size="2x"/>
                    </div>
                    <p className="navbar__link--title">Strona główna</p>
                </Link>
            </nav>
        </div>
);
};

export default Navigation;