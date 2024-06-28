import React, {useState} from 'react';
import {useUser} from './UserContex';
import '../sass/_changeName.scss';

const ChangeName = () => {
    const {user, changeUserName, changeUserAvatar} = useUser();
    const [newName, setNewName] = useState("");
    const [newAvatar, setNewAvatar] = useState(user.avatarPath);
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const nameRegex = /^[A-Za-z]+$/;
        if (!nameRegex.test(newName)) {
            setError('Imię może zawierać tylko litery.');
            setSuccessMessage(null);
            return;
        }
        setError(null);
        changeUserName(newName);
        changeUserAvatar(newAvatar);
        setNewName('');
        setSuccessMessage('Imię i avatar zostały pomyślnie zmienione.');
    };

    const avatars = [
        '/images/avatars/boy_1.png',
        '/images/avatars/girl_1.png',
    ];


    return (
        <div className="changeName-container">
            <h1 className="changeName__title">Zmień Imię i Avatar</h1>
            <form onSubmit={handleSubmit}>
                <label className="changeName__label">
                    Nowe Imię:
                    <input
                        type="text"
                        value={newName}
                        name="name"
                        onChange={(e) => {
                            setError(null); // Czyszczenie błędu podczas pisania
                            setSuccessMessage(null);
                            setNewName(e.target.value);
                        }}
                        required
                    />
                </label>

                {error && <p className="error">{error}</p>}

                <div className="changeName__avatar--section">
                    <p className="changeName__avatar--title">Wybierz Avatar:</p>
                    <div className="changeName__avatar-selection">
                        {avatars.map((avatar, index) => (
                            <img
                                key={index}
                                src={avatar}
                                alt={`Avatar ${index + 1}`}
                                className={`changeName__avatar ${newAvatar === avatar ? 'selected' : ''}`}
                                onClick={() => {
                                    setError(null);
                                    setSuccessMessage(null);
                                    setNewAvatar(avatar);
                                }}
                            />
                        ))}
                    </div>
                </div>
                {successMessage && <p className="success">{successMessage}</p>}
                <button className="buttonChangeName" type="submit">Zmień Imię i Avatar</button>

            </form>
        </div>
    );
};

export default ChangeName;