import React from 'react';
import '../sass/_navigation.scss'
import logo from '../assets/images/logo_kne.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { useUser } from './UserContex';
import {Link} from "react-router-dom";

const Navigation = () => {

    const { user } = useUser();

    return (
        <div>
            <nav className='navbar'>
                <div className='navbar__logo'>
                    <img src={logo} alt='logo'/>
                </div>
                <Link  className="navbar__links" to="/">
                    <a href="/my_project/public" className="navbar__link--house">
                        <FontAwesomeIcon icon={faHouse} size="2x"/>
                    </a>
                    <p className="navbar__link--title">Strona główna</p>
                </Link>
            </nav>
        </div>
);
};

export default Navigation;