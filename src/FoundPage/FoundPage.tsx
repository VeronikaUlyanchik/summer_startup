import React, {useEffect, useState} from 'react';
import style from './FoundPage.module.css';
import {ProfileInformation} from "../ProfileInformation/ProfileInformation";
import {RepositoriesList} from './RepositoriesList/RepositoriesList';
import {EmptyRepositoriesList} from './EmptyRepositoriesList/EmptyRepositoriesList';
import emptyPic from '../assets/Empty.png';
import {useSelector} from "react-redux";
import {AppRootStateType} from "../redux/store";
import {RepositoryType} from "../redux/user-reducer";


export const FoundPage = () => {
    const repos = useSelector<AppRootStateType, null | RepositoryType[]>(state => state.user.repos);

    return (
        <div className={style.container}>
            <ProfileInformation/>
            {
                repos ? <RepositoriesList repos={repos}/>
                    : <EmptyRepositoriesList picture={emptyPic} text={'Repository list is empty'}/>
            }


        </div>
    );
};

