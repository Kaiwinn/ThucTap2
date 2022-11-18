import {configureStore} from '@reduxjs/toolkit';
import cartItems from './Reducer';

const store = configureStore({reducer: cartItems});

export default store;
