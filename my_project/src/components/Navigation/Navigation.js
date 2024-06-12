import React from 'react';
import './Navigation.css'
import logo from '../../assets/images/logo_kne.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';

const Navigation = () => {
    return (
        <div>
            <nav className='navbar'>
                <div className='navbar__logo'>
                    <img src={logo} alt='logo'/>
                </div>
                <div className="navbar__links">
                    <a href="/" className="navbar__link--house">
                        <FontAwesomeIcon icon={faHouse} size="2x"/>
                    </a>
                    <p className="navbar__link--title">Strona główna</p>
                </div>
            </nav>

        </div>
);
};

export default Navigation;