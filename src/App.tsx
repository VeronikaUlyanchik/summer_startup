import React, {useEffect} from 'react';
import { useSelector } from 'react-redux';
import { Routes } from 'react-router-dom';
import './App.css';
import {Header} from "./Header/Header";
import {StartSearch} from "./StartSearch/StartSearch";
import {UserNotFound} from "./UserNotFound/UserNotFound";
import {AppRootStateType} from "./redux/store";
import {FoundPage} from "./FoundPage/FoundPage";
import { Loader } from './Loader/Loader';
import userPic from './assets/Union.png';
import search from './assets/image.svg';
import {EmptyRepositoriesList} from "./FoundPage/EmptyRepositoriesList/EmptyRepositoriesList";

function App() {
    const user = useSelector<AppRootStateType>(state => state.user.user);
    const appStatus = useSelector<AppRootStateType>(state => state.app.appStatus);

    return (
        <div className="App">
            <Header/>
            {(appStatus === 'failed') && <EmptyRepositoriesList picture={userPic} text={'User not found'}/>}
            {(appStatus === 'loading') && <Loader/>}
            {(appStatus !== 'failed' && (appStatus !== 'loading')) && <>{user
                ? <FoundPage/>
                : <EmptyRepositoriesList picture={search} text={'Start with searching a GitHub user'}/>}</>}
        </div>
    );
}

export default App;
