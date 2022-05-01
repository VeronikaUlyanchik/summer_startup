import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState: InitialAppStateType = {
    appStatus: 'idle'
};
type InitialAppStateType = {
    appStatus: AppStatusType
};

type AppStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

const appReducer = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setAppStatusAC(state:InitialAppStateType, action: PayloadAction<AppStatusType>) {
            state.appStatus = action.payload
        }
    }
})

export const {setAppStatusAC} = appReducer.actions;
export default appReducer.reducer;
