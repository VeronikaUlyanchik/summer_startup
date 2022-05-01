import React from 'react';
import style from './ProfileInformation.module.css';
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../redux/store";
import {UserInfo} from "../../redux/user-reducer";
import followersPic from "../../assets/shared.png";
import followingPic from "../../assets/provate.png"


export const ProfileInformation = () => {

    const user = useSelector<AppRootStateType, UserInfo|null>(state => state.user.user);
    const {avatar_url, login , name , followers , following , html_url } = user || {};

    return (
        <div className={style.container}>

                <div>
                    <img src={avatar_url} alt="avatar" className={style.avatar}/>
                    <div className={style.name}>{name}</div>
                    <div className={style.login}>
                        <a href={html_url} target='_blank' rel="noreferrer" >{login}</a>
                    </div>
                    <div className={style.followInfo}>
                        <span className={style.follow}>
                            <img src={followersPic} alt="followers"/>
                            {followers} followers</span>
                        <span className={style.follow}>
                            <img src={followingPic} alt="following"/>{following} following</span>
                    </div>


                </div>

        </div>
    );
};

