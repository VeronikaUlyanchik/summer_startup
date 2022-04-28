import React from 'react';
import style from "./EmptyRepositoriesList.module.css";


type EmptyRepositoriesListType = {
    picture: string
    text: string
}

export const EmptyRepositoriesList = (props:EmptyRepositoriesListType) => {
    return (
        <div className={style.container}>
            <div>
                <img src={props.picture} alt="user not found" className={style.user}/>
                <div className={style.text}>{props.text}</div>
            </div>
        </div>
    );
};
