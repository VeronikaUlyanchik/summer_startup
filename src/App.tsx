import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import {Header} from "./Header/Header";
import {AppRootStateType} from "./redux/store";
import {FoundPage} from "./FoundPage/FoundPage";
import { Loader } from './Loader/Loader';
import userPic from './assets/Union.png';
import search from './assets/image.svg';
import {InformationContainer} from "./InformationContainer/InformationContainer";

function App() {
    const user = useSelector<AppRootStateType>(state => state.user.user);
    const appStatus = useSelector<AppRootStateType>(state => state.app.appStatus);

    const pictureSearchStyle = {
        width: '64.17px',
        height:'64.17px'
    }

    return (
        <div className="App">
            <Header/>
            {(appStatus === 'failed') && <InformationContainer picture={userPic} text={'User not found'}/>}
            {(appStatus === 'loading') && <Loader/>}
            {(appStatus !== 'failed' && (appStatus !== 'loading')) && <>{user
                ? <FoundPage/>
                : <InformationContainer picture={search} text={'Start with searching a GitHub user'} style={pictureSearchStyle}/>}</>}
        </div>
    );
}

export default App;
