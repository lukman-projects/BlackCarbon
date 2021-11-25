import {  configureStore } from '@reduxjs/toolkit';


import modal from './reducers/modal';
import user from './reducers/user';
import form from './reducers/form';
import auth from './reducers/auth';
import social from './reducers/social';




const store = configureStore({
    reducer: {
        modal,
        user,
        form,
        auth,
        social
	},
});

export default store;