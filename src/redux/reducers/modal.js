import {createSlice} from '@reduxjs/toolkit';


const initialState = {
    name: null,
    isActive: false,
    message: "",
    isLoading: ""
}

const modal = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        setName(state, action){
            state.name = action.payload;
        },
        setActive(state, action){
            state.isActive = action.payload;
        },
        setMessage(state, action){
            state.message = action.payload;
        },
        setLoading(state, action){
            state.isLoading = action.payload;
        }
    }
});

export const {
    setName,
    setActive,
    setMessage,
    setLoading
} = modal.actions

export default modal.reducer;