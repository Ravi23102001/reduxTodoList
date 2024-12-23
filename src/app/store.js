import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import logger from 'redux-logger';

const store = configureStore({
    reducer: rootReducer,
    middleware:(getDefaultMiddleWare)=>getDefaultMiddleWare().concat(logger)
});

export default store;