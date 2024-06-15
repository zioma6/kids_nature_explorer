import React from 'react';
import {useUser} from "./UserContex";
import "../sass/_imageAvatar.scss"

const ImageAvatar = () => {

    const { user } = useUser();

    return (
        <div>
            <img src={user.avatarPath} alt={`${user.name}'s avatar`} className="header__avatar"/>
        </div>
    );
};

export default ImageAvatar;