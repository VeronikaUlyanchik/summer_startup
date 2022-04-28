import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import style from './Header.module.css';
import icon from '../assets/github-icon.svg';
import search from '../assets/image.svg';
import {getUserThunk} from "../redux/user-reducer";
import {useAppDispatch} from "../redux/store";

export const Header = () => {
    const dispatch = useAppDispatch();
    const [input, getInput] = useState('');

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        getInput(e.currentTarget.value)
    }
    const onEnterPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && input) {
            dispatch(getUserThunk(input))
        }
    }

    return (
        <div className={style.container}>
            <img src={icon} alt="logo" className={style.icon}/>
            <div className={style.inputContainer}>
                <img src={search} alt="search" className={style.searchLogo}/>
                <input type="text" placeholder={"Enter GitHub username"} className={style.input}
                       onChange={onChangeHandler} onKeyPress={onEnterPressHandler}/>
            </div>
        </div>
    );
};

