import React from 'react';
import style from "./InformationContainer.module.css";


type InformationContainerType = {
    picture: string
    text: string
    style?:{
        width: string
        height: string
    }
}

export const InformationContainer = (props:InformationContainerType) => {
    return (
        <div className={style.container}>
            <div>
                <img src={props.picture} alt="user not found" className={style.picture} style={props.style}/>
                <div className={style.text}>{props.text}</div>
            </div>
        </div>
    );
};
