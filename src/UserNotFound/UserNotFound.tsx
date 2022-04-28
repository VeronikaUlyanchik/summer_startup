import React from 'react';
import style from './UserNotFound.module.css';
import user from '../assets/Union.png';


export const UserNotFound = () => {
    return (
        <div className={style.container}>
            <div>
                <img src={user} alt="user not found" className={style.user}/>
                <div className={style.text}>User not found</div>
            </div>
        </div>
    );
};

