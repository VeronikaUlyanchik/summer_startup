import React from 'react';
import style from './FoundPage.module.css';
import {ProfileInformation} from "../ProfileInformation/ProfileInformation";
import { RepositoriesList } from './RepositoriesList/RepositoriesList';
import { EmptyRepositoriesList } from './EmptyRepositoriesList/EmptyRepositoriesList';
import {UserNotFound} from "../UserNotFound/UserNotFound";
import emptyPic from '../assets/Empty.png'


export const FoundPage = () => {
    return (
        <div className={style.container}>
           <ProfileInformation/>
            {/*<RepositoriesList/>*/}
            <EmptyRepositoriesList picture={emptyPic} text={'Repository list is empty'}/>

        </div>
    );
};

