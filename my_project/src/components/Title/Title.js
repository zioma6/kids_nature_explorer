import React, {useState} from 'react';
import './Title.css'

const Title = () => {
    const [text, setText] = useState('Witaj!')
    const [question, setQuestion] = useState('Wybierz profil lub dodaj nowy')

    return (
        <div>
            <div className='title'>
                <h1 className="title__text">{text}</h1>
                <h2 className="title__question">{question}</h2>
            </div>
        </div>
    );
};

export default Title;