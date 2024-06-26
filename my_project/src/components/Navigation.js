import React from 'react';
import '../sass/_navigation.scss'
import logo from '../assets/images/logo_kne.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHouse} from '@fortawesome/free-solid-svg-icons';
import {Link, useLocation, useParams} from "react-router-dom";

const Navigation = () => {

    const {id} = useParams();

    const location = useLocation();

    let titleHouse;

    let homeLink;
    if (location.pathname === '/') {
        homeLink = '/'; //
        titleHouse = 'Strona główna'
    } else if (location.pathname === '/profileUser') {
        homeLink = '/';
        titleHouse = 'Strona główna'
    } else if (location.pathname === '/addAdventure') {
        homeLink = '/profileUser';
        titleHouse = 'Profil'
    } else if (location.pathname === '/journalAdventures') {
        homeLink = '/profileUser';
        titleHouse = 'Profil'
    } else if (location.pathname === `/addAdventure/${id}`) {
        homeLink = '/addAdventure';
        titleHouse = 'Stwórz przygode'
    } else if (location.pathname === `/journal`) {
        homeLink = '/profileUser';
        titleHouse = 'Profil'
    } else if (location.pathname === `/adventure/${id}`) {
        homeLink = '/journal';
        titleHouse = 'Dziennik Przygód'
    } else if (location.pathname === `/changeName`) {
        homeLink = '/';
        titleHouse = 'Strona główna'
    }

    return (
        <div>
            <nav className='navbar'>
                <div className='navbar__logo'>
                    <img src={logo} alt='logo'/>
                </div>
                <Link className="navbar__links" to={homeLink}>
                    <div className="navbar__link--house">
                        <FontAwesomeIcon icon={faHouse} size="2x"/>
                    </div>
                    <p className="navbar__link--title">{titleHouse}</p>
                </Link>
            </nav>
        </div>
    );
};

export default Navigation;