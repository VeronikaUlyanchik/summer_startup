import {useDispatch} from "react-redux";
import {combineReducers} from "redux";
import userReducer from "./user-reducer";
import {configureStore} from "@reduxjs/toolkit";
import appReducer from "../redux/app-reducer";


export const rootReducer = combineReducers({
    app: appReducer,
    user: userReducer
});

export const store = configureStore({reducer: rootReducer})

export type AppRootStateType = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

//@ts-ignore
window.store = store