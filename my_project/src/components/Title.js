import React, {useEffect, useState} from 'react';
import '../sass/_title.scss'
import {useUser} from "./UserContex";
import {useLocation} from "react-router-dom";

const Title = () => {

    // const [question, setQuestion] = useState('Wybierz profil lub dodaj nowy')

    const { user } = useUser();
    const location = useLocation();

    let titleWeb;
    let question;

    if (location.pathname === '/') {
        titleWeb = 'Witaj';
        question = 'Wybierz profil lub dodaj nowy';
    } else if (location.pathname === '/profileUser' && user) {
        titleWeb = `Witaj, ${user.name}`;
        question = 'Co chcesz zrobić ?';
    }

    useEffect(() => {
        document.titleWeb = titleWeb;
    }, [titleWeb]);

    return (
        <div>
            <div className='title'>
                <h1 className="title__text">{titleWeb}</h1>
                <h2 className="title__question">{question}</h2>
            </div>
        </div>
    );
};

export default Title;