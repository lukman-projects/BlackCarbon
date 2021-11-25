import {createSlice} from '@reduxjs/toolkit';


const initialState = {
    currentSocial: null,
    modalIsActive: false,
    formIsLoading: false,
    formMessage: ""
}

const social = createSlice({
    name: 'social',
    initialState,
    reducers: {
        setSocial(state, action){
            state.currentSocial = action.payload;
        },
        setModalActive(state, action){
            state.modalIsActive = action.payload;
        },
        setFormLoading(state, action){
            state.formIsLoading = action.payload;
        },
        setFormMessage(state, action){
            state.formMessage = action.payload;
        }
    }
});

export const {
    setSocial,
    setModalActive,
    setFormLoading,
    setFormMessage
} = social.actions

export default social.reducer;