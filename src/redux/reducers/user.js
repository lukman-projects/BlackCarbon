import {createSlice} from '@reduxjs/toolkit';


const initialState = {
    user: null,
    userLoaded: false,
    responseError: false,
    userNotFound: false
}

const user = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action){
            state.user = action.payload;
        },
        setUserLoaded(state, action){
            state.userLoaded = action.payload;
        },
        setResponseError(state, action){
            state.responseError = action.payload;
        },
        setUserNotFound(state, action){
            state.userNotFound = action.payload;
        }
    }
});

export const {
    setUser,
    setUserLoaded,
    setResponseError,
    setUserNotFound
} = user.actions

export default user.reducer;