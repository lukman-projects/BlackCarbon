import {createSlice} from '@reduxjs/toolkit';


const initialState = {
    isAuth: false,
    profile: null,
    profileLoaded: null,
    profileResponseError: false,
    id: null,
    key: null
}

const auth = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuth(state, action){
            state.isAuth = action.payload;
        },
        setProfile(state, action){
            state.profile = action.payload;
        },
        setProfileLoaded(state, action){
            state.profileLoaded = action.payload;
        },
        setProfileResponseError(state, action){
            state.profileResponseError = action.payload;
        },
        setId(state, action){
            state.id = action.payload;
        },
        setKey(state, action){
            state.key = action.payload;
        }
    }
});

export const {
    setAuth,
    setProfile,
    setProfileLoaded,
    setProfileResponseError,
    setId,
    setKey
} = auth.actions;

export default auth.reducer;