import React, {useState} from 'react';
import './Title.css'

const Title = () => {
    const [text, setText] = useState('Witaj!')

    return (
        <div>
            <div className='title'><h1 className="title__text">{text}</h1></div>
        </div>
    );
};

export default Title;