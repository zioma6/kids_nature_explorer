import React, {useState} from 'react';
import '../sass/_profileSelector.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const ProfilSelector = () => {

    const [userProfil, setUserProfil] = useState([])


    return (
        <div>
            <section className='profilSelector'>
                <div className='addProfile'><FontAwesomeIcon icon={faPlus} /></div>
            </section>

        </div>
    );
};

export default ProfilSelector;