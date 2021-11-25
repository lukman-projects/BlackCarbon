import {createSlice} from '@reduxjs/toolkit';


const initialState = {
    name: null,
    errors: {},
    message: "",
    isLoading: ""
}

const form = createSlice({
    name: 'form',
    initialState,
    reducers: {
        setName(state, action){
            state.name = action.payload;
        },
        setErrors(state, action){
            state.errors = action.payload;
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
    setErrors,
    setMessage,
    setLoading
} = form.actions

export default form.reducer;