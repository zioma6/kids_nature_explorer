import React, {useEffect} from 'react';
import '../sass/_title.scss'
import {useUser} from "./UserContex";
import {useLocation, useParams} from "react-router-dom";

const Title = () => {

    // const [question, setQuestion] = useState('Wybierz profil lub dodaj nowy')

    const {user} = useUser();
    const location = useLocation();
    const date = new Date()
    const formatter = new Intl.DateTimeFormat('en-US', {day: '2-digit', month: '2-digit', year: 'numeric'});
    const formattedDate = formatter.format(date);

    const {id} = useParams();

    let titleWeb;
    let question;
    let adventureDate;

    if (location.pathname === '/') {
        titleWeb = 'Witaj';
        question = 'Wybierz profil lub dodaj nowy';
    } else if (location.pathname === '/profileUser' && user) {
        titleWeb = `Witaj, ${user.name}`;
        question = 'Co chcesz zrobić ?';
    } else if (location.pathname === '/addAdventure' && user) {
        titleWeb = `Witaj, ${user.name}`;
        question = 'Twoja Nowa przygoda';
        adventureDate = `${formattedDate}`;
    } else if (location.pathname === `/addAdventure/${id}` && user) {
        titleWeb = `Witaj, ${user.name}`;
        question = 'Twoja Nowa przygoda';
        adventureDate = `${formattedDate}`;
    } else if (location.pathname === `/adventure/${id}` && user) {
        titleWeb = `Witaj, ${user.name}`;
    } else if (location.pathname === `/journal` && user) {
        titleWeb = `Witaj, ${user.name}`;
    }

    useEffect(() => {
        document.titleWeb = titleWeb;
    }, [titleWeb]);

    return (
        <div>
            <div className='title'>
                <h1 className="title__text">{titleWeb}</h1>
                <h2 className="title__question">{question}</h2>
                <h3 className="title__adventureDate">{adventureDate}</h3>
            </div>
        </div>
    );
};

export default Title;