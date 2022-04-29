import React from 'react';
import style from "./EmptyRepositoriesList.module.css";


type EmptyRepositoriesListType = {
    picture: string
    text: string
    style?:{
        width: string
        height: string }
}

export const EmptyRepositoriesList = (props:EmptyRepositoriesListType) => {
    return (
        <div className={style.container}>
            <div>
                <img src={props.picture} alt="user not found" className={style.user} style={props.style}/>
                <div className={style.text}>{props.text}</div>
            </div>
        </div>
    );
};
