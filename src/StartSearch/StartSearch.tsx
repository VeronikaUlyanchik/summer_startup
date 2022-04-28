import React from 'react';
import style from './StartSearch.module.css'
import search from '../assets/image.svg';


export const StartSearch = () => {
    return (
        <div className={style.container}>
            <div>
                <img src={search} alt="search" className={style.searchLogo}/>
                <div className={style.text}>Start with searching a GitHub user</div>
            </div>

        </div>
    );
};

